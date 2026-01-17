"use client"

import { Target,Zap,Lightbulb,Code2,Shield,TrendingUp, Wallet2, Angry, Frown, MoveRight, Workflow } from "lucide-react";
import SectionReveal from "./section-reveal";
import { Variants ,motion} from "framer-motion";

const principles = [
  {
    number: 1,
    title: 'Everyone Gets Their Cut Or The System Breaks',
    description: 'Every contributor must be rewarded fairly for their input. When value is created but not shared, resentment replaces trust. Sustainable systems work because incentives are aligned and everyone has a reason to protect the circle, not break it.',
    icon: Target,
  },
  {
    number: 2,
    title: 'Reality Beats Theory',
    description: 'All meaningful ideas come from the streets, not the armchair. Markets, customers, and operators reveal truth faster than frameworks ever will. Serve your tribe, not your pride. Ego distorts judgment; proximity to reality sharpens it.',
    icon: Zap,
  },
  {
    number: 3,
    title: 'Courage and Structure Are Inseparable',
    description: 'All meaningful ideas come from the streets, not the armchair. Markets, customers, and operators reveal truth faster than frameworks ever will. Serve your tribe, not your pride. Ego distorts judgment; proximity to reality sharpens it.',
    icon: Shield,
  },
  {
    number: 4,
    title: 'If the Rules Don\'t Fit, Build a New Game',
    description: 'When existing rules constrain growth, building a new game often costs less than forced adaptation.',
    icon: Lightbulb,
  },
  {
    number: 5,
    title: 'Constraints Create Strength',
    description: 'Unlimited resources breed waste. Constraints force clarity, prioritization, and ingenuity. Scarcity builds resilience. Systems that learn to do more with less survive pressure and outperform bloated competitors when conditions tighten.',
    icon: Code2,
  },
  {
    number: 6,
    title: 'Differentiation Is Survival',
    description: 'The moment you look like everyone else, you are dead. Differentiation is not branding — it is strategic positioning. Be unmistakable. Be the purple cow. Familiarity erodes value; distinctiveness protects it',
    icon: TrendingUp,
    },
    {
      number: 7,
      title: 'Cashflow Is Oxygen',
      description: 'Cashflows keep systems alive. Paper profits only look good on slides. Growth that ignores liquidity eventually collapses under its own weight. Grow flow, not figures.',
      icon: Wallet2,
    },
    {
      number: 8,
      title: 'Radical Rationality Over Emotion',
      description: 'Emotions fluctuate. Markets don’t care. Investments don’t forgive sentiment. Decisions must be grounded in logic, incentives, and consequences. Radical rationality is what keeps empires standing when narratives fade.',
      icon: Frown,
    },
    {
      number: 9,
      title: 'Big Moves Change the Game',
      description: 'Incremental tweaks rarely alter outcomes. A new hood ornament will not make a car perform better. Real progress comes from structural moves that change how the system operates, not how it looks.',
      icon: MoveRight,
    },
    {
      number: 10,
      title: 'Work Should Serve Life',
      description: 'Work is a tool, not an identity. Working smart and long creates freedom. Working hard without direction is desperation dressed as virtue. Systems should compound value for life — not consume it.',
      icon: Workflow,
    }
];

const principleOffsets = principles.map((_, i) => ({
  x: i % 2 === 0 ? -100 : 100,     // alternate left/right
  y: i % 3 === 0 ? -80 : 80,       // alternate up/down
  rotate: i % 2 === 0 ? -10 : 10,  // alternate slight tilt
}))

const flyIn: Variants = {
  hidden: (custom: { x: number; y: number; rotate: number }) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y,
    rotate: custom.rotate,
    scale: 0.92,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Principles() {
  return (
      <div className=" ">
          <SectionReveal>
              <h2 className="md:text-5xl text-4xl   font-bold text-[#0a0e27] mb-8  text-center">Our 
                  
                  <span className="text-primary ml-2">Principles</span>
            </h2>
          </SectionReveal>
          <div className="grid px-2 md:px-16 md:grid-cols-2  gap-8">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
                return (
                  <div key={principle.number}>
                <motion.div
  custom={principleOffsets[idx]}
  variants={flyIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  className="group relative h-full"
>

                    <div className="relative h-full border border-blue-100 rounded-2xl p-8 bg-white hover:border-primary/70 hover:shadow-lg transition-all duration-500">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl font-bold  text-primary/70">{String(principle.number).padStart(2, '0')}</span>
                        <Icon className="w-6 h-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <h3 className="font-bold text-lg text-[#0a0e27] mb-3 leading-tight">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                        
                        </motion.div>
                    </div>
              );
            })}
          </div>
    </div>
  )
}
