"use client"

import { Linkedin, ArrowRight, Globe, Briefcase, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function ConnectSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const benefits = [
    {
      icon: <Globe size={24} />,
      title: "Global Network",
      description: "Access to international business strategists and market experts",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Exclusive Insights",
      description: "Weekly articles on market expansion, strategy, and global trends",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Growth Opportunities",
      description: "Real-time opportunities for partnerships and business expansion",
    },
  ]

  return (
    <section id="connect" className="py-24 bg-gradient-to-b from-white to-tertiary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Connect Card */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4 text-balance">
                    Let's Connect on LinkedIn
                  </h2>
                  <p className="text-base text-secondary/70 leading-relaxed text-balance">
                    Join our growing community of business strategists and export professionals navigating global
                    markets. Get insights, opportunities, and expert guidance delivered directly to your network.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 my-8 py-8 border-y border-gray-200">
                  {[
                    { number: "500+", label: "Connected Professionals" },
                    { number: "40+", label: "Markets Covered" },
                    { number: "50k+", label: "Monthly Reach" },
                  ].map((stat, i) => (
                    <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-sm text-secondary/60">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://www.linkedin.com/in/augustinasrotomskis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 w-fit group animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <Linkedin size={24} />
                  <span>Connect with Me</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Trust indicators */}
                <p className="text-sm text-secondary/60 mt-8 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Over 5 years of strategic expansion expertise
                </p>
              </div>

              {/* Right - Visual */}
              <div className="bg-gradient-to-br relative from-primary/10 to-secondary/10 p-12 lg:p-16 flex items-center justify-center">
               {/* bg - image */}
               
                              <Image src="/img/augustinas.png" alt="Connect" width={500}
                                  height={500}
                                  className="absolute top-0 left-0 w-full opacity-25 h-full object-cover" />
               <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
                  {/* LinkedIn Icon Animation */}
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shadow-lg animate-float">
                      <Linkedin size={64} className="text-white" />
                    </div>
                    <div className="absolute inset-0 w-32 h-32 border-2 border-primary rounded-2xl animate-pulse-glow opacity-0" />
                  </div>

                  {/* Connection Pulse Animation */}
                  <div className="text-center">
                    <p className="text-sm font-semibold text-primary mb-4">Building Global Connections</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-slide-in-up group"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              {/* <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <div className="text-primary">{benefit.icon}</div>
              </div> */}
              <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
              <p className="text-secondary/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-secondary/70 mb-6">
            Can't connect right now? No problem. Let's stay in touch another way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@rjvpartners.com"
              className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact via Email
            </a>
            <a
              href="https://verslas.blog/" target="_blank"
              className="px-6 py-3 rounded-lg text-primary font-semibold hover:text-secondary transition-colors"
            >
              Read Latest Insights
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
