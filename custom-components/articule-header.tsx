'use client'

import { ArrowRight } from 'lucide-react'

interface ArticleHeaderProps {
  article: {
    title: string
    tagline: string
    minRead: string
    image?: string
    detailedImg?: string
  }
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="h-96 md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: article.detailedImg }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary text-white rounded-full mb-6">
            <span className="font-semibold text-sm">{article.tagline}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90">
           
            <div className="flex items-center gap-2">
              <span className="text-sm">{article.minRead}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
