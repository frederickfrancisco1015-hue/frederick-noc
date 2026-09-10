# Deploy this portfolio to Vercel

## 1. Push this folder to GitHub
Create a repository and upload the contents of `noc-portfolio-v5-vercel`.

Important: upload the CONTENTS of this folder so that `vercel.json`, `package.json`, `api/`, and `frontend/` are at the repository root.

## 2. Import the GitHub repository into Vercel
- Add New > Project
- Import your repository
- Framework Preset: Other (Vercel will use vercel.json)
- Root Directory: leave as repository root
- Build Command: supplied by vercel.json
- Output Directory: supplied by vercel.json

## 3. Add Environment Variables
In Vercel > Project > Settings > Environment Variables, add:

SMTP_HOST = smtp.gmail.com
SMTP_PORT = 465
SMTP_SECURE = true
SMTP_USER = frederickfrancisco1015@gmail.com
SMTP_PASS = your 16-character Google App Password
SMTP_FROM = frederickfrancisco1015@gmail.com
CONTACT_TO = frederickfrancisco1015@gmail.com

Add them for Production, Preview, and Development if you want the form to work in all environments.

Never put the real SMTP_PASS inside the GitHub repository.

## 4. Deploy
Click Deploy. A free URL similar to this will be assigned:

https://frederickfrancisco.vercel.app

The exact name depends on availability and your Vercel project name.

## 5. Test
Open:

https://YOUR-PROJECT.vercel.app/api/health

Expected response:

{"status":"ok","service":"portfolio-api"}

Then submit the website contact form. It should send an email to:

frederickfrancisco1015@gmail.com

## 6. Vercel project name recommendation
Try:

frederickfrancisco

If unavailable:
- frederick-francisco
- frederick-noc
- frederick-network

## Architecture

Vue app -> /api/contact -> Vercel Serverless Function -> Gmail SMTP -> your inbox

No separate Express server is required in production.
