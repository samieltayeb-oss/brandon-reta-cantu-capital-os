# NEXORA KSA 50: Lead Selection Notes
(Market study: MARKET_SCOUT_KSA.md. 30 day plan: STRATEGY_30DAY_KSA.md. This file covers only how the leads were picked.)

## How the leads were picked
- Source: Apollo people search, run Oct 24 2026. Filters: person and company HQ in Saudi Arabia; 21 to 500 employees; CEO, GM, MD, COO, owner or founder titles; Apollo email status "verified"; company tags for logistics, contracting, healthcare and clinics, F&B, hospitality, real estate, retail and travel.
- One decision maker per company. Tech vendors and IT companies were left out because they compete with NEXORA.
- Credits: 50 Apollo people matches, so 50 credits. All 50 came back with an email Apollo marks verified. No sequence was created, no contacts were added and nothing was sent.
- Sector mix: logistics 17, contracting 10, healthcare 12, hospitality, F&B and travel 7, real estate 3, other 1.

## Scoring (0 to 100)
The base score is 60. Points are added or taken off as follows:
- +15 for 30 to 250 employees (+8 if larger)
- +10 for a verified email
- +8 if the title is owner, CEO, founder or MD
- +2 if Apollo knows the city
- -20 if the company domain is outside KSA
- -5 if the email domain doesn't match the website

The score is a heuristic. Industry, employee count and title come from Apollo. The "service fit" and "reason" columns are inference based on the sector, and nobody has checked them on each website yet.

## Hooks worth using (with sources)
- ZATCA Fatoora Phase 2, Wave 25: Saudi resident taxpayers with taxable turnover above SAR 187,500 in 2022 to 2025 must integrate e-invoicing from 1 Feb 2027. Mid-size firms on spreadsheets or older systems have a real deadline here. Sources: EY tax alert https://www.ey.com/en_gl/technical/tax-alerts/saudi-arabia-announces-25th-wave-of-phase-2-e-invoicing-integration and ZATCA https://zatca.gov.sa/en/E-Invoicing/PreparingYourBusiness/Phase2/Pages/default.aspx
- AI priority: 72% of Saudi SMEs list AI adoption as a key priority (Mastercard SME Confidence Index, Feb 2025). https://www.mastercard.com/news/eemea/en/newsroom/press-releases/en/2025-1/february/mastercard-sme-confidence-index-smes-in-saudi-arabia-drive-digital-transformation-with-strong-optimism-for-2025/

## Compliance flags (research only, not legal advice)
- PDPL Implementing Regulation, Art. 28 and 29: sending advertising material needs prior consent when there has been no earlier interaction. The sender must be named, opting out must be easy, and opt outs must be honoured right away. SDAIA has taken enforcement action on marketing consent. Source: https://sdaia.gov.sa/en/SDAIA/about/Documents/ImplementingRegulation.pdf
  - In practice: cold bulk email to these 50 carries risk. Make first contact on LinkedIn, through a referral or at an event, and send email after they interact. Get Saudi counsel to confirm.
- VAT: a non-resident supplier may have to register for Saudi VAT within 30 days of its first taxable supply. Phase 2 e-invoicing applies to residents, not to NEXORA as a non-resident. Source: ZATCA VAT Implementing Regulations. Get advice from a tax adviser.

## Data gaps
- City is blank in Apollo for 15 leads. Tam2GO's city is assumed to be Riyadh.
- SB Group uses a .bh (Bahrain) domain. Confirm it has a KSA presence or drop it.
- EHC's email is on enghouse.com.sa and Wafi Health's is on healthlife-sa.com. Both domains differ from the website, so confirm before sending.
- Proceed Healthcare is tagged as logistics in Apollo. Its fit is healthcare supply chain.
- "Verified" is Apollo's own label. Catch-all domains can still bounce.
