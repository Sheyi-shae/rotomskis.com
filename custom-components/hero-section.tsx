'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const particles = useMemo(
  () =>
    Array.from({ length: 50 }, () => ({
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    })),
  []
);

  return (
      <div className="min-h-screen  relative  overflow-hidden">
           <div className="absolute inset-0 -z-10 opacity-5">
        <Image
          src="/img/world-map.png"
          alt="Global market map"
          width={1920}
          height={1080}
          className="h-full w-full object-contain absolute inset-0"
        />
      </div>
      <svg
        className="absolute inset-0 w-full h-full opacity-90"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
       
        <path
          fill="none"
          stroke="url(#mapGradient)"
          strokeWidth="1.5"
          d="M300,400 Q350,350 400,400 T500,400 M150,500 L200,520 L180,560 M600,300 Q650,280 700,320 L720,380 M800,250 L850,280 L870,320 L850,380 L800,400 M1000,200 Q1050,180 1100,220 L1120,300 L1100,400 L1050,420 M1300,150 L1350,180 L1380,250 L1360,350 L1300,380 M1500,200 Q1550,180 1600,220 L1620,300 L1600,400 L1550,420 M1700,250 L1750,280 L1800,320 L1750,380 M200,650 Q250,630 300,670 L320,730 M400,700 Q450,680 500,720 L520,780 M650,750 Q700,730 750,770 L770,830 M900,700 L950,730 L980,800 M1100,750 Q1150,730 1200,770 L1220,830 M1400,700 L1450,730 L1500,800 M1650,750 Q1700,730 1750,770 L1770,830"
        />
        <circle cx="400" cy="350" r="8" fill="#00bcd4" opacity="0.6" className="animate-pulse-slow" />
        <circle cx="950" cy="280" r="6" fill="#800020" opacity="0.5" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <circle cx="1380" cy="200" r="7" fill="#00bcd4" opacity="0.6" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <circle cx="1580" cy="280" r="5" fill="#800020" opacity="0.5" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <circle cx="280" cy="680" r="6" fill="#00bcd4" opacity="0.6" className="animate-pulse-slow" style={{ animationDelay: '0.3s' }} />
        <circle cx="720" cy="760" r="7" fill="#800020" opacity="0.5" className="animate-pulse-slow" style={{ animationDelay: '1.2s' }} />
        <circle cx="1200" cy="800" r="5" fill="#00bcd4" opacity="0.6" className="animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
        <circle cx="1750" cy="760" r="6" fill="#800020" opacity="0.5" className="animate-pulse-slow" style={{ animationDelay: '1.8s' }} />
      </svg>

      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-neutral-50" />
      </div> 
           */}
{mounted && (
  <div className="absolute inset-0 overflow-hidden">
    {particles.map((p, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-cyan-400 animate-pulse-slow"
        style={{
          width: `${p.size}px`,
          height: `${p.size}px`,
          left: `${p.left}%`,
          top: `${p.top}%`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
        }}
      />
    ))}
  </div>
)}


      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className={`space-y-2 mt-30 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-black tracking-tight">
                  Augustinas Rotomskis
                </h1>
                <p className="text-[#800020] text-lg lg:text-xl font-medium">
                  Global Strategic Integrator
                </p>
              </div>

              <div
                className={`transition-all duration-1000 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-xl lg:text-3xl font-bold text-black leading-tight">
                  <span className="text-black"># Connecting product-first</span>
                  <br />
                  <span className="text-black">companies with </span>
                  <span className="text-[#800020]">high-growth </span>
                  <span className="text-secondary">markets</span>
                </h2>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <p className="text-secondary text-justify text-sm lg:text-base leading-relaxed max-w-xl">
                  I work with founders and owners of product-first companies facing complex growth and expansion decisions.
My role is to integrate strategy, markets, and execution — connecting businesses with real demand across the Anglosphere, the DACH region, and Africa.
This is not theoretical training. It is long-term strategic integration across markets, partners, and capital.

                </p>
                
              </div>

              <div
                className={`flex flex-col w-full sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
               <a href="#contact" > <Button className="group relative w-full py-6 bg-primary text-white  rounded overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
                 I am building something global
                </Button></a>

                <a href="#contact" ><Button className="group w-full px-8 py-6 bg-transparent border-primary border-2 text-primary  rounded transition-all duration-300 hover:bg-secondary hover:text-white hover:scale-105 flex items-center justify-center gap-2">
                  <span>Start a strategic conversation</span>
                </Button></a>
              </div>

              <div
                className={`transition-all  duration-1000 delay-700 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <Link href="/connect"><button className="group text-primary animate-bounce  flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                  <span className="text-sm font-medium">Explore my thinking</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button></Link>
              </div>
            </div>

            <div
              className={`relative transition-all mt-20 hidden sm:block duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/20 via-[#1d2b34]/40 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#800020]/30 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-[#1d2b34] to-[#800020] flex items-center justify-center">
                    <Image
                    src="/img/augustinas.png" 
                    alt="Hero Section" width={500} height={500} />
                  </div>
                </div>

                <div className="absolute -inset-4 border-2 border-cyan-400/20 rounded-full animate-spin-slow" />
                <div className="absolute -inset-8 border border-[#800020]/20 rounded-full animate-spin-reverse" />
              </div>

              {mounted && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
                <svg viewBox="0 0 600 600" className="w-full h-full opacity-80">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#800020" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#1d2b34" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  {[...Array(20)].map((_, i) => {
                    const angle = (i * 18 * Math.PI) / 180;
                    const x1 = 300 + Math.cos(angle) * 150;
                    const y1 = 300 + Math.sin(angle) * 150;
                    const x2 = 300 + Math.cos(angle + 0.5) * 250;
                    const y2 = 300 + Math.sin(angle + 0.5) * 250;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        className="animate-pulse-slow"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    );
                  })}
                </svg>
              </div>}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 right-8 animate-float">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-[#800020] rounded-lg rotate-45 opacity-20 blur-sm" />
          <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-[#800020] rounded-lg rotate-45" />
        </div>
      </div> */}
    </div>
  );
}
