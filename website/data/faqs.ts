export type FAQ = {
  id: string
  category: string
  question: string
  answer: string
}

export const faqCategories = [
  'General Questions',
  'About Public Adjusters',
  'The Claims Process',
  'Costs & Fees',
]

export const faqs: FAQ[] = [
  // General Questions
  {
    id: 'g1',
    category: 'General Questions',
    question: 'What does Claim Remedy Adjusters do?',
    answer:
      'We are licensed public adjusters who represent homeowners and property owners — not insurance companies. Our job is to inspect, document, and negotiate your property damage claim to ensure you receive the maximum payout your policy entitles you to.',
  },
  {
    id: 'g2',
    category: 'General Questions',
    question: 'What areas of Florida do you serve?',
    answer:
      'We serve all of South Florida including Miami-Dade, Broward, Palm Beach, Monroe (Florida Keys), Collier, and Lee Counties. We also travel to Central and North Florida by appointment for larger claims.',
  },
  {
    id: 'g3',
    category: 'General Questions',
    question: 'How quickly can you respond after damage occurs?',
    answer:
      'We aim to respond within 24 hours of your call. For emergency situations — especially during hurricane season — we prioritize rapid response to document damage before any cleanup or repairs begin.',
  },
  {
    id: 'g4',
    category: 'General Questions',
    question: 'Can you help if my claim has already been settled?',
    answer:
      'Yes. If your claim was settled but you believe you were underpaid, we can reopen it in many cases. Florida law allows policyholders to supplement or reopen claims within a certain timeframe. Contact us for a free review.',
  },

  // About Public Adjusters
  {
    id: 'p1',
    category: 'About Public Adjusters',
    question: 'What is a public adjuster?',
    answer:
      'A public adjuster is a licensed professional who works exclusively for policyholders — not insurance companies. While the insurance company sends their own adjuster to protect their interests, a public adjuster is on your side, ensuring your damage is fully documented and your claim is maximized.',
  },
  {
    id: 'p2',
    category: 'About Public Adjusters',
    question: 'How is a public adjuster different from the insurance company\'s adjuster?',
    answer:
      'The insurance company\'s adjuster works for the insurer and is motivated to minimize payouts. A public adjuster works exclusively for you and is motivated to maximize your recovery. Having a professional on your side levels the playing field.',
  },
  {
    id: 'p3',
    category: 'About Public Adjusters',
    question: 'Is Claim Remedy Adjusters licensed?',
    answer:
      'Yes. We are fully licensed public adjusters in the state of Florida. All of our adjusters hold active Florida Department of Financial Services public adjuster licenses and carry errors & omissions insurance.',
  },
  {
    id: 'p4',
    category: 'About Public Adjusters',
    question: 'Will hiring a public adjuster affect my relationship with my insurance company?',
    answer:
      'No. You have a legal right to representation during the claims process. Insurance companies deal with public adjusters regularly. Our involvement is professional and focused on ensuring your claim is handled fairly under your policy.',
  },

  // The Claims Process
  {
    id: 'c1',
    category: 'The Claims Process',
    question: 'When should I contact a public adjuster?',
    answer:
      'As soon as possible after damage occurs — ideally before you file the claim or allow the insurance company\'s adjuster to visit. The earlier we get involved, the better we can protect your rights and maximize your settlement. However, we can also help with existing, denied, or underpaid claims.',
  },
  {
    id: 'c2',
    category: 'The Claims Process',
    question: 'What happens during the free inspection?',
    answer:
      'One of our licensed adjusters visits your property to assess all visible damage. We review your policy, photograph and document the damage, and give you an honest assessment of what your claim may be worth. There is no obligation and no cost.',
  },
  {
    id: 'c3',
    category: 'The Claims Process',
    question: 'How long does the claims process take?',
    answer:
      'Timelines vary depending on claim complexity, insurance company responsiveness, and whether negotiation or an appraisal is required. Most straightforward claims resolve within 60–90 days. Complex or disputed claims may take longer, but we keep you informed every step of the way.',
  },
  {
    id: 'c4',
    category: 'The Claims Process',
    question: 'What if the insurance company denies my claim?',
    answer:
      'A denial is not the end. We can file a formal dispute, invoke the appraisal process, or escalate to mediation under Florida law. Many of our most successful recoveries have come from claims that were initially denied.',
  },
  {
    id: 'c5',
    category: 'The Claims Process',
    question: 'Will I have to do a lot of paperwork?',
    answer:
      'Very little. We handle all communications with your insurance company, prepare and submit all documentation, and manage the entire process on your behalf. Your role is to stay informed and approve the final settlement.',
  },

  // Costs & Fees
  {
    id: 'f1',
    category: 'Costs & Fees',
    question: 'How much does it cost to hire Claim Remedy Adjusters?',
    answer:
      'There is zero upfront cost. We work on a contingency basis — meaning our fee is a percentage of the final settlement, paid only after you receive your funds. If we do not recover money for you, you pay nothing.',
  },
  {
    id: 'f2',
    category: 'Costs & Fees',
    question: 'What percentage do you charge?',
    answer:
      'Our fee is a percentage of the settlement amount recovered. The exact rate depends on the complexity of the claim and is discussed transparently before you sign any agreement. Florida law caps public adjuster fees, so you are always protected.',
  },
  {
    id: 'f3',
    category: 'Costs & Fees',
    question: 'Will hiring a public adjuster increase my insurance premiums?',
    answer:
      'Insurance premiums are based on risk factors and claim history, not on who assisted with the claim filing. Hiring a public adjuster does not directly cause premium increases. We focus on ensuring you receive your entitled settlement without unnecessary impact on future rates.',
  },
  {
    id: 'f4',
    category: 'Costs & Fees',
    question: 'Is the free inspection really free with no obligation?',
    answer:
      'Absolutely. The free inspection is a no-pressure assessment. We provide our honest professional opinion, and you decide whether you want to move forward. There is no contract to sign at the inspection and no cost regardless of the outcome.',
  },
]
