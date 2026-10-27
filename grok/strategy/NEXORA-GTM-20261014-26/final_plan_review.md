# NEXORA-GTM-20261014-26: FINAL Risk & Compliance Review of the Consolidated GTM Plan (advisory only)
**Date:** 2026-10-14 (MT) · **Not legal advice.** No compliance or breach conclusions. Read only: nothing was edited and no one was contacted.
**Labels:** LEGAL REQUIREMENT · INTERPRETATION · RECOMMENDATION.

**Files reviewed:**
- `NEXORA_GTM-20261014-26_v1_bundle/CONSOLIDATED_GTM_PLAN.md`. **Integrity check passed:** SHA-256 `ef9ef20ac6ef48d8f650f38ec5a0b1e6ce48e8ab8f32e0d95c45c11878cd254a` starts `ef9ef20a` and ends `cd254a`.
- `sales/SALES_EXECUTION_transcribed.md`.
- The bundle's `risk_compliance.md` is byte-identical to my GTM-26 report (same SHA-256, `6459ed39…`).
- Also used: `01_portfolio_and_site_audit.md`, and the verified texts in `/workspace/legal/LIAISON-20261014-06/sources/`.

## VERDICT: **PASS-WITH-CHANGES**
The plan's structure, holds, gating and authorization language are sound. The s.10(9)(c) and s.74.02 corrections were applied. The two opening drafts, however, contain representations that the plan's own evidence does not support. Item 6 of the gate also drops the referral-message content conditions, and two smaller citation and labelling gaps remain. Fix items 1–4 before the CEO approves the gate or any draft. Items 5–8 are recommended.

## Checks
**(1) Gate and citations**
- Most items are consistent with GTM-26 §6 and the verified texts:
  - s.10(9)(b) all three conditions; s.10(9)(c) (the Sales transcript correctly says "s.10(9)(c) business card");
  - s.10(10) 2-year purchase and 6-month inquiry windows;
  - s.6(2)–(3) and SOR/2012-36 s.2;
  - s.11(3) 10 business days;
  - s.74.01(1)(b)–(c), with no misattribution of testimonials to s.74.01(1)(c);
  - s.74.02 testimonials; PIPA s.35 and s.13.1.
- Gaps: item 6 (change 3) and item 9 (change 4).
- Gate item 3 ("No guessed, derived, personal or freemail addresses") is stricter than GTM-26, which allowed addresses the person disclosed. That's acceptable as a CEO policy choice.

**(2) Claims and drafts**
- The plan doesn't repeat any third-party claim from the GROK-18, -20 or -24 do-not-repeat lists:
  - Ultimarii's amount is expressly withheld;
  - Colz's self-claims are flagged "don't repeat";
  - Personal Movers, Renova and Transformer self-claims ("15+ years") don't appear in any draft.
- Problems are in NEXORA's **own** claims in the drafts (changes 1–2).

**(3) Freemail and placeholder grep (outside `audit/`)**
- Searched for `gmail|outlook|hotmail|yahoo|example.com` and addresses at those domains, including `support@gmail.com`.
- **No addresses found.** The non-address hits are:
  - `02_sector_analysis.md:32` "Sidhu publishes a gmail address" (descriptive, no address);
  - competitor HTML mentioning Microsoft "Outlook" as a product.
- The transcript redacts the placeholder as `[REDACTED-FREEMAIL]`. **PASS.**

**(4) Website separation**
- §13 (verified issues) and §14 (requires independent verification) are kept apart. **PASS**, with a labelling fix needed (change 5).

**(5) Authorization**
- The header says "NO OUTREACH. NO PRODUCTION CHANGES."
- Every action is "REQUESTED"; the drafts say "DO NOT SEND"; fees are behind D31; site fixes need CEO approval; and §17.7 reads "No A6 transfer, outreach or system change until approved."
- Nothing authorizes outreach, publishing, spending or production changes. **PASS.**

## Required changes
1. **§8 Item 4 Transformer draft (and Sales transcript Part 1/3, item 4): "we work with Calgary roofing and exterior contractors".**
   - **LEGAL REQUIREMENT:**
     - s.74.01(1)(a) / s.52(1): "a representation to the public that is false or misleading in a material respect".
     - s.52(4): "the general impression conveyed by a representation as well as its literal meaning shall be taken into account".
   - **INTERPRETATION:** The general impression is that NEXORA has existing roofing/exterior clients. The plan's own evidence says:
     - W7: "no testimonials, logos, metrics";
     - §1: "client counts" are prohibited until substantiated;
     - 01 audit: one named "Active Pilot" (Blue Moon Construction), whose trade is not confirmed as roofing or exterior, and "No integration/automation case study".

     "Contractors" (plural, present tense) is therefore unsupported. Whether a one-to-one email counts as a representation "to the public" is a question for counsel. Treat it as covered.
   - **REQUIRED:** Replace it with wording that makes no client claim. Example: "NEXORA Technologies Corp. is a Calgary firm that helps teams connect estimating and crew scheduling so numbers are entered once." Otherwise, substantiate the claim on the approved claims list (gate item 7) before use. Also remove or soften "so numbers are entered once" as an outcome promise unless it's substantiated (s.74.01(1)(b) if framed as performance).
2. **§8 Item 5 Colz draft: "We help electrical contractors connect the tools they already use, like Jobber, with dispatch and accounting".**
   - **INTERPRETATION:** This implies existing electrical-contractor clients and a delivered Jobber integration capability. The plan records "no integration proof" (Sales GAPS) and "No integration/automation case study" (01). Same legal basis as change 1.
   - **REQUIRED:** Reword it as a capability offer without a client or track-record claim, and without naming Jobber as an integration NEXORA has delivered. Example: "We look at how tools like Jobber connect with dispatch and accounting…", subject to the claims list.
   - "Congratulations on the new website" refers to the company's own public relaunch. Low risk, but keep it factual and don't add the release's claims (GROK-20 §4).
3. **§7 gate item 6, "Referral: referrer named, first message only" (transcript: "referral rules, first message only").**
   - **LEGAL REQUIREMENT (SOR/2013-221 s.4(1)):** the exemption applies only where the referrer has a qualifying relationship with **both** the sender and the recipient, and the message "discloses the **full name** of the individual or individuals who made the referral and **states that the message is sent as a result of the referral**". It covers s.6(1)(a) only, so s.6(2) content still applies.
   - **REQUIRED:** Item 6 must read: "referrer's full name disclosed; statement that it is sent as a result of the referral; referrer's relationship with both parties recorded; first message only; s.6(2) content still required."
4. **§7 gate item 9, "PIPA minimization, retention (s.35), cross-border processors disclosed (s.13.1)".**
   - **LEGAL REQUIREMENT:** PIPA s.13(1) requires a purpose notice "before or at the time of collecting", naming a person who can answer questions, and s.13.1(4) makes the cross-border notice "in addition to any notice required under section 13". Consent: PIPA s.7(1). PIPEDA 4.2.3 and 4.4 apply where federal law governs.
   - **REQUIRED:** Add "purpose notice and contact person (PIPA s.13; PIPEDA 4.2.3); consent (PIPA s.7)" to item 9.
5. **§13 W3, labelled "(V)", vs §14: "mobile check was a single warm headless load (W3 needs a screenshot/Lighthouse confirmation)".**
   - An issue §14 says still needs confirmation can't also sit in the verified table as V.
   - **RECOMMENDATION (required for consistency):** Move W3 to §14, or label it "V (single headless load; confirmation pending)".
   - The same applies to the Colz "Jobber work-request form embedded … (V)" in §7, §8 and C7, which §14 says was "not re-opened here". Keep the V only with its source line cited, or mark it "V per Sprint 03 audit, not re-checked".
6. **§8 drafts: CASL s.6(2) content, if they're ever sent.**
   - **LEGAL REQUIREMENT:**
     - s.6(2)(a)–(c): identification, contact information, unsubscribe;
     - SOR/2012-36 s.2(1)(a) business name, s.2(1)(d) "the mailing address, and either a telephone number…, an email address or a web address";
     - s.3: "clearly and prominently", "readily performed";
     - CASL s.6(3): contact valid 60 days or more;
     - s.11(1): unsubscribe "at no cost" by the same electronic means, or a link or address.
   - **INTERPRETATION:** Both drafts use the placeholders "[Name]" and "[address · unsubscribe]", which aren't enough as written. Colz signs only "NEXORA", while Transformer uses "NEXORA Technologies Corp.". Neither includes a phone, email or web contact.
   - **REQUIRED before use:** a full business name, a mailing address, one of phone, email or web, and a working unsubscribe link or reply mechanism (honored within 10 business days, s.11(3)). Also record the s.10(9)(b) basis for the Info@ address: URL, capture date, no-solicitation check and relevance.
7. **§1, "founder's 'more than twenty years in enterprise IT, cyber security, ERP systems, networks and automation' (V, /about)".**
   - **INTERPRETATION:** "V" here only means it appears on NEXORA's own site. It is still NEXORA's representation (s.74.01(1)(a)).
   - **RECOMMENDATION:** Put it on the approved claims list with internal substantiation (e.g. a CV and roles) before using it in outreach.
8. **§6 / §16 D36, the "material connection" counsel item.**
   - **RECOMMENDATION:** Keep it labelled UNVERIFIED as statute (GTM-26 C3), so the referral-fee policy (D34) isn't finalized on an assumed disclosure rule.

## Unaffected / confirmed
- Clinic hold kept (D20); EGM flag (D15, D28); Renova and Personal Movers holds (D18, D12).
- Item 4 forbids the freemail placeholder.
- LinkedIn DMs and paid ads are on HOLD.
- Rung 4 has no auto-renewal; SUMMITOS isn't signable.
- The base case closes nothing; there are no invented rates or revenue.

## CEO decisions this review feeds
- **D34:** adopt the gate with changes 3–4 and an approved claims list covering changes 1, 2 and 7.
- **Drafts for items 4 and 5:** approve only as reworded.
- **D36:** counsel questions, including whether 1:1 emails are "to the public" under s.74.01.
