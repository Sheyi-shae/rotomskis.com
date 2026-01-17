import React from 'react'
import HeaderTitle from './header-title';
import Image from 'next/image';
import SectionReveal from './section-reveal';


const services = [
  {
    id: 0,
   icon: "/img/work1.jpg",
    title: 'Strategy Consulting',
    tagline: 'Global Expansion & Market Entry',
    description:
      'We begin by clarifying direction before committing resources.This stage focuses on understanding where and how growth should happen — not in theory, but in relation to real market demand, competitive dynamics, and execution capacity.',
    highlights: [
      'Global expansion strategy and sequencing',
      'Market entry architecture and demand validation',
      'Go-to-market and distribution logic',
      'Risk, capital, and control considerations',
    ],
    
   conclusion:'The outcome is not a report, but a clear strategic frame that guides all subsequent decisions.'
  },
  {
    id: 1,
    icon: "/img/work2.jpg",
    title: ' Interim Management',
    tagline: 'Commercial & Expansion Leadership',
    description:
      'Strategy only creates value when it is carried into execution.At this stage, we step into active leadership roles to ensure that expansion decisions are implemented coherently and responsibly.',
    highlights: [
      'Interim commercial or expansion leadership',
      'Alignment of teams, partners, and priorities',
      'Hands-on decision-making under real conditions',
      'Maintaining control as complexity increases',
    ],
    conclusion:'This role bridges the gap between planning and reality — ensuring momentum without loss of direction.'
  },
  {
    id: 2,
   icon: "/img/work5.png",
    title: 'Sales Outsourcing',
    tagline: 'Global Sales Nodes & Partner Networks',
    description:
      'As expansion progresses, execution must scale without inflating internal structures.We design and operate distributed sales and partner models that extend reach while preserving strategic control.',
    highlights: [
      'Building global sales nodes',
      'Structuring partner and distributor networks',
      'Aligning incentives, accountability, and reporting',
      'Ensuring market feedback flows back into strategy',
    ],
    conclusion:'The goal is scalable market access without operational overload'
    },
    {
         id: 3,
   icon: "/img/work3.jpg",
    title: 'Platform Engineering',
    tagline: 'Digital & Operational Platforms for Expansion',
    description:
      'Sustainable growth requires systems that can carry complexity.At this stage, we design and implement digital and operational platforms that integrate strategy, sales, partners, and execution into a single operating environment.',

    highlights: [
      'Digital platforms supporting expansion and coordination',
      'Operational systems for visibility and control',
      'Process integration across markets and teams',
      'Reducing dependency on ad-hoc decision-making',
    ],
    conclusion:'Platforms turn expansion from a series of projects into a repeatable capability'
      
  }
];


export default function HowWeWork() {
  return (
    <div className='mt-24'>
      
      <div className='max-w-7xl mx-auto px-6 lg:px-12 space-y-10'>
        <HeaderTitle
      subHeader='How We Work'
        subText='Our work follows a structured progression designed for companies facing complex global growth and expansion decisions. Each stage builds on the previous one, ensuring clarity, control, and long-term resilience.'
        colouredHeader='Work'
        header='How We'
        />

        <div className='animate-slide-in-up flex flex-col gap-10'>
        
        {services.map((service) => (
        
          <div key={service.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative  bg-gradient-to-br from-primary via-tertiary to-secondary border border-cyan-500/20 rounded-xl p-8 lg:p-12">
             
            <div className="relative">
              <Image
              src={service.icon}
              alt=""
              width={1500}
              height={1500}
              className='rounded-md shadow-rose-500 absolute w-full h-full object-cover'
              />
            </div>

              <div className="col-span-2 relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="h-1 w-8 bg-gradient-to-r from-secondary/20 to-transparent" />
                  <span className="text-xs uppercase tracking-widest text-slate-200">{service.tagline}</span>
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                  {service.title}
                </h3>

                <p className="text-lg text-slate-50 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-4 mb-10">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <div
                          className="w-2 h-2 rounded-full bg-slate-50 transition-all duration-300 group-hover:scale-150"
                       
                        />
                      </div>
                      <p className="text-slate-50 leading-relaxed group-hover:text-[#eef2f5] transition-colors duration-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
            </div>
            <p className="text-lg text-slate-50 leading-relaxed mb-8">
                  {service.conclusion}
                </p>

              </div>
            </div>
    
        ))}
        </div>
      </div>
      
      </div>
)}