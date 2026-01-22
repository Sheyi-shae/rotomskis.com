import { WhyWeExistSection } from '@/custom-components/about'
import { AboutUsHero } from '@/custom-components/about-hero'
import { FoundingStorySection } from '@/custom-components/founding-story'
import Principles from '@/custom-components/principles'
import React from 'react'

export default function page() {
  return (
      <div className='pb-10'>
          <AboutUsHero />
      <WhyWeExistSection />
       <Principles />
        <FoundingStorySection/>
    </div>
  )
}
