import { Info, AlertTriangle, Lightbulb } from 'lucide-react'

const styles = {
  info: { icon: Info, cls: 'border-blue-500 bg-blue-500/10' },
  warning: { icon: AlertTriangle, cls: 'border-amber-500 bg-amber-500/10' },
  tip: { icon: Lightbulb, cls: 'border-green-500 bg-green-500/10' },
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: keyof typeof styles
  title?: string
  children: React.ReactNode
}) {
  const { icon: Icon, cls } = styles[type]
  return (
    <div className={`not-prose my-6 flex gap-3 rounded-lg border-l-4 p-4 ${cls}`}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div className="text-sm leading-relaxed">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        {children}
      </div>
    </div>
  )
}