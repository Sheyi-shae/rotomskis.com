"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute -z-10 -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5C0120]/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center"
      >
        {/* Eyebrow */}
        <span className="block text-xs uppercase tracking-widest text-[#5C0120] mb-6">
          Strategic Alignment
        </span>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-secondary mb-6">
          If this situation
          <span className="block text-[#5C0120] mt-2">
            feels familiar
          </span>
        </h2>

        {/* Supporting copy */}
        <p className="text-lg lg:text-xl text-secondary/70 leading-relaxed max-w-2xl mx-auto mb-12">
          The right next step is rarely a tactic.  
          It is usually a structured conversation.
        </p>

        {/* CTA */}
        <Link
          href="/connect"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#5C0120] text-white font-semibold tracking-wide
          hover:shadow-xl hover:shadow-[#5C0120]/30 transition-all duration-300 hover:-translate-y-1"
        >
          Start a strategic conversation
        </Link>
      </motion.div>
    </section>
  )
}
