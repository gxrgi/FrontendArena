import { Trophy } from "lucide-react"

interface AchievementProps {
  title: string
  description: string
  unlocked: boolean
  date?: string
}

export function Achievement({ title, description, unlocked, date }: AchievementProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border p-4 text-center ${
        unlocked
          ? "bg-primary-50 border-primary-200 dark:bg-primary-900/20 dark:border-primary-800/30"
          : "bg-gray-100 border-gray-200 dark:bg-gray-800/20 dark:border-gray-700/30 opacity-60"
      }`}
    >
      <div
        className={`rounded-full p-3 mb-2 ${
          unlocked ? "bg-primary-100 dark:bg-primary-900/30" : "bg-gray-200 dark:bg-gray-700/30"
        }`}
      >
        <Trophy
          className={`h-6 w-6 ${
            unlocked ? "text-primary-600 dark:text-primary-400" : "text-gray-500 dark:text-gray-400"
          }`}
        />
      </div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
      {unlocked && date && <p className="text-xs mt-2 text-primary-600 dark:text-primary-400">Earned {date}</p>}
      {!unlocked && <p className="text-xs mt-2 text-gray-500">Locked</p>}
    </div>
  )
}

