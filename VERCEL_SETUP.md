# Vercel Deployment Setup

The React app lives in the `app/` folder. For Vercel to deploy it correctly:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Settings**
2. Open **General** → **Root Directory**
3. Click **Edit** and set it to `app`
4. Save and **redeploy** the project

Without this, Vercel serves the static `index.html` at the repo root instead of the React app.
