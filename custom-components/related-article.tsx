'use client'

import { insightsData } from '@/insights'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface RelatedArticlesProps {
  articleId: number
}


export function RelatedArticles({ articleId }: RelatedArticlesProps) {
    
  const related = insightsData.filter(a => a.id !== articleId).slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-balance">Related Articles</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {related.map((article, i) => (
            <Link
              key={article.id}
              href={`/insights/${article.id}`}
              className="group animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: article.image }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3 w-fit">
                    <span className="text-primary font-semibold text-xs">{article.tagline}</span>
                  </div>

                  <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                    {article.title}
                  </h3>

                  <p className="text-secondary/70 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-secondary/60 space-y-1">
                      <div>{article.minRead}</div>
                    </div>
                    <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
