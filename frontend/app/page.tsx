"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Spline from "@splinetool/react-spline";



export default function HomePage() {
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-indigo-950">
      {/* Hero Section */}

      <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-indigo-950 dark:text-indigo-100">
                  Learn, Play, Evolve with <span className="text-indigo-600 dark:text-indigo-400">KreonLearn</span>
                </h1>
                <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl">
                  Embark on an educational adventure where knowledge transforms into powerful Kreons. Complete
                  challenges, level up, and become a learning master!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600 transition-all"
                  onClick={() => router.push("/dashboard")}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Start Your Journey
                  <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${isHovering ? "translate-x-1" : ""}`} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-indigo-600 text-indigo-600 hover:bg-indigo-100 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
                  onClick={() => router.push("/modules")}
                >
                  Explore Modules
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-3xl"></div>
                <div className="spline-container relative h-full w-full">
                <Spline scene="https://prod.spline.design/DhIgJarnZCJ9Bnjw/scene.splinecode" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1 text-sm font-medium text-indigo-800 dark:text-indigo-300">
                Platform Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-indigo-950 dark:text-indigo-50">
                How Kreon Learning Works
              </h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover a new way of learning that combines education with the excitement of collecting and evolving
                creatures.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <FeatureCard
              title="Complete Challenges"
              description="Tackle subject-specific challenges to earn XP and evolve your Kreons."
              icon={<Star className="h-10 w-10 text-indigo-500" />}
            />
            <FeatureCard
              title="Collect Kreons"
              description="Each subject has unique Kreons that evolve as you master new concepts."
              icon={<Star className="h-10 w-10 text-indigo-500" />}
            />
            <FeatureCard
              title="Compete & Grow"
              description="Track your progress on leaderboards and challenge friends to learning battles."
              icon={<Star className="h-10 w-10 text-indigo-500" />}
            />
          </div>
        </div>
      </section>

      {/* Kreon Types Section */}
      <section className="py-12 md:py-24 bg-indigo-50 dark:bg-indigo-950/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-950 dark:text-indigo-50">
                Discover Kreon Types
              </h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Each subject has its own Kreon type with unique abilities and evolution paths.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <KreonTypeCard type="Tech" color="blue" subject="Coding & Computer Science" />
            <KreonTypeCard type="Nature" color="green" subject="Biology & Environmental Science" />
            <KreonTypeCard type="Logic" color="purple" subject="Math & Logic Puzzles" />
            <KreonTypeCard type="Creative" color="pink" subject="Arts & Literature" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-950 dark:text-indigo-50">
                Ready to Start Your Learning Adventure?
              </h2>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
                Join thousands of learners who are mastering new skills while having fun with Kreons.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600"
                onClick={() => router.push("/dashboard")}
              >
                Create Your Account
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-100 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
                onClick={() => router.push("/leaderboard")}
              >
                View Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description, icon }) {
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

function KreonTypeCard({ type, color, subject }) {
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

