"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, BookOpen, ChevronRight, Clock, FlameIcon as Fire, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppLayout } from "@/components/app-layout"

export default function DashboardPage() {
  const [progress, setProgress] = useState(65)
  const [streakDays, setStreakDays] = useState(7)

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <Fire className="h-4 w-4" />
              <span>{streakDays} day streak</span>
            </div>
          </div>
        </div>

        {/* User Progress Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Level</CardTitle>
              <Award className="h-4 w-4 text-indigo-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Level 12</div>
              <p className="text-xs text-muted-foreground">Intermediate Explorer</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">XP Points</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,240 XP</div>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Next Level</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Kreons Collected</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18/42</div>
              <p className="text-xs text-muted-foreground">4 ready to evolve</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Challenges</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Across 4 subjects</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="daily" className="space-y-4">
          <TabsList>
            <TabsTrigger value="daily">Daily Quests</TabsTrigger>
            <TabsTrigger value="kreons">My Kreons</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Learning Quests</CardTitle>
                <CardDescription>Complete these quests to maintain your streak and earn bonus XP.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DailyQuest
                  title="Complete a Tech Module Challenge"
                  xp={50}
                  completed={true}
                  icon={<Clock className="h-5 w-5 text-blue-500" />}
                />
                <DailyQuest
                  title="Practice Math Problems"
                  xp={75}
                  completed={false}
                  icon={<Clock className="h-5 w-5 text-purple-500" />}
                />
                <DailyQuest
                  title="Review Biology Flashcards"
                  xp={40}
                  completed={false}
                  icon={<Clock className="h-5 w-5 text-green-500" />}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="kreons" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <KreonCard name="Byteon" type="Tech" level={3} progress={80} color="blue" />
              <KreonCard name="Florabit" type="Nature" level={2} progress={45} color="green" />
              <KreonCard name="Logicron" type="Logic" level={4} progress={20} color="purple" />
              <KreonCard name="Artiseo" type="Creative" level={1} progress={90} color="pink" />
              <KreonCard name="Datamon" type="Tech" level={2} progress={60} color="blue" />
              <KreonCard name="Quantix" type="Logic" level={3} progress={30} color="purple" />
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Badges and rewards you've earned on your learning journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Achievement title="First Steps" description="Complete your first challenge" unlocked={true} />
                  <Achievement title="Week Warrior" description="Maintain a 7-day streak" unlocked={true} />
                  <Achievement
                    title="Tech Wizard"
                    description="Master all beginner coding challenges"
                    unlocked={true}
                  />
                  <Achievement title="Evolution Expert" description="Evolve 5 different Kreons" unlocked={false} />
                  <Achievement title="Quiz Champion" description="Score 100% on 10 quizzes" unlocked={false} />
                  <Achievement
                    title="Subject Master"
                    description="Complete all challenges in one subject"
                    unlocked={false}
                  />
                  <Achievement
                    title="Leaderboard Legend"
                    description="Reach the top 10 on the leaderboard"
                    unlocked={false}
                  />
                  <Achievement title="Kreon Collector" description="Collect 20 different Kreons" unlocked={false} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Leaderboard Preview */}
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div>
              <CardTitle>Leaderboard</CardTitle>
              <CardDescription>See how you rank against other learners</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto" asChild>
              <Link href="/leaderboard">
                View Full Leaderboard
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <LeaderboardEntry rank={1} name="AlexMaster" xp={5240} level={18} isCurrentUser={false} />
              <LeaderboardEntry rank={2} name="TechWizard" xp={4890} level={17} isCurrentUser={false} />
              <LeaderboardEntry rank={3} name="LearningHero" xp={4650} level={16} isCurrentUser={false} />
              <LeaderboardEntry rank={7} name="YourUsername" xp={3240} level={12} isCurrentUser={true} />
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

function DailyQuest({ title, xp, completed, icon }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-primary-50 p-2 dark:bg-primary-900/20">{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">+{xp} XP</p>
        </div>
      </div>
      <Button variant={completed ? "outline" : "default"} size="sm" disabled={completed}>
        {completed ? "Completed" : "Start"}
      </Button>
    </div>
  )
}

function KreonCard({ name, type, level, progress, color }) {
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

function Achievement({ title, description, unlocked }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border p-4 text-center ${
        unlocked
          ? "bg-primary-50 border-primary-200 dark:bg-primary-900/20 dark:border-primary-800/30"
          : "bg-gray-100 border-gray-200 dark:bg-gray-800/20 dark:border-gray-700/30 opacity-60"
      }`}
    >
      <div
        className={`rounded-full p-3 mb-2 ${
          unlocked ? "bg-primary-100 dark:bg-primary-900/30" : "bg-gray-200 dark:bg-gray-700/30"
        }`}
      >
        <Trophy
          className={`h-6 w-6 ${
            unlocked ? "text-primary-600 dark:text-primary-400" : "text-gray-500 dark:text-gray-400"
          }`}
        />
      </div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
      {!unlocked && <p className="text-xs mt-2 text-gray-500">Locked</p>}
    </div>
  )
}

function LeaderboardEntry({ rank, name, xp, level, isCurrentUser }) {
  return (
    <div className={`flex items-center p-2 rounded-lg ${isCurrentUser ? "bg-primary-50 dark:bg-primary-900/20" : ""}`}>
      <div className="w-8 text-center font-bold">{rank}</div>
      <div className="flex items-center flex-1 ml-4">
        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">
            {name} {isCurrentUser && <span className="text-xs text-muted-foreground">(You)</span>}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{xp.toLocaleString()} XP</p>
        <p className="text-xs text-muted-foreground">Level {level}</p>
      </div>
    </div>
  )
}

