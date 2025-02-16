import React from 'react'
import { projectList } from '../Utils/util'
import { GoArrowUpRight } from 'react-icons/go'
function Project() {
    return (
        <div className='pb-10'>
            <div>
                <h1 className='text-5xl text-center md:text-left lg:text-8xl font-extrabold uppercase font-poppins'>Recent <span className='text-[#353334]'>Projects</span></h1>
            </div>

            <div className='my-5'>
                {projectList.map((p, i) => (
                    <a href={p?.url} target='_blank' key={i} className='hover:bg-[#1C1A19]  cursor-pointer flex items-start justify-between p-5 rounded-2xl'>
                        <div className='flex items-center gap-5' >
                            {/* <img src="" alt="" /> */}
                            <div className='w-20 h-20 md:w-28 md:h-28 bg-white rounded-xl overflow-hidden flex items-center justify-center object-cover'>
                                <img src={p?.image} alt="" className=' object bg-contain' />
                            </div>
                            <div>
                                <h1 className='font-semibold text-2xl md:text-3xl font-poppins'>{p?.title}</h1>
                            </div>
                        </div>
                        <button className='text-2xl text-[#F46C38] hidden sm:block'><GoArrowUpRight /></button>
                    </a>))}
            </div>
        </div>
    )
}

export default Project

