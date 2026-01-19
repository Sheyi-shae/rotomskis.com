"use client"

import { Calendar, ArrowRight, TrendingUp } from "lucide-react"
import HeaderTitle from "./header-title"

import Image from "next/image"
import SectionReveal from "./section-reveal"
import Link from "next/link"
import { insightsData } from "@/insights"

export function InsightsSection() {
  const insights = insightsData



  return (
    <section id="insights" className="pt-16 bg-gradient-to-b from-white to-tertiary relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className=" px-4 sm:px-6  relative z-10">
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-16  animate-fade-in">
          <HeaderTitle
                     
                      colouredHeader="Insights"
                      header=" Resources &" 
                      subHeader="Insights"
                      subText="Stay informed with expert analysis, market trends, and actionable strategies"
                  />
                  </div>

        {/* Featured Article */}
        <div className="mb-16 px-4 space-y-4 gap-6 sm:px-6 lg:px-16 animate-scale-in">
          
          {insights.map((insight) => (
            <SectionReveal key={insight.id}>
            <div  className="rounded-xl  border border-primary/10  overflow-hidden  hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div
                  className=" bg-cover bg-center bg-slate-50">
                  <Image src={insight.image} alt={insight.title} width={500} height={500} className="w-full h-full object-cover hover:scale-105 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="inline-block px-4  py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-semibold text-sm">{insight.tagline}</span>
                </div>

                    <Link href={`/insights/${insight.slug}`}>
                <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 hover:text-primary transition-all duration-300 hover:cursor-pointer leading-tight">{insight.title}</h3>

                      </Link>
                <p className="text-sm md:text-base text-justify text-secondary/70 mb-6 leading-relaxed">{insight.excerpt}</p>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-secondary/60 text-sm">
                  
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} />
                    <span>{insight.minRead}</span>
                  </div>
                </div>

                <Link
                  href={`/insights/${insight.slug}`} 
                  className="inline-flex animate-pulse-slow items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                >
                  Read Article
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
           
              </div>
            </SectionReveal>
          ))}
            
        </div>

        {/* Article Grid */}
       
      </div>
    </section>
  )
}
