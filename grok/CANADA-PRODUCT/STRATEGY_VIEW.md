# CANADA-PRODUCT: Strategy and Economics View
Prepared by: NEXORA Strategy Analyst | Date: 2026-10-26 (America/Edmonton) | Status: ADVISORY, STOP FOR CEO DECISION | **v2 updated 2026-10-26 01:40 MDT** (adds C6, C7, X1, X2, cross-check, ROI; revises pick)
Labels: **V** = sourced (URL + date checked below) · **ESTIMATE** = my calculation from V inputs plus stated assumptions · **UNKNOWN** = not found or internal data needed.
Scope: strategy and economics only. Market sizing/competitor depth = Market Scout; sales path = B2B Sales Strategist; compliance = Legal and Risk. v1 was written before other files existed. **v2:** PRODUCT_RESEARCH.md and RISK_VIEW.md were read and cross-checked (§4b); SALES_VIEW.md cross-checked in §4c (received 01:40 MDT).

---
## 1. Sourced unit prices (all checked 2026-10-26)
All vendor prices are USD unless stated. **FX ASSUMPTION: 1 USD = 1.38 CAD (not verified today; Finance to confirm).**

| Item | Price (V) | Source |
|---|---|---|
| Gemini 3.8 Flash (text), paid tier | $0.75 / 1M input, $3.75 / 1M output **through 2026-12-31**; **doubles to $1.50 / $7.50 from 2027-01-01** | https://ai.google.dev/gemini-api/docs/pricing (page "last updated 2026-10-22") |
| Gemini 3.5 Flash-Lite | $0.30 / 1M input, $2.50 / 1M output | same |
| Gemini 3.8 Live (voice agent) | audio in $0.005/min, audio out $0.018/min | same |
| Gemini free tier | "Content used to improve our products" = **not usable with client personal data** | same |
| Twilio Canada SMS (long code) | $0.0083 per outbound or inbound segment + carrier fee per outbound ($0.0064 to $0.0087; Bell $0.0087) | https://www.twilio.com/en-us/sms/pricing/ca ("current as of October 2026") |
| Twilio Canada local number | $1.15/month | same + voice page |
| Twilio Canada voice | receive local $0.0085/min; make $0.0140/min; Media Streams $0.0044/min; Conversation Relay $0.07/min | https://www.twilio.com/en-us/voice/pricing/ca ("current as of August 2026") |
| n8n Cloud | Starter €20/mo, Pro €50/mo (billed annually); Business €667/mo self-hosted only; **n8n Cloud data hosted in Frankfurt, EU**; Community Edition self-host free | https://n8n.io/pricing/ |
| Cloud Run | request-based: $0.000024/vCPU-s, $0.0000025/GiB-s, $0.40/1M requests, free tier 180k vCPU-s; Montreal/Toronto are **Tier 2** regions (higher than Tier 1 list) | https://cloud.google.com/run/pricing |
| WhatsApp Business Platform | per delivered business message, by category and market; Canada priced in "North America" region; **first 1,000 service messages per number per month free** (from 2026-10-01); user-to-business free. Exact CA rate is in the rate-card CSV, **not read: UNKNOWN** | https://developers.facebook.com/docs/whatsapp/pricing/ (updated 2026-09-30) |

Implication (ESTIMATE): For text workflows, LLM cost is cents to a few dollars per client per month; the real run cost is telephony + support time. Self-hosting n8n on Cloud Run/GCE in northamerica-northeast1/2 is needed if data must stay in Canada, because n8n Cloud is EU-hosted.

## 2. Competitor price anchors actually seen (2026-10-26)
| Competitor | Published price (V) | URL |
|---|---|---|
| Rosie AI receptionist | $49 (250 min), $149 (1,000 min), $299 (2,000 min) per month | https://heyrosie.com/pricing |
| Goodcall | $79 / $129 / $299 per month, billed per unique customer | https://www.goodcall.com/pricing |
| Smith.ai AI Receptionist | Free (25 calls), Pro $150/mo (~$2.00/call), Enterprise $500/mo | https://smith.ai/pricing/ai-receptionist |
| Jobber | Core from $29, Connect $99, Grow $149, Plus $399 (1 user, annual); **Receptionist add-on $29/mo**; Grow has "auto-drafted quotes", automated quote follow-ups | https://www.getjobber.com/pricing/ |
| Jane App | Balance $59, Practice $79, Thrive $99/mo; **Thrive includes Return Visit Reminders and waitlist automation** | https://jane.app/pricing |
| Weave | base from $199/mo incl. Missed Call Text; Coordinate bundle $149/mo incl. "Recall & Reactivation Texts/Calls" | https://www.getweave.com/plans/ |
| Podium | Core $399, Pro $599 (third-party summary of podium.com, 2026-10-05; **not verified on Podium's own page**) | https://skillmammoth.com/blog/podium-pricing |
| Housecall Pro | **UNKNOWN** (not checked) | n/a |

## 3. Candidate economics
Common cost assumptions (ESTIMATE): shared infra (self-hosted n8n + Cloud Run + Cloud SQL/storage, Canada region) ≈ USD 150/month platform total, which works out to **≈ USD 5/client** at 30 clients and **≈ USD 15/client** at 10 clients. Support/success time is **UNKNOWN** (no NEXORA rate card). Gross margin below excludes human support; a support line is shown separately as an ASSUMPTION of 1 hr/client/month at an internal cost that is UNKNOWN.

### C1. Clinic patient reactivation (Jane App data): **OUT (v2)**. Jane's API is partner-only and needs SOC 2; Risk rates it RED; Market Scout scores it 17/35, its lowest.
- **Data access (V, blocker):** Jane says "Jane doesn't currently have an open API or provide API keys" (https://jane.app/guide/integrations-hub-faq). API access is only via a vetted partner program; partners handling PHI must show **SOC 2 Type II**, a BAA, and more (https://jane.app/legal/partner-security-at-jane). NEXORA can't meet that in 30 days (ESTIMATE). The only fast route is the clinic exporting reports by hand (Jane lists "Easily Exportable" reports), which is manual and fragile.
- **MVP effort (ESTIMATE):** 12 to 18 person-days on the CSV route (import, segmentation, consent filter, SMS/email sequences, booking link, dashboard). The API route is UNKNOWN (approval timeline).
- **Run cost (ESTIMATE):** 500 outbound SMS × (0.0083+0.0087) = $8.50 + 150 inbound × 0.0083 = $1.25 + number $1.15 + Gemini ~$0.50 + infra $5 ≈ **USD 16 ≈ CAD 22/client/mo**.
- **Price and margin (ESTIMATE):** CAD 199/mo → ~89% GM before support. But Jane Thrive ($99, which already includes return-visit reminders) and Weave Coordinate ($149 with recall/reactivation) cap willingness to pay.
- **Defensibility:** low (the feature is native in Jane Thrive and Weave). **Leads to bigger work:** medium (clinic CRM, intake, websites). **Scale beyond AB:** high (Jane is national), but health privacy rules differ by province.

### C2. AI quote and intake assistant for trades/construction
- **What:** web form, SMS and missed-call text-back capture → AI asks scoping questions (photos, dimensions, postal code) → structured job brief + draft rough-range quote for the owner to **approve** → pushed to Jobber/Housecall/Sheets/CRM → automated follow-up.
- **MVP effort (ESTIMATE):** 12 to 15 person-days (intake flows 3, Gemini scoping + brief 3, quote template per trade 2, CRM/Jobber/Sheets push 3, owner approval UI via SMS/email 2, testing 2). Jobber API availability for NEXORA is UNKNOWN (Jobber offers an "API Tour with API Access" on its pricing page; terms not read).
- **Run cost (ESTIMATE):** 150 leads/mo × ~20k input + 3k output tokens on 3.8 Flash = $2.25 + $1.69 = $3.94 (2026), **$7.88 from Jan 2027**; SMS 300 out + 300 in ≈ $7.60; number $1.15; infra $5 ≈ **USD 18 now / 22 in 2027 ≈ CAD 25 to 30/client/mo**.
- **Price and margin (ESTIMATE):** CAD 249/mo (+ optional setup fee, PENDING CEO). Sits above Jobber's $29 Receptionist add-on and below Podium Core $399. → **~88% GM** before support.
- **Defensibility:** medium. Jobber Grow already auto-drafts quotes, so NEXORA's edge must be trade-specific scoping, owner-approved pricing logic, and system-agnostic integration (works for firms not on Jobber). **Leads to bigger work:** highest. It touches CRM, estimating, ERP/accounting and supplier data, which matches the Core Fabrication, Transformer and EGM leads already in the pipeline. **Scale beyond AB:** high (English Canada; Quebec needs French + Law 25).

### C3. Missed-call text-back / AI receptionist (small service businesses)
- **MVP effort (ESTIMATE):** text-back only 3 to 4 person-days; + AI voice receptionist (Gemini Live via Twilio Media Streams) 5 to 7 more → **6 to 10 total**.
- **Run cost (ESTIMATE):** 300 voice min × (0.0085 receive + 0.0044 stream + 0.023 Gemini Live) = $10.77 + number $1.15 + SMS 200 out/200 in ≈ $5.06 + infra $5 ≈ **USD 22 ≈ CAD 30/client/mo**. Text-back only ≈ USD 11.
- **Price and margin (ESTIMATE):** CAD 149/mo → ~80% GM before support. Anchors: Rosie $49 to $149, Goodcall $79 to $129, Jobber $29 add-on, Weave includes it.
- **Defensibility:** very low (commodity, many funded US players, features bundled free). **Leads to bigger work:** low to medium. **Scale:** high.

### C4. Automation add-ons sold through accounting firms
- **MVP effort (ESTIMATE):** 15 to 25 person-days for 3 to 4 reusable packs (receipt/bill capture → QBO/Xero, AR reminders, client document chase), plus partner kit. QBO/Xero API terms: UNKNOWN (not checked).
- **Run cost (ESTIMATE):** Gemini document extraction ~$1 to $3 + email/SMS ~$2 + infra $5 ≈ **USD 8 to 10 ≈ CAD 11 to 14/client/mo**.
- **Price and margin (ESTIMATE):** CAD 99 to 199/client/mo, minus an ASSUMED 20% partner share → ~75 to 85% GM. No competitor price checked: **UNKNOWN**.
- **Defensibility:** medium to high once partners are embedded. **Leads to bigger work:** high, but slow. **Speed to sell:** slow, because the firm must sign as a partner first (ESTIMATE: more than 30 days to first paying end client). **Scale:** high.

### C5. Arabic newcomer paperwork assistant (B2C)
- **MVP effort (ESTIMATE):** 15 to 20 person-days (bilingual chat, document checklists, form-explainer, payments, guardrails), plus legal review.
- **Run cost (ESTIMATE):** 30 chats × ~30k tokens on Flash-Lite ≈ $0.40 + infra/payments ≈ **USD 2 to 4/user/mo**. Margin is fine; customer acquisition cost is UNKNOWN and likely the binding cost.
- **Price (ESTIMATE):** CAD 15 to 29/mo (no competitor seen: UNKNOWN). Needs hundreds of subscribers to equal ~10 B2B clients.
- **Defensibility:** medium (language and community niche). **Leads to bigger work:** very low (B2C). **Scale:** national. **Compliance:** highest risk (see §4).

## 4. Compliance flags for Legal and Risk to confirm (not legal advice)
- **CASL:** commercial SMS/email needs express or implied consent, sender ID and an unsubscribe. Reactivation (C1) and follow-ups (C2) are CEMs. Implied consent from existing business relationships expires (generally 2 years from purchase). Applies to C1 to C4.
- **CRTC / telecom:** Unsolicited Telecommunications Rules and the National DNCL for outbound calls/texts; AI voice that places outbound calls carries ADAD rules. Keep C3 inbound-only. Twilio Canadian long-code/toll-free registration requirements: UNKNOWN.
- **Health data (C1):** Alberta **HIA** covers custodians such as physicians and pharmacists. Many allied-health clinics (physio, massage, chiro) may fall under **PIPA (Alberta)** or **PIPEDA** instead. Other provinces have their own (e.g. Ontario PHIPA). Data residency, an agent agreement, and Gemini paid tier only (no free tier). Jane API terms bar unofficial scraping (V).
- **AI disclosure and call recording:** consent to record and transcribe (C3).
- **Quebec Law 25** for any expansion into Quebec.
- **CICC / IRPA s.91 (C5):** giving immigration advice or representation for a fee is restricted to licensed RCICs, lawyers and Quebec notaries. A paid assistant that guides form choices or answers could cross into advice. It would need either a licensed partner or a strictly informational scope. **I'd treat this as a likely blocker without an RCIC partner.**
- **n8n Cloud = EU hosting (V):** use self-hosted n8n in a Canadian region for any personal data.

## 3b. New candidates added in v2

### C6. Alberta subcontractor compliance tracker for GCs (new in v2; Market Scout #1 at 28/35)
- **What:** subs upload WCB-Alberta clearance letters, insurance certificates (COI), COR/safety tickets. Gemini reads the expiry dates and limits, n8n sends reminders, and a dashboard shows which subs are "safe to pay". Proposed pricing (Market Scout, I): CAD 500 setup + CAD 149/mo (≤40 subs), 299 (unlimited), 499 (managed).
- **WCB-Alberta process (V, checked 2026-10-26):** clearances are **free and online**. A principal can request a labour clearance on one or more contractors by WCB account number or legal/trade name, without a myWCB login. With a myWCB login, it can keep **"My Lists" and set up "Automatic Clearance Notifications"**; a myWCB mobile app also exists. A clearance "clears a third party from liability for that account's premiums", and WCB advises getting one "before you hire... and before releasing payment". Sources: https://www.wcb.ab.ca/insurance-and-premiums/clearance-letters/ ; https://decc.wcb.ab.ca/support/help/request_auth.htm ; https://decc.wcb.ab.ca/Support/Help/Request_UnAuth.htm
- **WCB API:** none found on WCB pages: **UNKNOWN**; ask WCB. **Implication (ESTIMATE):** WCB already gives GCs free status alerts, so NEXORA can't sell "live WCB checks". The value is the *combined* view (WCB + COI limits/expiry + safety tickets + GST/T5018) and the pay-gate workflow. The MVP should ingest the GC's own WCB letters and notification emails. **No scraping of the WCB portal** (terms UNKNOWN).
- **Competitor prices (2026-10-26):** Billy's own calculator: "~$600/mo, typical for 100–300 subs", exact quote after demo (V, https://billyforinsurance.com/coi-tracking-software-for-general-contractors/). ISNetworld: annual subscription + setup fee by employee count, paid by contractors; no list price on page (V, https://www.isnetworld.com/en/faqs); "~$875/yr" start (R, prequalpilot.com). Avetta: supplier pricing "customized" (V, https://www.avetta.com/plans); Directory from $249/yr (R, qhsetech.com). ComplyWorks: no published price (R; ~$489/yr per prequalpilot.com, unverified). **Procore compliance: UNKNOWN** (not checked; Billy sells a Procore integration, V https://billyforinsurance.com/procore/). Market Scout's RosterSure $49–249, SiteKey CAD 80–250, Vendorpass $99/managed $499 (R) are Ontario/WSIB-first.
- **MVP effort (ESTIMATE):** 15 to 20 person-days (sub upload link without login 3, Gemini extraction + human-confirm 4, expiry/reminder engine 3, dashboard + safe-to-pay flag 4, CSV/T5018 export 2, testing 2).
- **Run cost (ESTIMATE):** about 20 docs/mo × ~5k tokens on 3.8 Flash ≈ under $0.10; email + ~100 SMS ≈ $1.70; storage negligible; infra share $5 ≈ **USD 8 to 10 ≈ CAD 11 to 14/client/mo**.
- **Margin (ESTIMATE, with ASSUMED support at CAD 60/hr):** CAD 149 tier with 0.75 hr support → cost ≈ CAD 59 → **~60%**. CAD 299 tier with the same support → **~80%**. CAD 499 managed with ASSUMED 4 hr/mo verification → cost ≈ CAD 254 → **~49%**. Software-only GM (before support) is ~90%.
- **Defensibility:** medium. The Alberta WCB focus and local service matter, but WCB itself is free and US/Ontario tools could add Alberta. **Leads to bigger work:** good (subcontractor management → Procore/ERP/accounting integrations; fits SUMMITOS). **Scale beyond AB:** low to medium (each province's board differs; the COI and tickets part is national).
- **Compliance (my flag; Risk View did not cover C6):** business documents, low personal data. Reminders to subs are likely transactional (Market Scout I; counsel to confirm). The COI holds broker contacts only.

### C7. "Never Miss a Job" (new in v2; Sales' top pick per Liaison brief)
- **What (from the task brief; now cross-checked against SALES_VIEW.md in §4c):** missed-call text-back + after-hours AI intake + job summaries for Calgary trades, done for you, CAD 149 to 249/mo.
- **Relation to C2/C3: it merges.** C7 is C3 (text-back/receptionist) plus the intake + job-summary half of C2, *without* C2's draft-quote step, sold done-for-you. Same build (≈80% shared code, ESTIMATE). Recommend treating C2 and C3 as **feature tiers of C7**, not separate products: Tier 1 text-back, Tier 2 + AI intake/summary, Tier 3 + owner-approved rough-range quote (C2).
- **MVP (ESTIMATE):** 8 to 12 person-days. **Run cost:** ≈ CAD 30/client (as C3). **Margin (ESTIMATE):** software-only 80 to 88%; with ASSUMED 1.5 hr/mo done-for-you support (CAD 90) → **~19% at CAD 149, ~52% at CAD 249**. The done-for-you model only works at the upper price or with under 1 hr/mo support.
- **Anchors:** Canadian done-for-you AI receptionists Wirepilot CAD 169/249/499, Dialbox managed from CAD 999, MapleReceptionist from CAD 25 (Market Scout, V on vendor pages 2026-10-16). Rosie, Goodcall and Jobber as in §2.
- **Defensibility:** low (commodity); the edge is local done-for-you service. **Pull-through:** good (intake exposes CRM gaps). **Compliance:** AMBER (Risk View: CASL, recording notice, carrier registration).

### X1. (My addition) Contractor Back-Office bundle = C7 + C6 for the same GC/trades buyer
Front office (never miss a lead) + back office (safe to pay) for a Calgary GC. Proposed CAD 349/mo + CAD 500 setup (ESTIMATE, PENDING CEO). It's built in sequence, not in 30 days: 22+ person-days. Source basis: both halves above.

### X2. (Market Scout #2, adopted as the better form of C4) Bookkeeper Autopilot, managed service
Done-for-you n8n workflows for Alberta bookkeeping/CPA firms (document chasing, receipt intake, month-end). Market Scout pricing (I): CAD 1,500 to 3,000 setup + CAD 299 to 599/mo. I model the mid-points CAD 2,250 + 449. Risk View: AMBER (SIN/tax data, CPA confidentiality, security reviews). Service-heavy: ASSUMED 3 hr/mo support.

Other ideas reviewed, not added: Market Scout #8 (intake for CICC-licensed consultants, 23/35) fits NEXORA's HNH experience. I'd keep it as the lawful version of C5, but it's a slow, regulated buyer. Market Scout's #6 bilingual Arabic front desk is a language variant of C7 and can be a C7 option later. B2C_VIEW.md also exists in the folder but was not part of this brief and was not reviewed.

## 4b. Cross-check with other reports (v2)
| Topic | Market Scout (PRODUCT_RESEARCH.md, dated 2026-10-16) | Risk (RISK_VIEW.md) | Strategy (this file) | Agree / conflict |
|---|---|---|---|---|
| C1 Jane | Blocked, 17/35 | RED | Out | **Agree** |
| C5 Arabic B2C | IRPA/CICC risk, 19/35 | RED | Last | **Agree** |
| C2 trades quoting | Crowded (Buildr CAD 19.99, quoteai 29, LeadPilot 39), 22/35 | GREEN | v1 #1 | **Conflict:** I missed the Canadian low-price quoting apps in v1. Defensibility and revenue scores are lowered in v2 |
| C3 receptionist | Commodity from CAD 25 | AMBER | Runner-up v1 | Agree on commodity; merged into C7 |
| C4 accounting | 26/35, done-for-you service form | AMBER (SIN/tax data, security reviews) | Slow channel | Partial: Market Scout rates speed 4/5, I rate it slower. Adopted its service form as X2 |
| C6 sub compliance | #1, 28/35; WCB lookup "UNVERIFIED" | **Not assessed** | v2 #1 | Agree on pick. **Correction to Market Scout:** WCB offers free automatic clearance notifications (V), so "live WCB checks" can't be the selling point |
| Gemini data location | n/a | Paid API may cache "in any country"; Canada processing needs Vertex AI (unverified) | v1 said "Canada regions" | **Conflict, corrected:** Canadian hosting of n8n/storage does not make Gemini processing Canadian. Disclose it in DPAs |
| Twilio Canada SMS | n/a | Carrier filtering; toll-free needs verification; possible 10DLC-like registration | Unit prices only | Adds go-live lead time; include in plan |
| Sales path | SALES_VIEW.md received 01:40 MDT | n/a | n/a | See §4c |

## 4c. Cross-check with SALES_VIEW.md (added 2026-10-26 01:45 MDT)
- **Agree:** C7 = C3 + C2 merged and sold done for you (Sales Part 1 #1 and A2: "AI quote assistant sold only inside Never Miss a Job"). Same CA$149–249/mo price band. Standalone quoting is crowded (Sales adds Estiquik CA$24.99 and QuoteIQ $29.99, V on their pricing pages). Clinic reactivation parked (C1 OUT). C5 slow and risky. Accounting firms as the 6–12 week track 2 (X2).
- **Conflict on #1:** Sales ranks by speed and picks C7 first, with the compliance tracker "for CEO decision" (A10 #1). This file picks C6 on ROI, defensibility and risk. Sales itself calls C7 the "least defensible" and lists a price-ceiling risk of about CA$100 (A9, H). At CA$100, C7's contribution is negative under my ASSUMED 1.5 hr/mo support (cost ≈ CAD 120). Both reports list a "both in sequence through CCA" option, which matches X1.
- **New inputs that change numbers (sensitivity, ESTIMATE):**
  - Sales proposes a C7 setup fee of CA$0–499 (H) and a launch budget of CA$750–2,700 including legal of CA$500–1,500 (H), versus my 0 setup and CAD 4,500 legal + marketing.
  - With a CA$250 setup fee and CAD 1,000 legal + 1,200 marketing, C7's base ROI moves from −74% to **+8% (payback month 12)**; conservative −81%, optimistic +103%.
  - Applying the same lower budget to C6 moves its base from +5% to **+23% (payback month 11)**; conservative −48%, optimistic +94%.
  - Sales' accounting cycle of 6–12 weeks pushes X2's start to month 3: base +75% becomes **+51%**.
  - Model: /workspace/roi_s.py.
- **Consistent with my ramp:** Sales' 30-day KPIs are 10 meetings, 3 pilots and 2–3 paid (H, goal not forecast), in line with the base ramp of 3 new/month for C7. Sales' sales cycle is 1–3 weeks (H).
- **Ranking unchanged:** compared like for like, C6 (+23%) still beats C7 (+8%) on base ROI and has the smaller downside. Top 5 unchanged.
- **Pilot terms (Sales A3/A10, PENDING CEO):** a 30-day paid pilot with a reduced first month, "pilot" or "introductory" and never "free", install within 48 hours, cancel anytime after the pilot. Adopt the same terms for the C6 pilot in §7.

## 5. Weighted scorecard, rescored v2 (same weights; scores 1 to 5; ESTIMATES)
Weights: Speed to MVP 15 · Speed to first revenue 20 · Unit margin 10 · Defensibility 10 · Pull-through 20 · Compliance (5 = lowest risk) 15 · Scalability 10.

| Candidate | MVP | Rev | Margin | Defend | Pull | Comp | Scale | **Total** | Change vs v1 |
|---|---|---|---|---|---|---|---|---|---|
| X1 Back-Office bundle (C7+C6) | 3 | 4 | 4 | 4 | 5 | 4 | 3 | **3.95** | new |
| C2 Trades quote+intake | 4 | 3 | 5 | 2 | 5 | 4 | 4 | **3.90** | was 4.20 (crowded CA market, per Market Scout) |
| **C6 AB sub compliance** | 4 | 4 | 4 | 3 | 4 | 5 | 2 | **3.85** | new |
| C7 Never Miss a Job (absorbs C3 + C2 intake) | 5 | 5 | 3 | 2 | 4 | 3 | 3 | **3.80** | new |
| C3 Missed-call/AI receptionist | 5 | 4 | 4 | 1 | 3 | 3 | 5 | 3.60 | unchanged; merged into C7 |
| X2 Bookkeeper Autopilot (managed) | 4 | 3 | 4 | 3 | 4 | 3 | 4 | 3.55 | new (C4's better form) |
| C4 Accountant-channel add-ons | 3 | 2 | 4 | 3 | 4 | 4 | 4 | 3.35 | unchanged |
| C1 Clinic reactivation | 2 | 2 | 4 | 2 | 3 | 1 | 4 | 2.45 | **OUT** |
| C5 Arabic newcomer B2C | 3 | 2 | 3 | 3 | 1 | 1 | 3 | 2.10 | unchanged |

The top four sit within 0.15 of each other, which is inside the error of these scores. ROI (§5b) and the 30-day feasibility test are the tie-breakers.

## 5b. ROI by candidate (all ESTIMATE; nothing here is market data)
**Assumptions (all ESTIMATE / ASSUMPTION, PENDING CEO):**
- Build rate **CAD 100/hr** (ASSUMPTION; NEXORA rate card UNKNOWN), 8 hr/day; build hours counted as investment, valued at that rate (opportunity cost).
- Support/onboarding internal cost **CAD 60/hr** (ASSUMPTION).
- Tools CAD 500 (accounts, test numbers, domain). Legal review allowance CAD 2,500 (C2, C3, C7), 3,000 (C6), 3,500 (C4, X1, X2), 10,000 (C5). Marketing launch CAD 2,000 (2,500 X1; 5,000 C5).
- Shared platform CAD 207/mo (USD 150 × **FX 1.38 ASSUMPTION**), counted once per product.
- Clients start in month 2 (month 3 for C4/C5). New clients/month: conservative / base / optimistic as listed. Monthly churn as listed. Onboarding hours per new client as listed.
- Price per client: C6 uses a CAD 199 blended mix of the 149/299 tiers plus the CAD 500 setup; C7 uses CAD 199 (mid of 149 to 249). ROI = (12-month cumulative gross profit − upfront) ÷ upfront.
- Break-even clients = platform cost ÷ monthly contribution per client (covers run costs only; payback covers the upfront investment).

| Candidate | Upfront CAD | Price CAD/mo | Cost per client/mo (run + support) | Contribution/client | Break-even clients (run) | Ramp new/mo (c/b/o) | Churn/mo (c/b/o) |
|---|---|---|---|---|---|---|---|
| C2 | 15,800 | 249 | 90 | 159 | 1.3 | 1 / 2 / 4 | 4 / 3 / 2% |
| C3 | 11,400 | 149 | 75 | 74 | 2.8 | 1 / 3 / 5 | 6 / 5 / 4% |
| C4 | 22,000 | 159 net of 20% partner share | 74 | 85 | 2.4 | 0.5 / 1 / 2 | 3 / 2 / 1.5% |
| C5 | 29,500 | 22 | 8 | 14 | 14.8 users | 10 / 30 / 60 | 10 / 8 / 6% |
| **C6** | 19,500 | 199 + 500 setup | 59 | 140 | 1.5 | 1 / 2 / 3 | 3 / 2 / 1.5% |
| C7 | 13,000 | 199 | 120 | 79 | 2.6 | 1 / 3 / 5 | 5 / 4 / 3% |
| X1 | 24,100 | 349 + 500 setup | 164 | 185 | 1.1 | 1 / 2 / 3 | 3 / 2 / 1.5% |
| X2 | 18,000 | 449 + 2,250 setup | 194 | 255 | 0.8 | 0.5 / 1 / 1.5 | 3 / 2 / 1.5% |

**12-month results (clients at month 12 / revenue CAD / ROI / payback month):**
| Candidate | Conservative | Base | Optimistic |
|---|---|---|---|
| C2 | 9 / 14,428 / −74% / >12 | 19 / 29,793 / −29% / >12 | 40 / 61,545 / +66% / 10 |
| C3 | 8 / 8,109 / −98% / >12 | 26 / 25,096 / −47% / >12 | 45 / 43,168 / +8% / 12 |
| C4 | 4 / 4,002 / −107% / >12 | 9 / 8,241 / −102% / >12 | 19 / 16,726 / −92% / >12 |
| C5 | 65 / 9,104 / −89% / >12 | 212 / 28,838 / −46% / >12 | 461 / 60,976 / +23% / 11 |
| **C6** | 9 / 17,405 / −55% / >12 | 20 / 35,593 / **+5% / 12** | 31 / 53,997 / +67% / 10 |
| C7 | 9 / 11,173 / −105% / >12 | 27 / 34,592 / −74% / >12 | 47 / 59,526 / −39% / >12 |
| X1 | 9 / 26,379 / −58% / >12 | 20 / 54,131 / −3% / >12 | 31 / 82,261 / +54% / 10 |
| X2 | 5 / 25,806 / −21% / >12 | 10 / 52,495 / **+75% / 9** | 15 / 79,427 / +171% / 7 |

**Reading (ESTIMATE):**
- No candidate pays back in 12 months under conservative assumptions.
- The biggest driver is **support hours per client**, not AI or telephony cost. C7's done-for-you model loses money at CAD 199 with 1.5 hr/mo; at CAD 249 and 1 hr/mo it moves to roughly break-even (not modelled separately).
- X2 has the best ROI because of the high setup fee and price, but it is a service business with AMBER data risk and a security-review sales cycle.
- C6 is the best *product* ROI: low support, a setup fee, and low churn (ASSUMED; compliance tools are sticky, per I).
- Model: /workspace/roi.py (re-runnable with different assumptions).

## 6. Recommendation (revised v2)
**#1: C6, Alberta subcontractor compliance tracker ("Safe to Pay")**. This now agrees with Market Scout. It changes my v1 pick (C2). Why:
1. It has the best product ROI (base +5%, payback month 12; optimistic +67%) and the lowest compliance risk.
2. Competitors are US/Ontario-first or enterprise prequal (Billy ~US$600/mo for 100–300 subs; ISN/Avetta paid by subs). The CAD 149 to 299 small-GC tier is open (I).
3. It sells to the same construction buyers NEXORA already researched, and it leads into Procore, ERP and accounting integration work.
**Must-fix positioning:** WCB-Alberta clearance alerts are free (V). Sell the single "safe to pay" view (WCB + COI limits/expiry + tickets) and the time saved, never "WCB lookup".

**Runner-up: C7 "Never Miss a Job"** (absorbing C2 and C3 as tiers). It's the fastest to first revenue and Sales' pick, but it's a commodity and margin-thin as a done-for-you service. **Sequence:** sell C7 as the month-2/3 add-on to C6 customers. Together they form X1, the highest-scoring bundle (3.95) once both halves exist.

## 7. 30-day build and launch plan for C6 (Day 1 = CEO go-ahead)
| Days | Build | Launch (Sales Strategist executes; nothing sent until approved) |
|---|---|---|
| 1 to 5 | GCP project in a Canadian region, self-hosted n8n; upload link without login; doc store; ask WCB-Alberta (by phone or email, CEO-approved) whether a data feed or API exists | CEO approves price, pilot terms; list of 15 to 20 GCs from existing construction research |
| 6 to 12 | Gemini extraction of WCB letter, COI and ticket fields, with human confirm; expiry rules; reminder emails (SMS after Twilio verification, Risk S7/S8) | Approved outreach; 8 demos using a sample GC dataset (no real data) |
| 13 to 20 | Safe-to-pay dashboard, CSV/T5018 export, audit log, DPA + subprocessor list (Risk §7) | 3 to 5 pilots at CAD 500 setup (or a fixed pilot fee); log onboarding hours |
| 21 to 30 | Hardening, managed-verification SOP (for the 499 tier), onboarding playbook | Convert to monthly; prep C7 add-on offer for the same accounts |

**GO at Day 30 if all are true:** (a) **3 or more GCs have paid** the setup fee or a pilot fee; (b) onboarding takes 5 hours or less per GC after the second; (c) Gemini extraction is accurate on 95% or more of key fields after human confirm, measured; (d) support averages 1 hr or less per GC/month; (e) 1 or more GC asks for an integration or C7.
**STOP / pivot if:** fewer than 2 paying GCs from 8 or more demos; GCs say WCB's free alerts plus spreadsheets are enough; subs refuse to upload (under 50% upload rate); or counsel flags reminder messaging under CASL. Fallback: C7.

## 8. CEO decisions (all PENDING CEO APPROVAL)
1. Approve C6 as the ONE product (v1 said C2), with C7 as the planned add-on and C2/C3 folded into C7 tiers.
2. Approve C6 pricing (Market Scout's 500 setup / 149 / 299 / 499) or adjust; decide on a paid pilot fee.
3. Approve CEO-led contact with WCB-Alberta to ask about a data feed (no portal scraping).
4. Approve a pilot budget (ESTIMATE: tools CAD 500, legal CAD 3,000, marketing CAD 2,000, platform ≈ CAD 207/mo). **No spending has been made.**
5. Provide the real rate card, support cost/hr and FX; the ROI is very sensitive to support hours.
6. Gemini processing location: accept the paid Gemini API (may process outside Canada, disclosed) or require Vertex AI in a Canadian region (availability unverified, Risk S3).
7. Resolve the C6-first (Strategy) vs C7-first (Sales) conflict; both support the X1 sequence through CCA (§4c).
8. Park C1 (out), C5 (RED), C4 (replaced by X2 as a separate service decision).

## 9. Best 5 overall (v2 ranking, combining score, ROI and 30-day feasibility)
1. **C6 Alberta sub compliance tracker.** Score 3.85, base ROI +5%, lowest risk, buildable in 30 days.
2. **C7 Never Miss a Job (with C2/C3 as tiers).** Score 3.80, fastest revenue, needs CAD 249 or under 1 hr support to work.
3. **X1 Contractor Back-Office bundle (C6 + C7).** Score 3.95 but takes about 2 build cycles; the month-3 target, not the day-30 one.
4. **X2 Bookkeeper Autopilot (managed).** Best ROI (base +75%) but service-heavy and AMBER on data. A strong *service* line, not a product.
5. **C2 Trades quote+intake, standalone.** Score 3.90, but crowded with CAD 20 to 40 apps; better as C7's top tier.
Not in the top 5: C3 (merged into C7), C4 (replaced by X2), C5 (RED), C1 (out).

## 10. UNKNOWNs to close (v2)
WCB-Alberta API/data feed and portal terms; Procore compliance pricing; ISNetworld/Avetta/ComplyWorks official prices; NEXORA rate card, support cost, FX; Vertex AI Canada-region Gemini availability; Twilio Canada registration lead time; whether sub reminders are CASL-exempt; WhatsApp Canada rate; Housecall Pro price.
