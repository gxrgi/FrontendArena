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
    <motion.div whileHover={{ y: -5 }} className="h-full">
      <Card className={`h-full ${locked ? "opacity-70" : ""}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="rounded-lg bg-primary-50 p-2 dark:bg-primary-900/20">{icon}</div>
            {locked && (
              <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                <Lock className="h-4 w-4 text-gray-500" />
              </div>
            )}
          </div>
          <CardTitle className="mt-2">{title}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{level}</Badge>
            <span className={`text-xs ${kreonTypeColors[kreonType]}`}>{kreonType} Type</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {progress > 0 && (
            <div className="mt-2">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          {completed ? (
            <div className="flex items-center text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span className="text-sm">Completed</span>
            </div>
          ) : (
            <div className="flex items-center text-muted-foreground">
              <Star className="h-4 w-4 mr-1" />
              <span className="text-sm">{locked ? "Locked" : progress > 0 ? "In Progress" : "Not Started"}</span>
            </div>
          )}
          <Button size="sm" disabled={locked} variant={completed ? "outline" : "default"}>
            {progress > 0 && !completed ? "Continue" : "Start"}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

