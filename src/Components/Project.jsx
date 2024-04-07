import React from 'react'
//======================images====================//
import TicTackToe from  '../assets/tictactoe.jpg'
import poster from  '../assets/poster.jpg'
import todolist from  '../assets/todolist.jpg'
import bubbleGame from  '../assets/bubble-game.jpg'

function Project() {
    return (
        <div className="projects px-10 py-5">
            <h1 className="font-semibold text-lg text-white py-3">Project</h1>
            <div className="project-list flex flex-wrap justify-start gap-4 md:gap-8">
                <ProjectCard title='Tic Tac Toe' languages='HTML, CSS , Javascript' image={TicTackToe}
                    url='https://github.com/adityarawat4/tick-tack-toe' />
                <ProjectCard title='Gmail Clone' languages='HTML, CSS , Javascript' image={poster}
                    url='https://github.com/adityarawat4/Gmail-Clone' />
                <ProjectCard title='Todo List' languages='HTML, CSS , Javascript' image={todolist}
                    url='https://github.com/adityarawat4/To-do-list' />
                <ProjectCard title='Bubble Game' languages='HTML, CSS , Javascript' image={bubbleGame}
                    url='https://github.com/adityarawat4/Bubble-Game' />       
            </div>
        </div>
    )
}

function ProjectCard({title,languages,image,url}){
    return (
        <a href={url} target="blank" className="w-full md:w-56 lg:w-1/5">
        <div className="bg-white text-black rounded-md overflow-hidden">
                <img src={image} alt={image} className='max-w-full h-auto' />
                <h4 className='px-2 pt-1 font-bold'>{title}</h4>
                <p className='px-2 pb-2 text-sm'>{languages}</p>
        </div>
    </a>
    )
}

export default Project