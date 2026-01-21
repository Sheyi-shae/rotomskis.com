'use client'

import { useParams } from 'next/navigation'
import { PortfolioHeader } from '@/custom-components/portfolio-header'
import { CaseStudyContent } from '@/custom-components/portfolio-case-study'
import { ProjectMetrics } from '@/custom-components/portfolio-metrics'
import { ChallengeAndSolution } from '@/custom-components/portfolio-challenge-solution'
import { ProjectOutcome } from '@/custom-components/portfolio-outcome'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { portfolioProjects } from '@/portfolio'
import { FinalCTA } from '@/custom-components/portfolio-cta'



export default function PortfolioDetailPage() {
  const params = useParams()
  const projectId = parseInt(params.id as string)
  const project = portfolioProjects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen bg-tertiary flex flex-col">
       
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Project Not Found</h1>
            <p className="text-secondary/70 mb-8">The portfolio project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/#portfolio" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
              Back to Portfolio
            </Link>
          </div>
        </main>
      </div>
    )
  }



  return (
    <div className="min-h-screen mt-20  bg-[#5C0120]/[0.03] ">
      <main className='  mx-auto px-2 sm:px-6 lg:px-16 '>
      

        {/* Header */}
        <PortfolioHeader project={project} />

        {/* Metrics */}
        <ProjectMetrics metrics={project.metrics} />

        {/* Challenge & Solution */}
        <ChallengeAndSolution challenge={project.challenge} conclusion={project.conclusion} solution={project.solution} timeline={project.timeline} />

        {/* Detailed Content */}
        {/* <CaseStudyContent project={project} /> */}

        {/* Outcomes */}
        <ProjectOutcome outcomes={project.outcomes} />

       <FinalCTA/>
      </main>
    </div>
  )
}
