# LIAISON-HNH-20261014-39 — Strategy Analyst: Differentiation, Market Context & CaseEasy Public-Docs Assessment
Prepared 2026-10-14 (America/Edmonton). **Everything in this file is PENDING CEO REVIEW.**
Rules applied: public sources only. HNH's discovery questionnaire was not sought, requested or used. Nothing here implies access to HNH's CaseEasy account or systems. CaseEasy is confirmed as HNH's platform, but **we don't know which plan, add-ons or features HNH has enabled**. This file evaluates CaseEasy's public documentation only. **Argon is the technical authority on CaseEasy; section 3 is public-docs input for Argon to validate.** No outreach, CRM, NEXORA prices, ROI or customer claims. HNH's internal operations and people were not researched.
All "checked" dates = 2026-10-14 (MT) unless stated.

## 0. What the delivered 15-slide deck (9 Oct 2026) already covered vs. what is new here
**Already covered in the deck (deck_text.md):** industry workflow (acquire → close) and CICC Code duties; CaseEasy/Officio/INSZoom named as advertised platforms; three workstreams (growth and handoff, document readiness, management control); public-site findings (policy placeholders, registration notice, the "42 hrs" claim, paused programs, map link); PIPA/PIPEDA/CASL policy drafting; journey and marketing automation; data/AI governance lifecycle; connected operating model; roadmap; Newcomer Navigator; discovery questionnaire invitation. The deck spoke generically of "CRM", "portal/checklists" and "evaluate existing AI".

**New in this file:**
1. A **CaseEasy-specific capability map** from official docs (plans, documented integrations, AI features, Enterprise custom integrations, backup sync, Canadian hosting) with V/H/U labels.
2. **Concrete "around-CaseEasy" workflows** tied to documented CaseEasy connectors (Zapier prospect sync, Calendly sync, QuickBooks invoice sync, Drive/Dropbox backup sync, form-version alerts, document-expiry alerts), instead of generic CRM/AI.
3. **2026 market shifts** that change the consultancy service mix: IRCC's temporary-resident arrival cuts, economic-heavy PR mix, and the 2026–2027 one-time PR initiatives.
4. **Regulatory workflow hooks** the deck didn't operationalize: the CICC 6-year closed-file retention and destruction-date record, the 10-business-day file transfer duty, and communication-record capture.
5. **Competitive risk analysis of CaseEasy itself:** its Enterprise tier offers custom integrations, and it plans "Agentic AI" for later in 2026. NEXORA must position as complementary, not overlapping.
6. Clio, Docketwise and Officio as alternative platforms, so NEXORA stays platform-agnostic.

## 1. Market context: Canada immigration consultancy and law (dated sources)
| # | Fact | Source | Date |
|---|---|---|---|
| M1 | 2026–2028 Levels Plan: new temporary-resident arrival targets 385,000 (2026) and 370,000 (2027, 2028), down from 673,650 in 2025 | https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/committees/cimm-mar-23-2026/temporary-resident-targets.html (CIMM note dated 2026-03-23; read via search extract — canada.ca timed out to curl) | checked 2026-10-14 |
| M2 | 2026 targets: 155,000 new students ("49% fewer than last year's target"), 230,000 new temporary workers (37% fewer), 380,000 new permanent residents (4% fewer) | https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/corporate-initiatives/levels.html (opened via WebFetch) | 2026-10-14 |
| M3 | PR mix 2026: Economic 63%, Family 22%, Refugees/H&C/Other 15%; economic reaches 64% in 2027–2028; PNP admissions increased | same as M2 | 2026-10-14 |
| M4 | One-time 2026–2027 initiatives: ~115,000 applications for protected persons to PR; 33,000 skilled temporary workers fast-tracked to PR | same as M2 | 2026-10-14 |
| M5 | 2025 arrivals: new student arrivals −61%, temporary worker arrivals −47% vs 2024; NPR share fell from 6.8% to 6.5% (Oct 2025 → Jan 2026) | CIMM 2026-03-23 note (M1 URL; search extract) | 2026-10-14 |
| M6 | CICC Code s.37: licensees must keep a reliable office-administration system and preserve records per the by-laws; s.36(3): file transfer to another representative within 10 business days on request | https://laws-lois.justice.gc.ca/eng/regulations/SOR-2022-128/section-37.html (HTTP 200; "current to 2026-09-21") and FullText (search extract) | 2026-10-14 |
| M7 | CICC Client File Management Regulation: closed files retained at least 6 years; record a projected destruction date; keep a list of closed files and a destruction record; store active and closed files separately | https://college-ic.ca/ICCRC/Assets/Documents/Regulations/Client%20File%20Management%20Regulation.pdf (HTTP 200) | 2026-10-14 |
| M8 | CICC guidance: all communications (emails, texts, WhatsApp) must be recorded; verbal discussions noted and followed up in writing | https://college-ic.ca/whats-on/news-insights/tips-for-professional-conduct-record-keeping (HTTP 200; article dated 2024-09-27) | 2026-10-14 |

Interpretation (HYPOTHESES, not demand evidence): fewer new student and worker arrivals and an economic/PNP-heavy PR mix likely shift consultancy work toward PR transitions, PNP, in-Canada status changes and the one-time initiatives (M4), and away from new study-permit volume. Admission targets do **not** establish HNH's demand or market size (the deck said the same).

### Competing practice tools (alternatives to CaseEasy; official pages)
| Tool | Public pricing seen | Notes | URL / checked |
|---|---|---|---|
| Clio (Canada) | "plans start at $69 CAD per user per month"; Starter/Core/Signature/Elite | General legal practice management; SOC 2 Type II; "handles personal information in line with PIPEDA"; data export "in open, nonproprietary formats… within 90 days of cancellation"; apps/integrations from Core | https://www.clio.com/ca/pricing/ (WebFetch; curl 403) · 2026-10-14 |
| Docketwise | $80 / $100 / $120 per user per month (one billing view) and $90 / $120 / $140 (the other) | US-focused immigration platform; QuickBooks integration in Pro; page uses USD | https://www.docketwise.com/pricing · 2026-10-14 |
| Officio | Unavailable in the page's static HTML (prices load dynamically); plan names Solo/Pro/Ultimate | Canadian immigration suite: client/trust accounts, portal, Calendly/Dropbox/Google Drive, AI Writer (Ultimate) | https://officio.ca/pricing.html (HTTP 200) · 2026-10-14 |
| INSZoom | Covered in the deck | — | (deck) |
These are context only. NEXORA's position is to work around the incumbent, not to recommend a platform switch.

## 2. Competitive differentiation and market opportunity
### Positioning around CaseEasy (not replacing it)
"CaseEasy runs the case. NEXORA connects everything around it: lead sources, booking, accounting, reporting, regulatory record-keeping and the client-facing website, using CaseEasy's documented connectors first and custom work only where a gap is verified by Argon."

### Concrete around-CaseEasy workflows (each is a HYPOTHESIS until Argon confirms feasibility and HNH confirms what is enabled)
| # | Workflow | Documented CaseEasy hook (section 3) | What NEXORA would do | Guardrail |
|---|---|---|---|---|
| W1 | **Campaign-to-prospect intake:** website/landing-page and social leads land in CaseEasy as prospects with a source tag | Zapier "Sync Prospects… from… Google Sheets, Social Media Campaigns, WordPress, Wix" (C11) | Map each lead source to a Zap; standardize source fields; dedupe rules; consent flag carried over | No case documents through marketing tools; CASL consent |
| W2 | **Booking-to-prospect handoff:** Calendly bookings create prospects with an owner and a follow-up task | "Calendly Sync… create new prospects" (C12) | Owner/backup assignment rules, no-show follow-up, attendance status reporting | Keep HNH's existing "don't share sensitive documents at booking" warning (from the deck) |
| W3 | **Billing reconciliation pack:** CaseEasy invoices sync to QuickBooks; monthly reconciliation of billed vs paid by service line | QuickBooks sync (C13) | Reconciliation checklist/report; exception list; trust vs operating separation check (with the accountant) | Not accounting advice; trust rules reviewed by HNH's accountant |
| W4 | **Management dashboard outside CaseEasy** (funnel + case-stage + revenue) | CaseEasy reporting (C9); QuickBooks; Calendly; **no documented reporting API (U)** | Combine Calendly + QuickBooks + CaseEasy report exports into one view, if exports allow | Argon to confirm whether reports can be exported (U) |
| W5 | **Regulatory file-lifecycle register:** closed-file list, projected destruction date, destruction record, 6-year retention clock | CaseEasy compliance reports and "client listing" (C8); backup sync (C14) | A register/workflow around CaseEasy matching CICC Regulation 7.2–7.4 and 10.1 (M7) | HNH and its licensee confirm obligations; no automated deletion |
| W6 | **File-transfer readiness drill:** can a complete client file be produced within 10 business days (M6)? | Backup to Drive/Dropbox/OneDrive (C14); migration services (C17); export **U** | Documented procedure + test with a synthetic file | Synthetic data only |
| W7 | **Communication-record completeness:** emails, texts and WhatsApp captured to the case file (M8) | Office 365/G-Suite email sync to client case (C10); omni-channel comms (C6) | Gap map for channels not synced (e.g., WhatsApp) and a manual-capture SOP | No message content leaves approved systems |
| W8 | **Program-change propagation:** CaseEasy flags IRCC form-version changes; NEXORA links that to the website claim/program register the deck proposed | "notified of form version changes" (C4) | Trigger a content review task when forms/programs change | Practitioner approves all content |
| W9 | **Expiry-to-client-action:** CaseEasy document-expiry alerts → templated client reminder + staff task | "notified of any expiring documents" (C5); AI document expiry detection (C15) | Reminder templates, escalation if no response | Necessary service messages kept separate from promotional ones |
| W10 | **Service-mix repositioning content** for 2026 policy shifts (PR transitions, PNP, one-time initiatives) | — (website/marketing) | Practitioner-approved service pages + intake questions routed into W1 | No outcome or speed claims |

### Where CaseEasy's gaps might leave room for NEXORA (HYPOTHESES)
- H1: CaseEasy has **no publicly documented API** (U). Integration beyond the listed connectors may depend on Zapier (documented for prospect sync only) or on CaseEasy Enterprise custom work, so a neutral integration partner can design around those limits.
- H2: Cross-system reporting (marketing source → consultation → case → revenue) spans tools CaseEasy doesn't own (ad platforms, website analytics). CaseEasy reporting covers data "already captured in CaseEasy" (C9).
- H3: Regulatory lifecycle registers (W5–W7) are firm procedures, not software features. CaseEasy supplies data; the process design is consulting work.
- H4: Website, content and claim governance is outside CaseEasy, apart from its embeddable assessments and calendars (C16).
- **Counter-risks:** CaseEasy Enterprise offers "custom integrations… developing specialized functionality" (C18), and CaseEasy plans "Agentic AI… initial release planned for later in 2026" (C15). NEXORA should not pitch generic AI assistants or integrations that CaseEasy sells itself. Position as complementary, and consider a partner conversation with CaseEasy (CEO decision; no contact made).

### Privacy considerations for client data (PIPEDA and Alberta PIPA)
- Alberta PIPA governs provincial private-sector organizations; PIPEDA applies to personal information crossing provincial or national borders in commercial activity (deck sources; OPC page https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/02_05_d_15/ and https://oipc.ab.ca/resource/pipa-on-a-page/ both HTTP 200 on 2026-10-14). Which law applies to each flow is for counsel.
- CaseEasy states data is hosted in Canada: "securely hosted on infrastructure located in Canada" (C19). Around-CaseEasy tools (Zapier, Calendly, Google/Dropbox backups, QuickBooks) may process data **outside Canada**. Each new connector in W1–W9 needs a vendor/country map and minimum-data design before use (PIPA service-provider guidance, as in the deck).
- Backup sync copies "client case records" to Drive/Dropbox twice daily (C14). That widens the data footprint: storage location, access control and retention of those copies must match the CICC 6-year rule (M7) and the deletion procedure.
- AI features: CaseEasy Copilot "analyzes de-identified client information" (C15). Any NEXORA AI work must keep identifiable case data inside approved systems.
- No health information assumed. Medical-exam documents may still appear in files, so counsel should confirm whether any extra handling applies.

## 3. CaseEasy capability assessment (OFFICIAL sources only; for Argon to validate)
Labels: **V** = verified in official CaseEasy docs/site · **H** = hypothesis · **U** = unknown (not documented publicly). "Advertised" ≠ tested. Plan availability ≠ HNH's enabled features.
| ID | Capability | Label | Official evidence (quote) | URL | Checked |
|---|---|---|---|---|---|
| C1 | Client & case management | V | "Manage clients, cases, and deadlines in one place" | https://caseeasy.ca/ | 2026-10-14 |
| C2 | Plans & limits | V | Starter "Starting at $99 /month Includes 1 user… IRCC PDF Form Autofill (25/day)… 50 GB"; Advanced "$199 /month… (100/day)… AI-Assisted Client Assessments & Document Review… Advanced Workflow Automation… eSignatures… Advanced Integrations… 350 GB"; "Additional users are $69/mo each"; Enterprise "Custom Annual Pricing" | https://caseeasy.ca/Home/Pricing | 2026-10-14 |
| C3 | IRCC PDF form autofill; IRCC Portal Autofill (pay-as-you-go "starting at $25 per case") | V | as quoted on the pricing page; help article "IRCC PDF Autofill: Behind the Scenes" exists | https://caseeasy.ca/Home/Pricing ; https://support.caseeasy.ca/en/articles/12988132-ircc-pdf-autofill-behind-the-scenes (HTTP 200, not read in full) | 2026-10-14 |
| C4 | Form-version change alerts | V | "get notified of form version changes and keep synced with the very latest" | https://caseeasy.ca/ | 2026-10-14 |
| C5 | Expiring-document and milestone notifications; triggers/autoresponder | V | "Send messages using our advanced triggers and autoresponder… Get notified of any expiring documents and important milestones" | https://caseeasy.ca/ | 2026-10-14 |
| C6 | Client portal & secure communication | V | "Client Portal & Secure Communication" | https://caseeasy.ca/ ; pricing page | 2026-10-14 |
| C7 | Billing, trust accounting, online payments (Stripe, LawPay) | V | "Billing, Trust Accounting & Payments"; "Get paid through our Stripe or LawPay integration" | https://caseeasy.ca/ ; https://caseeasy.ca/Home/Integrations | 2026-10-14 |
| C8 | Compliance reports (client reconciliation report, client listing) | V | "Generate your client reconciliation report with ease Get your client listing as needed" | https://caseeasy.ca/ | 2026-10-14 |
| C9 | Reporting across cases, clients, revenue, payments, team activity | V | "reporting across cases, clients, revenue, payments and team activity" | https://caseeasy.ca/ | 2026-10-14 |
| C10 | Email integration (Office 365, G-Suite; organizes emails by client case); Microsoft SMTP connector; Zoom | V | Integrations page; Help Center collection "12. Integrations" lists Email Integration, SMTP settings for Microsoft accounts, QuickBooks Integration, Zoom Integration | https://caseeasy.ca/Home/Integrations ; https://support.caseeasy.ca/en/collections/9135299-12-integrations | 2026-10-14 |
| C11 | Zapier | V (prospect sync) / U (other objects) | "Sync Prospects from other CRMs such as Salesforce, Pipedrive… Google Sheets, Social Media Campaigns, WordPress, Wix or any of the 5,000+ other sources"; pricing: "sync your contacts from across 5,000+ apps". Which triggers/actions exist (cases, invoices, outbound events) is **not documented** | https://caseeasy.ca/Home/Integrations ; pricing page | 2026-10-14 |
| C12 | Calendly sync (creates prospects); Google Calendar sync | V | "Automatically sync your Calendly bookings… and create new prospects"; "Google Calendar Automatically sy[nc]…" | https://caseeasy.ca/Home/Pricing | 2026-10-14 |
| C13 | QuickBooks sync | V (invoices) / U (payments, trust detail, direction) | "sync invoices to your Quickbooks account"; pricing: "sync all your client invoices and financial details" | Integrations page; pricing page | 2026-10-14 |
| C14 | Backup sync to Google Drive / Dropbox / OneDrive | V | "Automatically sync your client case records to your Google Drive account… synced twice daily"; Enterprise FAQ: "retain access to your backed-up records even if you later discontinue CaseEasy" | Integrations page; pricing page | 2026-10-14 |
| C15 | AI: Copilot (CRS insights on de-identified data), AI document scanning (expiry, blur, extraction); Agentic AI planned "later in 2026" | V (available features) / H (roadmap timing) | Help article "CaseEasy AI: Current Capabilities & What's Next"; pricing: Document Verification "Maximum of 100 verifications per month" | https://support.caseeasy.ca/en/articles/17190293-caseeasy-ai-current-capabilities-what-s-next ; pricing page | 2026-10-14 |
| C16 | Website integration (embed assessments and calendars) | V | "Embed our Assessments and Calendars on your website" (official PDF) | https://caseeasy.ca/content/images/caseeasy-360-benefits.pdf (search extract; not re-opened) | 2026-10-14 |
| C17 | Data migration from other providers | V | FAQ: "Can my data be migrated from another Immigration Software provider? Yes." | https://caseeasy.ca/ | 2026-10-14 |
| C18 | Enterprise: SSO (Microsoft Entra), custom integrations, custom development, role-based access | V | "Enterprise supports custom integrations… Integration feasibility, scope, and associated costs are assessed as part of your proposal"; "Microsoft Entra single sign-on"; "provides role-based access controls" | https://caseeasy.ca/Home/Pricing | 2026-10-14 |
| C19 | Security & hosting: SOC 2 Type I; AES-256 at rest and in transit; TLS 1.2+; Canadian hosting | V (as claimed) | "SOC 2 Type 1 Compliant"; "data is securely hosted on infrastructure located in Canada" | https://caseeasy.ca/ | 2026-10-14 |
| C20 | **Public API** (REST/webhooks, developer docs) | **U** | No API or developer documentation found on caseeasy.ca, the pricing page or Help Center pages opened; Help Center search is script-driven and returned nothing to a static query | — | 2026-10-14 |
| C21 | **Bulk data export** (CSV/structured export of cases, clients, invoices) | **U** | Not documented in the pages reviewed. Only backup sync (C14), reports (C8/C9) and inbound migration (C17) are documented | — | 2026-10-14 |
| C22 | Webhooks / outbound event notifications to other systems | U | Not documented | — | 2026-10-14 |
| C23 | Which plan or add-ons HNH has | U | Not public; must not be assumed | — | — |

## 4. Evidence gaps
- API, bulk export and webhooks (C20–C22): only Argon or CaseEasy documentation behind login can confirm. We did not log in.
- Zapier trigger/action coverage beyond prospects (C11); QuickBooks sync direction and scope (C13).
- The Help Center was only partly reviewed (Intercom search is script-driven); the "Admin Portal" collection has 38 articles not opened.
- canada.ca pages timed out to curl; the levels page was confirmed by WebFetch, and the CIMM figures come from search extracts of official pages.
- Officio prices are not visible in static HTML; Docketwise currency labelling was mixed (USD seen).
- No consultancy market-size or firm-count data (e.g., number of CICC licensees) was gathered.

## 5. Questions for Argon (technical validation)
1. Does CaseEasy offer an API or webhooks (any plan, including Enterprise)? Is there developer documentation behind login?
2. What can be exported (cases, clients, invoices, communications, documents), in what format, by whom, and at what frequency?
3. Which Zapier triggers and actions exist beyond prospect creation? Can case-stage changes trigger outbound events?
4. QuickBooks sync: direction, objects (invoices, payments, trust), and conflict handling?
5. What exactly does Drive/Dropbox/OneDrive backup contain, and in what structure? Is it suitable as a read-only reporting source, and what are the privacy implications?
6. Can CaseEasy reports be scheduled or exported for an external dashboard (W4)?
7. Are the CICC lifecycle items (closed-file list, destruction date, destruction record) supported natively, or do they need a register outside CaseEasy (W5)?
8. Does CaseEasy's planned Agentic AI or Enterprise custom-integration offer overlap with W1–W9? Where should NEXORA not build?
9. Which W1–W10 workflows are feasible on Starter vs Advanced vs Enterprise ("Advanced Integrations" is undefined publicly)?

## 6. CEO review items (all PENDING CEO REVIEW)
1. Approve the "around-CaseEasy, not replacing it" positioning and the W1–W10 workflow list as discovery hypotheses.
2. Send section 3 and the Argon questions to Argon for validation before any HNH-facing use.
3. Decide whether NEXORA should explore a partner relationship with CaseEasy, given its Enterprise custom-integration offer (no contact made).
4. Approve the use of 2026 IRCC policy shifts (M1–M5) as context in any follow-up. Content must avoid outcome or speed claims.
5. Decide whether to offer the CICC file-lifecycle register (W5–W7) as a distinct compliance-operations workstream (subject to HNH's licensee and counsel review).
6. Confirm that no NEXORA pricing, ROI or customer claims appear in HNH materials until a price schedule is approved.
7. Privacy: require a vendor/country map for every around-CaseEasy connector before HNH uses it (counsel to confirm PIPA vs PIPEDA).

## URLs visited (2026-10-14)
caseeasy.ca/ · caseeasy.ca/Home/Pricing · caseeasy.ca/Home/Integrations · caseeasy.ca/pricing (404/maintenance) · support.caseeasy.ca/en/ · support.caseeasy.ca/en/collections/9135299-12-integrations · support.caseeasy.ca/en/articles/17190293-caseeasy-ai-current-capabilities-what-s-next · support.caseeasy.ca/en/articles/12988132-ircc-pdf-autofill-behind-the-scenes (status only) · canada.ca …/levels.html (WebFetch) · canada.ca CIMM 2026-03-23 and 2025-12-04 notes (search extracts) · laws-lois.justice.gc.ca SOR-2022-128 s.37 · college-ic.ca home, record-keeping article, Client File Management Regulation PDF · clio.com/ca/pricing (WebFetch) · docketwise.com/pricing · officio.ca/pricing.html · priv.gc.ca 02_05_d_15 (status) · oipc.ab.ca/resource/pipa-on-a-page (status). Search-only (not cited as verified): softwarefinder.com CaseEasy listing, techimply/saasadviser Officio listings, navisa.io comparison.
