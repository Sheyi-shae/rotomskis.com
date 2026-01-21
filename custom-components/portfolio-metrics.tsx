"use client"

import { motion, Variants } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"

interface Metric {
  label: string
  value: string
  highlight?: boolean
}

interface ProjectMetricsProps {
  metrics: Metric[]
}

const containerVariants : Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <section className="py-16">
      <div className="">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="block text-xs uppercase tracking-widest text-[#5C0120] mb-4">
            Evidence of Scale
          </span>
          {/* <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-secondary mb-4">
            Structured growth,
            <span className="block text-[#5C0120] mt-2">
              measured across markets
            </span>
          </h2> */}
          <p className="text-lg text-secondary/70 leading-relaxed">
            Outcomes that emerged from disciplined strategy, not isolated tactics
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="relative"
            >
              {/* Accent line */}
              <div className="absolute -top-4 left-0 w-8 h-[2px] bg-[#5C0120]" />

              <div
                className={`text-2xl lg:text-3xl font-bold mb-3 ${
                  metric.highlight ? "text-[#5C0120]" : "text-secondary"
                }`}
              >
                {metric.value}
              </div>

              <p className="text-sm uppercase tracking-wide text-secondary/60">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
