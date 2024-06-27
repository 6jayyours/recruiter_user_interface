import React from 'react'
import HBanner from '../../components/recruiter/sections/HBanner'
import Candidatelist from '../../components/recruiter/Candidatelist'

const Candidates = () => {
  return (
    <div>
      <HBanner />
      <div className="bg-[#F1F5F8] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-12">
      <div>
        <Candidatelist/>
      </div>
      </div>
    </div>
  )
}

export default Candidates