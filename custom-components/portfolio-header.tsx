'use client'

import { motion } from 'framer-motion'

interface PortfolioHeaderProps {
  project: {
    title: string
    description: string
    image: string
    category: string
    result: string
  }
}

export function PortfolioHeader({ project }: PortfolioHeaderProps) {
    const categoryColors: Record<string, { bg: string; text: string }> = {
       
    export: { bg: 'bg-slate-200', text: 'text-slate-700' },
    market: { bg: 'bg-rose-100', text: 'text-rose-700' },
    interim: { bg: 'bg-amber-100', text: 'text-amber-700' },
    engineering: { bg: 'bg-red-100', text: 'text-red-700' },
  }

  const colors = categoryColors[project.category] || categoryColors.export

  return (
    <section className="relative overflow-hidden pt-12 ">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 w-full"
        >
          <span className={`inline-block ${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-semibold mb-6 capitalize`}>
            {project.category === 'engineering' ? 'Platform Engineering' : project.category === 'market' ? 'Market Entry' :  project.category === 'interim' ? 'interim Management' : ' Strategy Consulting'}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance">{project.title}</h1>
          <p className="text-base md:text-lg text-secondary/70 w-full text-balance">{project.description}</p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </motion.div>
      </div>
    </section>
  )
}
