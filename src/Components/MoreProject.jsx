import React from 'react'

function MoreProject() {
    return (
        <section className="px-10 py-5">
                <h1 className="font-semibold text-lg text-white py-3">More Projects</h1>
            <div className="more-projects-list flex flex-wrap justify-start items-center gap-4 md:gap-8 text-white">
                <Projects title='Bubble Game' languages='HTML • CSS • Javascript' url=''/>
                <Projects title='E BIKE' languages='HTML • CSS • Javascript • Bootstrap' url='https://github.com/adityarawat4/Electric_Bike'/>
                <Projects title='Background Flipper' languages='HTML , CSS , Javascript' url='https://github.com/adityarawat4/background-flipper'/>
                <Projects title='Password Generator' languages='HTML , CSS , Javascript' url='https://github.com/adityarawat4/https://github.com/adityarawat4/Password-Generator'/>
                <Projects title='Random Joke' languages='HTML • CSS • Javascript' url='https://github.com/https://github.com/adityarawat4/Random-joke/Electric_Bike'/>
                <Projects title='QR Generator' languages='HTML • CSS • Javascript • Bootstrap' url='https://https://github.com/adityarawat4/QR-generator.com/https://github.com/adityarawat4/Random-joke/Electric_Bike'/>
                <Projects title='Netflix' languages='HTML • CSS • Javascript • Bootstrap' url='https://hthttps://github.com/adityarawat4/Netfilixtps://github.com/adityarawat4/QR-generator.com/https://github.com/adityarawat4/Random-joke/Electric_Bike'/>
            </div>
        </section>
    )
}

function Projects({title,languages}) {
    return (
        <a href="#" target="_blank" className='bg-secondry p-4 rounded'>
                    <div className="more-project">
                        <div className="project-icon">
                            <i className="fa-solid fa-gamepad"></i>
                        </div>
                        <div className="project-tittle">
                            <h3 className='font-bold'>{title}</h3>
                            <p className="text-sm">{languages}</p>
                        </div>
                    </div>
                </a>
    )
}

export default MoreProject