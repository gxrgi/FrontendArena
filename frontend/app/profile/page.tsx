"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, BookOpen, Calendar, Edit, FlameIcon as Fire, Medal, Share2, Star, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"

export default function ProfilePage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-primary-foreground">
                Y
              </div>
              <Button
                size="icon"
                variant="outline"
                className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-background"
              >
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit Profile</span>
              </Button>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold tracking-tight">YourUsername</h2>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share Profile</span>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <Badge
                  variant="outline"
                  className="bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-900/20 dark:text-primary-400 dark:border-primary-800/30"
                >
                  Level 12
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800/30"
                >
                  <Fire className="h-3 w-3 mr-1" />7 Day Streak
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/30"
                >
                  <Trophy className="h-3 w-3 mr-1" />
                  Top 10%
                </Badge>
              </div>
              <p className="text-muted-foreground mt-2">Joined January 2023</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button>Edit Profile</Button>
            <Button variant="outline">Share Profile</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <div className="md:col-span-5 space-y-4">
            <Tabs defaultValue="achievements" className="space-y-4">
              <TabsList>
                <TabsTrigger value="achievements" className="flex items-center gap-2">
                  <Medal className="h-4 w-4" />
                  Achievements
                </TabsTrigger>
                <TabsTrigger value="kreons" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Kreons
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Activity
                </TabsTrigger>
              </TabsList>

              <TabsContent value="achievements" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Achievements</CardTitle>
                    <CardDescription>Badges and rewards you've earned on your learning journey.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <Achievement
                        title="First Steps"
                        description="Complete your first challenge"
                        unlocked={true}
                        date="Jan 15, 2023"
                      />
                      <Achievement
                        title="Week Warrior"
                        description="Maintain a 7-day streak"
                        unlocked={true}
                        date="Feb 3, 2023"
                      />
                      <Achievement
                        title="Tech Wizard"
                        description="Master all beginner coding challenges"
                        unlocked={true}
                        date="Mar 12, 2023"
                      />
                      <Achievement
                        title="Quick Learner"
                        description="Complete 5 challenges in one day"
                        unlocked={true}
                        date="Mar 20, 2023"
                      />
                      <Achievement
                        title="Math Prodigy"
                        description="Score 100% on 3 math quizzes"
                        unlocked={true}
                        date="Apr 5, 2023"
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
                      <Achievement
                        title="Perfect Month"
                        description="Complete at least one challenge every day for a month"
                        unlocked={false}
                      />
                      <Achievement
                        title="Knowledge Explorer"
                        description="Complete challenges in all subject areas"
                        unlocked={false}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="kreons" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Kreon Collection</CardTitle>
                    <CardDescription>All the Kreons you've collected on your learning journey.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <KreonCard name="Byteon" type="Tech" level={3} progress={80} color="blue" />
                      <KreonCard name="Florabit" type="Nature" level={2} progress={45} color="green" />
                      <KreonCard name="Logicron" type="Logic" level={4} progress={20} color="purple" />
                      <KreonCard name="Artiseo" type="Creative" level={1} progress={90} color="pink" />
                      <KreonCard name="Datamon" type="Tech" level={2} progress={60} color="blue" />
                      <KreonCard name="Quantix" type="Logic" level={3} progress={30} color="purple" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your learning journey over the past weeks.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ActivityEntry
                        title="Completed 'Web Development Fundamentals' challenge"
                        date="Today"
                        xp={75}
                        icon={<BookOpen className="h-5 w-5 text-blue-500" />}
                      />
                      <ActivityEntry
                        title="Evolved 'Byteon' to Level 3"
                        date="Yesterday"
                        xp={150}
                        icon={<Star className="h-5 w-5 text-yellow-500" />}
                      />
                      <ActivityEntry
                        title="Completed 'Algebra Fundamentals' quiz"
                        date="2 days ago"
                        xp={50}
                        icon={<BookOpen className="h-5 w-5 text-purple-500" />}
                      />
                      <ActivityEntry
                        title="Unlocked 'Tech Wizard' achievement"
                        date="3 days ago"
                        xp={100}
                        icon={<Award className="h-5 w-5 text-green-500" />}
                      />
                      <ActivityEntry
                        title="Completed 'Biology Basics' challenge"
                        date="5 days ago"
                        xp={60}
                        icon={<BookOpen className="h-5 w-5 text-green-500" />}
                      />
                      <ActivityEntry
                        title="Reached Level 12"
                        date="1 week ago"
                        xp={200}
                        icon={<Award className="h-5 w-5 text-indigo-500" />}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total XP</span>
                  <span className="font-medium">3,240</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Challenges Completed</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kreons Collected</span>
                  <span className="font-medium">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Streak</span>
                  <span className="font-medium">7 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Longest Streak</span>
                  <span className="font-medium">14 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Achievements</span>
                  <span className="font-medium">5/12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Global Rank</span>
                  <span className="font-medium">#7</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subject Mastery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tech</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Nature</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Logic</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Creative</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 28 }).map((_, i) => {
                    // Random activity level: 0 = none, 1 = low, 2 = medium, 3 = high
                    const activityLevel = Math.floor(Math.random() * 4)
                    const bgColor =
                      activityLevel === 0
                        ? "bg-gray-100 dark:bg-gray-800"
                        : activityLevel === 1
                          ? "bg-green-200 dark:bg-green-900/50"
                          : activityLevel === 2
                            ? "bg-green-300 dark:bg-green-800/70"
                            : "bg-green-500 dark:bg-green-700"

                    return (
                      <div
                        key={i}
                        className={`h-4 w-full rounded-sm ${bgColor}`}
                        title={`${activityLevel * 25}% activity`}
                      />
                    )
                  })}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>4 weeks ago</span>
                  <span>Today</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

function Achievement({ title, description, unlocked, date }) {
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
      {unlocked && date && <p className="text-xs mt-2 text-primary-600 dark:text-primary-400">Earned {date}</p>}
      {!unlocked && <p className="text-xs mt-2 text-gray-500">Locked</p>}
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

function ActivityEntry({ title, date, xp, icon }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-primary-50 p-2 dark:bg-primary-900/20">{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">+{xp} XP</p>
      </div>
    </div>
  )
}

