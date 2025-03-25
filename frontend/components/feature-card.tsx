"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col items-center space-y-3 rounded-xl border border-indigo-100/50 bg-white/80 p-6 backdrop-blur-sm shadow-lg hover:shadow-xl dark:border-indigo-800/30 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent dark:from-indigo-900/20 rounded-xl" />
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 p-3.5 shadow-md dark:from-indigo-800 dark:to-indigo-900 dark:shadow-indigo-900/30 group-hover:shadow-indigo-200/50 dark:group-hover:shadow-indigo-800/30 transition-all duration-300"
      >
        {icon}
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="relative text-xl font-bold text-indigo-950 dark:text-indigo-50 tracking-tight"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative text-center text-gray-600/90 dark:text-gray-300 leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

