"use client"

import Image from "next/image"
import SectionReveal from "./section-reveal"
import { useEffect, useState } from "react"
import About2 from "./about2"

export function WhyWeExistSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting)
      {
        setIsVisible(true)
        
       }
    }, {
      threshold: 0.2 
      
    },)
    const section = document.getElementById("why-we-exist-section")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])
  return (
    <SectionReveal>
    <section className="relative pt-4  overflow-hidden">
      {/* Ambient background */}
      <div className="absolute  left-[-20%] w-[36rem] h-[36rem] bg-primary/5 rounded-full blur-3xl" />
       <div className="absolute top-[-25%] left-[-20%] w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-3xl" />

      <div className="absolute bottom-[-30%] right-[-20%] w-[36rem] h-[36rem] bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">

         

          {/* Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mt-0 md:mt-12  overflow-hidden shadow-2xl">
              <Image
                src="/img/strategist1.png"
                alt="Navigating structural complexity in global growth"
                width={1200}
                height={1200}
                className="w-full h-145 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
           {/* Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary/40" />
              <span className="text-xs uppercase tracking-widest text-primary">
                Why We Exist
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-semibold text-secondary leading-tight mb-8 text-balance">
              Why Traditional Models Break Under Complexity
            </h3>

            <div className="text-sm lg:text-base space-y-6 text-justify max-w-xl">
              <p className="text-secondary/70 leading-relaxed"> Traditional business models were designed for a simpler environment. Markets were more stable, organizations more centralized, and growth paths more predictable. Strategy could be planned separately, execution delegated, and markets approached one at a time. </p> <p className="text-secondary/70 leading-relaxed"> That context no longer exists. </p> <p className="text-secondary/70 leading-relaxed"> Today, most traditional approaches fail not because they are wrong, but because they are incomplete. Consultants focus on analysis without responsibility for outcomes. Agencies execute isolated tasks without strategic context. Internal teams optimize functions while losing sight of the system as a whole. </p> <p className="text-secondary/70 leading-relaxed "> As complexity increases, these separations become liabilities. Decisions made in one area create unintended consequences in another. Execution accelerates, but direction weakens. Growth initiatives multiply, while accountability dissolves. </p>
            </div>
          </div>
        </div>

        {/* Structural takeaway */}
        <div className="mt-5">
          <div className="border-l-2 border-primary/40 pl-6">
            <p className="text-lg font-medium text-secondary leading-relaxed">
              The core limitation of traditional models is structural: they assume problems can be solved in isolation. In reality, strategy, execution, capital, market access, and leadership are no longer independent variables. Treating them as such creates fragmentation, delays, and loss of control.
            </p>

            <p className="mt-4 text-secondary/70 leading-relaxed">
              In this environment, failure rarely comes from a single wrong decision. It emerges gradually, as disconnected actions accumulate into systemic breakdown.
            </p>
          </div>
        </div>
      </div>
      </section>
      <About2 isVisible/>
    </SectionReveal>
  )
}
