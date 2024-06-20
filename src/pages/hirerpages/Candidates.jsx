import React from 'react'
import Newsletter from '../../components/user/Newsletter'
import Joblist from '../../components/user/Joblist'
import HBanner from '../../components/recruiter/sections/HBanner'

const Candidates = () => {
  return (
    <div>
      <HBanner />
      <div className="bg-[#F1F5F8] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-12">
        <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-white p-4 rounded">
          <Joblist />
          <div className="flex justify-center mt-4 space-x-8">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Previous</button>
            <span className="mx-2">Page 1 of 2</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Next</button>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1 bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

export default Candidates