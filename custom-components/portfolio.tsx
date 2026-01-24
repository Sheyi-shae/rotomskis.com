"use client"

import { useState } from "react"
import { ArrowUpRight, Tag } from "lucide-react"
import HeaderTitle from "./header-title"
import { portfolioProjects } from "@/portfolio"
import SectionReveal from "./section-reveal"
import Link from "next/link"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState< "strategy" | "market" | "interim" | "engineering">("strategy")

 

  const filtered = portfolioProjects.filter((p) => p.categoryId === activeCategory)

  const categories = [
    { id: "strategy", label: "Strategy Consulting" },
    { id: "market", label: "Market Entry" },
    { id: "interim", label: "Interim Management" },
    {id:'engineering', label:'PlatformEngineering'}
  ]

  return (
    <section id="portfolio" className="py-12 mt-8 bg-white relative overflow-hidden">
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <HeaderTitle
          subHeader="My Portfolio"
          header="Applied strategy in complex"
          colouredHeader=" market transitions"
          subText="Real success stories from businesses we've helped expand globally"
              />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-in-down">
          {categories.map((category) => (
            
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any )}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-tertiary text-secondary hover:bg-secondary/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => {
            // truncate description
            const truncateDesc= project.description.length > 100 ? project.description.slice(0, 100) + "..." : project.description
            return (
                <SectionReveal key={project.id}>
            <div
              key={project.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              
                      
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: project.imagebg }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                      
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <Tag className="text-primary/50" size={16} />
                  </div>

                  <h3 className="text-xl font-bold text-secondary md:min-h-20 mb-2 sm:mb-0 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                    <div className="mb-4">
                  <p className="text-secondary/70 text-sm  leading-relaxed flex-1">{truncateDesc}</p>

                      </div>
                 
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs text-secondary/60 mb-1">Result</p>
                    <p className="line-clamp-1 text-primary">{project.result}</p>
                  </div>

                  <div className="flex flex-wrap gap-2  mb-4">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-xs  px-3 py-1 bg-tertiary text-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                 
                  <Link href={`/portfolio/${project.id}`}><button className="flex items-center justify-between w-full px-4 py-3 bg-primary/5 text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 group/btn">
                    <span>View Project</span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </button></Link>
                </div>
              </div>
                </div>
                </SectionReveal>
          )})}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 text-center animate-fade-in">
          <div className="inline-block">
            <h3 className="text-3xl font-bold text-secondary mb-4">Ready to Add Your Success Story?</h3>
            <p className="text-lg text-secondary/70 mb-8 max-w-2xl">
              Join dozens of Lithuanian businesses that have expanded their global reach with our strategic guidance.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Journey
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}
