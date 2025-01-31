import React from 'react'
import { projectList } from '../Utils/util'
function Project() {
    return (
        <div className="projects px-5 md:px-10 py-5">
            {/* <h1 className="font-semibold text-lg text-white py-3">Projects</h1> */}
            <h1 className='text-white font-bold text-4xl py-5'>RECENT <span className='text-grayText'>PROJECTS</span></h1>

            <div className="project-list grid grid-cols-1 sm:grid-cols-2 auto-rows-fr auto-cols-fr lg:flex lg:justify-start lg:flex-wrap gap-4 md:gap-8">
                {projectList.map((project, index) => {
                    return (
                        <a key={index} href={project.url} target="blank" className="w-full md:w-56 lg:w-[300px]">
                            <div className="bg-[#2a2726] text-white rounded-md overflow-hidden relative">
                                <img src={project.image} alt={project.image + "image"} className='max-w-full h-auto' />
                                {/* <div className='flex  items-center '> */}
                                <h4 className='px-2 pt-1 font-semibold text-xl flex gap-3 items-center'>{project.title} {project.isProcess &&
                                <span className='bg-green-600 w-3 h-3 rounded-full  animate-pulse'></span>
                                }</h4>
                                <p className='px-2 py-2 text-gray-300'>{project.languages}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
export default Project

