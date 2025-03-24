import type { ReactNode } from "react"

interface ActivityEntryProps {
  title: string
  date: string
  xp: number
  icon: ReactNode
}

export function ActivityEntry({ title, date, xp, icon }: ActivityEntryProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-primary-50 p-2 dark:bg-primary-900/20">{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">+{xp} XP</p>
      </div>
    </div>
  )
}

