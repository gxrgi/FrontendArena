"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

interface LeaderboardEntryProps {
  rank: number
  name: string
  xp: number
  level: number
  isCurrentUser: boolean
}

export function LeaderboardEntry({ rank, name, xp, level, isCurrentUser }: LeaderboardEntryProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className={`flex items-center p-3 rounded-lg ${isCurrentUser ? "bg-primary-50 dark:bg-primary-900/20" : ""}`}
    >
      <div className="w-8 text-center font-bold">{rank}</div>
      <div className="flex items-center flex-1 ml-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 text-lg font-medium">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">
            {name} {isCurrentUser && <span className="text-xs text-muted-foreground">(You)</span>}
          </p>
          <p className="text-xs text-muted-foreground">Level {level}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{xp.toLocaleString()} XP</p>
        {rank <= 3 && (
          <div className="flex justify-end mt-1">
            <Trophy
              className={`h-4 w-4 ${rank === 1 ? "text-yellow-500" : rank === 2 ? "text-gray-400" : "text-amber-500"}`}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

