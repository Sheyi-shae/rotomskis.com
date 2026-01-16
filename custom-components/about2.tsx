import React from 'react'

export default function About2({isVisible}: {isVisible: boolean}) {
  return (
      <div className='grid lg:grid-cols-2 pt-8 gap-6 items-center ' >
          {/* right section */}
          <div className={`p-2 md:p-4 shadow-2xl rounded-lg overflow-hidden bg-muted/75 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <h3 className="text-xl lg:text-2xl flex justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-tight mb-6 text-balance">
  Why Integration Becomes Necessary
            </h3>

               <div className="text-xs lg:text-sm space-y-6 text-justify">
              <p className="text-secondary/70 leading-relaxed">
             As systems grow more complex, coordination alone is no longer sufficient. Managing interfaces between strategy, execution, markets, capital, and leadership requires more than alignment meetings or reporting structures. It requires integration.
                  </p>

              <p className="text-secondary/70 leading-relaxed">
                Integration becomes necessary when decisions in one part of the system immediately affect outcomes elsewhere. When market entry choices shape capital risk. When execution speed impacts strategic flexibility. When leadership structure determines whether growth compounds or collapses.
              </p>

              <p className="text-secondary/70 leading-relaxed">
              Without integration, organizations accumulate friction. Effort increases, but coherence declines. Teams move faster, yet in different directions. What appears as momentum on the surface often masks growing structural instability underneath.
              </p>
              <p className="text-secondary/70 leading-relaxed ">
              Integration addresses this by restoring responsibility for the whole. It connects strategy with real demand, execution with context, and capital with long-term consequences. Rather than optimizing isolated functions, integration focuses on how the system behaves under pressure.
                  </p>
                  <p className="text-secondary/70 leading-relaxed ">
                      In periods of economic transition, shifting demand centers, and tightening capital, integration is no longer a competitive advantage. It becomes a condition for controlled growth. Those who can integrate move deliberately and scale with resilience. Those who cannot remain exposed to fragmentation, volatility, and loss of control.
                  </p>

             
                          </div>
          </div>

          {/* left section */}
          <div className={`p-2 md:p-4 shadow-2xl rounded-lg overflow-hidden bg-muted/75 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-xl lg:text-2xl flex justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-tight mb-6 text-balance">
  The Role of the Strategic Integrator
            </h3>

               <div className="text-xs lg:text-sm space-y-6 text-justify">
              <p className="text-secondary/70 leading-relaxed">
             As systems grow more complex, coordination alone is no longer sufficient. Managing interfaces between strategy, execution, markets, capital, and leadership requires more than alignment meetings or reporting structures. It requires integration.
                  </p>

              <p className="text-secondary/70 leading-relaxed">
                Integration becomes necessary when decisions in one part of the system immediately affect outcomes elsewhere. When market entry choices shape capital risk. When execution speed impacts strategic flexibility. When leadership structure determines whether growth compounds or collapses.
              </p>

              <p className="text-secondary/70 leading-relaxed">
              Without integration, organizations accumulate friction. Effort increases, but coherence declines. Teams move faster, yet in different directions. What appears as momentum on the surface often masks growing structural instability underneath.
              </p>
              <p className="text-secondary/70 leading-relaxed ">
              Integration addresses this by restoring responsibility for the whole. It connects strategy with real demand, execution with context, and capital with long-term consequences. Rather than optimizing isolated functions, integration focuses on how the system behaves under pressure.
                  </p>
                  <p className="text-secondary/70 leading-relaxed ">
                      In periods of economic transition, shifting demand centers, and tightening capital, integration is no longer a competitive advantage. It becomes a condition for controlled growth. Those who can integrate move deliberately and scale with resilience. Those who cannot remain exposed to fragmentation, volatility, and loss of control.
                  </p>

             
                          </div>
          </div>
          
    </div>
  )
}
