"use client"

import { motion } from "framer-motion"

interface TopWinnerProps {
  rank: number
  name: string
  xp: number
  level: number
}

export function TopWinner({ rank, name, xp, level }: TopWinnerProps) {
  const rankColors = {
    1: "bg-gradient-to-b from-yellow-200 to-yellow-500 border-yellow-300 dark:from-yellow-700 dark:to-yellow-400 dark:border-yellow-600",
    2: "bg-gradient-to-b from-gray-200 to-gray-400 border-gray-300 dark:from-gray-700 dark:to-gray-400 dark:border-gray-600",
    3: "bg-gradient-to-b from-amber-200 to-amber-500 border-amber-300 dark:from-amber-700 dark:to-amber-400 dark:border-amber-600",
  }

  const rankPositions = {
    1: "order-2 scale-110 z-10",
    2: "order-1",
    3: "order-3",
  }

  return (
    <motion.div whileHover={{ y: -10 }} className={`flex flex-col items-center ${rankPositions[rank]}`}>
      <div className={`relative rounded-full border-4 ${rankColors[rank]} p-1 mb-2`}>
        <div className="absolute -top-2 -right-2 rounded-full bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-lg">
          {rank}
        </div>
        <div className="h-24 w-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
          <span className="text-3xl font-bold">{name.charAt(0)}</span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">
          {xp.toLocaleString()} XP • Level {level}
        </p>
      </div>
    </motion.div>
  )
}

