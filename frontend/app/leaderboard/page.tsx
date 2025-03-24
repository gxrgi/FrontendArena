"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Calendar, ChevronDown, Filter, Search, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AppLayout } from "@/components/app-layout"

export default function LeaderboardPage() {
  const [timeFilter, setTimeFilter] = useState("All Time")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
                className="w-full pl-8 sm:w-[200px] md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  <Filter className="h-4 w-4 mr-1" />
                  {timeFilter}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTimeFilter("All Time")}>All Time</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTimeFilter("This Month")}>This Month</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTimeFilter("This Week")}>This Week</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTimeFilter("Today")}>Today</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Top 3 Winners */}
        <div className="grid gap-4 md:grid-cols-3">
          <TopWinner rank={2} name="TechWizard" xp={4890} level={17} />
          <TopWinner rank={1} name="AlexMaster" xp={5240} level={18} />
          <TopWinner rank={3} name="LearningHero" xp={4650} level={16} />
        </div>

        <Tabs defaultValue="global" className="space-y-4">
          <TabsList>
            <TabsTrigger value="global" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Global
            </TabsTrigger>
            <TabsTrigger value="friends" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Friends
            </TabsTrigger>
            <TabsTrigger value="monthly" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Monthly Challenge
            </TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Global Rankings</CardTitle>
                <CardDescription>See how you rank against all learners on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <LeaderboardEntry rank={1} name="AlexMaster" xp={5240} level={18} isCurrentUser={false} />
                  <LeaderboardEntry rank={2} name="TechWizard" xp={4890} level={17} isCurrentUser={false} />
                  <LeaderboardEntry rank={3} name="LearningHero" xp={4650} level={16} isCurrentUser={false} />
                  <LeaderboardEntry rank={4} name="CodeNinja" xp={4320} level={15} isCurrentUser={false} />
                  <LeaderboardEntry rank={5} name="BrainPower" xp={4100} level={14} isCurrentUser={false} />
                  <LeaderboardEntry rank={6} name="KreonMaster" xp={3950} level={14} isCurrentUser={false} />
                  <LeaderboardEntry rank={7} name="YourUsername" xp={3240} level={12} isCurrentUser={true} />
                  <LeaderboardEntry rank={8} name="LearningQueen" xp={3100} level={11} isCurrentUser={false} />
                  <LeaderboardEntry rank={9} name="KnowledgeSeeker" xp={2980} level={11} isCurrentUser={false} />
                  <LeaderboardEntry rank={10} name="WisdomHunter" xp={2850} level={10} isCurrentUser={false} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="friends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Friends Rankings</CardTitle>
                <CardDescription>Compare your progress with friends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <LeaderboardEntry rank={1} name="BestFriend1" xp={3800} level={13} isCurrentUser={false} />
                  <LeaderboardEntry rank={2} name="YourUsername" xp={3240} level={12} isCurrentUser={true} />
                  <LeaderboardEntry rank={3} name="ClassmateA" xp={2950} level={11} isCurrentUser={false} />
                  <LeaderboardEntry rank={4} name="StudyBuddy" xp={2780} level={10} isCurrentUser={false} />
                  <LeaderboardEntry rank={5} name="TeammatePro" xp={2450} level={9} isCurrentUser={false} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>March Challenge: Tech Masters</CardTitle>
                <CardDescription>
                  Special monthly challenge rankings - Complete tech modules to earn points
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <LeaderboardEntry rank={1} name="TechWizard" xp={1240} level={17} isCurrentUser={false} />
                  <LeaderboardEntry rank={2} name="CodeNinja" xp={1180} level={15} isCurrentUser={false} />
                  <LeaderboardEntry rank={3} name="AlexMaster" xp={980} level={18} isCurrentUser={false} />
                  <LeaderboardEntry rank={4} name="YourUsername" xp={820} level={12} isCurrentUser={true} />
                  <LeaderboardEntry rank={5} name="DevMaster" xp={750} level={13} isCurrentUser={false} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#7</div>
              <p className="text-xs text-muted-foreground">Global Ranking</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">XP to Next Rank</CardTitle>
              <Award className="h-4 w-4 text-indigo-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">710 XP</div>
              <p className="text-xs text-muted-foreground">To reach rank #6</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top 10% of Users</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Top 8%</div>
              <p className="text-xs text-muted-foreground">Of all learners</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}

function TopWinner({ rank, name, xp, level }) {
  const rankColors = {
    1: "bg-gradient-to-b from-yellow-200 to-yellow-500 border-yellow-300 dark:from-yellow-700 dark:to-yellow-400 dark:border-yellow-600",
    2: "bg-gradient-to-b from-gray-200 to-gray-400 border-gray-300 dark:from-gray-700 dark:to-gray-400 dark:border-gray-600",
    3: "bg-gradient-to-b from-amber-200 to-amber-500 border-amber-300 dark:from-amber-700 dark:to-amber-400 dark:border-amber-600",
  }

  const rankPositions = {
    1: "order-2 scale-110 z-10",
    2: "order-1",
    3: "order-3",
  }

  return (
    <motion.div whileHover={{ y: -10 }} className={`flex flex-col items-center ${rankPositions[rank]}`}>
      <div className={`relative rounded-full border-4 ${rankColors[rank]} p-1 mb-2`}>
        <div className="absolute -top-2 -right-2 rounded-full bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-lg">
          {rank}
        </div>
        <div className="h-24 w-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
          <span className="text-3xl font-bold">{name.charAt(0)}</span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">
          {xp.toLocaleString()} XP • Level {level}
        </p>
      </div>
    </motion.div>
  )
}

function LeaderboardEntry({ rank, name, xp, level, isCurrentUser }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className={`flex items-center p-3 rounded-lg ${isCurrentUser ? "bg-primary-50 dark:bg-primary-900/20" : ""}`}
    >
      <div className="w-8 text-center font-bold">{rank}</div>
      <div className="flex items-center flex-1 ml-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 text-lg font-medium">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">
            {name} {isCurrentUser && <span className="text-xs text-muted-foreground">(You)</span>}
          </p>
          <p className="text-xs text-muted-foreground">Level {level}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{xp.toLocaleString()} XP</p>
        {rank <= 3 && (
          <div className="flex justify-end mt-1">
            <Trophy
              className={`h-4 w-4 ${rank === 1 ? "text-yellow-500" : rank === 2 ? "text-gray-400" : "text-amber-500"}`}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

