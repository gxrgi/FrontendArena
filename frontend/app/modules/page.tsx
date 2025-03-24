"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { BookOpen, CheckCircle, ChevronRight, Code, FlaskRoundIcon as Flask, Lock, PenTool, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"

export default function ModulesPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Learning Modules</h2>
        </div>

        <Tabs defaultValue="tech" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tech" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Tech Zone</span>
            </TabsTrigger>
            <TabsTrigger value="nature" className="flex items-center gap-2">
              <Flask className="h-4 w-4" />
              <span className="hidden sm:inline">Nature Zone</span>
            </TabsTrigger>
            <TabsTrigger value="logic" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Logic Zone</span>
            </TabsTrigger>
            <TabsTrigger value="creative" className="flex items-center gap-2">
              <PenTool className="h-4 w-4" />
              <span className="hidden sm:inline">Creative Zone</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tech" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ModuleCard
                title="Introduction to Coding"
                description="Learn the basics of programming with interactive challenges."
                level="Beginner"
                progress={100}
                completed={true}
                kreonType="Tech"
                icon={<Code className="h-5 w-5" />}
              />
              <ModuleCard
                title="Web Development Fundamentals"
                description="Master HTML, CSS, and JavaScript through hands-on projects."
                level="Intermediate"
                progress={75}
                completed={false}
                kreonType="Tech"
                icon={<Code className="h-5 w-5" />}
              />
              <ModuleCard
                title="Data Structures"
                description="Explore arrays, linked lists, trees, and more."
                level="Advanced"
                progress={30}
                completed={false}
                kreonType="Tech"
                icon={<Code className="h-5 w-5" />}
              />
              <ModuleCard
                title="Mobile App Development"
                description="Build your first mobile application with React Native."
                level="Intermediate"
                progress={0}
                completed={false}
                kreonType="Tech"
                icon={<Code className="h-5 w-5" />}
                locked={true}
              />
              <ModuleCard
                title="Game Development Basics"
                description="Create simple games while learning programming concepts."
                level="Intermediate"
                progress={0}
                completed={false}
                kreonType="Tech"
                icon={<Code className="h-5 w-5" />}
              />
              <ModuleCard
                title="AI & Machine Learning"
                description="Introduction to artificial intelligence concepts."
                level="Advanced"
                progress={0}
                completed={false}
                kreonType="Tech"
                icon={<Code className="h-5 w-5" />}
                locked={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="nature" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ModuleCard
                title="Biology Basics"
                description="Explore the fundamentals of living organisms."
                level="Beginner"
                progress={90}
                completed={false}
                kreonType="Nature"
                icon={<Flask className="h-5 w-5" />}
              />
              <ModuleCard
                title="Ecosystems"
                description="Learn about different ecosystems and their importance."
                level="Intermediate"
                progress={40}
                completed={false}
                kreonType="Nature"
                icon={<Flask className="h-5 w-5" />}
              />
              <ModuleCard
                title="Environmental Science"
                description="Understand environmental challenges and solutions."
                level="Intermediate"
                progress={0}
                completed={false}
                kreonType="Nature"
                icon={<Flask className="h-5 w-5" />}
              />
              <ModuleCard
                title="Genetics"
                description="Dive into DNA, genes, and heredity."
                level="Advanced"
                progress={0}
                completed={false}
                kreonType="Nature"
                icon={<Flask className="h-5 w-5" />}
                locked={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="logic" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ModuleCard
                title="Basic Mathematics"
                description="Master fundamental math concepts through interactive problems."
                level="Beginner"
                progress={100}
                completed={true}
                kreonType="Logic"
                icon={<BookOpen className="h-5 w-5" />}
              />
              <ModuleCard
                title="Algebra Fundamentals"
                description="Learn equations, functions, and algebraic thinking."
                level="Intermediate"
                progress={60}
                completed={false}
                kreonType="Logic"
                icon={<BookOpen className="h-5 w-5" />}
              />
              <ModuleCard
                title="Geometry"
                description="Explore shapes, angles, and spatial relationships."
                level="Intermediate"
                progress={0}
                completed={false}
                kreonType="Logic"
                icon={<BookOpen className="h-5 w-5" />}
              />
              <ModuleCard
                title="Logic Puzzles"
                description="Sharpen your mind with challenging puzzles."
                level="All Levels"
                progress={25}
                completed={false}
                kreonType="Logic"
                icon={<BookOpen className="h-5 w-5" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="creative" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ModuleCard
                title="Creative Writing"
                description="Develop your storytelling and writing skills."
                level="Beginner"
                progress={50}
                completed={false}
                kreonType="Creative"
                icon={<PenTool className="h-5 w-5" />}
              />
              <ModuleCard
                title="Digital Art Basics"
                description="Learn the fundamentals of digital illustration."
                level="Beginner"
                progress={0}
                completed={false}
                kreonType="Creative"
                icon={<PenTool className="h-5 w-5" />}
              />
              <ModuleCard
                title="Music Theory"
                description="Understand the building blocks of music."
                level="Intermediate"
                progress={0}
                completed={false}
                kreonType="Creative"
                icon={<PenTool className="h-5 w-5" />}
                locked={true}
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Challenge */}
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-indigo-200 dark:border-indigo-800/30">
          <CardHeader>
            <CardTitle>Featured Challenge</CardTitle>
            <CardDescription>Complete this special challenge to earn bonus XP and a rare Kreon!</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative h-[150px] w-[150px] flex-shrink-0">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Featured Kreon"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Cross-Discipline Challenge: Tech meets Nature</h3>
              <p className="text-muted-foreground mb-4">
                Build a simulation that models an ecosystem using programming concepts. Earn both Tech and Nature type
                Kreons!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/30"
                >
                  Tech
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/30"
                >
                  Nature
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800/30"
                >
                  Special Event
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button>Start Challenge</Button>
                <p className="text-sm text-muted-foreground">+200 XP Bonus</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

function ModuleCard({ title, description, level, progress, completed, kreonType, icon, locked = false }) {
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

