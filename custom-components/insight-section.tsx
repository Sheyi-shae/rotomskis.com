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
        <div className="px-4 pb-3 sm:px-6 lg:px-16  animate-fade-in">
          <HeaderTitle
                     
                      colouredHeader="Insights"
                      header=" Resources &" 
                      subHeader="Insights"
                      subText="Stay informed with expert analysis, market trends, and actionable strategies"
                  />
                  </div>

        {/* Featured Article */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-24">
  {insights.map((insight) => (
    <SectionReveal key={insight.id}>
      <article className="group grid lg:grid-cols-12 gap-12 items-start">
        {/* Image */}
        <div className="lg:col-span-5 overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={insight.image}
            alt={insight.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-7 pt-2">
          {/* Tag */}
          <span className="inline-block text-xs uppercase tracking-widest text-primary mb-4">
            {insight.tagline}
          </span>

          {/* Title */}
          <Link href={`/insights/${insight.slug}`}>
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-secondary mb-4 group-hover:text-primary transition-colors">
              {insight.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-lg text-secondary/70 leading-relaxed max-w-2xl mb-8">
            {insight.excerpt}
          </p>

          {/* Meta + CTA */}
          <div className="flex items-center gap-8 text-sm text-secondary/60">
            <span>{insight.minRead}</span>

            <Link
              href={`/insights/${insight.slug}`}
              className="inline-flex items-center gap-2 font-medium text-primary transition-all group-hover:gap-3"
            >
              Continue reading
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>
    </SectionReveal>
  ))}
</div>


        {/* Article Grid */}
       
      </div>
    </section>
  )
}
