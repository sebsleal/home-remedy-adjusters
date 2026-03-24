import { cn } from '@/lib/utils'

type GlassCardProps = {
  children: React.ReactNode
  className?: string
  goldBorder?: boolean
  as?: 'div' | 'article' | 'section'
}

export default function GlassCard({
  children,
  className,
  goldBorder = true,
  as: Tag = 'div',
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        'rounded-2xl p-6',
        goldBorder ? 'glass' : 'bg-teal-850/60 border border-teal-800',
        className
      )}
    >
      {children}
    </Tag>
  )
}
