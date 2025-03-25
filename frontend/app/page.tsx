"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Spline from "@splinetool/react-spline";
import Head from "next/head";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface KreonTypeCardProps {
  type: string;
  color: 'blue' | 'green' | 'purple' | 'pink';
  subject: string;
  pic: string;
}

export default function HomePage() {
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className="fixed top-0 left-0 w-screen h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-indigo-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1 
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-indigo-950 dark:text-indigo-100"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.span
                      whileHover={{ 
                        color: "#4f46e5",
                        rotate: 2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      Learn,
                    </motion.span>{" "}
                    <motion.span
                      whileHover={{ 
                        color: "#10b981",
                        rotate: -2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      Play,
                    </motion.span>{" "}
                    <motion.span
                      whileHover={{ 
                        color: "#8b5cf6",
                        rotate: 2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      Evolve
                    </motion.span>{" "}
                    with{" "}
                    <motion.span 
                      className="text-indigo-600 dark:text-indigo-400"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      Kreons
                    </motion.span>
                  </motion.h1>
                  <motion.p 
                    className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl"
                    whileHover={{ 
                      x: 5,
                      color: "#4f46e5",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Embark on an educational adventure where knowledge transforms into powerful Kreons. Complete
                    challenges, level up, and become a learning master!
                  </motion.p>
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
                <motion.div 
                  className="inline-block rounded-lg bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1 text-sm font-medium text-indigo-800 dark:text-indigo-300"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 3,
                    transition: { duration: 0.2 }
                  }}
                >
                  Platform Features
                </motion.div>
                <motion.h2 
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-indigo-950 dark:text-indigo-50"
                  whileHover={{ 
                    scale: 1.02,
                    color: "#4f46e5",
                    transition: { duration: 0.2 }
                  }}
                >
                  How Kreon Learning Works
                </motion.h2>
                <motion.p 
                  className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  whileHover={{ 
                    x: 5,
                    color: "#10b981",
                    transition: { duration: 0.2 }
                  }}
                >
                  Discover a new way of learning that combines education with the excitement of collecting and evolving
                  creatures.
                </motion.p>
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
                <motion.h2 
                  className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-950 dark:text-indigo-50"
                  whileHover={{ 
                    scale: 1.02,
                    color: "#8b5cf6",
                    transition: { duration: 0.2 }
                  }}
                >
                  Discover Kreon Types
                </motion.h2>
                <motion.p 
                  className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  whileHover={{ 
                    x: 5,
                    color: "#ec4899",
                    transition: { duration: 0.2 }
                  }}
                >
                  Each subject has its own Kreon type with unique abilities and evolution paths.
                </motion.p>
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

        {/* Interactive 3D Section */}
        <section className="py-12 md:py-24 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h2 
                  className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-950 dark:text-indigo-50"
                  whileHover={{ 
                    scale: 1.02,
                    color: "#4f46e5",
                    transition: { duration: 0.2 }
                  }}
                >
                  Experience Interactive Learning
                </motion.h2>
                <motion.p 
                  className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  whileHover={{ 
                    x: 5,
                    color: "#10b981",
                    transition: { duration: 0.2 }
                  }}
                >
                  Dive into our immersive 3D learning environment
                </motion.p>
              </div>
            </div>
            <div className="relative h-[500px] w-full mt-8">
              <Spline
                scene="https://prod.spline.design/zyjcWya454vrpscA/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h2 
                  className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-950 dark:text-indigo-50"
                  whileHover={{ 
                    scale: 1.02,
                    color: "#8b5cf6",
                    transition: { duration: 0.2 }
                  }}
                >
                  Ready to Start Your Learning Adventure?
                </motion.h2>
                <motion.p 
                  className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed"
                  whileHover={{ 
                    x: 5,
                    color: "#ec4899",
                    transition: { duration: 0.2 }
                  }}
                >
                  Join thousands of learners who are mastering new skills while having fun with Kreons.
                </motion.p>
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
    </>
  )
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-6 shadow-sm dark:border-indigo-800 dark:bg-indigo-900/40 hover:shadow-lg transform transition-all duration-300"
    >
      <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-800/50 transform transition-all duration-300 hover:rotate-12">{icon}</div>
      <motion.h3 
        className="text-xl font-extrabold text-indigo-950 dark:text-indigo-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        whileHover={{ 
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.2 }
        }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-center font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        whileHover={{ 
          scale: 1.02,
          y: -2,
          transition: { duration: 0.2 }
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

function KreonTypeCard({ type, color, subject}: KreonTypeCardProps) {
  const colorClasses = {
    blue: "bg-blue-100 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800/50",
    green: "bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800/50",
    purple: "bg-purple-100 border-purple-200 dark:bg-purple-900/30 dark:border-purple-800/50",
    pink: "bg-pink-100 border-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`flex flex-col items-center space-y-3 rounded-xl border p-6 ${colorClasses[color]} hover:shadow-xl transform transition-all duration-300`}
    >
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="h-16 w-16 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center"
      >
        <Image
          src="/placeholder.svg?height=50&width=50"
          alt={`${type} Kreon`}
          width={50}
          height={50}
          className="object-contain"
        />
      </motion.div>
      <motion.h3 
        className="text-lg font-extrabold text-indigo-950 dark:text-indigo-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        whileHover={{ 
          scale: 1.05,
          rotate: 3,
          transition: { duration: 0.2 }
        }}
      >
        {type} Type
      </motion.h3>
      <motion.p 
        className="text-center font-semibold text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        whileHover={{ 
          scale: 1.02,
          y: -2,
          transition: { duration: 0.2 }
        }}
      >
        {subject}
      </motion.p>
    </motion.div>
  )
}