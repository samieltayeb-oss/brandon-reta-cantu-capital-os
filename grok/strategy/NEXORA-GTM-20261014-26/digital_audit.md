# Digital Audit — NEXORA-GTM-20261014-26
Checked 2026-10-14 (~17:20–17:45 MT). Read-only: curl GETs + headless browser page loads. No forms typed into/submitted, no logins, no mailto/tel/chat clicks. Authenticated areas (/cmd, /app, /erp, /discovery, /clients, summitos.nexorayyc.io/login, /app/dashboard) NOT visited.
Evidence: `digital_audit_evidence/` — raw HTML of every sitemap page (`pages/`), status/timing (`pages/_status.txt`), robots/sitemap/llms (`root*.html`), SEO extract (`seo_extract.txt`), visible text (`text/`), competitor raw HTML (`competitors/*.html`, `competitors/_status.txt`, `competitors/urls.txt`).
Screenshot note: browser screenshots (390px home, contact, /summitos, /products/summitos) were taken but the tool's saved files were NOT found on disk when checked → no PNG evidence; HTML/text is the evidence.

## PART A — nexorayyc.io

### A1. Page inventory — OBSERVED
- sitemap.xml: 47 URLs, all HTTP 200 (0.32–0.84 s curl). Groups: home, /about, /ai-automation, /ai-templates, /capabilities (+7 sub: autonomous-operations, brand-architecture, data-synthesis, digital-storefronts, ecosystem-integrations, intelligent-crm, omnichannel-cx), /concepts (+construction, healthcare, it-sales), /contact, /industries, /privacy, /terms, /security, /products (+move-to-canada, nexorago-ai, nexora-wms, summitos, nexora-drive, contentos, vitalis), /systems, /transformation, /work (+12 case pages).
- Top nav: Industries, Services, Products, Work, Resources, About, "Request a Strategy Call".
- Footer: NEXORA Products, Industries, Services, How it fits together, Automation, Examples, Our process, Free resources, Case Studies/Work, About, SummitOS Pilot, Contact, Privacy, Terms, Security; Facebook, LinkedIn; "Registered in Alberta and Federally in Canada", "Est. 2024", © NEXORA Technologies Corp.
- Services claimed (/capabilities): websites, brand identity, CRM ("customer tracking"), workflow automation (human approval), reporting/dashboards, customer communication, tool integrations. Industries: construction, logistics/warehousing, clinics, property/facilities, professional services; target "about 15 to 300 people", Calgary/Alberta.
- Products: SummitOS (paid pilot), NEXORA WMS (demo), NexoraGo AI, NEXORA MOVE, Driver Exam Suite (free), Contentos, VITALIS ("in development, not available yet").
- robots.txt disallows /api/, /cmd, /discovery/, /clients/hnh/, /app, /erp/ (links/paths noted only, not visited). Also /privacy.html and /terms.html exist (200) in addition to /privacy, /terms (duplicate URLs, linked from /summitos).

### A2. CTAs & conversion paths — OBSERVED
- Home: "Request a strategy call" (hero + footer band + nav) → /contact; "See who we help" → /industries; mailto growth@ (not clicked); SummitOS block: "Apply for Pilot Access" → /contact?product=summitos&tier=foundation, "Explore the demo" → summitos.nexorayyc.io/app/dashboard.html?demo=true (not visited); secondary "See how it works/See our services/View the examples/See our process"; 3 case-study cards.
- Service pages: one H1 each, CTA to strategy call/contact.
- /contact: H1 "Request a strategy call"; shows email, phone +1 (438) 874-9959 (Montréal-area code, while location is Calgary), 3-step process text; form.
- /summitos: "Apply for Pilot Access" (tier-specific ?product=summitos&tier=foundation|live-intelligence|enterprise), "Launch Interactive Demo", "Sign In to System" (→ summitos.nexorayyc.io/login, not visited).
- No published service pricing; no booking calendar; no lead magnet gated (free PDFs at /ai-templates — gating not checked).

### A3. Forms (inspection only) — OBSERVED
- /contact form (`noValidate`), multi-step: step 1 "Your details" = First name, Last name, Work email (maxLength 150), button "Next"; later steps rendered client-side, not inspected further (would require typing). Text "Sent over a secure connection". No form on home/summitos pages (they link to /contact with query params).

### A4. Trust signals & case studies — OBSERVED
| Claim | Where | Supporting source shown? |
|---|---|---|
| "Real projects for real businesses… only share results our clients have approved" | home | No metrics published at all |
| QTSI website (Edmonton) | /work, /work/qtsi | Badge "Needs Delivery Verification"; no testimonial/metric |
| Les Systèmes Tech-Micro (Québec) | /work | "Needs Delivery Verification" |
| Seha Medical Center (Calgary clinics) | home, /work | "Needs Delivery Verification" |
| Blue Moon Construction — "SummitOS pilot customer"/"active pilot participant" | home, /work | Badge "Active Pilot"; no quote/logo-permission evidence |
| Game Zone, IPCONNEX, OTIS, Sabra Travel, Sam Computers, Osama Ali | /work | Labeled "Concept Demonstration" |
| NEXUS | /work | "Internal Project" |
| SummitOS: "Live Supplier Price Sync… Beacon, ABC Supply, Convoy Supply" | /summitos | No source/partnership evidence shown |
| PostgreSQL RLS tenant isolation | /summitos, /products/summitos | Technical self-claim, no audit/cert |
| Registered AB + federally | footer | No registration number shown |
- No testimonials, client logos strip, review ratings, certifications or quantified results observed. No % / metric claims detected in page text.

### A5. SEO/AEO/GEO — OBSERVED (see seo_extract.txt)
- Titles + meta descriptions present and unique on all 44 pages checked; canonical present on all (self-referencing).
- One H1 per page.
- JSON-LD on every page: Organization, ProfessionalService, PostalAddress, AdministrativeArea; FAQPage on /ai-automation, /capabilities, /systems; SoftwareApplication on /summitos. No Product/Offer schema for SummitOS pricing beyond that; no Review schema.
- OpenGraph: og:title present only on some pages (ai-automation, ai-templates, concepts*, contact, industries); og:image absent on all pages checked.
- robots.txt present with sitemap reference; sitemap.xml present (47 URLs) — **/summitos (the main SummitOS landing) is NOT in sitemap**.
- llms.txt: 404.
- No meta robots tags (indexable by default).

### A6. Performance & mobile (browser viewport 390×780) — OBSERVED
| Page | load event | network idle | failed/4xx requests | console |
|---|---|---|---|---|
| / | 492 ms | ~2.6 s | none | 1 warning: "GSAP target .pulse-glow not found" |
| /contact | 209 ms | ~1.1 s | none | none |
| /summitos | 243 ms | ~1.3 s | none | none |
| /products/summitos | 181 ms | ~1.5 s | none | none |
- Home at 390px: first viewport showed logo, hamburger and "CALGARY, ALBERTA" badge only — headline/CTA not visible in first screenshot (likely animation-delayed). Contact and SummitOS first viewports showed headline + CTAs. Horizontal overflow not measured. (Single run, warm network; not lab Lighthouse.)

### A7. SummitOS pages — OBSERVED
- /summitos (not in sitemap; linked from footer "SummitOS Pilot" and products page): H1 "MASTER SUPPLY. PROTECT MARGINS."; target specialty trade contractors ($5M–$25M), roofing/exterior. "Controlled Paid Pilot · Participation by Application". Tiers (proposed, CAD, tax-exclusive): Foundation $299/mo (≤10 seats), Live Intelligence $599/mo (≤25 seats, "Recommended"), Enterprise custom. "No Automatic Workspace Activation / No Public Self-Service Checkout". Large module list (dispatch, GPS time, payroll, GL, Stripe/EFT, portals, OHS, SFL formula language) + feature matrix. Footer links "SummitOS Pilot Terms of Service (Draft — Under Review)" and privacy policy.
- /products/summitos: status "Controlled Paid Pilot", "From CAD $299/mo", built with PostgreSQL RLS/Supabase/Edge Functions, FAQ.
- External: summitos.nexorayyc.io/app/dashboard.html?demo=true (demo) and /login — links exist, not visited.

### Notes (interpretation, not observation)
- Proof gap is the main conversion weakness: all case studies self-flag as unverified/concept; zero testimonials/metrics.
- /summitos missing from sitemap; no og:image anywhere; no llms.txt — cheap AEO/GEO fixes.
- Module breadth on /summitos (payroll, GL, GPS) is broad relative to "pilot" status; supplier-sync names (Beacon/ABC/Convoy) are unsupported claims worth verifying.
- Phone area code 438 vs Calgary positioning may reduce local trust.

## PART B — Competitors (homepage + listed services/pricing page; date checked 2026-10-14)
Source list: 03_competitive_matrix.md section A (17 listed; 15 used — Kayak excluded as never opened, Pixeltree not re-checked). CTAs/pricing/proof/content observed by HTML extraction (keyword/link-text level); proof column = terms present on page, not verified content depth.
| # | Competitor | URLs checked | Main CTAs | Pricing / quote model | Proof shown | Content approach |
|---|---|---|---|---|---|---|
| 1 | Ember North | embernorth.ca, /pricing/ | Start My Website, Free website check, Call | Published: $499 / $799 / from $1,500; $49/mo or $490/yr | "Google reviews", "certified" mentions | Cost calculator/comparison, FAQ |
| 2 | ClarioDesign | clariodesign.com, /web-design-calgary | Book a discovery call, Get my free website check, Start ranking, call/text founder | Published: $697 / $1,397; $297/mo SEO; $250 brand | "Trusted by" | Blog, FAQ |
| 3 | Levo Digital | levodigital.ca, /pricing/ | Get Started, Contact Us | Published from $900 / $1,300; $25/mo hosting | Case study, "trusted by" | FAQ only (no blog seen) |
| 4 | BrainWage | brainwage.ca, /pricing | Free check (site), Book a call | Published monthly $499/$599/$799 (+$349/location) | None detected | Guides |
| 5 | internetWorld.ca | internetworld.ca, /services/seo-calgary/ | Get a Free Audit, Call or Text Ron | Published $895/$1,650/$2,950/mo (prepaid $825+) 12-mo term | Case studies, "certified" | Blog |
| 6 | Everex Media | everexmedia.ca, /digital-marketing-calgary | Start a project, Book a strategy call, free audit | Published $800–$3,500+/mo | Case study, Google review | Blog/articles, FAQ |
| 7 | NuTab Digital | nutab.ca, /services/ai-automation/ | Get Your Free Quote, Get Free Consultation | Published $2,250 starter; rest custom | Portfolio, partner | Insights, FAQ |
| 8 | Seal Grow Studio | sealgrow.ca, /services/ai-and-workflow-automation | Free Website Audit, Book a 20-Minute Fit Call, Call | Published $1,800/$2,800/$4,000; $350–650/mo | Portfolio | Guides, location landing pages |
| 9 | The Automators | theautomators.ai, /ai-agency-calgary/ | Book a call, Book free consultation, Free AI tools | Hourly $175 CAD/$125 USD; projects from $3,000 | Case studies, Google reviews, partner, "trusted by" | Blog, guides, calculator, free tools; many city pages |
| 10 | Oxone | oxone.ca, /business-automation-calgary | Book a free Strategic Diagnostic, Talk to Chen | Published from $1,500 fixed, no retainer | Certified/partner mentions | Blog, newsletter, guides, calculators, free tools (Mac app) |
| 11 | Next Step TSP | nextsteptsp.com, /crm/ | Book a Free (Technology) Assessment | Quote only (no prices) | Partner, "trusted by" | Insights |
| 12 | Flawless Inbound | flawlessinbound.ca, /implementation-overview | Book a consultation, Start your project, Start a rescue | Published "from" $1,500–$2,900; $2,995/mo plan | Case studies, HubSpot certified/partner | Blog, insights |
| 13 | Startegic | startegic.ca, /hubspot-onboarding-services | Book A Free Consultation, Schedule a Call, Talk to sales | Published $4,500 / $8,000 CAD | Partner | Blog, guides |
| 14 | Eikeland | eikeland.ca, /custom-software | Get a ballpark in 5 minutes, Start a project, Book a demo | Hourly $125 + published ranges $1,000–$37,500 | Testimonials, portfolio, own products | Blog, guides, online estimator |
| 15 | Tactics Digital YYC | tacticsdigital.ca (homepage only, pricing on it) | Book a discovery call, Try Lintry free | Published ranges $5K–$200K; retainer $5K–15K/mo | Partner | Blog, FAQ |

### Notes (interpretation)
- 13/15 publish some pricing; nearly all lead with a free audit/check/diagnostic CTA; NEXORA has neither published service pricing nor a free-check offer.
- Most competitors show reviews/case studies/partner badges; NEXORA shows none verified.

## Gaps / limitations
- Screenshots not persisted to disk (tool reported saved paths, files absent) → text/HTML evidence only.
- Contact form steps 2+ not inspected (would require input). Demo app and /login not visited by rule.
- Mobile check: single headless load at 390px, no Lighthouse/CWV; horizontal overflow not measured.
- Competitor proof/content fields are keyword extraction, not manual review; review counts/certification validity not verified. Kayak, Pixeltree, web-imagine not checked.
