"use client";
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Briefcase, Globe, Users } from 'lucide-react';
import HeaderTitle from './header-title';
import Image from 'next/image';

const services = [
  {
    id: 0,
   icon: "/icons/manager-consultant.svg",
    title: 'Interim Head of Export',
    tagline: 'Market Leadership & Expansion',
    description:
      'I step in as an export and market expansion lead when companies need hands-on leadership to enter or scale in international markets.',
    highlights: [
      'Market validation and entry strategy',
      'Strategic partner selection and vetting',
      'Distribution network design',
      'Execution across Anglosphere, DACH, and Africa',
    ],
    color: '#0891b2',
    metrics: ['15+', 'Markets', '€450M+', 'Volume Managed'],
  },
  {
    id: 1,
    icon: "/icons/strategy-planning.svg",
    title: 'Holding Strategic Management',
    tagline: 'Multi-Company Governance',
    description:
      'I work with founders and owners managing multi-company or holding structures, helping them maintain strategic control as complexity increases.',
    highlights: [
      'Governance framework design',
      'Capital allocation and strategy',
      'Leadership team alignment',
      'Cross-company integration',
    ],
    color: '#06b6d4',
    metrics: ['8+', 'Holdings', '€1.2B+', 'AUM'],
  },
  {
    id: 2,
   icon: "/icons/business-connection.svg",
    title: 'Company Ecosystem Integration',
    tagline: 'Scalable Growth Networks',
    description:
      'I design and integrate ecosystems of companies, partners, and execution teams around specific growth objectives.',
    highlights: [
      'Faster market access and entry',
      'Shared capabilities and resources',
      'Scalable execution infrastructure',
      'Reduced capital requirements',
    ],
    color: '#14b8a6',
    metrics: ['25+', 'Ecosystem Partners', '3x', 'Faster Scaling'],
  },
];

export function MyWorkSection() {
  const [activeId, setActiveId] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-id') || '0');
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <section className="relative pt-8 sm:pt-20  text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-[#800020]/15 blur-[120px]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-[0.02]" viewBox="0 0 1920 1080">
          <defs>
            <pattern id="workGrid" x="100" y="100" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#06b6d4" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1920" height="1080" fill="url(#workGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
           <HeaderTitle
        subHeader="My Work"
        header=" Experience shaped by real"
        colouredHeader="growth decisions"
        subText=" Hands-on work across markets, operators, and execution environments—where strategy is tested under real constraints, not theoretical models."
      />

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => {
            const isActive = activeId === service.id;
            const isVisible = visibleCards.includes(service.id);
            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                data-id={service.id}
                onClick={() => setActiveId(service.id)}
                className={`transition-all duration-700 cursor-pointer group relative overflow-hidden rounded-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                       ? "bg-primary text-white shadow-lg shadow-primary/30"
              : "bg-rose-50 border-rose-500/20"
          
                  } border rounded-xl`}
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/10 via-transparent to-transparent" />
                </div>

                <div className="relative p-6 h-full">
                   <div className={`mb-4 ${activeId === service.id ? "text-white" : "text-primary"}`}>
            <Image src={service.icon} alt={service.title} width={32} height={32} className="w-12 h-12" />
          </div>

                  <h3 className={`mt-4 font-bold text-lg leading-tight transition-colors duration-500 ${
                    isActive ? 'text-white' : 'text-primary group-hover:text-secondary'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`mt-2 text-xs uppercase tracking-widest transition-colors duration-500 ${
                    isActive ? 'text-slate-100' : 'text-slate-600'
                  }`}>
                    {service.tagline}
                  </p>

                  <p className={`mt-3 text-sm leading-relaxed transition-colors duration-500 ${
                    isActive ? 'text-[#eef2f5]/80' : 'text-primary'
                  }`}>
                    {service.description.substring(0, 80)}...
                  </p>

                  <div
                    className={`absolute bottom-0 left-0 h-1 transition-all duration-500 bg-gradient-to-r from-primary to-transparent ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-12'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className=" px-1 lg:px-12 grid gap-8 items-stretch">
          

          <div className="lg:col-span-2">
            <div className="relative bg-rose-50 border-rose-500/20 rounded-xl p-8 lg:p-12">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5" style={{
                background: `radial-gradient(circle, transparent)`,
              }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="h-1 w-8 bg-gradient-to-r from-secondary to-transparent" />
                  <span className="text-xs uppercase tracking-widest text-secondary">{activeService.tagline}</span>
                </div>

                <h3 className="text-4xl lg:text-5xl font-semibold mb-6 text-primary">
                  {activeService.title}
                </h3>

                <p className="text-lg text-primary/70 leading-relaxed mb-8">
                  {activeService.description}
                </p>

                <div className="space-y-4 mb-10">
                  {activeService.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <div
                          className="w-2 h-2 rounded-full bg-rose-900 transition-all duration-300 group-hover:scale-150"
                       
                        />
                      </div>
                      <p className="text-primary/80 leading-relaxed group-hover:text-rose-950 transition-colors duration-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* <button className="group inline-flex items-center gap-3 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${activeService.color}30, ${activeService.color}10)`,
                    border: `1px solid ${activeService.color}50`,
                    color: '#eef2f5',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${activeService.color}50, ${activeService.color}30)`;
                    e.currentTarget.style.borderColor = `${activeService.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${activeService.color}30, ${activeService.color}10)`;
                    e.currentTarget.style.borderColor = `${activeService.color}50`;
                  }}
                >
                  <span>Explore This Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
