# Total Documentos Landing Page - PRONTO PARA DEPLOY ✅

**Landing Page HTML Estática - Consultoria PI (Marca + Patente + Design)**

## 🚀 Deploy Rápido (< 1 minuto)

### Via Vercel Dashboard (Recomendado)

1. **Criar conta Vercel:** https://vercel.com/sign-up
2. **Push para GitHub:**
   ```bash
   git remote add origin https://github.com/SEU_USER/total-documentos-lp.git
   git push -u origin main
   ```
3. **Import em Vercel:** https://vercel.com/new → Selecione repo → Deploy
4. **URL Live:** `https://total-documentos-lp.vercel.app`

## 📋 Conteúdo da Landing Page

- ✅ **Hero** - Headline + CTA WhatsApp + Trust statement
- ✅ **Personas** - 3 cases (e-commerce, franqueador, profissional)
- ✅ **Solução** - 5-step journey visual
- ✅ **Diferencial** - 6 benefit cards
- ✅ **Social Proof** - 350+ marcas, 95% aprovação, testimonials
- ✅ **FAQ** - 8 Q&As responsivos
- ✅ **Final CTA** - 3 rotas (WhatsApp, Phone, Email)

Arquivo principal: `public/index.html` (282 linhas, totalmente responsivo)

## ⚙️ Customizar

Edite `public/index.html`:
- **WhatsApp:** `https://wa.me/55XXXXXXXXXX` (sua linha 191)
- **Telefone:** `tel:+55XXXXXXXXXX` (sua linha 352)
- **Email:** `vinicius@totaldocumentos.com` (sua linha 353)

## 📊 Project Info

**By:** Vinicius Tronconi, Total Documentos Campinas

---

**KPI Targets:**
- 2.5-3.5% conversion rate
- <2.5s LCP (Largest Contentful Paint)
- 95+ Lighthouse score (mobile)

**Tech Stack:**
- Next.js 14 + React 18
- TypeScript (strict mode)
- Tailwind CSS 3.4
- Supabase (for form data)
- Vercel (deployment)
- GA4 + Meta Pixel (analytics)

---

## 🚀 Quick Start

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/[user]/total-documentos-lp.git
cd total-documentos-lp

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# Edit .env.local and fill in your values:
# - NEXT_PUBLIC_ANALYTICS_ID (GA4)
# - NEXT_PUBLIC_META_PIXEL_ID (Meta Pixel)
# - NEXT_PUBLIC_WHATSAPP_NUMBER
# - NEXT_PUBLIC_PHONE_NUMBER
# - NEXT_PUBLIC_EMAIL

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
total-documentos-lp/
├── public/                    # Static assets
│   ├── images/
│   │   ├── logos/            # Brand logos
│   │   └── icons/            # SVG icons
│   └── fonts/                # Web fonts (optional)
│
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── contact/      # Form submission
│   │   │   └── quiz-results/ # Quiz email capture
│   │   ├── layout.tsx        # Root layout + GA4/Meta Pixel
│   │   ├── page.tsx          # Home page (8 containers)
│   │   └── globals.css       # Global styles
│   │
│   ├── components/
│   │   ├── containers/       # Page sections (8 containers)
│   │   │   ├── Hero.tsx
│   │   │   ├── Problema.tsx
│   │   │   ├── Solucao.tsx
│   │   │   ├── Diferencial.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── Quiz.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── common/           # Reusable components
│   │   │   ├── Button.tsx    # 3 variants (primary, secondary, tertiary)
│   │   │   ├── Card.tsx      # 4 types (benefit, persona, testimonial, number)
│   │   │   ├── Icon.tsx      # 8 icons
│   │   │   ├── Form.tsx      # Form with validation
│   │   │   └── SectionTitle.tsx
│   │   └── sections/         # Section sub-components
│   │       ├── PersonaCard.tsx
│   │       ├── BenefitCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── NumberCard.tsx
│   │       └── AccordionItem.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts      # Copy, data (heroes, personas, etc.)
│   │   ├── analytics.ts      # GA4 + Meta Pixel event tracking
│   │   ├── forms.ts          # Form validation (Zod)
│   │   ├── quiz.ts           # Quiz logic (scoring, results)
│   │   └── utils.ts          # Helper functions
│   │
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   │
│   ├── hooks/
│   │   └── (custom hooks - optional)
│   │
│   └── styles/
│       └── (additional CSS - optional)
│
├── .env.example              # Environment template
├── .env.local               # Local secrets (git ignored)
├── package.json             # Dependencies + scripts
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Design tokens
├── next.config.ts           # Next.js config
├── vercel.json              # Vercel deployment config
└── README.md                # This file
```

---

## 🎨 Design System

### Colors

- **Primary:** `#2E7D32` (Verde - CTAs, accents)
- **Primary Dark:** `#1B5E20` (Dark verde - gradient bottoms)
- **Accent:** `#FF7043` (Laranja - secondary highlights)
- **Background:** `#FFFFFF` (White)
- **Section BG:** `#F5F5F5` (Light gray)

### Typography

- **Headlines:** Geom Sans Bold (font-weight: 700)
- **Body:** Inter Regular (font-weight: 400)
- **Sizes:**
  - H1: 48px desktop / 40px mobile
  - H2: 32px / 28px
  - H3: 24px / 20px
  - Body: 16px / 14px

### Spacing Grid

- Base: 16px
- Increments: 4px, 8px, 12px, 16px, 24px, 32px, 48px

### Responsive Breakpoints

- **Mobile:** 320px (xs)
- **Tablet:** 640px (sm) → 1024px (lg)
- **Desktop:** 1024px+ (lg)
- **Wide:** 1200px+ (xl)

---

## 📄 Page Structure (8 Containers)

### 1. **Hero** - Problem Hook
- H1: "Sua Marca Está Blindada? Descubra em 2 Minutos"
- Subheadline + Primary CTA (WhatsApp button)
- Trust statements (350+, 95%, 6-12 meses)
- Hero image (600x500px)

### 2. **Problema** - Persona Segmentation
- 3 persona cards: E-commerce, Franqueador, Profissional Liberal
- Each: Icon + name + scenario + pain point quote

### 3. **Solução** - The Process
- 5-step timeline: Consultoria → Análise → Registro → Deferimento → Proteção
- Step number circles + icons + descriptions

### 4. **Diferencial** - Why Choose Us
- 6 benefit cards: Consultiva, Acompanhada, Pragmática, etc.
- Secondary CTA button

### 5. **Social Proof** - Trust Signals
- 3 big numbers (350+, 95%, 6-12 meses)
- Logo section (placeholder for 10-20 brand logos)
- 3 testimonial cards

### 6. **Quiz** - Interactive Engagement
- 5 questions (radio buttons, no initial form)
- Results: Low/Medium/High risk levels
- Email capture on results screen

### 7. **FAQ** - Accordion
- 8 Q&A items with smooth expand/collapse animation (300ms)
- Icons + bold questions + detailed answers

### 8. **Final CTA** - Dark Green Gradient Footer
- H2: "Pronto para Blindar Sua Marca?"
- 3 CTA routes: WhatsApp (primary), Phone, Email
- Final trust statement

---

## 🔄 Forms & Interactions

### Contact Form (API: `/api/contact`)
**Fields:** Name, Email, Phone, Message (optional), Source (hero/diferencial/faq/final_cta)

**Flow:**
1. User submits form
2. Server validates (Zod schema)
3. Save to Supabase `contacts` table
4. Send Zapier webhook → Email to Vinicius
5. Client shows success message

**Tracking:** GA4 `form_submission`, Meta Pixel `Lead`

### Quiz (Component: `Quiz.tsx`)
**Flow:**
1. User answers 5 questions (radio buttons)
2. Calculate risk score
3. Display results: Low/Medium/High risk
4. Show email capture form
5. Submit email to `/api/quiz-results`

**Tracking:** GA4 `quiz_start`, `quiz_question_answered`, `quiz_complete`, `quiz_email_capture`

### FAQ (Component: `FAQ.tsx`)
**Flow:**
1. User clicks question
2. Accordion expands (300ms smooth animation)
3. Shows answer
4. User can collapse or open another

**Tracking:** GA4 `faq_expand` events

---

## 📊 Analytics Setup

### GA4 Events Being Tracked

```
- page_view (automatic)
- container_impression (hero, problema, solucao, diferencial, social_proof, quiz, faq, final_cta)
- cta_click (whatsapp, phone, email, quiz, faq)
- form_start
- form_submission (contact, quiz)
- quiz_start
- quiz_question_answered
- quiz_complete
- quiz_email_capture
- faq_expand
- conversion (= form submission or email capture)
```

### Meta Pixel Events

```
- PageView (automatic)
- InitiateCheckout (CTA click = checkout in pixel language)
- Lead (quiz email capture OR form submission)
```

### Conversion Funnel

1. **Page View** → Homepage loads
2. **Container Impression** → User scrolls to hero (30%+ through page)
3. **CTA Click** → User clicks WhatsApp/Phone/Email button (4-5 min avg)
4. **Form Submission** → Contact form OR Quiz email capture
5. **CONVERSION** ← Lead generated

**Expected daily:** 2-3 conversions (30-50/month KPI)

---

## 🚀 Deployment to Vercel

### Prerequisites

- GitHub account with repo created
- Vercel account connected to GitHub

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import GitHub repository
   - Select `total-documentos-lp`

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all `.env.local` variables:
     - `NEXT_PUBLIC_ANALYTICS_ID`
     - `NEXT_PUBLIC_META_PIXEL_ID`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`
     - `NEXT_PUBLIC_PHONE_NUMBER`
     - `NEXT_PUBLIC_EMAIL`
     - `NEXT_PUBLIC_SUPABASE_URL` (when ready)
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (when ready)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit live URL (e.g., https://total-documentos-lp.vercel.app)

5. **Custom Domain (Optional)**
   - Add custom domain in Vercel settings
   - Update DNS records
   - SSL certificate auto-provisioned

---

## ⚡ Performance Optimization

✅ **Image Optimization**
- Use Next.js `<Image />` component (not `<img />`)
- Set `priority` on hero image only
- Lazy load all other images
- WebP/AVIF format support

✅ **Font Loading**
- Use `next/font` for Geom Sans + Inter
- Latin subset only
- Preload critical fonts

✅ **CSS Optimization**
- Tailwind purges unused styles
- Critical CSS for hero + CTA
- Custom animations (accordion 300ms)

✅ **Code Splitting**
- Dynamic imports for Quiz, FAQ (optional)
- Lazy load below-fold containers

✅ **Caching**
- Static page: `revalidate: 3600` (1 hour)
- API routes: No caching (fresh form data)
- Images: Vercel edge caching

### Lighthouse Score Target: 95+

Focus areas:
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

Run locally:
```bash
npm run build
npm start
# Then use Chrome DevTools → Lighthouse
```

---

## 🔐 Environment Variables

Required for production:

```env
# Analytics
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=1234567890

# Contact Info
NEXT_PUBLIC_WHATSAPP_NUMBER=+5511999999999
NEXT_PUBLIC_PHONE_NUMBER=+5511999999999
NEXT_PUBLIC_EMAIL=contato@totaldocumentos.com.br

# Supabase (when ready to persist forms)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxx

# Zapier Webhook (for lead notifications)
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/xxx
```

---

## 📦 Dependencies

### Production
- `react@18.3.0` - UI library
- `react-dom@18.3.0` - React DOM
- `next@14.2.0` - Framework
- `typescript@5.4.2` - Type safety
- `tailwindcss@3.4.1` - Styling
- `@supabase/supabase-js@2.38.4` - Database client
- `zod@3.22.4` - Form validation

### Development
- `eslint@8.56.0` - Linting
- `eslint-config-next@14.2.0` - Next.js ESLint config

---

## 🧪 Testing

### Local Testing

```bash
# Test responsiveness
# - Open http://localhost:3000
# - Chrome DevTools → Toggle Device Toolbar
# - Test 320px, 768px, 1024px, 1200px viewports

# Test performance
# - Chrome DevTools → Lighthouse
# - Target: 95+ mobile, 98+ desktop

# Test analytics
# - GA4: Go to Real-time report
# - Events should appear within 10 seconds
# - Meta Pixel: Use browser console fbq.t to debug

# Test forms
# - Fill out contact form (should log to console in dev)
# - Complete quiz and submit email
# - Verify no console errors
```

---

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: description of change"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
# After review, merge to main
```

---

## 🐛 Troubleshooting

### Page loads but styling is broken
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind config matches `src/` paths

### GA4/Meta Pixel not firing
- Check environment variables are set in `.env.local`
- Verify `NEXT_PUBLIC_ANALYTICS_ID` and `NEXT_PUBLIC_META_PIXEL_ID` are correct
- Open DevTools → Console, search for `gtag` or `fbq`
- Test in incognito mode (no ad blockers)

### Forms not submitting
- Check .env variables for SUPABASE and ZAPIER URLs
- Verify API routes are accessible: `http://localhost:3000/api/contact`
- Check server logs for errors

### Performance is slow (LCP > 2.5s)
- Check hero image size and format (should be <50KB optimized)
- Run Lighthouse audit and check bottlenecks
- Consider lazy loading images with `loading="lazy"`
- Defer non-critical JavaScript

---

## 📞 Support

**Client Contact:** Vinicius Tronconi  
**Email:** [contact info]  
**WhatsApp:** [phone number]

---

## 📄 License

Private project for Total Documentos Campinas. All rights reserved.

---

## ✅ Checklist Before QA

- [ ] All 8 containers render correctly (desktop + mobile)
- [ ] Hero image loads without layout shift
- [ ] Quiz interactive (answers save, results display correctly)
- [ ] FAQ accordion smooth (300ms animation)
- [ ] Forms submit without errors
- [ ] CTAs link to correct destinations (WhatsApp, phone, email)
- [ ] GA4 events firing (check Real-time report)
- [ ] Meta Pixel events firing (check Pixel Helper)
- [ ] Lighthouse score 95+ (mobile)
- [ ] LCP < 2.5s
- [ ] No console errors
- [ ] Responsive layouts (320px, 768px, 1024px+)
- [ ] Test on iPhone + Android (real devices if possible)
- [ ] Deployed to Vercel (live URL working)
- [ ] Custom domain configured (if applicable)
- [ ] Environment variables set in Vercel dashboard

---

**Built with ❤️ by Developer Agent**  
**Deployed on:** Vercel  
**Last Updated:** 2026-04-13
