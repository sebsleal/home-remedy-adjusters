export type Testimonial = {
  id: string
  quote: string
  name: string
  city: string
  stars: 5 | 4
  claimType?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'After Hurricane Ian, my insurance company offered me $8,200 for a completely destroyed roof. Claim Remedy got me $47,000. I was absolutely floored.',
    name: 'Maria G.',
    city: 'Hialeah, FL',
    stars: 5,
    claimType: 'Storm Damage',
  },
  {
    id: 't2',
    quote:
      'They handled everything from start to finish. I never had to deal with the insurance company directly. My settlement was three times the original offer.',
    name: 'Carlos R.',
    city: 'Miami Lakes, FL',
    stars: 5,
    claimType: 'Water Damage',
  },
  {
    id: 't3',
    quote:
      'I thought my claim was closed. They reopened it and recovered an additional $22,000 I would have left on the table. Incredible team.',
    name: 'Sandra P.',
    city: 'Coral Gables, FL',
    stars: 5,
    claimType: 'Roof Damage',
  },
  {
    id: 't4',
    quote:
      'Professional, responsive, and truly on my side. The difference between what the insurance company offered and what we ended up with was over $30,000.',
    name: 'James T.',
    city: 'Pembroke Pines, FL',
    stars: 5,
    claimType: 'Storm Damage',
  },
  {
    id: 't5',
    quote:
      'As a first-time homeowner I had no idea how to navigate a fire claim. They guided me through everything and got me a fair settlement that covered all repairs.',
    name: 'Daniela M.',
    city: 'Doral, FL',
    stars: 5,
    claimType: 'Fire Damage',
  },
  {
    id: 't6',
    quote:
      'My water damage claim was denied twice. These guys took over, appealed it, and got it approved with a settlement that covered the full restoration.',
    name: 'Robert K.',
    city: 'Boca Raton, FL',
    stars: 5,
    claimType: 'Water Damage',
  },
  {
    id: 't7',
    quote:
      'Fast, honest, and they delivered exactly what they promised. No upfront cost and they ended up recovering over $40,000 for my roof damage.',
    name: 'Ana L.',
    city: 'Homestead, FL',
    stars: 5,
    claimType: 'Roof Damage',
  },
  {
    id: 't8',
    quote:
      'I cannot recommend Claim Remedy enough. After the hurricane season I was overwhelmed, but they took everything off my plate and fought hard for me.',
    name: 'Miguel F.',
    city: 'Hollywood, FL',
    stars: 5,
    claimType: 'Storm Damage',
  },
]
