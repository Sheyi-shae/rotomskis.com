"use client"

import { Linkedin, ArrowRight, Globe, Briefcase, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const benefits = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to international business strategists and market experts",
  },
  {
    icon: Briefcase,
    title: "Exclusive Insights",
    description: "Weekly thinking on market entry, expansion, and execution",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Real partnership and expansion opportunities—not noise",
  },
]

export function ConnectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="connect"
      className="relative overflow-hidden mt-16 pb-20 bg-gradient-to-b from-white to-tertiary/20"
    >
      {/* Ambient background */}
    
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Card */}
        <div
          className={`grid lg:grid-cols-2 rounded-3xl border bg-white overflow-hidden transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Content */}
          <div className="p-5 lg:p-10 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              Let’s Connect on LinkedIn
            </h2>

            <p className="text-secondary/70 max-w-xl mb-10">
              A focused network for leaders navigating international markets,
              expansion strategy, and execution under real conditions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: "500+", label: "Professionals" },
                { value: "40+", label: "Markets" },
                { value: "50k+", label: "Monthly Reach" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-sm text-secondary/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href="https://www.linkedin.com/in/augustinasrotomskis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 w-fit rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Linkedin size={22} />
              Connect on LinkedIn
              <ArrowRight size={18} />
            </a>

            <p className="mt-6 text-sm text-secondary/60">
              Trusted by operators with 5+ years of global expansion experience
            </p>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <Image
              src="/img/augustinas.png"
              alt="Global Strategy"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-28 h-28 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
                <Linkedin size={56} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-primary">
                Building meaningful global connections
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`rounded-2xl border bg-white p-8 transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {benefit.title}
              </h3>
              <p className="text-secondary/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-20 text-center">
          <p className="text-secondary/70 mb-6">
            Prefer a different channel?
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:info@rotomskis.com"
              className="px-6 py-3 border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary hover:text-white transition"
            >
              Contact via Email
            </a>
            <Link
              href="/insights"
              className="px-6 py-3 font-semibold text-primary hover:text-secondary transition"
            >
              Read Insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
