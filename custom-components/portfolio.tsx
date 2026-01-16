"use client"

import { useState } from "react"
import { ArrowUpRight, Tag } from "lucide-react"
import HeaderTitle from "./header-title"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "export" | "market" | "tech">("all")

  const projects = [
    {
      id: 1,
      title: "Baltic Wood Exports Expansion",
      category: "export",
      description: "Successfully launched Baltic premium wood products into Scandinavian and Central European markets",
      result: "300% revenue increase",
      tags: ["Export", "EU Markets", "B2B"],
      image: "url('/wooden-products-factory.jpg')",
    },
    {
      id: 2,
      title: "Tech Startup Global Launch",
      category: "market",
      description: "Navigated market entry strategy for Lithuanian software company targeting US and Asian markets",
      result: "15M valuation increase",
      tags: ["SaaS", "Market Entry", "Growth"],
      image: "url('/technology-startup-office.jpg')",
    },
    {
      id: 3,
      title: "Manufacturing Sector Transformation",
      category: "tech",
      description: "Modernized export processes and integrated digital solutions for traditional manufacturer",
      result: "50% cost reduction",
      tags: ["Operations", "Digitization", "Efficiency"],
      image: "url('/manufacturing-facility-production.jpg')",
    },
    {
      id: 4,
      title: "Food & Beverage International Brand",
      category: "export",
      description: "Created distribution network across 8 European countries for premium Lithuanian spirits",
      result: "250% market growth",
      tags: ["Food & Beverage", "Distribution", "Branding"],
      image: "url('/premium-beverage-products.jpg')",
    },
    {
      id: 5,
      title: "Enterprise B2B Partnership Model",
      category: "market",
      description: "Established strategic partnerships and supply chain for major industrial component manufacturer",
      result: "€2.5M annual contracts",
      tags: ["B2B", "Partnerships", "Supply Chain"],
      image: "url('/industrial-machinery.png')",
    },
    {
      id: 6,
      title: "eCommerce Global Fulfillment",
      category: "tech",
      description: "Built international logistics and fulfillment infrastructure for growing eCommerce platform",
      result: "12x customer growth",
      tags: ["eCommerce", "Logistics", "Scale"],
      image: "url('/ecommerce-warehouse-logistics.jpg')",
    },
  ]

  const filtered = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "export", label: "Export Strategy" },
    { id: "market", label: "Market Entry" },
    { id: "tech", label: "Digital Solutions" },
  ]

  return (
    <section id="portfolio" className="pt-12 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <HeaderTitle
          subHeader="My Portfolio"
          header="Selected work from"
          colouredHeader=" applied strategy"
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
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              
                      
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: project.image }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                      
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <Tag className="text-primary/50" size={16} />
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-secondary/70 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>

                 
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs text-secondary/60 mb-1">Result</p>
                    <p className="font-bold text-primary">{project.result}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-tertiary text-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                 
                  <button className="flex items-center justify-between w-full px-4 py-3 bg-primary/5 text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 group/btn">
                    <span>View Project</span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

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
