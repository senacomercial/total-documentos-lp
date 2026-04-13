# 🚀 Deploy Instructions - Total Documentos Landing Page

## Quick Deploy via Vercel CLI

```bash
cd d:\ProjetosIA\total-documentos-lp

# Option 1: Deploy with Vercel CLI (requires authentication)
npx vercel@latest deploy --prod

# Option 2: If npx fails, use installed CLI
vercel deploy --prod
```

## Environment Variables (Set in Vercel Dashboard)

```
NEXT_PUBLIC_WHATSAPP_NUMBER=55 11 98765-4321
NEXT_PUBLIC_PHONE_NUMBER=55 19 3123-4567  
NEXT_PUBLIC_EMAIL=vinicius@totaldocumentos.com
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX (GA4)
NEXT_PUBLIC_META_PIXEL_ID=123456789
```

## Manual Deploy via Vercel Dashboard

1. Go to https://vercel.com/sign-up
2. Sign in with GitHub account
3. Click "New Project"
4. Import Git Repository:
   - First, push this repo to GitHub:
     ```bash
     git remote add origin https://github.com/YOUR_USER/total-documentos-lp.git
     git branch -M main
     git push -u origin main
     ```
   - Then select the repo in Vercel
5. Set Environment Variables in Vercel dashboard
6. Click Deploy

## Project Structure

- `public/index.html` - Main landing page (static HTML)
- `src/` - Next.js components (optional, for future enhancements)
- `vercel.json` - Vercel configuration (set to static framework)

## Live URL

Once deployed, your landing page will be live at:
```
https://total-documentos-lp.vercel.app
```

## Testing

After deployment, test:
1. Page loads in <3 seconds
2. All buttons work (WhatsApp, Phone, Email links)
3. Mobile responsive (check iPhone 12 size)
4. GA4 events fire (once tracking code added)
