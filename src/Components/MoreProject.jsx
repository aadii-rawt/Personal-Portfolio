import React from 'react'
import { moreProjectList } from '../Utils/util'
function MoreProject() { 
    return (
        <section className="px-5 md:px-10 py-5">
            <h1 className="font-semibold text-lg text-white py-3">More Projects</h1>
            <div className="more-projects-list flex flex-wrap justify-start items-center gap-4 md:gap-8 text-white">
                {moreProjectList.map((project, index) => {
                    return (
                        <a key={index} href={project.url} target="_blank" className='bg-secondry p-4 rounded'>
                            <div className="more-project">
                                <div className="project-icon">
                                    <i className="fa-solid fa-gamepad"></i>
                                </div>
                                <div className="project-tittle">
                                    <h3 className='font-bold'>{project.title}</h3>
                                    <p className="text-sm">{project.languages}</p>
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