'use client'

import { Linkedin as LinkedIn, Twitter } from 'lucide-react'
import Image from 'next/image'



export function ArticleAuthor() {
  return (
    <section className="bg-tertiary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <Image
                src={'/img/augustinas.png'}
                alt={'Augustinas'}
                width={300}
                height={300}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-secondary mb-1">Augustinas Rotomskis</h3>
              <p className="text-primary font-semibold mb-4">Business Strategist & Export Professional</p>
              <p className="text-secondary/70 leading-relaxed mb-6">With 10+ years of experience in global market expansion, Aurelijus specializes in helping Lithuanian businesses scale internationally.</p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg transition-all duration-300">
                  <LinkedIn size={18} />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
