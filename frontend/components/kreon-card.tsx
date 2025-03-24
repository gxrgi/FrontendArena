"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface KreonCardProps {
  name: string
  type: string
  level: number
  progress: number
  color: "blue" | "green" | "purple" | "pink"
}

export function KreonCard({ name, type, level, progress, color }: KreonCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/30",
    green: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800/30",
    purple: "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800/30",
    pink: "bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-800/30",
  }

  return (
    <motion.div whileHover={{ y: -5 }} className={`rounded-xl border p-4 ${colorClasses[color]}`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {type} Type • Level {level}
          </p>
        </div>
        <div className="rounded-full bg-white/80 dark:bg-gray-800/80 p-1">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt={name}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-xs mb-1">
          <span>Evolution Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <div className="mt-4 flex justify-between">
        <Button variant="ghost" size="sm">
          Details
        </Button>
        {progress >= 90 && (
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            Evolve
          </Button>
        )}
      </div>
    </motion.div>
  )
}

