# GROK-REVENUE-20261014-24 (Sprint 03) — Strategy Analyst: Offers, Integrations, Re-scores
Prepared 2026-10-14 (America/Edmonton). Inputs: GROK-REVENUE-20261014-24/market_scout.md (observed 2026-10-14) and GROK-REVENUE-20261014-20/strategy_scoring.md (Revision 2). The rubric and rules are the same as Sprint 02 Rev 2: newswire = T3; 180-day freshness (cutoff 2026-04-17); stale signals get 0 for both trigger and evidence quality. **No new web checks were made.**

> **Scores are for internal ranking only. They are NOT purchase probabilities. No account is approved or qualified for outreach.** No personal names, pricing, budgets or invented figures. "0 U" = UNKNOWN. Prospect self-claims ("run more builds", "15+ years", "10 Years Expertise", etc.) must not be repeated externally (R&C §4).
Capability classes: V = VERIFIED FIT SIGNAL · H = HYPOTHESIS · NA = NOT_ASSESSED · X = EVIDENCED_NOT_A_FIT. **X is used only where a fact rules the capability out.** A missing signal = NA.

## 1. Score changes
| Company | Trig | Ops | Cap | Purch | Chan | EvQ | **New** | Old | Reason |
|---|---|---|---|---|---|---|---|---|---|
| Transformer Exteriors | 16 | 11 | 16 | 0 U | 10 | 9 | **62** | 58 | A second open T2 posting (Roofer, 2026-07-14, closes 2026-10-24; https://alis.alberta.ca/occinfo/alberta-job-postings/roofer/49902084/). Both postings were re-fetched live 2026-10-14 and their closing dates were extended. It is a hiring signal only |
| Colz Electric | 7 | 10 | 15 | 2 | 10 | 6 | **50** | 64 | Correction: the SE premises was licensed 2025-03-27 (registry T1), so the "expansion" is STALE. The fresh signal is mainly a website relaunch (weak trigger). Two sites is a standing fact, not a change (Ops 14→10). The facility investment predates the window (Purch 5→2, weak digital spend only) |
| Personal Movers | 10 | 6 | 14 | 0 U | 10 | 4 | **44** | 54 | The second site is unverified: the release gives no address, and there is no registry match. FRESH only until 2026-10-20; it **drops to 34 after that** (Trig 0, EvQ 0) |
| Renova Homes | 0 | 4 | 13 | 0 U | 10 | 6 | **33** | 58 | Correction: the 2026-07-24 licence is a re-issue at the same premises (3603 8 St SE). No growth signal. Ops is a hypothesis only |
| Core Fabrication | 22 | 15 | 15 | 6 | 10 | 8 | 76 | 76 | Unchanged. The 2026-05-20 post is the only fresh signal, and it **goes STALE on 2026-11-16** |
| AspirePeak | 18 | 14 | 16 | 0 U | 10 | 7 | 65 | 65 | Unchanged. The 2026-09-20 blog post is content, not a trigger |
| EGM Drywall | 21 | 14 | 14 | 3 | 10 | 9 | 71 | 71 | Unchanged. **FLAG** (see §3) |

## 2. Top 5 — verified information only
Rule: only accounts re-verified in Sprint 03 with a fresh T1/T2 signal, or a T3 signal backed by T1 facts. Ultimarii (56), Action Furnace (52) and Crescent (52) outscore Colz, but their single-source T3 triggers were **not re-verified**, so they are left out of this ranking. Clinics are still on hold.
| Rank | Company | Score | Verified basis | Flag |
|---|---|---|---|---|
| 1 | Core Fabrication | 76 | T1 facility move 2026-05-20; WooCommerce (T1) | Stale 2026-11-16 |
| 2 | EGM Drywall | 71 | T1 Calgary office 2026-08-11 | **EDMONTON FLAG** |
| 3 | AspirePeak Properties | 65 | Condo division 2026-06-16 (T3 + T1); Rent Manager (T1) | — |
| 4 | Transformer Exteriors | 62 | 2 open T2 postings | Hiring ≠ intent |
| 5 | Colz Electric | 50 | 2 sites (T1); relaunch 2026-08-04 (T3) | Weak trigger |
Not in the top 5: Personal Movers 44 (second site unverified) and Renova 33 (no growth signal).

## 3. Per-account detail
Engagement codes: WEB = website · AUTO = automation · SI = systems integration · SaaS.
Capabilities: AI · CRM · ERP · WMS · SUM · WEB · MKT · SaaS.

### Core Fabrication Inc. — engagement: **SI** (secondary SaaS)
- **Opening offer:** a fixed-scope *quote-to-shop integration discovery*. Map how WooCommerce "Build Your Deck" configurator orders move into shop work orders and scheduling at the larger facility, and deliver an integration blueprint. *Why:* the only fresh T1 facts are the capacity move and the WooCommerce configurator, and an order-to-production link is the most direct connection between them.
- **Integrations:** WooCommerce (T1) → work orders and scheduling (shop system NOT_ASSESSED) and accounting (NOT_ASSESSED). Options to evaluate in discovery: WooCommerce REST/webhooks to whatever MRP or accounting tool exists.
- **Buying vs growth:** growth = the facility move (T1). Buying = none; facility spend is only an indirect sign of capacity.
- **Capabilities:** ERP V · SaaS H (configurator extensions) · AI H · CRM NA · WMS NA (inventory unknown) · SUM X (fabricator, not roofing/exterior) · WEB NA · MKT NA.
- **Gaps for discovery:** shop/MRP and accounting systems; headcount; whether concurrent builds cause any scheduling pain; who decides on purchases; whether configurator orders are re-keyed by hand.

### AspirePeak Properties Ltd. — engagement: **AUTO + SI**
- **Opening offer:** *condo-division workflow automation on Rent Manager*. Board communications plus work-order intake and routing for condo clients, built as an extension of the existing Rent Manager setup (no replacement). *Why:* a new division (2026-06-16) on a disclosed platform. Extending Rent Manager carries lower risk than displacing it.
- **Integrations:** Rent Manager owner and tenant portals (T1: aspirepeak.owa/.twa.rentmanager.com). Integration surface (Rent Manager's API or reporting exports) is NOT_ASSESSED. Accounting is NOT_ASSESSED.
- **Buying vs growth:** growth = the condo division, plus Edmonton market coverage (service page). Buying = none stated.
- **Capabilities:** AI H · CRM V (owner/board communications for the new division) · ERP V (platform extension) · WMS X (no inventory operations) · SUM X (not a contractor) · WEB NA · MKT H · SaaS NA.
- **Gaps:** whether condo work runs inside Rent Manager or outside it; what Rent Manager's native condo features already cover; size; whether there is a separate Edmonton office; who decides.

### Colz Electric — engagement: **AUTO + SI**
- **Opening offer:** a *service-dispatch workflow assessment* covering 24/7 call intake → dispatch → invoicing across its NE and SE sites. Optionally AI-assisted call triage. *Why:* the two sites (T1) and the 24/7 model (self-stated) are standing operational facts. The new website is a fresh front end that could feed intake. Don't sell a website.
- **Integrations:** NOT_ASSESSED (no field-service or accounting system disclosed). The new website's intake form is a likely entry point (HYPOTHESIS).
- **Buying vs growth:** buying = the website relaunch 2026-08-04 (recent digital spend; weak). Growth = none fresh, because the SE site has been licensed since 2025-03-27.
- **Capabilities:** CRM V · ERP V (2-site dispatch) · AI H · WEB X (just relaunched) · SUM X (electrical) · WMS NA · MKT H · SaaS NA.
- **Gaps:** dispatch/FSM tool; headcount; real call volume; whether the 24/7 claim reflects how it actually staffs; whether "upgraded service procedures" were already handled by a vendor.

### Transformer Exteriors Inc. — engagement: **AUTO** (SUMMITOS discovery only)
- **Opening offer:** an *estimating and crew-scheduling workflow review* for siding and roofing crews. Document how estimates, materials and crew schedules are handled today, and recommend either lightweight automation or connected tools. *Why:* both live T2 postings list "estimate costs and materials" and "co-ordinate and schedule activities". It is hiring 4 positions across 2 trades (2 + 2 vacancies).
- **Integrations:** NOT_ASSESSED (no systems disclosed).
- **Buying vs growth:** growth = hiring (2 postings, extended). Buying = none.
- **Capabilities:** ERP V (estimating/scheduling tasks stated) · AI H · CRM H · SUM H (see below) · MKT H · WEB NA · WMS NA · SaaS NA.
- **Gaps:** current estimating/scheduling tools; headcount; whether hiring reflects growth or turnover (the closing dates were extended); no City licence match; who decides.
- **SUMMITOS fit assessment:** **Plausible fit, not a deal candidate.** In favour: it is a roofing and siding contractor, the SUMMITOS pilot's target segment, and it has stated estimating and scheduling duties (T2). Against: no evidence of current tools or of pain; size unknown; the hiring signal doesn't show intent to buy. **Constraint: SUMMITOS is a pilot, not signable and not production-ready.** At most, offer a *pilot-feedback / design-partner discovery*, with no commitments, no production claims and no pricing, and run it alongside the vendor-neutral workflow review above, so the account doesn't depend on SUMMITOS being ready. CEO approval is needed before SUMMITOS is mentioned at all.

### Renova Homes and Renovations — engagement: **SI** (hypothesis; deprioritized)
- **Opening offer:** none is justified yet. If it is pursued, a *client-portal and project-workflow review* would be the only evidence-linked angle, because the site has a "Client Login" (vendor unidentified). *Why deprioritized:* the corrected registry data removes the only growth signal.
- **Integrations:** the client portal vendor is NOT_ASSESSED; everything else is NOT_ASSESSED.
- **Buying vs growth:** none fresh. The licence re-issue (2026-07-24) is administrative.
- **Capabilities:** ERP H · CRM H · AI H · SUM X (homebuilder/renovator, not a roofing/exterior specialist) · WMS NA · WEB NA · MKT NA · SaaS NA.
- **Gaps:** the portal platform; any real growth event; size; who decides.

### EGM Drywall Systems Inc. — engagement: **SI** — **FLAG: Edmonton HQ / size / buying authority**
- **Opening offer:** a *two-office job-costing and reporting consolidation assessment* (Edmonton HQ + new Calgary office). *Why:* the T1 announcement (2026-08-11, effective 2026-09-01) says the Edmonton head office continues, so the company now runs projects from two offices.
- **Integrations:** NOT_ASSESSED (none disclosed).
- **Buying vs growth:** growth = the Calgary office (T1). Buying = none stated.
- **Capabilities:** ERP V · AI H · CRM NA · WMS NA · SUM X (interior drywall) · WEB NA · MKT NA · SaaS NA.
- **FLAG:** HQ is Edmonton (18015 107 Ave). Size is UNKNOWN and may exceed the target band. Buying authority likely sits with an Edmonton operations or finance function (HYPOTHESIS). The Calgary office isn't yet licensed under that name. It stays at #2 on evidence, but **it can't be treated as a Calgary-local account until size and decision location are confirmed**.
- **Gaps:** headcount; where decisions are made; job-costing and accounting systems; whether the Calgary office runs its own estimating.

### Personal Movers Inc. — re-score only
44: a FRESH T3 claim with an unverified second site. It becomes STALE on 2026-10-20 (→34). Re-verify with an address or a registry record before then, or drop it.

## 4. Main gaps needing human discovery (cross-account)
1. Current systems everywhere, except WooCommerce (Core) and Rent Manager (AspirePeak).
2. Headcount and purchasing capacity: UNKNOWN for all accounts.
3. Who makes buying decisions (all are presumed, none confirmed). EGM's is likely in Edmonton.
4. Whether any stated change has caused real pain (none is evidenced).
5. Whether Transformer would take part in a SUMMITOS pilot, and whether its hiring means growth or turnover.
6. Personal Movers' second-site address (deadline 2026-10-20), and a replacement trigger for Core before 2026-11-16.

## 5. CEO decisions
1. Approve the five opening offers as *discovery scopes only* (no pricing; a pricing schedule is still unapproved).
2. Approve mentioning SUMMITOS to Transformer Exteriors only as a pilot or design-partner conversation, or keep it vendor-neutral.
3. EGM: accept it as an Edmonton-HQ account or hold it.
4. Drop or re-verify Personal Movers before 2026-10-20. Deprioritize Renova.
5. Decide whether to re-verify Ultimarii, Action Furnace and Crescent so they can compete for the top 5.
6. Nothing here authorizes outreach, CRM entry or spending.
