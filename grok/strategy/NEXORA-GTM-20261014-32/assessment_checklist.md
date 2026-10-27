# NEXORA-GTM-20261014-32 — Free Business Technology & Growth Assessment: Reusable Checklist
Prepared by NEXORA Digital Auditor on 2026-10-14. Draft template. **STOP FOR CEO REVIEW.**

## Scope guardrails (read before every assessment)
- Total internal effort: 60–90 minutes. Stop at 90 minutes and record anything left unchecked as "Not assessed (time cap)".
- Cover no more than 2 workflows or digital challenges, chosen by the prospect.
- Allowed inputs: public web pages, public listings and profiles, and what the prospect volunteers in conversation or writing.
- Never: log in, create accounts, submit forms, start bookings or checkouts, call or chat as a test, or request access to systems, records or credentials. Don't accept sensitive records; if any are sent, don't open them and flag them to a human.
- No architecture, code, integration designs or prototypes. No ROI, savings or revenue figures unless the prospect supplied the numbers, and if so, label them "prospect-stated".
- Every statement is either an observation (seen and evidenced) or a recommendation (an opinion), never a mix of the two.

## Evidence-capture rules (apply to every finding)
| Field | Rule |
|---|---|
| ID | AS-<prospect-slug>-NN |
| URL | The exact URL as loaded, including the path; note any redirect |
| Date/time | ISO date plus local time (America/Edmonton) at observation |
| Viewport | Desktop 1280px or mobile 390px; browser and tool used |
| Evidence | A screenshot file path (preferred). Otherwise a quoted HTML or text snippet with its file path. Check that the file exists before citing it |
| Observation | What was seen, stated literally |
| Source type | OBSERVED (public page) / PROSPECT-STATED / NOT VERIFIED |
| Severity | High / Medium / Low (impact on trust or conversion) |
| Limitation label | One of: SINGLE-LOAD, NO-SCREENSHOT, BOT-CHECK/BLOCKED, JS-NOT-RENDERED, NOT-INSPECTED-PAST-STEP-N, TIME-CAP, PROSPECT-STATED-UNVERIFIED |
Store everything under /workspace/assessments/<prospect-slug>/<YYYY-MM-DD>/ with screenshots/, html/ and findings.md.

## Sections and time budget (90 min max)
| # | Section | Budget |
|---|---|---|
| 0 | Prep: confirm the official domain, intake notes, the 2 chosen challenges | 5 min |
| 1 | Website trust | 10 min |
| 2 | Conversion paths | 10 min |
| 3 | Mobile first screen | 5 min |
| 4 | SEO basics | 10 min |
| 5 | Forms and booking (observe only) | 10 min |
| 6 | Visible tools and platforms | 5 min |
| 7 | Process observations (the ≤2 challenges) | 20 min |
| 8 | Write-up and limitations review | 15 min |

### 1. Website trust (10 min)
- [ ] Business name, address and phone are consistent across the footer, contact page, schema and Google/LinkedIn profiles
- [ ] The phone's area code matches the stated location, or the difference is explained
- [ ] Testimonials and reviews are attributed (name, company, date) and source-linked if they're third-party
- [ ] Case studies, logos and metrics are shown with context; note any unsourced claims
- [ ] Certifications, licences and insurance claims are visible and checkable (record them; don't verify them with third parties)
- [ ] HTTPS is valid with no mixed-content warnings; privacy policy and terms are present and current
- [ ] "Last updated" signals (blog dates, copyright year)

### 2. Conversion paths (10 min)
- [ ] The primary CTA is visible on the homepage, with its text and destination recorded
- [ ] Count the clicks from the homepage to quote, contact or booking
- [ ] Secondary or low-commitment offers (free check, guide, estimator)
- [ ] Pricing signal (published, "starting from", or quote-only)
- [ ] Contact options listed (form, phone, email, chat), observed only
- [ ] Each key service page has a CTA

### 3. Mobile first screen (5 min)
- [ ] At 390px, record what is visible without scrolling: headline, value proposition, CTA, phone (take a screenshot)
- [ ] The nav menu opens and closes and has an accessible name
- [ ] No horizontal overflow; pinch-zoom isn't disabled (check the viewport meta)
- [ ] Tap targets are reasonably sized; text is readable (no body text under about 12px)
- Label a single headless load as SINGLE-LOAD and confirm it on a second load or with Lighthouse before rating it High

### 4. SEO basics (10 min)
- [ ] Title and meta description on the homepage and key pages (unique, descriptive)
- [ ] One meaningful H1 per page
- [ ] Canonical tag; robots.txt; sitemap.xml present and listing the key pages
- [ ] Structured data (Organization/LocalBusiness) with correct name, address and phone
- [ ] OpenGraph tags (og:title, og:image)
- [ ] Image alt text on meaningful images
- [ ] Optional: llms.txt; Google Business Profile exists (observe only)

### 5. Forms and booking (10 min, observe only, NEVER type or submit)
- [ ] Number of fields and steps, and which ones are required (visual and programmatic markers)
- [ ] Labels are associated with their inputs; no placeholder-only labels
- [ ] CAPTCHA or other friction; file uploads
- [ ] Booking widget or vendor (for example Jobber, Calendly, HubSpot), observed from the page or its script domains
- [ ] Expected response time or next steps stated
- [ ] Record "NOT-INSPECTED-PAST-STEP-1" for multi-step forms

### 6. Visible tools and platforms (5 min)
- [ ] CMS or builder (WordPress, Wix, Shopify, and so on) from page markup
- [ ] Analytics and tag tools (GTM, GA4, Meta pixel) from script domains
- [ ] CRM, marketing, booking, payments or portal vendors visible in links or scripts
- [ ] Record only what is visible; never infer internal systems or claim they're outdated

### 7. Process observations (20 min, ≤2 challenges)
For each challenge the prospect described:
- [ ] The challenge in the prospect's own words (PROSPECT-STATED)
- [ ] The public touchpoints involved (pages, forms, booking flow) with evidence
- [ ] Observed friction points, evidenced
- [ ] Open questions to ask the prospect (not assumptions)
- [ ] Out of scope: architecture, integration design, code, prototypes, ROI estimates

### 8. Write-up and limitations review (15 min)
- [ ] Findings table: ID, URL, date, observation, evidence, severity, limitation label
- [ ] A separate Recommendations section with no ROI claims, framed as options
- [ ] A Limitations section listing every label used and anything Not assessed
- [ ] A human reviews the write-up before anything is shared with the prospect; the assessor never sends it

## Limitation labelling examples
- "Mobile headline not visible (SINGLE-LOAD, NO-SCREENSHOT): needs confirmation."
- "Form steps 2–3 not reviewed (NOT-INSPECTED-PAST-STEP-1)."
- "Prospect says quotes take 3 days (PROSPECT-STATED-UNVERIFIED)."
