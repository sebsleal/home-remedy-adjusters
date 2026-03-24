import CounterStat from '@/components/ui/CounterStat'

const stats = [
  { target: 12, prefix: '$', suffix: 'M+', label: 'Recovered for clients' },
  { target: 500, prefix: '', suffix: '+', label: 'Claims handled' },
  { target: 98, prefix: '', suffix: '%', label: 'Client satisfaction' },
  { target: 24, prefix: '', suffix: 'hr', label: 'Response time' },
]

export default function StatsBar() {
  return (
    <section className="bg-teal-900 border-y border-teal-800">
      <div className="container-cra py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-x-0 lg:divide-x divide-teal-800">
          {stats.map((s) => (
            <CounterStat
              key={s.label}
              target={s.target}
              prefix={s.prefix}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
