"use client"

import Image from "next/image"
import HeaderTitle from "./header-title"
import SectionReveal from "./section-reveal"

const services = [
  {
    id: 1,
    icon: "/img/work1.jpg",
    title: "Strategy Consulting",
    tagline: "Global Expansion & Market Entry",
    description:
      "We begin by clarifying direction before committing resources. This stage focuses on where and how growth should happen in relation to real demand, competitive pressure, and execution capacity.",
    highlights: [
      "Expansion sequencing and market prioritisation",
      "Demand validation and entry architecture",
      "Go-to-market and distribution logic",
      "Capital, risk, and control considerations",
    ],
    conclusion:
      "The outcome is not a report, but a strategic frame that governs all subsequent decisions.",
  },
  {
    id: 2,
    icon: "/img/work7.jpg",
    title: "Interim Management",
    tagline: "Commercial & Expansion Leadership",
    description:
      "Strategy creates value only when carried into execution. At this stage, we step into leadership roles to ensure expansion decisions are implemented coherently under real conditions.",
    highlights: [
      "Interim commercial or expansion leadership",
      "Team and partner alignment",
      "Hands-on decision-making",
      "Maintaining control as complexity increases",
    ],
    conclusion:
      "This phase bridges planning and reality without sacrificing strategic intent.",
  },
  {
    id: 3,
    icon: "/img/work5.png",
    title: "Sales Outsourcing",
    tagline: "Global Sales Nodes & Partner Networks",
    description:
      "As expansion scales, execution must grow without inflating internal structures. We design and operate distributed sales and partner models with clear accountability.",
    highlights: [
      "Global sales node design",
      "Partner and distributor structures",
      "Aligned incentives and reporting",
      "Market feedback loops into strategy",
    ],
    conclusion:
      "Scalable market access without operational overload.",
  },
  {
    id: 4,
    icon: "/img/work6.png",
    title: "Platform Engineering",
    tagline: "Digital & Operational Infrastructure",
    description:
      "Sustainable growth requires systems that can carry complexity. We design platforms that integrate strategy, sales, partners, and execution into a single operating environment.",
    highlights: [
      "Expansion-ready digital platforms",
      "Operational visibility and control",
      "Cross-market process integration",
      "Reduced dependency on ad-hoc decisions",
    ],
    conclusion:
      "Platforms turn expansion into a repeatable capability.",
  },
]

export default function HowWeWork() {
  return (
    <section className="mt-28 pb-38">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <HeaderTitle
          header="How We"
          colouredHeader="Work"
          subHeader="How We Work"
          subText="Our work follows a structured progression for companies facing complex global expansion decisions. Each stage builds clarity, control, and long-term resilience."
        />

       <div className="mt-20 space-y-28">
  {services.map((service) => (
    <SectionReveal key={service.id}>
      <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-primary/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-6 lg:p-12">
        
        {/* Soft ambient glow */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        <div className="grid lg:grid-cols-12 gap-2 items-start">
          
          {/* Image */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src={service.icon}
                alt={service.title}
                width={600}
                height={800}
                className="w-full h-full md:h-120 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:col-start-6">
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-xs uppercase tracking-widest text-primary">
                {service.tagline}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-semibold text-secondary leading-tight mb-6">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-justify text-secondary/80 leading-relaxed mb-10 max-w-2xl">
              {service.description}
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-10">
              {service.highlights.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary/70 flex-shrink-0" />
                  <span className="text-secondary/80 text-xs md:text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Conclusion */}
            <p className="text-secondary font-medium leading-relaxed max-w-2xl border-l-2 border-primary/40 pl-6">
              {service.conclusion}
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  ))}
</div>

      </div>
    </section>
  )
}
