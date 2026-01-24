"use client"

import Image from "next/image"

export function AboutUsHero() {
  return (
    <section className="relative pt-28 lg:pt-40 pb-6 bg-white overflow-hidden">
      
      {/* Ambient background */}
      <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-30%] left-[-20%] w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Text */}
          <div className="lg:col-span-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary/40" />
              <span className="text-xs uppercase tracking-widest text-primary">
                About Us
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-secondary mb-8 text-balance">
              Why We Exist
            </h1>

            <p className="text-xl lg:text-2xl font-medium text-secondary/90 leading-relaxed mb-10 max-w-xl">
              Scaling no longer fails because of ambition —
              <br className="hidden lg:block" />
              it fails because complexity is mismanaged.
            </p>

            <div className="text-sm lg:text-base max-w-xl space-y-6 text-justify">
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

          {/* Visual */}
          <div className="lg:col-span-6 relative animate-slide-in-right">
            <div className="relative mt-0 md:mt-12 overflow-hidden shadow-2xl">
              <Image
                src="/img/about1.jpg"
                alt="Strategic leadership navigating global complexity"
                width={1200}
                height={1200}
                className="w-full h-152 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className=" mt-5 w-full ">
          <p className="text-lg font-medium text-secondary leading-relaxed border-l-2 border-primary/40 pl-6">
            Businesses do not fail because they lack potential.
            They fail when complexity is managed in silos,
            while the system as a whole remains unintegrated.
          </p>
        </div>
      </div>
    </section>
  )
}
