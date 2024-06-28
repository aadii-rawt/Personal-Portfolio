import React from 'react'

function MoreProject() {
    const moreProjectList = [
        {
            title: 'Bubble Game',
            languages: 'HTML • CSS • Javascript',
            url: ''
        },
        {
            title: 'E Bike',
            languages: 'HTML • CSS • Javascript • Bootstrap',
            url: 'https://github.com/adityarawat4/Electric_Bike'
        },
        {
            title: 'Background Flipper',
            languages: 'HTML , CSS , Javascript',
            url: 'https://github.com/adityarawat4/background-flipper'
        },
        {
            title: 'Password Generator',
            languages: 'HTML • CSS • Javascript',
            url: 'https://github.com/adityarawat4/https://github.com/adityarawat4/Password-Generator'
        },
        {
            title: 'Random Joke',
            languages: 'HTML • CSS • Javascript',
            url: 'https://github.com/adityarawat4/Random-joke'
        },
        {
            title: 'QR Generator',
            languages: 'HTML • CSS • Javascript',
            url: 'https://github.com/adityarawat4/QR-generator.com'
        },
        {
            title: 'Netflix',
            languages: 'HTML • CSS • Javascript • Bootstrap',
            url: 'hthttps://github.com/adityarawat4/Netfilix'
        }
    ]
    return (
        <section className="px-10 py-5">
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