"use client"

import { Calendar, ArrowRight, TrendingUp } from "lucide-react"
import HeaderTitle from "./header-title"

export function InsightsSection() {


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
        <div className="mb-16 px-4 sm:px-6 lg:px-16 animate-scale-in">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div
                className="h-80 md:h-96 bg-cover bg-center bg-[url('/business-man.jpg')]"
               
              />

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-semibold text-sm">{'Business Development'}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 leading-tight">{'Business Development Myths: What Are Your Beliefs That Are Holding You Back from Your Business Success?'}</h3>

                <p className="text-sm md:text-base text-secondary/70 mb-6 leading-relaxed">{'Our experience and international research show that businesses can achieve ambitious growth if they are willing to rethink their capabilities and overcome internal limitations. However, many companies still face persistent myths that act as invisible barriers to their growth..'}</p>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-secondary/60 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{'Dec 15, 2025'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} />
                    <span>{'8 min read'}</span>
                  </div>
                </div>

                <a
                  href="https://verslas.blog/" target="_blank"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                >
                  Read More Articles
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
       
      </div>
    </section>
  )
}
