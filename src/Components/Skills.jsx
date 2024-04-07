import React from 'react'
import htmlIcon from  '../assets/html-icon.png'
import cssIcon from  '../assets/css-icon.png'
import jsIcon from  '../assets/js-icon.png'
import bootstrapIcon from  '../assets/bootstrap-icon.png'
import tailwindIcon from  '../assets/tailwindIcon.png'
import mysqlIcon from  '../assets/mysql-icon.png'
export default function Skills() {
    return (
        <section className="px-10 py-5">
            <h4 className='font-semibold text-lg text-white py-3'>What I know</h4>
            <div className="bg-secondry p-4 rounded flex flex-wrap justify-evenly items-center gap-8">
                <img className="w-12" src={htmlIcon} alt="" />
                <img className="w-12" src={cssIcon} alt="" />
                <img className="w-12" src={jsIcon} alt="" />
                <img className="w-12" src={bootstrapIcon} alt="" />
                <img className="w-12" src={tailwindIcon} alt="" />
                <img className="w-12" src={mysqlIcon} alt="" />
            </div>
        </section>
    )
}
