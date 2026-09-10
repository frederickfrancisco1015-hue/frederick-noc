# NOC Portfolio v4 — Client Ready

Vue 3 + Tailwind CSS + Node.js portfolio for Remote NOC, Network Support, MSP Support, and Infrastructure Services.

## New in v4

- U.S. remote availability banner
- Stronger service-focused hero section
- Four client-facing service packages
- Professional About section
- Downloadable resume button
- LinkedIn button placeholder
- Certifications and training section
- Clear "previously certified" wording for expired certifications
- Improved inquiry/contact form
- Service and support-scope dropdowns
- Updated Node.js email payload
- SEO meta description and keywords
- Open Graph and Twitter metadata
- Social preview image placeholder
- Stronger client-conversion CTAs

## Important items to customize before deployment

### 1. LinkedIn URL
In `frontend/src/views/HomeView.vue`, replace:

`https://www.linkedin.com/`

with your exact public LinkedIn profile URL.

### 2. Resume
Add your resume here:

`frontend/public/resume/Frederick-Francisco-Resume.pdf`

### 3. Open Graph image
Add:

`frontend/public/images/og-preview.jpg`

Recommended size: 1200 × 630 px.

### 4. Project photos
See:

`frontend/public/images/README.txt`

for filenames and privacy guidance.

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

`http://localhost:5173`

## Run backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend:

`http://localhost:3000`

## Contact email configuration

Edit `backend/.env`:

```env
PORT=3000
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CONTACT_TO=
```

If SMTP is not configured, form submissions are printed in the backend terminal.

## Recommended next phase

1. Add real resume
2. Add exact LinkedIn URL
3. Add project photos
4. Generate OG/social preview artwork
5. Add spam protection
6. Deploy frontend and backend
7. Connect a custom domain
8. Begin direct outreach to U.S. MSPs
