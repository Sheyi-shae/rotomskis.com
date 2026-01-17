"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import About2 from "./about2"

export function WhyWeExistSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("why-we-exist-section")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why-we-exist"
      className=" bg-white relative pb-20 overflow-hidden"
      ref={(el) => {
        if (el) el.id = "why-we-exist-section"
      }}
    >
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid - Content Left, Image Right */}
        <div className="grid lg:grid-cols-2   gap-12 items-center ">
                  {/* Left: Content */}
            
          <div className=" order-2 lg:order-1  h-full">
                  <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}  relative`}>
            <Image
                            src="/img/about.png"
                            alt="Strategic business expansion and global market growth"
                            width={1200}
                            height={1200}
                            className="w-full h-150 object-cover"
                          />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
           
          </div>

          </div>

         
          {/* Right: Image */}
           <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"} order-1 lg:order-2 `}>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Why We Exist</span>
            </div>

           <h3 className="text-xl lg:text-2xl font-bold text-secondary leading-tight mb-6 text-balance">
  Why Traditional Models Fail
            </h3>

            <div className="text-sm lg:text-base space-y-6 text-justify">
              <p className="text-secondary/70 leading-relaxed">
              Traditional business models were designed for a simpler environment. Markets were more stable, organizations more centralized, and growth paths more predictable. Strategy could be planned separately, execution delegated, and markets approached one at a time.
              </p>

              <p className="text-secondary/70 leading-relaxed">
                That context no longer exists.
              </p>

              <p className="text-secondary/70 leading-relaxed">
              Today, most traditional approaches fail not because they are wrong, but because they are incomplete. Consultants focus on analysis without responsibility for outcomes. Agencies execute isolated tasks without strategic context. Internal teams optimize functions while losing sight of the system as a whole.
              </p>
              <p className="text-secondary/70 leading-relaxed font-semibold">
                As complexity increases, these separations become liabilities. Decisions made in one area create unintended consequences in another. Execution accelerates, but direction weakens. Growth initiatives multiply, while accountability dissolves.
                          </p>

             
                          </div>
            </div>

       
        </div>
           <div className="text-sm lg:text-base space-y-6 text-justify p-2">
             

                           <p className="text-secondary/70 leading-relaxed">
              As complexity increases, these separations become liabilities. Decisions made in one area create unintended consequences in another. Execution accelerates, but direction weakens. Growth initiatives multiply, while accountability dissolves.
                       
              The core limitation of traditional models is structural: they assume problems can be solved in isolation. In reality, strategy, execution, capital, market access, and leadership are no longer independent variables. Treating them as such creates fragmentation, delays, and loss of control.
                          </p>
                           <p className="text-secondary/70 leading-relaxed">
              In this environment, failure rarely comes from a single wrong decision. It emerges gradually, as disconnected actions accumulate into systemic breakdown.
              </p>
          </div>

        {/* Our Solution Section */}
        {/* <div className="relative">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-4 text-balance">How We Help You Succeed</h3>
            <p className="text-xl text-secondary/70 max-w-3xl mx-auto text-balance">
              We provide strategic integration that connects every layer of your business—from market strategy to
              execution to capital decisions—creating a unified system that scales with precision and purpose.
            </p>
          </div>

       
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="text-primary" size={32} />,
                title: "Strategic Integration",
                description:
                  "Connect strategy, execution, and capital decisions into one coherent system that actually works.",
              },
              {
                icon: <TrendingUp className="text-primary" size={32} />,
                title: "Disciplined Execution",
                description:
                  "Move from chaos to control. Clear accountability ensures growth without losing your grip on operations.",
              },
              {
                icon: <Zap className="text-primary" size={32} />,
                title: "Real Market Intelligence",
                description:
                  "Execution grounded in actual market demand, not assumptions. Know your markets before you enter them.",
              },
              {
                icon: <Users className="text-primary" size={32} />,
                title: "Built for Resilience",
                description:
                  "Create structures that endure pressure and adapt to change. Long-term resilience over short-term wins.",
              },
              {
                icon: <Shield className="text-primary" size={32} />,
                title: "Risk-Aware Growth",
                description:
                  "Capital decisions informed by deep operational understanding. Grow profitably, not just quickly.",
              },
              {
                icon: <Check className="text-primary" size={32} />,
                title: "Purpose-Driven Systems",
                description:
                  "Scale without losing clarity or control. Keep what matters most at the center of your growth.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-white to-tertiary/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">{item.icon}</div>
                <h4 className="text-xl font-bold text-secondary mb-3">{item.title}</h4>
                <p className="text-secondary/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        <About2 isVisible={isVisible}/>

       
      </div>
    </section>
  )
}
