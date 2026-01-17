"use client"
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import HeaderTitle from './header-title';
import Link from 'next/link';

const storyPoints = [
  "After years working in sales and corporate consulting, I made a deliberate decision to step away from the traditional path.",
  "I had seen the inside of large systems—how bureaucracy replaces thinking, how activity is mistaken for progress, and how creativity is slowly traded for compliance. The conventional cycle of education, corporate careers, and incremental advancement often produces efficiency, but rarely produces ownership, clarity, or long-term value.",
  "I chose a different direction.",
  "Instead of advising from the outside, I began working directly with founders and owners facing real growth decisions—scaling businesses without overextending capital, entering new markets without losing control, and building structures that could endure pressure rather than collapse under it.",
  "As these projects succeeded, a pattern became clear. Growth problems were rarely isolated. Strategy, execution, markets, capital, and people were deeply interconnected—and treating them separately was the root cause of failure. That realization led me beyond consulting and into strategic integration.",
  "What began as independent work evolved into a broader ecosystem of joint ventures, interim leadership, execution teams, and market partnerships. Today, this ecosystem spans multiple regions and sectors, supporting product-first companies as they expand across the Anglosphere, the DACH region, and Africa.",
  "The work is practical, not theoretical. It is focused on profitable growth, disciplined expansion, and long-term resilience. Results have followed—but outcomes are not the objective. Structure is.",
  "Today, my work is guided by a single principle: to help ambitious founders build businesses that grow globally without losing control, clarity, or purpose.",
];

export function FoundingStorySection() {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleIndices((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    paragraphRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-12 pb-5  bg-tertiary text-black overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-[420px] w-[420px] rounded-full bg-[#800020]/20 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[360px] w-[360px] rounded-full bg-[#1d2b34]/30 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1920 1080">
          <defs>
            <pattern id="dots" x="100" y="100" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="2" fill="#800020" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="1920" height="1080" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 " ref={containerRef}>
        
              <HeaderTitle
                  colouredHeader='convention'
                  subHeader='Our Foundation'
                  header='Choosing structure over'
                  subText='A deliberate path beyond traditional consulting toward meaningful global growth'
              />

        <div className="grid lg:grid-cols-12  gap-8 lg:gap-16 mt-20">
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32 space-y-8">
              <div className="relative">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#800020]/60 via-[#800020]/30 to-transparent" />
                <div className="space-y-10  relative">
                  {storyPoints.map((_, i) => (
                    <div
                      key={i}
                      className={`flex text-justify  flex-col items-center transition-all duration-700 ${
                        visibleIndices.includes(i)
                          ? 'opacity-100 scale-100'
                          : 'opacity-40 scale-75'
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full transition-all duration-500 ${
                          visibleIndices.includes(i)
                            ? 'bg-[#800020] shadow-lg shadow-[#800020]/50'
                            : 'bg-[#800020]/40'
                        }`}
                      />
                      {i < storyPoints.length - 1 && (
                        <div className="h-12 w-px bg-gradient-to-b from-[#800020]/40 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-10 text-sm md:text-base space-y-10">
            {storyPoints.map((text, i) => (
              <div
                key={i}
                ref={(el) => {
                  paragraphRefs.current[i] = el;
                }}
                data-index={i}
                className={`transition-all text-justify text-sm md:text-base text-slate-700  duration-1000 ${
                  visibleIndices.includes(i)
                    ? 'opacity-100 translate-y-0 '
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="group relative ">
                  <div
                    className={`absolute -left-6 top-2 h-2 w-2 rounded-full transition-all duration-500 ${
                      visibleIndices.includes(i)
                        ? 'bg-[#800020] opacity-100'
                        : 'bg-[#800020] opacity-0'
                    } lg:hidden`}
                  />

                  <p
                    className={`px-2 md:px-0 text-base lg:text-lg leading-relaxed transition-all duration-700 ${
                      visibleIndices.includes(i)
                        ? 'text-slate-800'
                        : 'text-slate-500'
                    }`}
                  >
                    {text}
                  </p>

                  <div
                    className={`absolute -bottom-6 left-0 h-px transition-all duration-1000 origin-left ${
                      visibleIndices.includes(i)
                        ? 'w-24 bg-gradient-to-r from-[#800020] to-transparent'
                        : 'w-0 bg-gradient-to-r from-[#800020] to-transparent'
                    }`}
                  />
                </div>
              </div>
            ))}

            <div
              className={`mt-16 pt-12 border-t border-[#800020]/20 transition-all duration-1000 ${
                visibleIndices.length === storyPoints.length
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="h-1 w-12 bg-gradient-to-r from-[#800020] to-transparent mt-1" />
                <div>
                  <p className="animate-bounce text-sm uppercase tracking-widest text-[#800020] mb-3">
                    Ready to explore?
                  </p>
                  <Link href="/connect"><button className="group animate-pulse inline-flex items-center gap-2 text-secondary hover:text-[#800020] transition-colors duration-300">
                    <span className="text-lg font-semibold">Connect Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
