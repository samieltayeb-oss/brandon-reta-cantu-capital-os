# GROK-REVENUE-20261014-20 (Sprint 02) — Strategy Analyst Scoring
Prepared 2026-10-14 (America/Edmonton). Inputs: GROK-REVENUE-20261014-20/market_scout_ledger.md (observed 2026-10-14) and GROK-REVENUE-20261014-18/strategy_scoring.md (rubric and prior scores). **No new web checks were made.** Every fact comes from the ledger's cited URLs (observed 2026-10-14).

> **REVISION 2 (2026-10-14, 5:05 PM MT):** Risk & Compliance corrections were applied. The *Revision 2* section at the end SUPERSEDES the scores, sections 3–5 and the decisions above wherever they conflict.

> **Scores are for internal ranking only. They are NOT purchase probabilities. No account is approved, qualified, or cleared for outreach.** No personal names, budgets, pricing or figures were invented. "0 U" = UNKNOWN.

Rubric: Trigger 25 · Ops opportunity 20 · Capability match 20 · Purchasing capacity 15 · Channel 10 · Evidence quality/freshness 10 (tier bands as in Sprint 18).
Capability codes: AI · CRM · ERP (ops integration) · WMS · SUM (SUMMITOS) · WEB · MKT · SaaS. Classes: V = VERIFIED FIT SIGNAL (the source states the operating condition; this does not mean a need is stated) · H = HYPOTHESIS · NA = NOT_ASSESSED · X = EVIDENCED_NOT_A_FIT.

## 1. Re-scores (Mission A)

| Company | Trig | Ops | Cap | Purch | Chan | EvQ | **New** | Old | Δ | AI | CRM | ERP | WMS | SUM | WEB | MKT | SaaS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Core Fabrication | 22 | 15 | 15 | 6 | 10 | 8 | **76** | 75 | +1 | H | H | V | H | X | NA | NA | H |
| AspirePeak Properties | 20 | 14 | 16 | 0 U | 10 | 9 | **69** | 68 | +1 | H | V | V | X | X | NA | H | NA |
| Colz Electric | 14 | 14 | 15 | 5 | 10 | 6 | **64** | 74 | −10 | H | V | V | X | X | X | H | NA |
| 4Local Homes (Calgary) | 12 | 8 | 10 | 0 U | 5 | 4 | **39** | 66 | −27 | H | H | H | X | X | NA | NA | NA |

### Core Fabrication Inc.
- **Verified facts:** 2026-05-20 company post (T1): began moving 2026-05-19 from a 13,000 to a 24,000 sq ft facility; closed May 18–25 and reopened May 26; the move lets it "run more builds" at once. https://corefabrication.ca/core-fabricaiton-expands-to-brand-new-24000-square-foot-facility/ · The site runs a WooCommerce store with a "Build Your Deck" configurator (site markup, T1). Address is in Rocky View County (https://corefabrication.ca/contact/). No parent company is disclosed.
- **Hypotheses:** more concurrent builds → production scheduling, plus integrating configurator quotes with shop work orders. Buying decisions are local.
- **Capability fit:** ERP V (the capacity change is stated). A configurator-to-work-order link is plausible custom work (SaaS H). Fabrication is not roofing, so SUM = X.
- **Buying vs growth:** growth signal only (the facility). No buying signal. Purchasing = 6 for the stated facility investment.
- **Unknowns/disqualifiers:** size, ERP/MRP and operational pains are all UNKNOWN. Why +1: the configurator gives a concrete integration surface.

### AspirePeak Properties Ltd.
- **Verified facts:** condo-management division launched 2026-06-16 (ABNewswire T3 plus the company blog T1; URLs in the Sprint 18 ledger). Owner and tenant portals run on Rent Manager (aspirepeak.owa.rentmanager.com / .twa.rentmanager.com, T1). There is an Edmonton PM page: https://www.aspirepeakproperties.com/edmonton-property-management-services (T1). Its /contact page returned 404 on 2026-10-14.
- **Hypotheses:** Rent Manager extensions for the condo division (board portal, work orders, owner communications automation). Buying decisions are local.
- **Capability fit:** CRM V and ERP/integration V (a disclosed platform plus a new division). It should extend Rent Manager, not replace it. A NEXORA PM platform would compete with the incumbent and is not proposed. WMS and SUM = X.
- **Buying vs growth:** the new division on its existing platform is a moderate integration signal, not purchase intent. Purchasing is UNKNOWN.
- **Unknowns/disqualifiers:** size and Edmonton office status are UNKNOWN. Rent Manager's native features may already cover the need. Trigger −1 because the release is T3 (Sprint 18 had treated it as T2).

### Colz Electric
- **Verified facts:** two Calgary sites (12 Covepark Rd NE; 1305 Hastings Cres SE): https://colzelectric.com/contact/ (T1). Newswire.com release of 2026-08-04 (T3, self-issued): new SE facility, relaunched website, "upgraded service procedures", 24/7 dispatch, family-owned, founded 2013. https://www.newswire.com/news/colz-electric-expands-to-se-calgary-launches-new-website-and-raises-22836088 · **"Raises" = "Raises the Bar" (headline wording). It is not a funding round.** The customer names in the release are UNVERIFIED.
- **Hypotheses:** dispatch and job routing across two sites for 24/7 service. Buying decisions are local.
- **Capability fit:** CRM V and ERP V (2 sites, 24/7 dispatch). The website was just relaunched, so WEB = X. Electrical work is not roofing, so SUM = X.
- **Buying vs growth:** the website relaunch is a weak sign of digital spend. The rest are growth signals.
- **Why −10:** the trigger is self-issued T3, not T2 (22→14), and evidence quality drops (8→6). Purchasing (5) rests only on the facility; it never relied on funding.
- **Unknowns:** size, field-service platform (none found) and pains are UNKNOWN.

### 4Local Homes (Calgary) — DOWNGRADED
- **Verified facts:** https://4localhomes.com/ and /about-us/ (T1): a multi-market brand (Canada and US numbers, toll-free line), "locally managed construction and renovation teams", "since 1998". Its 2026-09-28 release (ABNewswire via XPR, T3) claims 56 projects since June. **UNVERIFIED** (self-reported; the parts only add up internally).
- **Hypotheses:** buying is central (not Calgary). Multi-trade scheduling.
- **Capability fit:** ERP moves from V to H because the only operational evidence is self-reported. Sprint 18 had SUM = H; it is now X, because renovation is not exterior or roofing and SUMMITOS is not proposed.
- **Disqualifier:** likely central procurement, which doesn't fit a local-SMB motion. The local channel is uncertain (Chan 5). **Recommendation:** drop it from the local pipeline, or route it to whoever owns multi-market accounts (CEO decision).

## 2. New candidates (Mission B)

| # | Company | Trig | Ops | Cap | Purch | Chan | EvQ | **Total** | AI | CRM | ERP | WMS | SUM | WEB | MKT | SaaS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B5 | EGM Drywall Systems | 21 | 14 | 14 | 3 | 10 | 9 | **71** | H | H | V | X | X | NA | NA | NA |
| B7 | A.T.W. Distributors | 17 | 14 | 15 | 4 | 10 | 7 | **67** | H | H | V | H | X | NA | NA | H |
| B2 | Transformer Exteriors | 14 | 10 | 16 | 0 U | 10 | 8 | **58** | H | H | V | X | H | NA | H | NA |
| B3 | Sidhu Exteriors | 12 | 6 | 13 | 0 U | 10 | 8 | **49** | H | H | H | X | H | NA | H | NA |
| B1 | Silverline Roofing | 8 | 8 | 16 | 0 U | 10 | 3 | **45** | H | H | H | X | H | NA | H | NA |
| B6 | Rimrock Property Mgmt | 5 | 12 | 14 | 0 U | 10 | 4 | **45** | H | H | V | X | X | NA | NA | NA |
| B4 | Vami Roof Repair | 10 | 6 | 12 | 0 U | 10 | 4 | **42** | H | H | H | X | H | X | H | NA |
| FLAG | NorthShield Windows & Doors | — | — | — | — | — | — | not scored | Excluded: HQ outside Alberta, operates in several provinces |

Per company (verified fact → hypothesis → fit → signals → unknowns):
- **B5 EGM Drywall Systems:** *Fact:* T1 post of 2026-08-11 announcing a new Calgary office at 902 & 906 – 55 Av NE, effective 2026-09-01. https://egmdrywall.com/new-calgary-office/ ; Edmonton HQ; founded 2006. *Hypothesis:* two-office job costing and project reporting. *Fit:* ERP V (2 offices stated). SUM = X (drywall is interior). *Signals:* growth (office). Purchasing 3 = office commitment only. *Unknowns/disqualifiers:* size may exceed 75 (unverified). Buying likely sits at the Edmonton HQ.
- **B7 A.T.W. Distributors:** *Fact:* company LinkedIn page post of 2026-02-11 on a Calgary warehouse launch, mentioning a dealer online ordering portal. https://www.linkedin.com/posts/atw-distributors-canada-ltd_atwdistributors-armedwheels-wholesale-activity-7427381443494006785-uzxW ; Edmonton HQ, est. 2014 (https://www.atwdistributors.com). *Hypothesis:* multi-warehouse inventory sync, plus integrating the dealer portal with ERP. *Fit:* ERP V (2nd warehouse). WMS H only, because it may already run inventory software. Portal work = SaaS H. *Signals:* growth (warehouse). The portal shows digital activity, not intent. *Unknowns:* size and systems. Edmonton HQ buying. The post is 8 months old.
- **B2 Transformer Exteriors:** *Fact:* alis.alberta.ca Siding Contractor posting with 2 vacancies, posted 2026-07-10, closes 2026-10-24 (OPEN as of 2026-10-14). The tasks listed include "estimate costs and materials" and "co-ordinate and schedule activities". https://transformerexteriors.ca claims "15+ years". *Hypothesis:* crew coordination and estimating workflow. *Fit:* ERP V (the posting states estimating and scheduling as work done; it does not state a software need). SUM H: exterior specialty, so it is the strongest SUMMITOS discovery candidate. *Signals:* growth (hiring). No buying signal. *Unknowns:* size and tools.
- **B3 Sidhu Exteriors:** *Fact:* alis posting (Eavestrough Installer, 1 vacancy), posted 2026-10-05, closes 2026-10-19. https://www.sidhuexteriors.com *Hypothesis:* quote and job tracking. *Fit:* SUM H (exterior). *Signals:* hiring only. *Disqualifier:* very small, and it publishes a gmail address, so tooling is likely minimal and budget is uncertain.
- **B1 Silverline Roofing:** *Fact:* PRLog (T3, self-issued) Calgary market entry announced 2025-11-05. https://silverlineroofing.ca *Hypothesis:* multi-city crew scheduling and estimating. *Fit:* SUM H (roofing). *Signals:* growth only, and it is about 11 months old. *Disqualifiers:* Edmonton HQ. The release claims are self-made.
- **B6 Rimrock Property Management:** *Fact:* T1 about page says full operations began July 2022 and the business split into 5 brokerages in 2024. https://rimrockcondomanagement.ca/about-rimrock-property-management/ *Hypothesis:* cross-brokerage reporting and shared work orders. *Fit:* ERP V (the structural split is stated). *Signals:* none recent. *Unknowns:* no 2026 signal, and size is unknown.
- **B4 Vami Roof Repair:** *Fact:* EIN Presswire (T3), 2026-01-22: website launch plus expansion into repair. https://vamiroofrepair.ca *Hypothesis:* lead intake and repair-ticket workflow. *Fit:* SUM H (weak). The site is new, so WEB = X. *Disqualifier:* owner-operator scale, with a weak signal.

## 3. Strongest 10 across both sprints
Excluded: clinics on privacy hold (Strive Physiotherapy 65, Audax 51); FLAG rows (MTE Logistix, Rolls Right, 18 Wheels, NorthShield); partner or competitor profiles (Tiree, Chata.ai, Anchorbase, Floqer), which belong on a separate partnership track if approved; and 4Local (downgraded). Ties are broken by Ops + Cap.

| Rank | Company | Score | Sprint | Primary fit | Key caveat |
|---|---|---|---|---|---|
| 1 ★ | Core Fabrication | 76 | 18→20 | ERP/ops integration | Size and systems UNKNOWN |
| 2 ★ | EGM Drywall Systems | 71 | 20 | ERP (two-office job costing) | Edmonton HQ; may be >75 staff |
| 3 ★ | AspirePeak Properties | 69 | 18→20 | Rent Manager integration + CRM | Incumbent platform |
| 4 ★ | A.T.W. Distributors | 67 | 20 | ERP/inventory integration | Edmonton HQ; WMS H only |
| 5 ★ | Colz Electric | 64 | 18→20 | CRM + dispatch integration | T3 trigger |
| 6 | Personal Movers Inc. | 63 | 18 | CRM + dispatch | Self-published PR |
| 7 | Transformer Exteriors | 58 | 20 | Estimating/scheduling; SUMMITOS discovery | Hiring ≠ intent |
| 8 | Renova Homes and Renovations | 58 | 18-1b | Ops integration (H) | Licence purpose unknown |
| 9 | Ultimarii | 56 | 18 | Custom SaaS (H) | May build in-house |
| 10 | Action Furnace | 52 | 18 | CRM/dispatch merge after acquisition | Single snippet source |

Not re-verified this sprint: Personal Movers, Renova, Ultimarii and Action Furnace carry their Sprint 18 scores.

## 4. Initial offers for the top 5 (service type and scope only; pricing UNKNOWN, as no approved schedule exists)
1. **Core Fabrication — ERP/operations integration discovery:** a fixed-scope assessment of the quote-to-production flow (WooCommerce "Build Your Deck" configurator → work orders → shop scheduling), ending in an integration blueprint. No platform replacement.
2. **EGM Drywall — connected-systems assessment:** two-office job-costing and project-reporting consolidation (Edmonton + Calgary), producing a reporting/integration map. Must first confirm where buying sits.
3. **AspirePeak — Rent Manager extension and AI workflow automation:** condo-division workflows (board communications, work-order intake and routing) built on the existing Rent Manager platform. No PM replacement.
4. **A.T.W. Distributors — ERP/inventory integration review:** two-warehouse stock visibility and integration between the dealer portal and back office. Only proceed to a WMS scope if discovery shows the current tooling falls short.
5. **Colz Electric — CRM and dispatch integration:** a two-site, 24/7 service-call intake → dispatch → invoicing workflow, with optional AI-assisted call and ticket triage. No website work (it was just relaunched).

## 5. SUMMITOS shortlist (discovery candidates only; SUMMITOS is in pilot)
- **Transformer Exteriors (B2):** supported. It is an exterior/siding specialist, and a current T2 posting lists estimating and scheduling duties. This is the only one with operational evidence.
- **Conditional, discovery-only (weak):** Sidhu Exteriors (very small), Silverline Roofing (Edmonton HQ, signal 11 months old), Vami Roof Repair (owner-operator scale). None of them has evidence of a workflow need.
- **Not SUMMITOS:** every Sprint 18 row, including 4Local (now X), plus EGM (interior drywall) and NorthShield (FLAG).

## 6. Research gaps for discovery conversations
- Current systems everywhere (ERP/accounting, field service, estimating, inventory). The only disclosed systems are Rent Manager (AspirePeak) and WooCommerce (Core).
- Headcount and revenue are UNKNOWN for every row, so purchasing capacity is mostly 0 U.
- Where buying decisions are made for branch or HQ-elsewhere firms: EGM, A.T.W., Silverline, 4Local.
- Whether stated changes have created real pain: Core's concurrent builds, Colz's "upgraded service procedures", AspirePeak's condo board needs.
- For roofing/exterior firms: how they estimate and schedule today, and whether they would accept a pilot product.
- Rimrock: whether the 2024 split left data silos (there is no 2026 signal).
- T1/T2 confirmation is still needed for the T3-only triggers (Colz, Silverline, Vami, plus the Sprint 18 rows not re-checked).

## CEO decisions required
1. Approve public-only verification for the new top 5 (sizes, systems, where buying is made) before any qualification step.
2. 4Local: drop it, or route it to a multi-market account owner.
3. Edmonton-HQ firms (EGM, A.T.W.): accept them in a Calgary-focused motion, or hold them until it's confirmed where buying is made.
4. SUMMITOS: approve Transformer Exteriors as the sole discovery candidate for pilot fit. Decide whether the weak roofing rows stay on watch.
5. Keep the clinic privacy hold (Strive, Audax) and the partner-track question (Tiree, Chata.ai, Anchorbase, Floqer) open as previously raised.
6. Approve a pricing schedule before any offer is quoted. All offer pricing is UNKNOWN.
7. Nothing here authorizes outreach, CRM entry or spending.

---
## REVISION 2 — Risk & Compliance corrections (source: risk_compliance.md, 2026-10-14)
### Rules applied
- **R1 One tier scale:** a self-issued newswire release (ABNewswire, Newswire.com, EIN Presswire, PRLog) = **T3**. Trigger band for T3 dated = 10–15. A company's own site, blog or company page = T1 (18–23), but a T1 echo of a T3 release is scored at the bottom of the T1 band (18).
- **R2 180-day freshness limit (cutoff 2026-04-17):** a stale, year-only or undated signal gets **Trigger = 0 and EvQ = 0** (interpretation: a stale signal is not a verified trigger). Ops, Cap and Purch keep their points where the structural fact persists (e.g. a second site still exists). Each such row is marked STALE_EVIDENCE.
- **R3 Flags:** Silverline Roofing is now FLAGGED as Edmonton HQ, the same as EGM and A.T.W. FLAG rows stay ranked but cannot be treated as qualified until headcount and decision location are confirmed (R&C §6).

### Change log
| Company | Old | New | Change | Reason |
|---|---|---|---|---|
| AspirePeak Properties | 69 | **65** | Trig 20→18, EvQ 9→7 | R1: the launch is a T3 newswire release; the own-blog echo goes to the bottom of the T1 band |
| Personal Movers Inc. | 63 | **54** | Trig 20→13, EvQ 7→5 | R1: EIN Presswire = T3 (was scored T2). **Goes STALE on 2026-10-20** → it would fall to 41 (Trig 0, EvQ 0) unless re-verified first |
| Colz Electric | 64 | 64 | none | Already scored T3 in Revision 1 (Trig 14, EvQ 6). Confirmed |
| 4Local Homes | 39 | 39 | none | Already scored T3 in Revision 1. Confirmed; downgrade stands |
| A.T.W. Distributors | 67 | **43** | Trig 17→0, EvQ 7→0 | R2: 2026-02-11 is 245 days old (STALE). Also FLAG (Edmonton HQ) |
| Chata.ai | 52 | **35** | Trig 12→0, EvQ 5→0 | R2: 2026-01-21 is 266 days old (STALE). Partner track |
| Audax Sport Medicine | 51 | **34** | Trig 12→0, EvQ 5→0 | R2: 2026-02-23 is 233 days old (STALE). Clinic hold |
| Splice N Connect | 51 | **32** | Trig 13→0, EvQ 6→0 | R2: 2026-04-07 is 190 days old (STALE) |
| Silverline Roofing | 45 | **34** | Trig 8→0, EvQ 3→0 | R2: 2025-11-05 is 343 days old (STALE). R3: **FLAG Edmonton HQ** |
| Vami Roof Repair | 42 | **28** | Trig 10→0, EvQ 4→0 | R2: 2026-01-22 is 265 days old (STALE) |
| Rimrock Property Mgmt | 45 | **36** | Trig 5→0, EvQ 4→0 | R2: year-only 2024 signal, no usable date |
| NorthShield | not scored | not scored | none | R2: undated (a markup date is not a signal date). Still EXCLUDED (HQ out of AB) |
| Core Fabrication | 76 | 76 | none | T1, 147 days old. **Goes STALE on 2026-11-16**; re-verify before then |
| EGM Drywall | 71 | 71 | none (FLAG kept) | T1, 64 days old. Edmonton HQ / size flag stands |

Unchanged and confirmed fresh: Transformer Exteriors 58 (T2), Sidhu 49 (T2), Renova 58, Ultimarii 56, Crescent 52, Action Furnace 52, Tiree 52, Alliance 51, Strive 65 (clinic hold).

### Recomputed top 10 (clinics, partner/competitor profiles, excluded FLAG rows and 4Local are left out; ties broken by Ops + Cap)
| Rank | Company | Score | Flags |
|---|---|---|---|
| 1 ★ | Core Fabrication | 76 | Stale after 2026-11-16 |
| 2 ★ | EGM Drywall Systems | 71 | **FLAG** Edmonton HQ; size unverified |
| 3 ★ | AspirePeak Properties | 65 | T3 trigger |
| 4 ★ | Colz Electric | 64 | T3 trigger |
| 5 ★ | Transformer Exteriors | 58 | Hiring ≠ intent (Ops+Cap 26) |
| 6 | Renova Homes and Renovations | 58 | Licence purpose unknown (Ops+Cap 25) |
| 7 | Ultimarii | 56 | Funding ≠ intent |
| 8 | Personal Movers Inc. | 54 | **Stale on 2026-10-20** |
| 9 | Action Furnace | 52 | Snippet only (Ops+Cap 27) |
| 10 | Crescent Granite & Marble | 52 | Domain unconfirmed (Ops+Cap 25) |
Dropped out: A.T.W. Distributors (43, stale + FLAG). Next in line: Sidhu Exteriors 49 and Parterre 49.

### Recomputed top 5 offers (pricing UNKNOWN; no approved schedule)
1. **Core Fabrication:** ERP/operations integration discovery, covering configurator → work orders → shop scheduling, ending in an integration blueprint.
2. **EGM Drywall (FLAG):** a connected-systems assessment for two-office job costing and reporting. Only proceed once it's confirmed where buying decisions are made and how big the company is.
3. **AspirePeak:** Rent Manager extension plus AI workflow automation for the condo division (board communications, work-order intake and routing). No PM replacement.
4. **Colz Electric:** CRM and dispatch integration for 24/7 service intake → dispatch → invoicing across two sites. No website work.
5. **Transformer Exteriors (NEW to the top 5):** estimating and crew-scheduling workflow discovery. Assess SUMMITOS pilot fit against a connected-systems alternative, and frame SUMMITOS clearly as a pilot product.
(A.T.W.'s offer is withdrawn until its signal is re-verified.)

### SUMMITOS shortlist (revised)
- **Supported:** Transformer Exteriors only.
- **Conditional, discovery only:** Sidhu Exteriors (fresh T2, very small; don't record its gmail address, per R&C).
- **Removed:** Silverline (stale + FLAG) and Vami (stale).

### Additional gaps and CEO decisions (Revision 2)
- Re-verify Personal Movers before 2026-10-20 and Core Fabrication before 2026-11-16, or mark them STALE.
- Re-verify A.T.W., Silverline, Vami, Rimrock, Splice and Chata with dated T1/T2 signals if they are to come back.
- CEO decisions: (a) adopt the 180-day rule and the zero-points-for-stale interpretation; (b) decide on the EGM, A.T.W. and Silverline FLAGs (EGM is now #2); (c) approve the re-verification passes above; (d) keep the clinic hold; (e) don't repeat any prospect claim externally (R&C §4). Nothing here authorizes outreach, CRM entry or spending.
