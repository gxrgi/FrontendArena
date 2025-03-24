"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface KreonTypeCardProps {
  type: string
  color: "blue" | "green" | "purple" | "pink"
  subject: string
}

export function KreonTypeCard({ type, color, subject }: KreonTypeCardProps) {
  const colorClasses = {
    blue: "bg-blue-100 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800/50",
    green: "bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800/50",
    purple: "bg-purple-100 border-purple-200 dark:bg-purple-900/30 dark:border-purple-800/50",
    pink: "bg-pink-100 border-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col items-center space-y-3 rounded-xl border p-6 ${colorClasses[color]}`}
    >
      <div className="h-16 w-16 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=50&width=50"
          alt={`${type} Kreon`}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-bold text-indigo-950 dark:text-indigo-50">{type} Type</h3>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">{subject}</p>
    </motion.div>
  )
}

