import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface DailyQuestProps {
  title: string
  xp: number
  completed: boolean
  icon: ReactNode
}

export function DailyQuest({ title, xp, completed, icon }: DailyQuestProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-primary-50 p-2 dark:bg-primary-900/20">{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">+{xp} XP</p>
        </div>
      </div>
      <Button variant={completed ? "outline" : "default"} size="sm" disabled={completed}>
        {completed ? "Completed" : "Start"}
      </Button>
    </div>
  )
}

