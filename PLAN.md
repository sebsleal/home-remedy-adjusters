# Claim Remedy Adjusters — Website Build Plan

## Project Overview
A modern, high-converting marketing website for **Claim Remedy Adjusters**, a Florida-based public adjusting firm that helps homeowners maximize insurance payouts for property damage. The site must convey trust, urgency, professionalism, and authority — while being visually stunning with fluid animations and premium UI.

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS for animations
- **Animations:** Framer Motion (page transitions, scroll reveals, counters)
- **Icons:** Lucide React
- **Fonts:**
  - Display: `Playfair Display` or `Cormorant Garamond` (premium/trustworthy)
  - Body: `Inter` or `DM Sans` (clean/modern)
- **Form handling:** React Hook Form
- **Deployment:** Vercel

---

## Brand Identity

### Color Palette
| Name | Hex | Usage |
|---|---|---|
| Navy Deep | `#0A1628` | Primary background, hero |
| Royal Blue | `#1B3A6B` | Section backgrounds |
| Gold Accent | `#C9A84C` | CTAs, highlights, borders |
| Warm White | `#F8F5F0` | Light sections, text on dark |
| Steel Gray | `#6B7280` | Body copy, subtle text |
| Danger Red | `#DC2626` | Urgency badges ("Act Now") |

### Typography Scale
- Hero H1: 72px / bold / Playfair Display
- Section H2: 48px / semibold
- Card H3: 28px / medium
- Body: 16px / regular / Inter
- Small/Caption: 13px

### Design Language
- Dark luxury aesthetic — deep navy base with gold accents
- Clean white card sections for contrast
- Subtle texture overlays (noise, grain) on dark sections
- Heavy use of whitespace
- Rounded corners (12–16px radius on cards)
- Glassmorphism effects on overlays and nav

---

## Site Architecture

```
/                    → Home
/about               → About Us
/services            → All Services
/services/storm      → Storm Damage
/services/water      → Water Damage
/services/roof       → Roof Damage
/services/fire       → Fire Damage
/results             → Case Results / Portfolio
/faq                 → FAQ
/contact             → Contact
/free-inspection     → Landing page (high conversion)
```

---

## Page-by-Page Breakdown

---

### 1. HOME PAGE `/`

#### 1.1 Navigation Bar
- Fixed/sticky, glassmorphism background on scroll (`backdrop-blur-md bg-navy/80`)
- Logo left, nav links center, CTA button right ("Free Inspection →")
- Mobile: hamburger menu with slide-down drawer
- On scroll: border-bottom fades in with gold accent
- **Animation:** fade-in on load, logo slides in from left, links stagger in from top

#### 1.2 Hero Section
- Full-viewport height (`100vh`)
- Background: dark navy with subtle animated gradient mesh (slow-moving color blobs using CSS `@keyframes`)
- Overlaid with a semi-transparent image of a damaged roof / Florida home (use stock photo)
- **Content:**
  - Badge: `⚡ Florida's #1 Public Adjusters` (gold pill badge, pulse animation)
  - H1: `"We Fight The Insurance Companies So You Don't Have To"`
  - Subheading: `"Licensed public adjusters maximizing your claim — no upfront cost, ever."`
  - Two CTAs: `[Get Free Inspection]` (gold filled) `[Call (786) 223-7867]` (outline)
  - Trust bar below CTAs: 3 icons — `✓ Licensed & Insured` / `✓ No Upfront Cost` / `✓ Florida Statewide`
- **Animations:**
  - Text lines slide up + fade in sequentially (stagger 0.15s each)
  - Background gradient mesh animates continuously (slow, subtle)
  - Scroll-down chevron bounces at bottom
  - Parallax on background image on scroll

#### 1.3 Stats Bar
- Full-width dark section, 4 stats in a row
- Animated number counters that trigger on scroll into view
- Stats:
  - `$12M+` — Recovered for clients
  - `500+` — Claims handled
  - `98%` — Client satisfaction
  - `24hr` — Response time
- **Animation:** count-up animation using Framer Motion `useMotionValue` + `useSpring`

#### 1.4 "How We Work" Section
- White/light background
- H2: `"Getting What You Deserve Is Simple"`
- 3-step process cards in a row:
  1. **Free Inspection** — We come to you, assess all damage
  2. **We Handle Everything** — Documentation, paperwork, negotiation
  3. **You Get Paid** — Maximum settlement, zero upfront cost
- Each card: icon (animated on hover — scale + color shift), number badge, title, description
- **Animation:** cards slide up staggered on scroll reveal

#### 1.5 Services Section
- Dark navy background
- H2: `"What We Handle"`
- 4 service cards in a 2x2 grid (desktop) / stacked (mobile):
  - Storm Damage
  - Water Damage
  - Roof Damage
  - Fire Damage
- Each card: full-bleed background image with dark overlay, icon, title, short description, "Learn More →" link
- **Animation:** cards scale up slightly on hover with overlay darkening; scroll reveal stagger

#### 1.6 Why Choose Us Section
- Split layout: left = content, right = image (adjuster inspecting damage)
- Bullet points with animated checkmarks:
  - Licensed across all of Florida
  - We work for YOU — not the insurance company
  - No out-of-pocket expenses
  - Rapid response — we come to you
  - Years of negotiation experience
- Gold accent line on left of section
- **Animation:** image slides in from right, text from left on scroll

#### 1.7 Testimonials / Social Proof
- Dark section
- H2: `"Hear From Homeowners Like You"`
- Horizontal auto-scrolling carousel (infinite loop, pauseable on hover)
- Each testimonial card: quote, stars (⭐⭐⭐⭐⭐), client name, city
- Source: pull from Google/Facebook reviews or use placeholder data
- **Animation:** smooth infinite scroll marquee using CSS `animation: scroll linear infinite`; cards fade in edges with gradient mask

#### 1.8 Hurricane Season Urgency Banner
- Bold red/gold alert strip
- Text: `"🌀 Hurricane Season Is Here — Document Your Damage Before It's Too Late"`
- CTA: `[Get Free Inspection Now]`
- **Animation:** slight pulse on the alert icon; text shimmer effect

#### 1.9 FAQ Teaser
- Light gray background
- 3–4 most common questions as accordion items
- "See All FAQs →" link
- **Animation:** accordion expand/collapse with smooth height transition

#### 1.10 Final CTA Section
- Full-width, dark navy with gold gradient overlay
- H2: `"Don't Leave Money On The Table"`
- Subtext: `"Insurance companies have experts. Now you do too."`
- Big CTA button: `[Schedule Your Free Inspection]`
- Phone number prominently displayed
- **Animation:** background has slow Ken Burns effect on a house image

#### 1.11 Footer
- Dark background
- Logo + tagline
- 4 columns: Services | Company | Contact | Social
- Address: 7900 Oak Ln #400, Miami Lakes, FL 33016
- Hours: Mon–Fri 9AM–5PM
- Social icons: Facebook, Instagram
- Bottom bar: `© 2025 Claim Remedy Adjusters. All rights reserved. | Licensed Public Adjusters — Florida`
- **Animation:** links underline slide-in on hover

---

### 2. ABOUT PAGE `/about`
- Hero with team photo or office image
- Company story: founded to level the playing field for homeowners
- Mission statement
- Team member cards (name, title, photo, LinkedIn)
- Licenses & certifications displayed as badge grid
- Values section: 4 pillars with icons
- CTA at bottom

---

### 3. SERVICES PAGE `/services`
- Overview hero
- 4 large service blocks alternating left/right image layout
- Each links to individual service subpage
- Bottom CTA

#### Service Subpages (Storm / Water / Roof / Fire)
- Specific damage type hero with relevant imagery
- What qualifies for a claim
- Our process for this claim type
- Before/after photo gallery (lightbox)
- Related testimonials
- CTA form

---

### 4. RESULTS PAGE `/results`
- Case result cards: damage type, initial offer, final settlement, % increase
- Example card:
  ```
  🏠 Roof Damage — Miami Lakes
  Insurance Offered: $4,200
  We Recovered:      $31,500
  Increase:          +650%
  ```
- Filter by damage type
- Testimonial video embeds (if available)
- Google review embed widget

---

### 5. FAQ PAGE `/faq`
- Full accordion list organized by category:
  - General Questions
  - About Public Adjusters
  - The Claims Process
  - Costs & Fees
- Search bar to filter questions
- CTA at bottom

---

### 6. CONTACT PAGE `/contact`
- Split layout: form left, info right
- Form fields: Name, Phone, Email, Address, Damage Type (dropdown), Description, Preferred Contact Method
- Right side: phone, email, address, map embed (Google Maps), hours
- Form submits to email via API route
- **Animation:** form fields animate in staggered; success state with checkmark animation

---

### 7. FREE INSPECTION LANDING PAGE `/free-inspection`
- Minimal nav (logo only)
- Single-focus conversion page
- Headline: `"Get Your Free Property Inspection Today"`
- Short form (Name, Phone, Address, Damage Type)
- Trust signals: license number, BBB badge, 5-star review count
- What happens next: 3-step explainer
- Urgency element: `"We have 3 inspection slots open this week"`

---

## Animation System

### Global Animations
```css
/* Gradient mesh background */
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Floating elements */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

/* Pulse glow for CTAs */
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4); }
  50% { box-shadow: 0 0 0 16px rgba(201, 168, 76, 0); }
}

/* Shimmer text effect */
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Infinite marquee scroll */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Framer Motion Variants
```js
// Fade up — standard scroll reveal
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

// Slide in from left
export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

// Scale up on hover
export const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } }
}

// Number counter
export const counterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}
```

### Page Transitions
- Route changes: fade out current page (0.2s), fade in new page (0.3s)
- Use `AnimatePresence` from Framer Motion wrapping page content

---

## Component Library

```
/components
  /layout
    Navbar.tsx
    Footer.tsx
    PageWrapper.tsx        ← AnimatePresence wrapper
  /ui
    Button.tsx             ← variants: primary (gold), secondary (outline), ghost
    Badge.tsx              ← pill badges with optional pulse
    Card.tsx               ← base card with hover animation
    Accordion.tsx          ← FAQ accordion
    Carousel.tsx           ← testimonials infinite scroll
    CounterStat.tsx        ← animated number counter
    ServiceCard.tsx        ← image + overlay card
    TestimonialCard.tsx
    ResultCard.tsx
    ContactForm.tsx
    SectionHeading.tsx     ← standardized h2 + subtext + gold underline
  /sections
    Hero.tsx
    StatsBar.tsx
    HowWeWork.tsx
    ServicesGrid.tsx
    WhyChooseUs.tsx
    Testimonials.tsx
    UrgencyBanner.tsx
    FAQTeaser.tsx
    FinalCTA.tsx
```

---

## SEO & Performance
- Next.js metadata API for all pages
- Target keywords: `public adjuster florida`, `insurance claim help miami`, `roof damage claim adjuster`, `storm damage public adjuster`
- Open Graph images for social sharing
- Structured data (LocalBusiness schema, FAQPage schema)
- Sitemap + robots.txt auto-generated
- Core Web Vitals optimized: lazy load images, font display swap, minimize JS

---

## Mobile Responsiveness
- Mobile-first Tailwind breakpoints
- Hamburger nav with animated slide drawer
- Service cards stack to 1 column
- Stats bar wraps to 2x2 grid
- Touch-friendly tap targets (min 44px)
- Carousel swipe-enabled on mobile

---

## Forms & Functionality
- Contact form → Next.js API route → Nodemailer or Resend.dev → sends to company email
- Free Inspection form → same pipeline + optional CRM webhook (e.g. HubSpot)
- Form validation with React Hook Form + Zod
- Success/error toast notifications

---

## File Structure
```
/app
  layout.tsx              ← root layout, fonts, global styles
  page.tsx                ← home page
  /about/page.tsx
  /services/page.tsx
  /services/[slug]/page.tsx
  /results/page.tsx
  /faq/page.tsx
  /contact/page.tsx
  /free-inspection/page.tsx
  /api/contact/route.ts   ← form submission handler
/components               ← (see above)
/public
  /images                 ← hero, service, team photos
  /icons                  ← SVG icons
/styles
  globals.css             ← base styles, keyframes, custom utilities
/lib
  animations.ts           ← Framer Motion variants
  utils.ts
/data
  services.ts             ← service content
  faqs.ts                 ← FAQ content
  testimonials.ts         ← testimonial data
  results.ts              ← case results data
```

---

## Build Sequence

1. [ ] Init Next.js 14 project + install dependencies
2. [ ] Set up Tailwind config (colors, fonts, custom utilities)
3. [ ] Build global layout (Navbar, Footer, PageWrapper)
4. [ ] Build shared UI components (Button, Card, SectionHeading, etc.)
5. [ ] Build Home page section by section (top to bottom)
6. [ ] Add all Framer Motion animations + scroll triggers
7. [ ] Build remaining pages (About, Services, Results, FAQ, Contact)
8. [ ] Build Free Inspection landing page
9. [ ] Wire up contact form with API route
10. [ ] SEO metadata + structured data on all pages
11. [ ] Mobile responsiveness pass
12. [ ] Performance audit (Lighthouse)
13. [ ] Deploy to Vercel
14. [ ] Connect custom domain (claimremedyadjusters.com or new domain)
