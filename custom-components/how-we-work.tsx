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
    icon: "/img/work2.jpg",
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
    <section className="mt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <HeaderTitle
          header="How We"
          colouredHeader="Work"
          subHeader="How We Work"
          subText="Our work follows a structured progression for companies facing complex global expansion decisions. Each stage builds clarity, control, and long-term resilience."
        />

        <div className="mt-24 space-y-32">
          {services.map((service, index) => (
            <SectionReveal key={service.id}>
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                {/* Stage number */}
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="text-sm font-semibold text-primary">
                    0{index + 1}
                  </span>
                </div>

                {/* Image */}
                <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <span className="block text-xs uppercase tracking-widest text-primary mb-4">
                    {service.tagline}
                  </span>

                  <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                    {service.title}
                  </h3>

                  <p className=" text-base md:text-lg text-justify text-secondary/70 leading-relaxed mb-8 max-w-2xl">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-secondary leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-secondary font-medium leading-relaxed max-w-2xl">
                    {service.conclusion}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
