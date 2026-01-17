
  "use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"


export function AboutUsHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative pt-20 md:pt-40 pb-5   bg-gradient-to-br from-white via-tertiary to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left order-2 lg:order-1">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">About Us</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6 text-balance">
              WHY WE <span className="text-primary">EXIST</span>
            </h1>
            
            <h3 className="text-xl lg:text-2xl font-bold text-secondary leading-tight mb-6 text-balance">Scaling in a Fragmented and Complex World</h3>

            <div className="text-sm lg:text-base space-y-6 text-justify">
              <p className="text-secondary/70 leading-relaxed">
                We operate in a world where growth is no longer linear, but fragmented. Markets, supply chains, capital,
                partners, and teams are spread across geographies, cultures, and systems of interest. What was once
                managed within a single organization or a single market now exists across multiple layers at the same
                time.
              </p>

              <p className="text-secondary/70 leading-relaxed">
                Most companies are still trying to navigate this reality using outdated models. Strategy is developed
                separately from execution. Execution is disconnected from real demand in markets. Capital decisions are
                made without a full understanding of operational risk and long-term consequences. The result is high
                activity, but declining control.
              </p>

              <p className=" text-secondary/70 leading-relaxed">
                The problem is not a lack of ambition or ideas. The problem is the gaps in execution. When each function
                optimizes its own part of the system, but no one is responsible for the whole, growth becomes chaotic
                and mistakes become increasingly expensive.
              </p>

          
                          </div>
          </div>

          {/* Right Visual */}
          <div className="relative order-2 lg:order-2 animate-slide-in-right">
           
              <Image
                src="/img/about1.jpg"
                alt="Strategic business expansion and global market growth"
                width={1200}
                height={1200}
                className="w-full h-120 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
           
          </div>
              
        </div>
        <p className="text-sm lg:p-0 p-2 lg:text-base  leading-relaxed font-semibold text-secondary">
                In this environment, businesses do not fail because they lack potential. They fail because complexity is
                managed in silos, while the system as a whole remains unintegrated.
                          </p>
      </div>
      
    </section>
  )
}


