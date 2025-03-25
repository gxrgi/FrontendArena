"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { CheckCircle, ChevronRight, Lock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ModuleCardProps {
  title: string
  description: string
  level: string
  progress: number
  completed: boolean
  kreonType: string
  icon: ReactNode
  locked?: boolean
}

export function ModuleCard({
  title,
  description,
  level,
  progress,
  completed,
  kreonType,
  icon,
  locked = false,
}: ModuleCardProps) {
  const kreonTypeColors = {
    Tech: "text-blue-600 dark:text-blue-400",
    Nature: "text-green-600 dark:text-green-400",
    Logic: "text-purple-600 dark:text-purple-400",
    Creative: "text-pink-600 dark:text-pink-400",
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className={`h-full relative overflow-hidden backdrop-blur-sm border-opacity-50 ${
        locked ? "opacity-70" : ""
      } transition-all duration-300 hover:shadow-lg hover:border-primary/50`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="rounded-lg bg-primary-50 p-2.5 shadow-sm dark:bg-primary-900/20 transition-colors duration-300 hover:bg-primary-100 dark:hover:bg-primary-900/30"
            >
              {icon}
            </motion.div>
            {locked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-full bg-gray-100 p-1.5 shadow-sm dark:bg-gray-800/90"
              >
                <Lock className="h-4 w-4 text-gray-500" />
              </motion.div>
            )}
          </div>
          <CardTitle className="mt-3 text-xl font-semibold tracking-tight">{title}</CardTitle>
          <div className="flex items-center gap-2 mt-1.5">
            <Badge variant="outline" className="rounded-md font-medium">
              {level}
            </Badge>
            <span className={`text-xs font-medium ${kreonTypeColors[kreonType]}`}>
              {kreonType} Type
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground/90 mb-4 leading-relaxed">
            {description}
          </p>
          {progress > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2"
            >
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress
                value={progress}
                className="h-2.5 rounded-full"
              />
            </motion.div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          {completed ? (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="flex items-center text-green-600 dark:text-green-400"
            >
              <CheckCircle className="h-4 w-4 mr-1.5" />
              <span className="text-sm font-medium">Completed</span>
            </motion.div>
          ) : (
            <div className="flex items-center text-muted-foreground">
              <Star className="h-4 w-4 mr-1.5" />
              <span className="text-sm font-medium">
                {locked ? "Locked" : progress > 0 ? "In Progress" : "Not Started"}
              </span>
            </div>
          )}
          <Button
            size="sm"
            disabled={locked}
            variant={completed ? "outline" : "default"}
            className="transition-all duration-300 hover:scale-105"
          >
            {progress > 0 && !completed ? "Continue" : "Start"}
            <ChevronRight className="ml-1.5 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

