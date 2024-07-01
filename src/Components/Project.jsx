import React from 'react'
import { projectList } from '../Utils/util'
function Project() {
    return (
        <div className="projects px-5 md:px-10 py-5">
            <h1 className="font-semibold text-lg text-white py-3">Project</h1>
            <div className="project-list flex flex-wrap justify-start gap-4 md:gap-8">
                {projectList.map((project, index) => {
                    return (
                        <a key={index} href={project.url} target="blank" className="w-full md:w-56 lg:w-[210px]">
                            <div className="bg-white text-black rounded-md overflow-hidden">
                                <img src={project.image} alt={project.image + "image"} className='max-w-full h-auto' />
                                <h4 className='px-2 pt-1 font-bold'>{project.title}</h4>
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