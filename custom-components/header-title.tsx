import React from 'react'
import SectionReveal from './section-reveal'

export default function HeaderTitle({ subHeader, header, colouredHeader, subText }:
  { subHeader: string, header: string, colouredHeader: string, subText: string }) {
  return (
        <div className="max-w-3xl mb-4">
       <div className="relative inline-block mb-4">
  <div className="border-trace">
    <div className="px-4 py-2 bg-[#5C0120]/20 border border-[#5C0120]/40 rounded-full backdrop-blur-sm">
      <span className="text-xs uppercase tracking-widest text-[#5C0120]">
        {subHeader}
      </span>
    </div>
  </div>
</div>
     <SectionReveal>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-black">
            <span className="">{header}</span>
            <span className=" text-[#800020] pl-2">{colouredHeader}</span>
          </h2>
          <p className="text-sm lg:text-base text-black/70 leading-relaxed">
            {subText}
        </p>
      </SectionReveal>
        </div>
  )
}
