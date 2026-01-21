'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

interface ProjectOutcomeProps {
  outcomes: string[]
}

export function ProjectOutcome({ outcomes }: ProjectOutcomeProps) {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-secondary mb-12 text-center"
        >
          Key Outcomes
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 p-6 animate-bounce-slow bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <Zap className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className=" text-sm md:text-base text-secondary/70">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
