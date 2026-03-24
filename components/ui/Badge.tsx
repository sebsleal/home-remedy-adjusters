import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'gold' | 'teal' | 'danger'
  pulse?: boolean
  className?: string
}

export default function Badge({
  children,
  variant = 'gold',
  pulse = false,
  className,
}: BadgeProps) {
  const variants = {
    gold: 'border border-gold/40 text-gold bg-gold/10',
    teal: 'border border-teal-800 text-ivory bg-teal-850',
    danger: 'border border-danger/40 text-danger bg-danger/10',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-inter text-[11px] uppercase tracking-label px-3 py-1 rounded-full',
        variants[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
        </span>
      )}
      {children}
    </span>
  )
}
