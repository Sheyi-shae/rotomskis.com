"use client"

import { ArticleAuthor } from "@/custom-components/articule-author"
import { ArticleContent } from "@/custom-components/articule-content"
import { ArticleHeader } from "@/custom-components/articule-header"
import { RelatedArticles } from "@/custom-components/related-article"
import { insightsData } from "@/insights"
import { ArrowLeft, Clock, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"


export default function InsightPage() {
    const params = useParams()
 
   const article = insightsData.find(a => a.slug === params.slug)
  
    if (!article) {
    return (
      <div className="min-h-screen bg-tertiary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Article Not Found</h1>
          <Link href="/insights" className="text-primary hover:underline">
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }
  return (
       <main className="min-h-screen mt-20 bg-white">
      {/* Back Button */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/insights" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
        </div>
          </div>
          <ArticleHeader article={article} />
          

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ArticleContent content={article?.content || ""} />
                  </div>
                   {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Share Buttons */}
              <div className="bg-tertiary rounded-xl p-6">
                <h3 className="font-semibold text-secondary mb-4">Share Article</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-2 px-4 py-2 bg-white text-secondary rounded-lg hover:bg-primary hover:text-white transition-all">
                    <Linkedin size={18} />
                    <span className="text-sm">LinkedIn</span>
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2 bg-white text-secondary rounded-lg hover:bg-primary hover:text-white transition-all">
                    <Twitter size={18} />
                    <span className="text-sm">Twitter</span>
                                  </button>
                                  <div className="flex items-center gap-3 text-secondary/70 text-sm">
                  <Clock size={16} />
                  <span>{article.minRead}</span>
                </div>
                  
                </div>
              </div>
            </div>
          </aside>

          </div>
          </div>

          {/* articule author */}
          <ArticleAuthor />
          <RelatedArticles articleId={article.id} />

          </main>
  )
}
