# LIAISON-HNH-20261014-39 — HNH Immigration deal-win: Risk & Compliance Review
**DRAFT — ADVISORY RESEARCH, NOT LEGAL ADVICE.** No compliance or breach conclusions. Prepared 2026-10-14 (MT) by NEXORA Risk & Compliance Analyst for NEXORA Liaison → CEO review. Public official sources only; nobody contacted.
Statute texts retrieved 2026-10-14 to `./sources/` (laws-lois.justice.gc.ca; Alberta PIPA from the King's Printer copy cached under LIAISON-20261014-06/sources).
Labels: **[LR]** LEGAL REQUIREMENT (verified quote) · **[INT]** INTERPRETATION · **[REC]** RECOMMENDATION. Reviewer for every finding: **CEO (Sami Suliman)**.

> **Correction to the task brief [INT]:** under CASL, an *inquiry* (s.10(10)(e)) is part of the **existing business relationship (EBR)** definition. It is not part of the existing non-business relationship definition, and it lasts **6 months**. The non-business relationship (s.10(13)) covers charities, political parties, volunteers and clubs, so it does not fit NEXORA–HNH. The 2-year EBR window requires a purchase or lease, an accepted opportunity, barter, or a written contract (s.10(10)(a)-(d)).

---
## 1. CASL (Canada's anti-spam law, S.C. 2010, c. 23)
Source: https://laws-lois.justice.gc.ca/eng/acts/E-1.6/FullText.html · in force 2014-07-01 · Regulations: CRTC SOR/2012-36, Industry Canada SOR/2013-221.

**F1.1 Implied consent bases [LR]**
- s.10(9): "consent is implied only if (a) the person who sends the message … has an existing business relationship or an existing non-business relationship with the person to whom it is sent; (b) the person … has conspicuously published … the electronic address … and the message is relevant to the person's business, role, functions or duties …; (c) the person … has disclosed, to the person who sends the message … the electronic address … without indicating a wish not to receive unsolicited commercial electronic messages … and the message is relevant to the person's business, role, functions or duties…"
- s.10(10): EBR arises from "(a) the purchase or lease of a product, goods, a service … within the two-year period immediately before the day on which the message was sent … (d) a written contract … currently in existence or expired within the period referred to in paragraph (a); or (e) an inquiry or application, within the six-month period immediately before the day on which the message was sent, made by the person to whom the message is sent … in respect of anything mentioned in any of paragraphs (a) to (c)."

**F1.2 Applying this to HNH [INT]** · Risk: **MEDIUM**
- Evidence on file: HNH received a deck and a questionnaire. No signed contract or purchase is on file.
  - **If HNH asked for them** (an inquiry): implied consent under s.10(10)(e) runs for **6 months from the date of the inquiry**.
  - **If NEXORA sent them unprompted**: there is no inquiry. The only possible bases are s.10(9)(b) or (c), and both apply only if HNH published or gave the address and the message is relevant to the recipient's role.
  - **A returned questionnaire** may itself be an inquiry, which would reset the 6 months. That is for counsel to confirm.
- **Once HNH signs** a contract or SOW, or makes a purchase, the EBR runs for the contract term plus 2 years after it expires or after the purchase.
- **The non-business relationship basis does not apply.**
- Rationale for the risk level: the deal is warm and the volume is small, but whatever basis is relied on must be provable (F1.4).
- Professional review: **Yes** (whether the questionnaire counts as an inquiry, and the start dates).

**F1.3 Identification and unsubscribe [LR]**
- s.6(2): every CEM must "(a) set out prescribed information that identifies the person who sent the message and the person — if different — on whose behalf it is sent; (b) set out information enabling the person to whom the message is sent to readily contact one of the persons …; and (c) set out an unsubscribe mechanism in accordance with subsection 11(1)."
- s.6(3): the contact information must stay valid for at least 60 days.
- s.11(1): the unsubscribe mechanism must be at no cost, use the same electronic means where practicable, and give an electronic address or web link.
- s.11(3): the unsubscribe must take effect without delay, and within 10 business days at most (s.11(3) per the earlier LIAISON-06 verification).
- SOR/2012-36 s.2 sets out the prescribed information: name, mailing address, and phone, email or web address.

**[REC]** Every follow-up email should carry:
- NEXORA Technologies Corp.;
- the Calgary mailing address;
- a valid phone number or email address. The 438 number is still on HOLD (N34), so do not use it;
- a one-click or reply unsubscribe link or address.

Log any unsubscribe in the suppression list (LIAISON-34 policy). Risk: **LOW if this is implemented**.

**F1.4 Burden of proof [LR]**
- s.13: "A person who alleges that they have consent to do an act that would otherwise be prohibited under any of sections 6 to 8 has the onus of proving it."

**[REC]** Keep a consent record for HNH with:
- the date of the inquiry or deck request and the evidence for it (for example the email itself);
- how the address was obtained;
- the 6-month expiry date;
- the date of contract signature, once signed.

Before the 6-month window ends, either ask HNH for express consent or have a signed agreement in place. Professional review: optional.

---
## 2. Privacy: Alberta PIPA and PIPEDA
Sources:
- PIPA SA 2003 c P-6.5: https://kings-printer.alberta.ca/documents/Acts/P06P5.pdf
- PIPEDA SC 2000 c 5: https://laws-lois.justice.gc.ca/eng/acts/P-8.6/FullText.html. Breach reporting has been in force since 2018-11-01.

**F2.1 Which law applies [INT]** · Risk: **HIGH** (sensitivity)
- **Alberta PIPA** is likely to govern HNH's and NEXORA's handling of personal information within Alberta.
- **PIPEDA** is likely to apply to cross-border or interprovincial flows, and to clients outside Alberta.
- HNH's immigration client data includes passports, immigration status, family, finances and possibly health and criminal history. It is **highly sensitive**. PIPEDA 4.7.2 says "More sensitive information should be safeguarded by a higher level of protection."
- Professional review: **Yes**.

**F2.2 Safeguards [LR]**
- PIPA s.34: "An organization must protect personal information that is in its custody or under its control by making reasonable security arrangements against such risks as unauthorized access, collection, use, disclosure, copying, modification, disposal or destruction."
- PIPEDA 4.1.3: "An organization is responsible for personal information in its possession or custody, including information that has been transferred to a third party for processing. The organization shall use contractual or other means to provide a comparable level of protection while the information is being processed by a third party."
- PIPEDA 4.7.3 requires physical, organizational and technological measures.

**F2.3 NEXORA as service provider for a CaseEasy integration [INT]** · Risk: **HIGH** · Professional review: **Yes**
- HNH stays responsible as the organization in control. NEXORA would hold the data in custody as HNH's service provider, so PIPA s.34 also reaches NEXORA through custody.
- **[REC]** Do not touch any HNH client data until a signed data processing agreement or addendum is in place. It should cover:
  - purpose limits and acting only on HNH's instructions;
  - least-privilege API scopes for CaseEasy, granted by HNH. NEXORA must not hold HNH's personal credentials, in line with the charter;
  - encryption in transit and at rest;
  - the sub-processor list, including any AI vendors;
  - data location;
  - breach notice to HNH without delay (for example within 24–72 hours), so that HNH can meet its own obligations;
  - return or deletion when the work ends;
  - audit and assistance rights;
  - confidentiality, including solicitor-client and licensee-client confidentiality;
  - a ban on using the data to train models.
- **[INT]** Confirm the CaseEasy API and terms are public and permit the integration before scoping. This is not verified here.

**F2.4 Breach reporting [LR]**
- PIPA s.34.1(1): an organization "having personal information under its control must, without unreasonable delay, provide notice to the Commissioner of any incident … where a reasonable person would consider that there exists a real risk of significant harm to an individual…"
- PIPEDA s.10.1(1): an organization "shall report to the Commissioner any breach of security safeguards involving personal information under its control if it is reasonable in the circumstances to believe that the breach creates a real risk of significant harm…"
- PIPEDA s.10.1(3) requires notifying the affected individuals.
- PIPEDA s.10.3 requires keeping a record of every breach.

**[INT]** The duty to report falls on the organization with *control*, likely HNH. NEXORA's duties come through the contract. **[REC]** Build an incident runbook and a record template.

**F2.5 Cross-border transfers and AI model processing [LR + INT]**
- PIPA s.13.1(2): an organization that "directly or indirectly, transfers to a service provider outside Canada personal information … must notify the individual". Under s.13.1(3) the notice comes "before or at the time of collecting or transferring". The notice content is prescribed in PIPA Reg s.13.1 (this detail was not re-verified in this task).
- **[INT]** Hosting, AI or LLM APIs, or CaseEasy infrastructure outside Canada would likely trigger HNH's s.13.1 notice duty. HNH's privacy notice would need to cover it. Risk: **HIGH**.
- **[REC]**
  - Prefer processing in Canada.
  - Send no client personal information to any AI model without HNH's written approval, a vendor agreement that rules out training and retention, and a documented data-flow map.
  - Redact or pseudonymize data before any model call.
- Professional review: **Yes**.

**F2.6 Minimization and demos [REC]**
- Use **synthetic data only** in demos, decks, questionnaire examples, fixtures and tests. No real HNH client files, screenshots or names.
- Collect only the fields each workflow needs.
- Apply the retention defaults in the LIAISON-34 policy draft.
- Reference: PIPA s.11, which limits collection to what is reasonable for the purposes; s.11 was verified in LIAISON-06.

---
## 3. Competition Act: AI-generated marketing claims
Source: https://laws-lois.justice.gc.ca/eng/acts/C-34/FullText.html. Amendments in force 2022–2024 (Bill C-59 royal assent 2024-06-20).

**F3.1 [LR]**
- s.52(1): "No person shall … knowingly or recklessly make a representation to the public that is false or misleading in a material respect."
- s.74.01(1): reviewable conduct includes "(a) makes a representation to the public that is false or misleading in a material respect; (b) makes a representation to the public in the form of a statement, warranty or guarantee of the performance, efficacy or length of life of a product that is not based on an adequate and proper test thereof, the proof of which lies on the person making the representation".

**F3.2 Testimonials [LR]**
- s.74.02: a testimonial cannot be published unless "(a) such a representation or testimonial was previously made or published by the person by whom the … testimonial was given, or (b) … approved and permission to make or publish it was given in writing by the person … and the representation or testimonial accords with the representation or testimonial previously made, published or approved."

**F3.3 [INT]** · Risk: **MEDIUM-HIGH**
- Copy drafted by AI is treated the same as copy written by a person. NEXORA is responsible for every statement.
- Performance claims, such as time saved, fewer errors or faster files, need an **adequate and proper test done before the claim is made**.
- Using HNH as a reference, logo or case study needs **written permission** (s.74.02(b)) and the deal to actually be delivered.
- **[REC]** Every AI-drafted claim goes through the claims register (GTM-31) and needs CEO sign-off.

---
## 4. Immigration-advice boundaries
Sources:
- IRPA SC 2001 c 27: https://laws-lois.justice.gc.ca/eng/acts/I-2.5/FullText.html
- CICC Act SC 2019 c 29 s 292 (in force 2020-12-09): https://laws-lois.justice.gc.ca/eng/acts/C-33.6/FullText.html
- CICC Code of Professional Conduct, SOR/2022-128: https://laws-lois.justice.gc.ca/eng/regulations/SOR-2022-128/FullText.html (CICC: https://college-ic.ca)

**F4.1 [LR]**
- IRPA s.91(1): "no person shall knowingly, directly or indirectly, represent or advise a person for consideration — or offer to do so — in connection with the submission of an expression of interest under subsection 10.1(3) or a proceeding or application under this Act."
- s.91(2) exempts:
  - (a) lawyers and Québec notaries in good standing;
  - (b) other members of a law society or the Chambre, including paralegals;
  - (c) members in good standing of the College.
- CICC Act s.77: a non-licensee must not "(a) use the title 'immigration consultant' … or any words, name or designation, in a manner that leads to a reasonable belief that the person is a licensee; (b) represent themselves … to be a licensee; or (c) … knowingly, directly or indirectly, represent or advise a person for consideration…"
- CICC Act s.44: licensees must meet the standards in the Code.
- Code s.19(1), competence: "A licensee must fulfill their professional obligations competently and diligently…"
- The Code's supervision provisions, verbatim:
  - "(2) A licensee must supervise and assume professional responsibility for any work done by a person who assists in the provision of immigration or citizenship consulting services and ensure that the level of supervision is adequate for the type of work in question."
  - "(3) … a licensee may delegate certain aspects of their work to a person who is not a licensee but must ensure that the person does not provide representation or advice in contravention of section 91 of the Im[migration and Refugee Protection Act]…"

**F4.2 [INT]** · Risk: **HIGH**
- NEXORA is not authorized under s.91(2). If a NEXORA-built chatbot or automation tells a person:
  - whether they are eligible,
  - which program to choose,
  - how to assess or fill in an application, or
  - their odds or CRS strategy,

  it could be seen as NEXORA (directly or indirectly) advising for consideration, since NEXORA is paid by HNH. It could also expose HNH's licensee under the Code's supervision and delegation provisions.
- **HNH's licensee is the one professionally responsible for supervising any tool used in their practice.** NEXORA's contract and design should support that supervision. They should not replace it.
- Professional review: **Yes** (immigration counsel or a CICC-aware lawyer).

**F4.3 Guardrails [REC]**
1. **Scope**: limited to admin, intake and logistics. The tool collects intake data, books consultations, sends document checklists that HNH's licensee wrote and approved, gives status reminders, and answers FAQs from text the licensee approved.
2. **Hard refusals**: no eligibility verdicts, program picks, CRS or odds estimates, case assessments, or drafting of application answers. These go to a human licensee.
3. **Disclaimer** on every chat surface and email: "This assistant provides general administrative information only and is not immigration advice. Advice is provided only by [HNH licensee name, CICC licence #]." HNH supplies this text and the licensee approves it.
4. **Human-licensee review**: the licensee approves every template and knowledge-base change, and any outbound message that could be read as substantive.
5. **Escalation**: route keyword and intent triggers such as "eligible", "which program", "refused", "deadline" and "removal" to the licensee within a set SLA. HNH sets the SLA.
6. **Logging**: keep prompts and responses, refusals and escalations in an audit log under HNH's control. Apply the retention rules from the LIAISON-34 policy, and apply data minimization to the logs.
7. **No IRCC impersonation**: no IRCC or Government of Canada logos or wording that suggests affiliation. Never put "immigration consultant" in NEXORA branding (CICC Act s.77(a)).
8. **Contract clause**: HNH acknowledges that its licensee is responsible for the advice and for supervising the tool, and that NEXORA provides technology only.

---
## 5. Claims tables for HNH materials (reusing GTM-31 where it fits)
**Allowed: PROPOSED FOR APPROVAL. These still need CEO sign-off and proof. [REC]**
| ID | Claim | Source/condition |
|---|---|---|
| H-A1 | "Connected Operations & Digital Transformation Partner · Calgary, Alberta" | GTM-31 N1 |
| H-A2 | "Automation that asks before it acts." / "A person stays in charge of anything important" | N7 |
| H-A3 | "We work with the tools you already have where feasible" | N21/N19 |
| H-A4 | "NEXORA offers to review how intake, document collection and case-management tools such as CaseEasy could connect" | Name CaseEasy only if HNH visibly uses or brands it (refined C3) or HNH said so in writing |
| H-A5 | "NEXORA provides technology and administrative automation only; immigration advice is provided by your licensed professionals." | F4 |
| H-A6 | "Demos use synthetic data only." | True only if F2.6 is implemented |
| H-A7 | "Designed so your licensee reviews and approves anything substantive." | Only once the F4.3 design is documented |
| H-A8 | "Request a strategy call" / "a free 20-minute introductory call" | N28/P1 (P1 still unsigned) |

**HOLD [REC]**: "helps immigration firms…" (implies delivered work; N3/N20). Security or encryption specifics, until documented. "Canadian-hosted", until the hosting is confirmed.

**PROHIBITED [REC]** (the legal basis is noted for each)
| ID | Claim | Basis |
|---|---|---|
| H-X1 | Guaranteed approval / higher approval rates / "never miss a deadline" | s.52, s.74.01(1)(a)-(b) |
| H-X2 | Faster processing / faster IRCC decisions | 74.01(1)(a)-(b); NEXORA does not control IRCC |
| H-X3 | Any immigration advice, eligibility checks, "find the right program", "AI immigration assistant/consultant" | IRPA s.91; CICC Act s.77 |
| H-X4 | IRCC or Government of Canada affiliation, endorsement or use of their marks | s.52/74.01(1)(a) |
| H-X5 | "Compliance-certified", "PIPA/PIPEDA compliant", "CICC-approved", "secure/bank-grade" | 74.01(1)(a); no certification exists |
| H-X6 | Unverified ROI, hours saved or error-reduction figures | 74.01(1)(b); N31 |
| H-X7 | Named clients, logos or testimonials (including HNH to other prospects) without written consent and delivered work | s.74.02; N32 |
| H-X8 | "AI agents" or "autonomous" handling of cases | N31; F4 |
| H-X9 | Prices or ranges not on the approved schedule; "free assessment" | P2/P3 |
| H-X10 | Statements about HNH's licensees, their CICC standing or their own claims, repeated by NEXORA | Unverified third-party claims (X-series rule) |

---
## 6. Wrap-up
**Open questions for counsel [REC]**
1. Does HNH's request for the deck or its return of the questionnaire count as an "inquiry" under s.10(10)(e), and when does the 6-month window start?
2. Does a NEXORA-built tool that HNH's licensee supervises expose NEXORA under IRPA s.91 or CICC Act s.77(c), given NEXORA is paid "for consideration"? Where exactly is the line between administrative and advisory output?
3. PIPA vs PIPEDA: which applies to HNH's client data, including clients outside Alberta?
4. What PIPA s.13.1 notice content is required, and must HNH update its privacy notice before NEXORA or AI vendors process data outside Canada?
5. What should the DPA terms be: breach notice timing, sub-processors, AI no-training clauses, solicitor or licensee confidentiality, and liability caps?
6. Is any health or criminal information in immigration files subject to other regimes (for example the HIA, if a custodian is involved)?
7. Do the CaseEasy terms of service or API terms permit a third-party integration?

**CEO decisions [REC]**
- D-HNH1: The CASL basis for HNH follow-up. Options: rely on the inquiry for 6 months, or get express consent now. Also pick who keeps the consent record.
- D-HNH2: Go or no-go on any client-facing chatbot, versus internal or admin-only automation.
- D-HNH3: Adopt the F4.3 guardrails and the contract clause on licensee responsibility.
- D-HNH4: Require a DPA before any data access, and approve the sub-processor and AI vendor list and the hosting region.
- D-HNH5: Mandate synthetic-data-only demos.
- D-HNH6: Approve or hold the H-A claims, and confirm whether to name CaseEasy.
- D-HNH7: Whether to ask HNH in writing for permission to use it as a reference (s.74.02).
- D-HNH8: Budget for counsel review (immigration and privacy).

**Sources** (retrieved 2026-10-14; copies in ./sources/ and ../../legal/LIAISON-20261014-06/sources/)
- CASL: https://laws-lois.justice.gc.ca/eng/acts/E-1.6/FullText.html
- CRTC Electronic Commerce Protection Regulations SOR/2012-36: https://laws-lois.justice.gc.ca/eng/regulations/SOR-2012-36/FullText.html; CRTC guidance: https://crtc.gc.ca/eng/com500/guide.htm (not re-fetched this task)
- PIPEDA: https://laws-lois.justice.gc.ca/eng/acts/P-8.6/FullText.html
- Alberta PIPA: https://kings-printer.alberta.ca/documents/Acts/P06P5.pdf
- Competition Act: https://laws-lois.justice.gc.ca/eng/acts/C-34/FullText.html
- IRPA: https://laws-lois.justice.gc.ca/eng/acts/I-2.5/FullText.html
- CICC Act: https://laws-lois.justice.gc.ca/eng/acts/C-33.6/FullText.html
- CICC Code SOR/2022-128: https://laws-lois.justice.gc.ca/eng/regulations/SOR-2022-128/FullText.html; College: https://college-ic.ca (not fetched)
- Internal: /workspace/strategy/NEXORA-GTM-20261014-31/approved_claims_register.md; /workspace/handoff/LIAISON-20261014-34/policy_draft.md

**Limits**
- Not verified in this task: the CRTC guidance pages, the exact PIPA Reg s.13.1 notice content, the CaseEasy terms, and the Code section number for the supervision provision (it is quoted, but its number was not captured).
- Not legal advice. Stopping for CEO review.
