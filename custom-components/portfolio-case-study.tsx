'use client'

import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  category: string
  challenge: string
  solution: string
}

interface CaseStudyContentProps {
  project: Project
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <section className="py-20 bg-tertiary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold text-secondary mb-6">Project Overview</h2>
          <p className="text-lg text-secondary/70 leading-relaxed mb-8">
            {project.description}
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-12 mb-4">Key Approach</h3>
          <div className="space-y-4 text-secondary/70">
            <p>
              Our methodology combines strategic market analysis, operational excellence, and innovation to solve complex business challenges. We work closely with leadership teams to understand the unique dynamics of their market and develop customized solutions.
            </p>
            <p>
              By integrating global best practices with local market knowledge, we create sustainable growth strategies that deliver measurable results and build lasting competitive advantages.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-secondary mt-12 mb-4">Results Achieved</h3>
          <p className="text-secondary/70 mb-4">
            This engagement demonstrated the power of integrated strategy and execution. By breaking down silos and creating alignment across functions, we enabled the business to:
          </p>
          <ul className="space-y-2 text-secondary/70">
            <li>✓ Scale operations across multiple geographies</li>
            <li>✓ Optimize cost structures without sacrificing quality</li>
            <li>✓ Build sustainable competitive advantages</li>
            <li>✓ Create lasting value for stakeholders</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
