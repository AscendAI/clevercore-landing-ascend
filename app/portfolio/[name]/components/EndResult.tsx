import React from 'react'
import SectionTitle from '@/components/SectionTitle'

const EndResult = ({ endResult, similar }: { endResult: string, similar?: string }) => {
  return (
    <div className="p-4 md:p-8">
      <div className="rounded-md">
        <SectionTitle>End product</SectionTitle>
        <div className="mx-4 my-10 text-lg text-muted-foreground md:mx-20 md:text-center md:text-2xl">
          {endResult}
        </div>
        <div className="mx-4 my-10 text-lg text-muted-foreground md:mx-20 md:text-center md:text-2xl">
          {similar}
        </div>
      </div>
    </div>
  )
}

export default EndResult
