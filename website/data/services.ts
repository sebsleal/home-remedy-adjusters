export type Service = {
  slug: 'storm' | 'water' | 'roof' | 'fire'
  title: string
  shortTitle: string
  tagline: string
  description: string
  heroImage: string
  icon: string
  qualifies: string[]
  process: { step: string; body: string }[]
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'storm',
    title: 'Hurricane & Storm Damage Claims',
    shortTitle: 'Storm Damage',
    tagline: 'Florida storms are devastating. Your payout should not be.',
    description:
      'When a hurricane or tropical storm hits, the damage can be overwhelming — and so can the insurance process. We document everything, fight the lowball offers, and ensure you receive every dollar your policy entitles you to.',
    heroImage: '/images/services/storm.jpg',
    icon: 'CloudLightning',
    qualifies: [
      'Wind damage to roof, siding, or windows',
      'Hail impacts on shingles or HVAC units',
      'Flooding from storm surge',
      'Fallen tree or debris impact damage',
      'Structural damage from high winds',
      'Interior damage from water intrusion',
    ],
    process: [
      {
        step: 'Emergency Documentation',
        body: 'We arrive within 24 hours to photograph and document all storm damage before repairs begin, protecting your claim from the start.',
      },
      {
        step: 'Full Damage Assessment',
        body: "Our adjusters conduct a thorough inspection — roof, structure, interior, and systems — capturing damage the insurance company's adjuster may overlook.",
      },
      {
        step: 'Policy Review & Claim Filing',
        body: 'We review your policy for every applicable coverage and file a comprehensive claim that accounts for all damages, including hidden and long-term effects.',
      },
      {
        step: 'Carrier Negotiation',
        body: 'We handle all communication with the insurance company and negotiate aggressively on your behalf to maximize your settlement.',
      },
    ],
    metaTitle: 'Storm Damage Public Adjuster Florida',
    metaDescription:
      'Hurricane or storm damage? Our licensed public adjusters fight for your maximum payout. No upfront cost. Serving all of South Florida. Call (786) 223-7867.',
  },
  {
    slug: 'water',
    title: 'Water Damage Claims',
    shortTitle: 'Water Damage',
    tagline: 'Water damage moves fast. So do we.',
    description:
      'From burst pipes to appliance leaks and flooding, water damage is one of the most common — and most underpaid — claims in Florida. We ensure every affected area is documented and every dollar is recovered.',
    heroImage: '/images/services/water.jpg',
    icon: 'Droplets',
    qualifies: [
      'Burst or leaking pipes',
      'Appliance overflow (washing machine, dishwasher)',
      'AC system condensation damage',
      'Roof leak causing interior water damage',
      'Sewage backup damage',
      'Flood damage from storms or heavy rain',
    ],
    process: [
      {
        step: 'Immediate Response',
        body: 'We respond quickly to document the full extent of water damage, including hidden moisture behind walls and under flooring.',
      },
      {
        step: 'Moisture Mapping',
        body: 'Using industry tools, we map all affected areas to ensure no damage goes undocumented and underpaid.',
      },
      {
        step: 'Scope of Loss Preparation',
        body: 'We prepare a detailed scope of loss that includes structural repairs, contents replacement, and additional living expenses.',
      },
      {
        step: 'Settlement Negotiation',
        body: 'We negotiate with your carrier until the settlement reflects the true cost to restore your property.',
      },
    ],
    metaTitle: 'Water Damage Insurance Claim Florida',
    metaDescription:
      'Water damage claim underpaid or denied? We fight for the full payout. Licensed public adjusters serving Miami-Dade, Broward & Palm Beach. No upfront cost.',
  },
  {
    slug: 'roof',
    title: 'Roof Damage Claims',
    shortTitle: 'Roof Damage',
    tagline: 'Your roof protects your home. We protect your claim.',
    description:
      'Roof damage claims are among the most frequently underpaid in Florida. Insurance companies routinely underestimate the scope of damage. We make sure every shingle, tile, and structural element is accounted for.',
    heroImage: '/images/services/roof.jpg',
    icon: 'Home',
    qualifies: [
      'Wind damage to shingles, tiles, or metal roofing',
      'Hail impact damage',
      'Falling tree or debris damage',
      'Storm-related flashing or fascia damage',
      'Water intrusion from compromised roof',
      'Age-related storm acceleration damage',
    ],
    process: [
      {
        step: 'Roof Inspection',
        body: 'We perform a complete roof inspection — including underlayment, decking, flashing, and gutters — to capture the full picture of damage.',
      },
      {
        step: 'Documentation & Photos',
        body: 'High-resolution photography and detailed written documentation of every impacted area on your roof.',
      },
      {
        step: 'Replacement vs. Repair Analysis',
        body: 'We determine whether a full replacement is warranted and build the case with your carrier accordingly.',
      },
      {
        step: 'Negotiation to Full Value',
        body: 'We push back on low offers and negotiate until you receive what a full roof restoration actually costs in today\'s market.',
      },
    ],
    metaTitle: 'Roof Damage Claim Adjuster Florida',
    metaDescription:
      'Insurance company undervaluing your roof damage? We fight back. Licensed public adjusters with a proven record of maximizing roof claims. Free review.',
  },
  {
    slug: 'fire',
    title: 'Fire Damage Claims',
    shortTitle: 'Fire Damage',
    tagline: 'After the fire, we help you rebuild.',
    description:
      'Fire damage claims are complex — smoke, soot, water from suppression, and structural damage all need to be addressed. We handle the full scope so you can focus on recovery while we maximize your settlement.',
    heroImage: '/images/services/fire.jpg',
    icon: 'Flame',
    qualifies: [
      'Structural fire damage',
      'Smoke and soot damage throughout property',
      'Suppression water damage',
      'Electrical fire damage',
      'Kitchen or appliance fire damage',
      'Contents loss from fire, smoke, or soot',
    ],
    process: [
      {
        step: 'Damage Documentation',
        body: 'We document all fire, smoke, and suppression water damage immediately — before anything is cleaned or removed.',
      },
      {
        step: 'Contents Inventory',
        body: 'We prepare a comprehensive contents inventory to ensure all personal property losses are included in your claim.',
      },
      {
        step: 'Scope of Loss',
        body: 'A detailed scope covering structural repairs, smoke remediation, contents replacement, and additional living expenses.',
      },
      {
        step: 'Full Settlement Recovery',
        body: 'We negotiate every line item of your claim until you receive the full amount needed to restore your home and life.',
      },
    ],
    metaTitle: 'Fire Damage Insurance Claim Florida',
    metaDescription:
      'Fire damage to your property? Don\'t settle for less. Our public adjusters ensure maximum recovery for fire, smoke, and suppression damage. Free consultation.',
  },
]
