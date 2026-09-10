import nodemailer from 'nodemailer'

function isEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  const {
    name = '',
    email = '',
    company = '',
    service = '',
    budget = '',
    message = '',
    website = ''
  } = req.body || {}

  // Honeypot: real visitors never fill this hidden field.
  if (website) {
    return res.status(200).json({ message: 'Thanks — your inquiry was received.' })
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ message: 'Please complete all required fields.' })
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  if (name.length > 120 || email.length > 180 || company.length > 180 || message.length > 5000) {
    return res.status(400).json({ message: 'One or more fields are too long.' })
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const contactTo = process.env.CONTACT_TO || smtpUser

  if (!smtpUser || !smtpPass || !contactTo) {
    console.error('Missing SMTP_USER, SMTP_PASS, or CONTACT_TO environment variables.')
    return res.status(500).json({ message: 'Contact email is not configured yet.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE ?? 'true') === 'true',
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    })

    await transporter.sendMail({
      from: `Portfolio Website <${process.env.SMTP_FROM || smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `Portfolio inquiry: ${service || 'Network Support'} - ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'N/A'}`,
        `Service: ${service || 'Not specified'}`,
        `Scope: ${budget || 'Not specified'}`,
        '',
        'Message:',
        message
      ].join('\n')
    })

    return res.status(200).json({ message: 'Thanks — your inquiry was sent successfully.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ message: 'Unable to send your inquiry right now. Please try again later.' })
  }
}
