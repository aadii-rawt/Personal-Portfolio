import React from 'react'
import { Link } from 'react-router-dom'
function Banner() {
    return (
        <div style={{background: "url(banner.png)",backgroundPosition:"center", backgroundSize:"cover"}} className="flex justify-between text-white">
            <div className=" w-full p-5 sm:p-10 backdrop-blur-sm flex justify-between items-center">
                <div className='user flex items-center gap-4'>
                    <div className="user-profile w-14 sm:w-20 border-white border-2 rounded-full overflow-hidden">
                     <img src='profile.jpg' alt="" className="overflow-hidden" />
                    </div>
                    <div className="user-name">
                    <h1 className="font-bold text-lg sm:text-3xl">Aditya Rawat</h1>
                    <p className="text-sm">aadi_rawt</p>
                    </div>
                </div>
            <a href='https://linkedin.com/in/aditya-rawat-96701524b' className="social-link flex justify-center items-center gap-2">
                <img src='linkedin.png' alt=""  className="w-7"/>
                <h1 className="font-semibold text-xl hidden sm:block">Aditya Rawat</h1>
            </a>
            </div>
        </div>
    )
}

export default Banner