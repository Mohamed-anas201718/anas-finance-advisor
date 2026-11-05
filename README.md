# Mohamed Anas S — Finance Advisor Landing Website

A responsive Next.js starter with a public landing page, consent-based customer enquiry form, Supabase storage, and a private admin lead dashboard.

## 1. Requirements
- Node.js 20.9 or later
- A Supabase project
- npm

## 2. Install and run
```bash
npm install
cp .env.example .env.local
# Add your Supabase project URL and anon/publishable key to .env.local
npm run dev
```
Open http://localhost:3000.

## 3. Configure Supabase
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Copy the Project URL and anon/publishable key into `.env.local`.
4. In Supabase Authentication, create your admin user manually. Do not add public sign-up.
5. Replace `REPLACE_WITH_YOUR_ADMIN_EMAIL` in the SELECT policy with the exact email of your Supabase admin account, then run the updated SQL. The dashboard login is not an admin allowlist by itself; the database policy is what protects lead records.

## 4. Important production hardening
- Add an admin allowlist or an `admin_users` role table and enforce it in Row Level Security, not only in the UI.
- Add rate limiting / CAPTCHA or another approved anti-spam control to the public enquiry endpoint.
- Confirm with TATA AIA which designation, logo, product descriptions, disclosures, customer-data storage and follow-up process are authorized. Do not publish unapproved company marks or imply this is the official company website.
- Add a full privacy notice, retention/deletion workflow and consent wording approved for your use.
- Test database policies using both anonymous and authenticated sessions before launch.
- Use only the public anon/publishable key in this app. Never expose a Supabase service-role key in browser code.

## 5. Routes
- `/` — public advisor landing page
- `/admin/login` — admin login
- `/admin` — private lead dashboard
- `POST /api/leads` — validated enquiry submission

## 6. Notes
The enquiry form and dashboard require Supabase configuration before they can work. The project intentionally does not include fabricated customer records or policy-return claims.
