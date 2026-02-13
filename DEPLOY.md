# 🚀 Quick Deployment Guide

## Fastest Way to Deploy (2 minutes)

### Step 1: Push to GitHub

```bash
cd /Users/byronmackay/.openclaw/workspace/speech-therapy

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - Speech therapy website"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/speech-therapy.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com/login
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your `speech-therapy` repository
5. Click "Deploy" (no configuration needed!)
6. Wait ~2 minutes ☕
7. Your site is live! 🎉

Vercel will give you a URL like: `speech-therapy.vercel.app`

---

## Alternative: Deploy via CLI

If you prefer command line:

```bash
# 1. Login to Vercel
npx vercel login

# 2. Deploy
npx vercel --prod

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - What's your project name? speech-therapy
# - In which directory? ./
# - Override settings? N

# Done! Your URL will be shown in the terminal
```

---

## After Deployment

### Add a Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `mckayspeech.com`)
4. Follow DNS instructions
5. SSL certificate is automatic!

### View Form Submissions

Visit `https://your-site.vercel.app/admin` to see all contact form submissions.

⚠️ **Important**: Add password protection to /admin before sharing the site!

---

## Environment Variables (Optional)

If you add email notifications or analytics later:

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your API keys
3. Redeploy

---

## Troubleshooting

**Build fails?**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in package.json
- Try building locally: `npm run build`

**Form not working?**
- Check API route: `/api/contact`
- Check browser console for errors
- Verify fetch URL is correct

**Need help?**
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Ask me! 🤖

---

**Your site is ready to deploy!** Choose GitHub import (easiest) or CLI method above.
