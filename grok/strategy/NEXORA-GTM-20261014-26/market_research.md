# NEXORA-GTM-20261014-26 — Market Research Base (public sources only)
Checked 2026-10-14 (America/Edmonton). No estimates: every number below is quoted from the cited source. Counts are **business locations with employees** from the Statistics Canada Business Register. They exclude businesses with no employees, and StatCan advises against comparing them as a time series.

## 1. Market evidence

### 1a. Business counts, June 2026
- **Alberta:** Table 33-10-1174-01, "Canadian Business Counts, with employees, June 2026" (REF_DATE 2026-01, released 2026-08-14). https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3310117401 (CSV: https://www150.statcan.gc.ca/n1/tbl/csv/33101174-eng.zip)
- **Calgary CMA, Calgary city and nearby towns:** Table 33-10-1176-01 (CMAs and census subdivisions, June 2026, released 2026-08-14). https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3310117601 (CSV: .../33101176-eng.zip). The Calgary CMA is DGUID 2021S0503825.

**All industries, with employees:** Canada 1,366,418 · **Alberta 180,659** · **Calgary CMA 65,650** (1–4 employees: 39,539 · 5–9: 10,774 · 10–19: 7,215 · 20–49: 5,030 · 50–99: 1,744) · Calgary city 57,817 · Airdrie 2,252 · Okotoks 1,171 · Cochrane 1,161 · Chestermere 1,024.

**By sector (NAICS code). Each cell is the total with employees; the size bands in brackets are 5–9 / 10–19 / 20–49 / 50–99 employees.**
| NEXORA sector | NAICS proxy | Alberta | Calgary CMA |
|---|---|---|---|
| Construction & trades | 23 | 22,000 [3,852 / 2,056 / 1,397 / 563] | 7,820 [1,359 / 743 / 500 / 197] |
| – Foundation, structure & exterior (incl. roofing, siding) | 2381 | 3,142 | 1,291 |
| – Building equipment contractors (electrical, plumbing, HVAC) | 2382 | 4,622 | 1,421 |
| Professional services | 54 | 23,243 [2,265 / 1,406 / 990 / 358] | 11,662 [1,092 / 616 / 471 / 189] |
| Manufacturing & industrial | 31-33 | 5,068 [1,078 / 892 / 726 / 332] | 1,685 [355 / 274 / 233 / 131] |
| Logistics & distribution: wholesale | 41 | 6,607 [1,542 / 1,268 / 973 / 327] | 2,347 [525 / 416 / 328 / 118] |
| Logistics & distribution: transport & warehousing | 48-49 | 9,669 [1,034 / 709 / 586 / 231] | 3,396 [281 / 196 / 179 / 81] |
| Property: real estate | 53 | 6,873 [818 / 441 / 355 / 79] | 2,530 [292 / 158 / 114 / 33] |
| – Real estate activities (property managers, agents) | 5313 | 970 | 405 |
| Facilities: services to buildings (janitorial, landscaping, etc.) | 5617 | 3,809 | 1,479 |
| Healthcare (admin is NOT broken out separately) | 62 | 18,672 [2,990 / 2,489 / 1,622 / 400] | 7,065 [1,116 / 874 / 562 / 117] |
| Home services (no single NAICS; partial proxy) | 81 Other services | 15,119 | 4,630 |
| Retail & e-commerce | 44-45 | 17,799 [5,338 / 3,236 / 1,896 / 711] | 5,739 [1,584 / 1,116 / 574 / 237] |
| Startups & SaaS (proxy; StatCan doesn't count "startups") | 5415 Computer systems design | 3,801 [325 / 203 / 157 / 45] | 2,433 [202 / 117 / 98 / 34] |

The surrounding towns (Airdrie, Okotoks, Cochrane, Chestermere) are broken out by NAICS in the source extract. For example, construction (23) counts are: Airdrie 358, Okotoks 192, Chestermere 185, Cochrane 150.

**Other count sources:**
- Government of Alberta Regional Dashboard: "Calgary had 57,897 businesses in 2025, increasing 3.01% from 56,206 in 2024." https://regionaldashboard.alberta.ca/region/calgary/number-of-businesses/ (checked 2026-10-14; snippet-level).
- Calgary Economic Development, Uplook 2026 Progress Report: share of employment by sector (e.g., construction 8.4%, professional services 12.3%, wholesale/retail 14.6% in the latest column). https://www.calgaryeconomicdevelopment.com/assets/Reports/Uplook/Uplook-2026-Progress-Report-web.pdf (snippet-level; I didn't confirm which column is which year).

### 1b. Digital adoption and AI indicators
- **CSBC Q2 2026 (collected Apr 1–May 6, 2026), table 33-10-1167-01, released 2026-05-27:** https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3310116701
  - Businesses that used AI to produce goods or deliver services in the last 12 months: **Canada 19.2% · Alberta 18.4%**.
  - Among Alberta AI users, by type: chatbots/virtual agents 26.7%, speech/voice 26.6%, NLP 25.1%, machine learning 20.8%.
- **CSBC Q3 2026 (collected Jul 2–Aug 6, 2026), table 33-10-1207-01, released 2026-08-31:** https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3310120701
  - Businesses planning to use AI in the next 12 months: **Canada 25.2% · Alberta 23.5%**. Among Alberta businesses that plan to, 29.4% plan chatbots.
  - Analysis: https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2026013-eng.htm. Canada's planned-AI share was 14.5% in Q3 2025 and 10.6% in Q3 2024.
- **Obstacles, Canada, Q2 2026:** https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2026022-eng.htm. Businesses expecting each over the next 3 months: inflation 48.8%, cost of inputs 28.4%, transportation costs 26.5%, recruiting skilled employees 24.4%, interest rates 23.5%.
- **Survey on Technology Use by Businesses 2026** (StatCan program 4225, successor to SDTIU): main collection runs 2026-10-20 to 2027-02-18, so **no 2026 results yet**. https://www.statcan.gc.ca/en/statistical-programs/instrument/4225_Q2_V1
- **GAP:** I didn't pull Alberta-specific digital or IT *spending* figures. SDTIU spending tables were NOT_ASSESSED.

## 2. Associations, chambers and recurring events (checked 2026-10-14)
| Organization | Event / recurring item | Date | URL |
|---|---|---|---|
| Calgary Chamber | Small Business Week (workshops, member coffee, awards gala Oct 23) | 2026-10-08 to 10-23 | https://calgarychamber.com/events-calendar/ |
| Calgary Chamber | Confluence YYC: Tech and Digital Transformation, at Platform Calgary; Member $69 / Non-member $139 | 2026-11-03, 5:00–7:30 pm | https://calgarychamber.com/event/confluence-yyc-tech-digital-transformation/ |
| Calgary Chamber | Member workshop "Using AI to Support Sales" (part of an annual workshop series announced 2026-02-10) | 2026-11-17 | https://calgarychamber.com/whats-new/2026-calgary-chamber-member-workshops-announced/ |
| Calgary Construction Association | AI Executive Session with AWS and Softchoice (already past; shows sector appetite) | 2026-09-16 | https://www.linkedin.com/posts/calgary-construction-association_the-train-has-left-the-station-are-you-activity-7493729940526256130-jYQ3 |
| BILD Calgary Region | Member Mixer Nov 4 · Strong Foundations Nov 17 · Holiday Reception Dec 3 | Nov–Dec 2026 (SNIPPET_ONLY; the events page returned HTTP 202 with no content) | https://www.bildcr.com/events |
| Airdrie Regional Chamber | Business Blunders Nov 19 · Coffee with Your Chamber Nov 25 · Holiday Luncheon Dec 10 | Nov–Dec 2026 (snippet) | https://business.airdriechamber.ab.ca/chamber-calendar |
| Cochrane & District Chamber | Before Hours Coffee Break | 2026-11-11, 7–9 am | https://business.cochranechamber.ca/events/details/before-hours-coffee-break-11-11-2026-346 |
| Okotoks & District Chamber | Events calendar (no November listings seen) | — | https://okotokschamber.ca/events |
Not assessed: Chestermere chamber, Platform Calgary's own calendar, Inventures 2027 dates (not found).

## 3. Published competitor pricing (checked 2026-10-14; quoted exactly)
| Category | Vendor (base) | Advertised / quote | Currency | Billing | Published price and limits | URL |
|---|---|---|---|---|---|---|
| Website | Hooked Marketing (Calgary) | Advertised | CAD | One-time | Starter $1,793 (7 pages, 14-day support) · Pro $2,793 (12 pages, 30-day support) · Premium $3,793 (15+ pages, 90-day support). "Prices checked September 27, 2026" (snippet; live page returned HTTP 202) | https://hookedmarketing.ca/website-cost-calgary/ |
| Website | AltaSmith (Calgary) | Advertised | CAD (not stated on the page excerpt) | One-time + monthly | Starter $1,499 · Professional $2,899 · Commerce $4,499, plus Core care plan $99/month (snippet) | https://altasmith.ca/website-cost-calgary/ |
| Website | Calgary Website Design | Advertised | Not stated | Per project | Starter $2500 (up to 10 pages) · Growth $6000 (up to 20) · Professional $10000 (up to 35) · E-Commerce $8000 (up to 50 products) · Enterprise "$15000 /At Starts"; Monthly SEO "$800 – $2,000/month"; "CRM Integration ... $1,500+" | https://calgarywebsitedesign.com/packages/ |
| Website | Imagine Designs (Calgary) | Advertised "starts at" | Not stated | One-time | Essentials $3,699 · Growth $5,999 · Pro $9,999 · E-Commerce $6,500 · Landing Page $900 (snippet) | https://imaginedesigns.ca/calgary-web-design-pricing/ |
| Website (market survey) | Meridian15 (Calgary) | Survey of 19 studios | CAD | — | Business site with 4–12 pages: median $3,250; custom: median $9,000; online store: median $7,500 (read 2026-09-27; snippet) | https://fifteenthmeridian.com/blog/web-design-cost-calgary |
| Marketing retainer | Big Fox Agency (Calgary) | Advertised | Not stated | Monthly | Growth Starter $1,750/mo · Revenue Engine $3,550/mo (website up to 10 pages) · Scale Programme $6,500/mo (up to 30 pages) · Enterprise $10,000+ | https://www.bigfox.ca/pricing |
| Marketing retainer | DMG Online Marketing (Calgary) | Advertised | Not stated | Monthly | From $3,000, with $5,000 and $7,500–$10,000 tiers (SNIPPET_ONLY) | https://dmgonlinemarketing.com/pricing/ |
| AI automation | Calgary AI | Advertised range | Not stated | Monthly | Silver Plan "$200 - $500/month" (email-only support) · Gold Plan "$500 - $1,000/month" · Platinum: custom | https://calgary-ai.ca/services/ |
| AI automation + custom software | AIAlberta | Advertised "from" | Not stated | One-time + monthly | AI automation from $1,500 · AI caller setup from $2,500 · Custom software from $5,000 · Maintenance from $500/mo; "fixed quote before work begins" | https://aialbertas.com/pricing |
| CRM implementation | Startegic (HubSpot onboarding) | Advertised | CAD | One-time | "$4,500 CAD" (Pro-tier onboarding) · "$8,000 CAD" (Enterprise) | https://www.startegic.ca/hubspot-onboarding-services |
| CRM implementation | Edynamics (Calgary) | Range per snippet | Not stated | One-time + monthly | "$2,500–$15,000" implementation + "$300–$2,000" monthly (SNIPPET_ONLY; live page showed no prices) | https://edynamicsmarketing.com/crm-implementation-calgary/ |
| Custom software | Eikeland (Calgary) | Advertised rate | Not stated | Hourly, quoted as a fixed price | "$125 / hour, quoted fixed"; bands: $1,000 – $2,500 (8–20 h) · $5,000 – $11,250 (40–90 h, internal system) · $11,250 – $18,750 (90–150 h) | https://eikeland.ca/custom-software |
| Custom software | Axis Software Solutions | Advertised "from" | CAD | Fixed quote | "start from CAD 3,998"; CRM/ERP "CAD 3,998–CAD 40,000+" | https://axissoftwaresolutions.com/custom-software-company-calgary-canada |
| Custom software | Codingclave | Advertised range | CAD | Project | "CAD 6,000 – CAD 60,000" | https://codingclave.com/canada/custom-software-development-calgary |
| Construction SaaS | Jobber (Canadian page) | Advertised | Not stated on the excerpt (en-ca page) | Monthly / annual | Plans quoted, e.g. $199/mo with no commitment ($149/mo billed annually, 5 users) up to $699/mo; "Add users for $29/mo each" | https://www.getjobber.com/en-ca/pricing/ |
| Construction SaaS | Contractor Foreman (US-based) | Advertised | Not stated (likely USD, UNCONFIRMED) | Monthly, on annual plans | Basic $49 (1 user) · Standard $105 (up to 3) · Plus $166 (up to 8) · Pro $221 (up to 15) · Unlimited $332 | https://www.contractorforeman.com/pricing |
| Construction SaaS | Procore | Quote-only (volume-based) | — | — | No published price | https://www.procore.com/en-ca/pricing |
| Construction SaaS | Buildertrend | NOT_ASSESSED (HTTP 403) | — | — | — | https://buildertrend.com/pricing/ |
| WMS | CanShip (Canadian) | Advertised | CAD | Monthly / annual | Starter $99 CAD/mo (500 shipments, then $0.15 each) · Grow $299 CAD/mo (3,000 shipments) · Pro $999 CAD/mo | https://canship.co/ |
| WMS | Flowtrack | Advertised | CAD | Monthly | Essential "CA$500 per month", 3 users, "CA$100 per month per additional user" | https://www.flowtrackwms.com/en/pricing |
| WMS | PulsarWMS | Advertised | Not stated | One-time + monthly | Implementation $8,000.00 · Essentials $1,800.00 per month · Mobile license $125.00/mo · Web license $200.00/mo · Hosting from $375.00/mo | https://www.pulsarwms.com/pricing |
| WMS | WarePulse (Quebec) | SNIPPET_ONLY | CAD | Monthly | "CA$699/month" for one warehouse (live page showed no prices) | https://www.warepulse.ca/fr/tarification |

## Gaps
- **Healthcare admin, home services and startups/SaaS** don't line up with StatCan categories; the NAICS proxies above are approximations.
- I didn't pull **Alberta-specific digital spending data**.
- **Survey on Technology Use 2026** results aren't released yet.
- **Several prices are SNIPPET_ONLY**, because the live page was blocked or rendered by JavaScript (marked above).
- **Currency** is often not stated on the page. Where marked "Not stated", treat it as UNCONFIRMED.
- **Not assessed:** Buildertrend pricing, Chestermere chamber, Platform Calgary events, Inventures 2027.
