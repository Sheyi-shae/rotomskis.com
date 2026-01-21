"use client"

import { motion, Variants } from "framer-motion"
import { CheckCircle2, AlertTriangle } from "lucide-react"

interface ChallengeAndSolutionProps {
  challenge: string
  solution: string
    timeline: string
    conclusion: string
}

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ChallengeAndSolution({
  challenge,
  solution,
    timeline,
  conclusion
}: ChallengeAndSolutionProps) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="block text-xs uppercase tracking-widest text-[#5C0120] mb-4">
            Strategic Context
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-secondary mb-6">
            From constraint
            <span className="block text-[#5C0120] mt-2">
              to structural resolution
            </span>
          </h2>
          <p className="text-lg text-secondary/70 leading-relaxed">
            The work begins where complexity cannot be simplified without
            consequence.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-14 gap-16 items-start relative">
          {/* Vertical divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-secondary/10" />

          {/* Constraint */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="flex items-center justify-center bg-primary/70 p-4  gap-3 mb-6">
              <AlertTriangle className="text-[#faf9f9]" size={20} />
              <span className="text-base md:text-lg text-center font-semibold uppercase tracking-wide text-[#faf9f9]">
                Constraint
              </span>
            </div>

            <p className="text-sm md:text-base  text-justify text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: challenge }} />
          </motion.div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Strategic Response */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="flex p-4 bg-green-600 items-center justify-center gap-3 mb-6">
              <CheckCircle2 className="text-emerald-50" size={20} />
              <span className="text-sm uppercase tracking-wide text-emerald-50">
                Strategic Solution
              </span>
            </div>

            <p className="text-sm md:text-base  text-justify text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: solution }} />
          </motion.div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-secondary/5 border-trace p-8 rounded-2xl border border-secondary/10">
            <p className="text-base text-secondary/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: conclusion }} />
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex items-center justify-center"
        >
          <div className="px-8 py-4 rounded-full border border-secondary/20 bg-secondary/5">
            <span className="text-sm text-secondary/60 mr-2">
              Engagement horizon:
            </span>
            <span className="text-sm font-semibold text-secondary">
              {timeline}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
