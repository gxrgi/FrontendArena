"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight } from "lucide-react"

interface DailyQuestProps {
  title: string
  xp: number
  completed: boolean
  icon: ReactNode
}

export function DailyQuest({ title, xp, completed, icon }: DailyQuestProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative flex items-center justify-between rounded-xl border p-4 backdrop-blur-sm transition-all duration-300
        ${completed 
          ? "bg-green-50/50 border-green-200/50 dark:bg-green-900/10 dark:border-green-700/30" 
          : "bg-white/80 border-primary-100/50 hover:border-primary-200/50 dark:bg-primary-900/20 dark:border-primary-700/30 dark:hover:bg-primary-900/30"
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 via-transparent to-transparent dark:from-primary-900/10 rounded-xl" />
      <div className="relative flex items-center space-x-4">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className={`rounded-full p-2.5 shadow-sm transition-all duration-300 ${
            completed
              ? "bg-green-100 dark:bg-green-900/40 group-hover:shadow-green-200/50 dark:group-hover:shadow-green-800/30"
              : "bg-primary-50 dark:bg-primary-900/40 group-hover:shadow-primary-200/50 dark:group-hover:shadow-primary-800/30"
          }`}
        >
          {icon}
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-medium tracking-tight"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-sm font-medium ${
              completed
                ? "text-green-600 dark:text-green-400"
                : "text-primary/80 dark:text-primary-foreground/80"
            }`}
          >
            +{xp.toLocaleString()} XP
          </motion.p>
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} className="relative">
        <Button
          variant={completed ? "outline" : "default"}
          size="sm"
          disabled={completed}
          className={`transition-all duration-300 ${
            completed
              ? "border-green-200 text-green-700 dark:border-green-700 dark:text-green-400"
              : "shadow-sm hover:shadow-md"
          }`}
        >
          {completed ? (
            <>
              Completed
              <CheckCircle className="ml-1.5 h-4 w-4" />
            </>
          ) : (
            <>
              Start
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </>
          )}
        </Button>
      </motion.div>
    </motion.div>
  )
}

