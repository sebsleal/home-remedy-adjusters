export type CaseResult = {
  id: string
  type: 'Storm' | 'Water' | 'Roof' | 'Fire'
  location: string
  insuranceOffer: number
  finalSettlement: number
  description: string
  featured?: boolean
}

export const caseResults: CaseResult[] = [
  {
    id: 'r1',
    type: 'Roof',
    location: 'Miami Lakes, FL',
    insuranceOffer: 4200,
    finalSettlement: 31500,
    description: 'Complete roof replacement after wind damage from Tropical Storm Eta. Insurance initially claimed only minor repairs were needed.',
    featured: true,
  },
  {
    id: 'r2',
    type: 'Storm',
    location: 'Hialeah, FL',
    insuranceOffer: 8200,
    finalSettlement: 47000,
    description: 'Hurricane Ian damage to roof, windows, and interior. Full scope of loss documented and negotiated to maximum settlement.',
  },
  {
    id: 'r3',
    type: 'Water',
    location: 'Coral Gables, FL',
    insuranceOffer: 6500,
    finalSettlement: 28700,
    description: 'Burst pipe caused extensive water damage to kitchen, living room, and hardwood floors throughout first floor.',
  },
  {
    id: 'r4',
    type: 'Fire',
    location: 'Doral, FL',
    insuranceOffer: 19000,
    finalSettlement: 64000,
    description: 'Kitchen fire with significant smoke and soot damage throughout property. Full contents inventory and structural scope secured.',
  },
  {
    id: 'r5',
    type: 'Storm',
    location: 'Pembroke Pines, FL',
    insuranceOffer: 12000,
    finalSettlement: 43500,
    description: 'Hail and wind damage to roof and HVAC system. Initial offer did not account for full replacement cost of damaged units.',
  },
  {
    id: 'r6',
    type: 'Roof',
    location: 'Homestead, FL',
    insuranceOffer: 7800,
    finalSettlement: 38200,
    description: 'Post-hurricane roof damage with underlying decking deterioration. Full tear-off and replacement negotiated.',
  },
  {
    id: 'r7',
    type: 'Water',
    location: 'Boca Raton, FL',
    insuranceOffer: 0,
    finalSettlement: 22000,
    description: 'Initially denied water damage claim from AC condensation leak. Claim successfully appealed and approved with full payout.',
  },
  {
    id: 'r8',
    type: 'Storm',
    location: 'Hollywood, FL',
    insuranceOffer: 5500,
    finalSettlement: 41000,
    description: 'Wind-driven rain caused ceiling collapse and interior damage. Carrier attempted to underpay citing "pre-existing conditions."',
  },
]
