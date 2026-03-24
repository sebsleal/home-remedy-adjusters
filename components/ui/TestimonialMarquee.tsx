import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

function TestimonialCard({ quote, name, city, stars, claimType }: (typeof testimonials)[0]) {
  return (
    <div className="glass rounded-2xl p-6 w-[320px] md:w-[360px] flex-shrink-0 flex flex-col gap-4">
      <div className="flex gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={12} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="font-inter font-300 text-[13px] text-ivory leading-relaxed line-clamp-4">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-teal-800">
        <div>
          <p className="font-inter font-500 text-[12px] text-off-white">{name}</p>
          <p className="font-inter font-300 text-[11px] text-ivory/40">{city}</p>
        </div>
        {claimType && (
          <span className="font-inter font-400 text-[10px] uppercase tracking-label text-gold/60 bg-gold/8 border border-gold/15 px-2.5 py-1 rounded-full">
            {claimType}
          </span>
        )}
      </div>
    </div>
  )
}

export default function TestimonialMarquee() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <div className="overflow-hidden gradient-mask-x group">
      <div
        className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ width: 'max-content' }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  )
}
