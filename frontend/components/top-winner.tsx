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
    1: "bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-500 border-yellow-300/50 shadow-yellow-200/50 dark:from-yellow-700 dark:via-yellow-600 dark:to-yellow-400 dark:border-yellow-600/50 dark:shadow-yellow-700/30",
    2: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border-gray-300/50 shadow-gray-200/50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-400 dark:border-gray-600/50 dark:shadow-gray-700/30",
    3: "bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 border-amber-300/50 shadow-amber-200/50 dark:from-amber-700 dark:via-amber-600 dark:to-amber-400 dark:border-amber-600/50 dark:shadow-amber-700/30",
  }

  const rankPositions = {
    1: "order-2 scale-125 z-10",
    2: "order-1 scale-90",
    3: "order-3 scale-90",
  }

  const rankEmojis = {
    1: "👑",
    2: "🥈",
    3: "🥉",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex flex-col items-center ${rankPositions[rank]} transition-transform duration-300`}
    >
      <div className={`relative rounded-full border-4 ${rankColors[rank]} p-1.5 mb-3 shadow-lg backdrop-blur-sm`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="absolute -top-3 -right-3 rounded-full bg-primary text-primary-foreground w-9 h-9 flex items-center justify-center font-bold text-lg shadow-md"
        >
          {rankEmojis[rank]}
        </motion.div>
        <div className="h-28 w-28 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-inner transition-colors duration-300">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/70"
          >
            {name.charAt(0)}
          </motion.span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h3 className="font-bold text-lg tracking-tight mb-0.5">{name}</h3>
        <p className="text-sm font-medium text-muted-foreground/90">
          <span className="text-primary font-semibold">{xp.toLocaleString()}</span> XP • Level{" "}
          <span className="text-primary font-semibold">{level}</span>
        </p>
      </motion.div>
    </motion.div>
  )
}

