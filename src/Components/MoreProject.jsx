import React from 'react'
import { moreProjectList } from '../Utils/util'
function MoreProject() { 
    return (
        <section className="px-5 md:px-10 py-5">
                 <h1 className='text-white font-bold text-4xl py-5'>MORE <span className='text-grayText'>PROJECTS</span></h1>

            <div className="more-projects-list flex flex-wrap justify-start items-center gap-4 md:gap-8 text-white">
                {moreProjectList.map((project, index) => {
                    return (
                        <a key={index} href={project.url} target="_blank" className='bg-[#1C1A19] p-4 rounded'>
                            <div className="more-project">
                                <div className="project-icon">
                                    <i className="fa-solid fa-gamepad"></i>
                                </div>
                                <div className="project-tittle">
                                    <h3 className='font-semibold text-lg'>{project.title}</h3>
                                    <p className="text-sm text-gray-300">{project.languages}</p>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default MoreProject