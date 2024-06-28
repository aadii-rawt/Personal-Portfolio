import React from 'react'
export default function Skills() {
    return (
        <section className="px-10 py-5">
            <h4 className='font-semibold text-lg text-white py-3'>What I know</h4>
            <div className="bg-secondry p-4 rounded flex flex-wrap justify-evenly items-center gap-8">
                <img className="w-12" src='html.png'alt="" />
                <img className="w-12" src='css.png' alt="" />
                <img className="w-12" src='js.png' alt="" />
                <img className="w-12" src='bootstrap.png' alt="" />
                <img className="w-12" src='tailwindIcon.png' alt="" />
                <img className="w-12" src='mysql.png' alt="" />
            </div>
        </section>
    )
}
