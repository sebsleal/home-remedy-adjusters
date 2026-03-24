import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {label && (
        <span className="label">{label}</span>
      )}
      <h2
        className={cn(
          'font-cormorant font-600 tracking-heading uppercase leading-tight',
          'text-[clamp(28px,3.5vw,48px)]',
          light ? 'text-teal-950' : 'text-off-white'
        )}
      >
        {title}
      </h2>
      <span className={cn('block w-10 h-px', light ? 'bg-gold-soft' : 'bg-gold')} />
      {subtitle && (
        <p
          className={cn(
            'font-inter font-300 text-[15px] leading-relaxed max-w-xl',
            light ? 'text-teal-850' : 'text-ivory'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
