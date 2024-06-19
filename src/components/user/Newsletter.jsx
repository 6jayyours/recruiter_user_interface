import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div>
            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaEnvelopeOpenText />Email us</h3>
            </div>
            <p className='text-primary/75 text-base mb-4 '>Getting a new job is never easy. Check what new jobs we have in store for you on Recruiter.</p>
            <div className='w-full space-y-4'>
                <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 
        border focus:outline-none'/>
                <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 
        border bg-indigo-400 rounded-sm text-white cursor-pointer font-semibold'/>

            </div>

            <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaRocket />Get noticied faster</h3>
            </div>
            <p className='text-primary/75 text-base mb-4 '>Getting a new job is never easy. Check what new jobs we have in store for you on Recruiter.</p>
            <div className='w-full space-y-4'>
                <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 
        border focus:outline-none'/>
                <input type='submit' value={"Upload Resume"} className='w-full block py-2 pl-3 
        border bg-indigo-400 rounded-sm text-white cursor-pointer font-semibold'/>

            </div>
        </div>
  )
}

export default Newsletter