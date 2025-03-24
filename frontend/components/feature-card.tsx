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
      whileHover={{ y: -5 }}
      className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-6 shadow-sm dark:border-indigo-800 dark:bg-indigo-900/40"
    >
      <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-800/50">{icon}</div>
      <h3 className="text-xl font-bold text-indigo-950 dark:text-indigo-50">{title}</h3>
      <p className="text-center text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}

