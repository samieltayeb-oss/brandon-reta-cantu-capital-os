# DRAFT — NOT LEGALLY APPROVED
# NEXORA Legal Counsel Desk — Commercial Funding OS Value Sheet Legal Review
**File ID:** STRATEGY-FUNDING-OS-20261026  
**Date:** 26 October 2026 (America/Edmonton)  
**Prepared by:** NEXORA Legal Counsel Desk (AI contracts & legal-ops assistant — **not a lawyer**; not licensed in Canada or the United States)  
**Requested by:** NEXORA Strategy Analyst (on Sami's request)  
**Inputs reviewed:** `/workspace/strategy/FUNDING-OS/NEXORA_Funding_OS_Value_Sheet.pdf` and `.docx` (draft; not yet sent to any buyer)  
**Status of prices on sheet:** PENDING CEO APPROVAL (noted; not re-litigated here)

---

## 1. Executive summary and verdict

**Verdict: CONDITIONAL HOLD on buyer distribution of the sheet as currently worded.**  
**Product concept: PROCEED-WITH-CONDITIONS** (one-time setup of broker-owned tooling for a Florida-focused commercial funding broker).

The compliance note is directionally useful and better than silence, but it contains **overstatements of Florida Telephone Solicitation Act (FTSA) reach to B2B commercial financing**, **incomplete TCPA currency** (revocation rules changing effective 25 November 2026; one-to-one consent rule already vacated), and a **material Google Maps Platform risk** under Terms s. 3.2.3(d)(iii) (no use of Maps Core Services in a listings/directory service or to create/augment an advertising product). The "not legal advice" wording is **adequate for a sales sheet only if strengthened** and paired with a live Florida-licensed counsel check before any outreach program goes live.

**Overall residual risk to NEXORA if the sheet is sent without the Required Edits below and without a protective Statement of Work (SOW):** **HIGH**.  
**Residual risk after Required Edits + SOW clauses in §5:** **MEDIUM** (TCPA/FTSA misuse by the broker remains the dominant residual; Google account-holder risk sits primarily with the broker if Accounts are truly broker-owned).

| Question | Short answer | Label |
|---|---|---|
| 1. Compliance note accurate? "Not legal advice" enough? | Partially accurate; FTSA overstated for B2B; TCPA needs currency note; strengthen disclaimer | REASONED_LEGAL_INTERPRETATION |
| 2. Google design compliant? "No NEXORA license fee" safe? | Place-ID / 30-day lat-lng design matches SST; **lead-finder-as-marketing-list is HIGH risk under 3.2.3(d)(iii)**; rewrite fee wording | VERIFIED_PRIMARY_AUTHORITY (terms text) + REASONED_LEGAL_INTERPRETATION (product fit) |
| 3. Vendor risk / contract terms / ROI disclaimer | HIGH if NEXORA controls sending; MEDIUM if pure build-and-hand-off. Need AUP, consent/DNC, indemnity, LoL, governing law, data, vendor flow-downs. ROI disclaimer draft in §5 | REASONED_LEGAL_INTERPRETATION |
| 4. Canadian vendor → US broker licensing / PIPEDA / AI claims | FL CFDL does not license brokers; NEXORA generally not a "broker" if unpaid on deal terms; SBA/ECOA/FCRA and PIPEDA still need counsel; AI claims on sheet are carefully worded | REASONED_LEGAL_INTERPRETATION / REQUIRES_LICENSED_COUNSEL |

---

## 2. Issue matrix

| # | Issue | Risk | Basis | Disposition |
|---|---|---|---|---|
| I1 | FTSA s.501.059 described as if PEWC applies wholesale to B2B commercial financing texts/calls | **HIGH** (misleading buyer; sheet credibility; false sense of coverage) | Fla. Stat. §501.059(1)(j) defines "telephonic sales call" as to a **consumer** for **consumer goods or services** / consumer credit. Opt-out in §501.059(5) **does** reach "consumer, **business**, or donor." Area-code presumption §501.059(8)(d) verified. | **REQUIRED EDIT 1** |
| I2 | TCPA note omits: (a) FCC one-to-one PEWC revision **vacated** (IMC Ltd. v. FCC, 11th Cir. 24 Jan 2025; mandate 30 Apr 2025; FCC restored prior 47 CFR §64.1200(f)(9) effective 29 Aug 2025); (b) consent-revocation modernization effective **25 Nov 2026** | **MEDIUM** | FR 2025-16641; FR 2026-21821 (effective 25 Nov 2026) | **REQUIRED EDIT 2** |
| I3 | Florida Commercial Financing Disclosure Law cited as "s. 559.961 and following" / sources only 9612–9614; omits 9611 defs, 9613 provider disclosures, 9615 enforcement; thresholds/exemptions compressed | **MEDIUM** | Fla. Stat. §§559.961–559.9615 (Part XIII). Scope: ≤$500,000; on/after 1 Jan 2024; ≤5 FL transactions/12 months exempt (§559.9612(6)–(7)). Broker advance-fee ban & ad address/phone: §559.9614. Disclosures are **provider** duties (§559.9613). | **REQUIRED EDIT 3** |
| I4 | Google Places Lead Finder for cold outreach / CRM marketing lists vs Maps ToS **§3.2.3(d)(iii)** (no listings/directory; no create/augment advertising product) and **§3.2.3(a)** (no copy/save business names/addresses) | **CRITICAL** (Google suspension of broker's or NEXORA's project; product failure; indemnity claims) | [cloud.google.com/maps-platform/terms](https://cloud.google.com/maps-platform/terms) §3.2.3(a),(d); SST §14.3 (lat/lng ≤30 days); Places policies (place_id indefinite) | **REQUIRED EDIT 4–5**; design gate; counsel |
| I5 | "No extra license fee from NEXORA" readable as "no Google licence needed" | **MEDIUM** | Ambiguous commercial wording | **REQUIRED EDIT 6** |
| I6 | NEXORA TCPA/FTSA/Twilio exposure if broker misuses outreach (templates, Twilio, "one-click") | **HIGH** without SOW; **MEDIUM** with SOW + broker-owned accounts + human-send + no agency | 47 U.S.C. §227; FCC "seller" = party on whose behalf call initiated; agency/control tests (e.g. Campbell-Ewald line). Twilio Messaging Policy (13 Apr 2026): app providers must require downstream PEWC; no unsolicited bulk. | Contract §5 |
| I7 | Voyage voyage-finance-2 used near credit/funding decisions; ECOA/FCRA / "credit decision" risk | **MEDIUM–HIGH** if score used as credit decision | Sheet says "supports judgment; does not make credit decisions" — keep. Voyage ToS: lawful use; AI output disclaimer. | Keep AI wording; **REQUIRED EDIT 7**; counsel |
| I8 | Canadian vendor selling to US FL broker — licensing | **LOW** for NEXORA as pure software vendor if not arranging financing for compensation based on deal terms | §559.9611(3) "broker" definition. No FL commercial-financing broker licence regime found under Part XIII. Mortgage/SBA separate. | Confirm with FL counsel; SOW representation |
| I9 | PIPEDA / cross-border if NEXORA Calgary accesses broker or applicant personal information | **MEDIUM** | Support/admin access from Canada | Data clause; PIPEDA notice; minimize Canada-side PII |
| I10 | ROI / payback figures could be read as earnings claims | **HIGH** if sheet softens disclaimer | Sheet already has illustrative language — strengthen & box | **REQUIRED EDIT 8** |
| I11 | "Ownership: code and data live in accounts registered to you" without clarifying NEXORA IP in deliverables vs cloud accounts | **MEDIUM** | Commercial / IP dispute | SOW IP clause |
| I12 | Prices marked PENDING CEO APPROVAL | **LOW** (good) | Sheet | Keep until CEO approves |

---

## 3. Primary authorities checked this turn

| Authority | Result | Label |
|---|---|---|
| Google Maps Platform Terms §3.2.3(a)–(d) (fetched 26 Oct 2026) | No scrape; no cache except SST; no create content from Maps Content (incl. ML training); **no listings/directory / advertising product**; no non-Google map | VERIFIED_PRIMARY_AUTHORITY |
| Maps Service Specific Terms §3 (Google ID caching), §14.3 Places (lat/lng ≤30 consecutive calendar days) | place_id cacheable; lat/lng temporary 30 days then delete | VERIFIED_PRIMARY_AUTHORITY |
| Places API (New) Policies (updated 23 Oct 2026) | place_id exempt from caching restrictions; attribution required | VERIFIED_PRIMARY_AUTHORITY |
| Fla. Stat. §501.059 (2026) | Consumer-focused "telephonic sales call"; PEWC for automated unsolicited telephonic sales calls; opt-out reaches businesses §(5); area-code presumption §(8)(d); STOP / 15-day text damages gate §(10)(c) | VERIFIED_PRIMARY_AUTHORITY |
| Fla. Stat. §§559.961–559.9615 | CFDL Part XIII; scope, defs, disclosures, broker bans, enforcement | VERIFIED_PRIMARY_AUTHORITY |
| 15 U.S.C. §7704 | CAN-SPAM commercial email requirements; opt-out ≤10 business days; postal address; ad identification | VERIFIED_PRIMARY_AUTHORITY |
| 47 U.S.C. §227 / 47 CFR §64.1200(f)(9) as restored FR 2025-16641 (29 Aug 2025) | Prior express written consent definition restored post-vacatur of one-to-one rule | VERIFIED_PRIMARY_AUTHORITY |
| FCC consent-revocation final rule FR 2026-21821 | Effective **25 Nov 2026**; exclusive designated revocation methods allowed | VERIFIED_PRIMARY_AUTHORITY |
| Twilio Messaging Policy (updated 13 Apr 2026) | Prior express consent / PEWC for promo; proof retention; STOP; app providers must require End User consent; no unsolicited bulk | VERIFIED_PRIMARY_AUTHORITY |
| Voyage AI ToS (updated 27 May 2026) | Lawful use; Customer Content ownership; AI output disclaimer; export compliance | VERIFIED_PRIMARY_AUTHORITY |
| IMC Ltd. v. FCC, No. 24-10277 (11th Cir. 24 Jan 2025) | Vacated one-to-one PEWC revision | VERIFIED_PRIMARY_AUTHORITY (case existence via Justia / FCC materials) |
| Whether FL requires a commercial MCA/loan **broker licence** beyond CFDL conduct rules | No Part XIII licence found; mortgage ch. 494 is separate | REASONED_LEGAL_INTERPRETATION — **REQUIRES_LICENSED_COUNSEL** for SBA / other chapters |
| ECOA / FCRA application to "AI lead scorer" | Not fully analysed against primary regs this turn | **UNVERIFIED / REQUIRES_LICENSED_COUNSEL** |

---

## 4. Answers to the four review questions

### 4.1 Compliance note accuracy and "not legal advice" wording

**Accuracy: PARTIAL.** Label: REASONED_LEGAL_INTERPRETATION (built on verified statutes).

- **TCPA / FCC:** Correct that consent is required for autodialed/prerecorded telemarketing to wireless; commercial texts/prerecorded telemarketing need prior express written consent under restored §64.1200(f)(9). "Human sent" and "no autodialer / no prerecorded" on the sheet reduce ATDS/prerecorded risk but do **not** erase TCPA/Do-Not-Call or state law risk for unwanted marketing texts. Do **not** describe the vacated one-to-one rule as current law. Update opt-out language for the 25 Nov 2026 FCC rule.
- **FTSA §501.059:** The sheet over-applies PEWC automated-call rules to B2B commercial financing. Keep: never contact after a do-not-contact request (applies to businesses under §501.059(5)); transmit caller ID; Florida area-code presumption. Soften PEWC language to "where FTSA applies (consumer telephonic sales calls)."
- **CAN-SPAM §7704:** Accurate for commercial email, including to businesses: truthful headers/subjects; clear ad identification (unless affirmative consent); valid physical postal address; functioning opt-out; honor within **10 business days**.
- **Florida CFDL §§559.961–559.9615:** Directionally correct on $500k / 1 Jan 2024 and broker advance-fee + ad contact rules. Clarify that **cost disclosures are provider duties** (§559.9613); brokers are subject to §559.9614 prohibitions. Cite the full Part, not only 9612–9614. Note key exemptions (≤5 FL transactions/12 months; >$500k; banks; leases; real-property-secured; etc. under §559.9612).
- **"Not legal advice":** Present sentence is helpful but **not enough alone**. Strengthen: NEXORA is not a law firm; sheet is general information; broker must confirm with a **Florida-licensed attorney** before using outreach; NEXORA does not supervise the broker's compliance program.

### 4.2 Google Maps Platform / Places design

**Caching rules (verified):**  
- Store **place IDs indefinitely** — allowed.  
- Cache **lat/lng ≤ 30 consecutive calendar days**, then delete — SST §14.3.  
- **Do not** store/copy business names, addresses, reviews as a substitute for live Calls — §3.2.3(a)(iii) expressly bars copying/saving business names or addresses.  
- **Do not** use Google Maps Content to train/fine-tune AI/ML — §3.2.3(c)(vii). Scoring **broker first-party records only** is the compliant path stated on the sheet; keep and enforce in code/SOW.

**Design compliance: CONDITIONAL / HIGH residual.**  
Storing only place IDs and looking up details on demand **matches caching rules**. Using Places as a **Florida business lead finder for outbound marketing / CRM prospecting** is in tension with §3.2.3(d)(iii) (listings/directory; create or augment an **advertising product**). That is the largest product-legal risk on this sheet. Options for Strategy/engineering (commercial, not legal advice): (a) restrict Lead Finder to **display/research with live attribution**, no bulk export into outreach queues; (b) require outreach targets to come from **broker first-party or properly licensed lead sources**, with Places used only for map/detail enrichment under ToS; (c) obtain Google Maps partner/sales confirmation in writing — **REQUIRES_LICENSED_COUNSEL + Google commercial review**.

**"No NEXORA license fee":** Not safe as written. Rewrite per Required Edit 6. Google API costs on the broker's account is fine commercially; the broker (and any NEXORA-operated project) must still accept Google's Terms.

### 4.3 NEXORA risk if broker misuses outreach; contract terms; ROI disclaimer

**Risk rating:**  
- If NEXORA only delivers software into **broker-owned** Google/Twilio/Voyage/hosting accounts, messages are **human-sent** by the broker, and the SOW disclaims agency: residual TCPA risk to NEXORA is typically **MEDIUM** (plaintiffs still name vendors; defence turns on lack of control/agency).  
- If NEXORA hosts shared sending, runs campaigns, supplies purchased lists, or has authority over content/timing: risk rises to **HIGH / CRITICAL**.

**Twilio:** Messaging Policy requires prior express (written for promo) consent, proof retention, STOP handling, sender ID; software providers must **contractually require** End Users to obtain consent; unsolicited bulk prohibited.  
**Voyage:** Lawful-use warranty on customer; keep "not a credit decision engine"; recommend Voyage training opt-out for broker Customer Content if PII/deal data is sensitive.

**Needed SOW / MSA terms (draft themes — not final legal text):** acceptable use; broker sole responsibility for consent, DNC/FTC/Florida lists, CFDL broker rules, CAN-SPAM, TCPA/FTSA; no agency; indemnity for outreach/compliance claims; limitation of liability (fees paid / setup fee cap) with carve-outs for wilful misconduct; suspension/disable of outreach features on suspected abuse; governing law (recommend Alberta for NEXORA + Florida mandatory consumer statutes acknowledged as applying to broker's conduct); data processing / PIPEDA; Google/Twilio/Voyage flow-down; IP (licence to deliverables vs account ownership); no earnings guarantee.

**ROI disclaimer (drop-in replacement — Required Edit 8):** see §6.

### 4.4 Other issues (licensing, export, PIPEDA, AI claims)

- **Florida broker licensing:** Part XIII regulates **conduct** (disclosures for providers; broker prohibitions) and does **not**, on the face of §§559.961–559.9615, create a licence application regime for commercial financing brokers. NEXORA selling a one-time software setup for a flat fee **not tied to financing terms obtained** is unlikely to meet §559.9611(3) "broker." **Do not** market NEXORA as arranging financing. SBA referral/packaging rules and any lead-generator theories: **REQUIRES_LICENSED_COUNSEL**.  
- **Export:** Standard commercial SaaS/software to a US broker is ordinarily low risk; Voyage ToS still require export compliance.  
- **PIPEDA:** If any applicant or prospect personal information is accessed, stored, or supported from Calgary, assess PIPEDA + cross-border transparency; prefer US-region hosting with NEXORA access minimized.  
- **AI claims on sheet:** Current wording ("supports your judgment; it does not make credit decisions or predict approval") is appropriately cautious — **keep**. Do not claim approval prediction, FICO-like scores, or guaranteed funded outcomes.

---

## 5. Recommended contract clauses (themes for SOW / MSA)

*DRAFT themes only — not operative legal language. REQUIRES_LICENSED_COUNSEL before use.*

1. **Acceptable Use:** No unsolicited bulk SMS/email; no autodialer/prerecorded/artificial voice; no purchased/rented consent; no scraping Google beyond ToS; no use of Places Content to build a marketing directory or advertising product; no use of Maps Content to train ML models.  
2. **Compliance allocation:** Broker is sole "seller"/initiator of outreach; sole responsibility for TCPA, FTSA, CAN-SPAM, DNC, CFDL broker rules, 10DLC, state privacy. NEXORA provides tools, not a compliance program.  
3. **Consent & suppression:** Broker warrants PEWC/prior express consent as required; maintains proof; honors STOP/opt-out within legal timelines; scrubs federal/state DNC where applicable.  
4. **No agency / no joint venture:** Broker does not appoint NEXORA as telemarketer; NEXORA has no authority to send on broker's behalf unless a separate managed-service addendum (default: none).  
5. **Indemnity:** Broker indemnifies NEXORA for claims arising from outreach, leads, financing brokering, CFDL/TCPA/FTSA/CAN-SPAM, Google/Twilio/Voyage ToS breaches by broker.  
6. **Limitation of liability:** Cap at fees paid in prior 12 months (or setup fee); exclude consequential/lost profits; carve-outs for IP infringement by NEXORA deliverables and wilful misconduct.  
7. **Feature kill-switch:** NEXORA may suspend outreach integrations on credible abuse reports.  
8. **Third-party terms flow-down:** Broker accepts Google Maps Platform Terms (incl. §3.2.3), Twilio AUP/Messaging Policy, Voyage ToS under **broker-owned** accounts; pays all usage fees.  
9. **Data:** Broker is controller of prospect/applicant data; DPA if NEXORA processes; US hosting preference; PIPEDA notice if Canada access; breach notice.  
10. **IP & accounts:** Cloud accounts titled to broker; NEXORA retains pre-existing IP; broker receives licence/assignment to custom deliverables as CEO-approved commercial position.  
11. **No earnings / ROI guarantee:** Mirror Required Edit 8.  
12. **Governing law / venue:** Alberta law + Calgary courts for contract disputes, without limiting application of mandatory US/FL statutes to broker's own conduct.  
13. **Representations:** Broker is duly authorized to broker commercial financing where required; NEXORA is not a lender, broker, or credit decision provider.  
14. **AI limitation:** Lead scorer is similarity/ranking only; not ECOA adverse-action engine; broker will not use it as sole basis for credit decisions.

---

## 6. REQUIRED EDITS to the sheet (exact replacement wording)

Apply all before any buyer send. Prices remain PENDING CEO APPROVAL.

### REQUIRED EDIT 1 — FTSA bullet (replace entire FTSA bullet)

**Replace with:**  
> • Florida Telephone Solicitation Act, Fla. Stat. §501.059: Where it applies (telephonic sales calls to **consumers** for consumer goods/services or consumer credit), automated or recorded sales calls/texts generally need prior express written consent. Separately, do **not** call, text, or voicemail any consumer, **business**, or donor who has asked not to be contacted (§501.059(5)). Transmit accurate caller ID. A call to a Florida area code is rebuttably presumed to reach a Florida resident or person in Florida (§501.059(8)(d)). B2B commercial-financing outreach may fall outside the "telephonic sales call" definition — confirm with a Florida-licensed attorney before texting or calling prospects.

### REQUIRED EDIT 2 — TCPA bullet (replace entire TCPA bullet)

**Replace with:**  
> • TCPA (47 U.S.C. §227; 47 CFR §64.1200): Prior express written consent is required before telemarketing/advertising calls or texts that use an autodialer or artificial/prerecorded voice to wireless numbers. The FCC's 2023–24 "one-to-one" consent revision was vacated and is **not** current law; the restored PEWC definition applies (FCC final rule effective 29 Aug 2025). Honor opt-outs; from **25 Nov 2026**, FCC rules allow callers to designate certain exclusive revocation methods if clearly disclosed — design the CRM accordingly. This OS uses human-sent messages and is built without an autodialer or prerecorded calling; you remain responsible for consent, content, and suppression.

### REQUIRED EDIT 3 — Florida CFDL bullet (replace)

**Replace with:**  
> • Florida Commercial Financing Disclosure Law, Fla. Stat. §§559.961–559.9615: Applies to covered commercial financing transactions of **$500,000 or less** consummated on or after **1 Jan 2024**, subject to listed exemptions (including providers with ≤5 Florida transactions in a 12-month period, and transactions over $500,000). **Providers** must give written cost disclosures (§559.9613). **Brokers** may not charge advance fees for brokering and must show their actual business address and telephone number in advertisements (§559.9614). Confirm whether your products and volume are in scope with a Florida-licensed attorney.

### REQUIRED EDIT 4 — Google Maps compliance bullet (replace)

**Replace with:**  
> • Google Maps Platform Terms §3.2.3 and Places Service Specific Terms: No scraping; no copying or saving business names or addresses from Google Maps Content; place IDs may be stored; latitude/longitude may be cached up to 30 consecutive calendar days then deleted; Google Maps Content must not be used to train AI/ML models. §3.2.3(d) also restricts using Maps Core Services in a listings/directory service or to create or augment an advertising product — the Lead Finder is configured to store **place IDs only**, refresh details live with required attribution, and **not** build a permanent marketing directory from Google content. You must accept Google's Terms on **your** Google Cloud account.

### REQUIRED EDIT 5 — Lead Finder row in Component table (replace "What it does" cell text)

**Replace with:**  
> Built on the official Google Places API (New), not scraping. Search Florida businesses by county, city and industry for research and map/detail display with Google attribution. The tool stores Google place IDs only (allowed indefinitely) and refreshes details on demand under Google's caching rules. It does **not** export Google business names/addresses into a permanent outreach list. Outreach targets should come from your own applicants, inbound leads, or other lawful sources; use live Place Details only as permitted by Google's Terms. No separate Google licence fee is charged by NEXORA; you pay Google's usage charges on your own account and must comply with Google's Terms (including §3.2.3).

### REQUIRED EDIT 6 — Anywhere "No extra license fee from NEXORA" appears

**Replace with:**  
> NEXORA does not charge a separate fee for Google Maps access. You must open and keep your own Google Cloud billing account, accept the Google Maps Platform Terms of Service, and pay Google's published usage charges.

### REQUIRED EDIT 7 — AI Lead Scorer row (add one sentence at end)

**Add:**  
> Not a consumer-credit score, not an ECOA/FCRA decision system, and not a prediction of funder approval. Do not use it as the sole basis for any credit decision.

### REQUIRED EDIT 8 — ROI section disclaimer (replace the paragraph under the ROI formula / results)

**Replace with:**  
> **ILLUSTRATIVE ONLY — NOT A PROJECTION OR EARNINGS CLAIM.** Results are hypothetical examples using assumed inputs you can change. NEXORA does **not** guarantee leads, meetings, approvals, funded deals, commissions, or income. Figures are gross commissions before clawbacks, splits, taxes, lead spend, chargebacks, and the value of your time. Past or published industry commission ranges are not your results. Replace every input with your own numbers before relying on any payback arithmetic. This section is not financial, tax, or legal advice.

### REQUIRED EDIT 9 — Closing compliance paragraph (replace)

**Replace with:**  
> The OS includes consent-capture fields, opt-out/suppression flags, and human-sent message flows. **You** remain solely responsible for how you use it, including consent, do-not-call/do-not-contact checks, CAN-SPAM, TCPA, FTSA, Florida CFDL broker rules, Google/Twilio/Voyage terms, and funder disclosures. NEXORA Technologies Corp. is a technology vendor, **not a law firm, lender, or commercial financing broker**, and does not provide legal advice. Confirm your outreach and disclosure program with a **Florida-licensed attorney** before launch. This sheet is general information only.

### REQUIRED EDIT 10 — Source [S16] year

**Update** FTSA source URL year from `/2025/501.059` to the current official citation you rely on (e.g. flsenate.gov 2026 §501.059) and cite CFDL as §§559.961–559.9615 (not only 9612–9614).

### REQUIRED EDIT 11 — Optional Care Plan / ownership (clarify)

**Add under Ownership:**  
> "You own" means cloud accounts and data registered to you, and the licence or assignment to custom code set out in the signed Statement of Work. It does not mean Google, Twilio, Voyage, or Vercel waive their own terms, or that NEXORA's pre-existing frameworks are work-made-for-hire unless the SOW says so.

---

## 7. Questions for licensed US (Florida) counsel

1. Does B2B commercial-financing SMS/voice outreach to Florida **business** mobile numbers trigger FTSA PEWC under §501.059(8), or only the §501.059(5) opt-out and TCPA/federal DNC regimes?  
2. Is operating a Places-API "lead finder" that feeds a CRM outreach queue "creat[ing] or augment[ing] an advertising product" or a "listings or directory service" under Google Maps Platform Terms §3.2.3(d)(iii)? What architecture would Google's counsel accept?  
3. Under current TCPA case law in relevant circuits, when does a software vendor that supplies templates + Twilio integration become a "seller" or principal for vicarious liability?  
4. Any Florida or federal **licence / registration** for MCA/commercial loan brokers or lead generators beyond CFDL conduct rules? Any SBA-specific packaging/referral constraints for the target buyer?  
5. Does an embedding-based "lead scorer" trained on a broker's funded/declined history create ECOA adverse-action or FCRA "consumer report" risk if applicant consumer credit data ever enters the system?  
6. Preferred governing law/venue for a Calgary vendor + Florida broker SOW, and enforceability of indemnity/LoL against TCPA statutory damages.  
7. PIPEDA / cross-border requirements if NEXORA employees in Alberta access US prospect or applicant personal information for support.

---

## 8. Disposition for Strategy Analyst / CEO

| Item | Action |
|---|---|
| Sheet as-is to buyer | **HOLD** until Required Edits 1–11 applied |
| Product build | **PROCEED-WITH-CONDITIONS**: place-ID-only; no Maps Content into ML; no Maps-derived marketing directory; broker-owned accounts; human-send; SOW clauses §5 |
| Prices | Remain **PENDING CEO APPROVAL** |
| External contact | None by Legal Desk (charter) |
| Counsel | Engage Florida-licensed counsel on §7 before first paid SOW and before enabling SMS |

**Top risks (priority order):**  
1. **CRITICAL** — Google §3.2.3(d) advertising/directory restriction vs Lead Finder purpose.  
2. **HIGH** — Broker misuse of email/SMS → TCPA/FTSA claims naming NEXORA without strong SOW.  
3. **HIGH** — ROI/earnings perception if disclaimer soft.  
4. **MEDIUM** — FTSA overstatement on the sheet.  
5. **MEDIUM** — PIPEDA/cross-border support access; AI/credit-decision creep.

---

*End of draft. Not legal advice. Not CEO-approved. Not for external transmission as a NEXORA legal opinion.*
