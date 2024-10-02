import React from 'react'
import { projectList } from '../Utils/util'
function Project() {
    return (
        <div className="projects px-5 md:px-10 py-5">
            <h1 className="font-semibold text-lg text-white py-3">Projects</h1>
            <div className="project-list grid grid-cols-1 sm:grid-cols-2 auto-rows-fr auto-cols-fr lg:flex lg:justify-start lg:flex-wrap gap-4 md:gap-8">
                {projectList.map((project, index) => {
                    return (
                        <a key={index} href={project.url} target="blank" className="w-full md:w-56 lg:w-[250px]">
                            <div className="bg-white text-black rounded-md overflow-hidden relative">
                                <img src={project.image} alt={project.image + "image"} className='max-w-full h-auto' />
                                <div className='flex  items-center'>
                                <h4 className='px-2 pt-1 font-bold'>{project.title}</h4>
                                {project.isProcess &&
                                <div className='bg-green-600 w-3 h-3 rounded-full  animate-pulse'></div>
                                }
                                </div>
                                <p className='px-2 pb-2 text-sm'>{project.languages}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
export default Project

