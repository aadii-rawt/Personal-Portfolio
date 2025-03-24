import React from 'react'

function Experience() {
    const a = 5
    return (
        <div className='pb-10'>
            <div>
                <h1 className='text-5xl text-center md:text-left lg:text-8xl font-extrabold uppercase font-poppins'>1 Years of <span className='text-[#353334]'>EXPERIENCE</span></h1>
            </div>
            <div className='my-5'>
                <div className='hover:bg-[#1C1A19]   cursor-pointer flex justify-between p-5 rounded-2xl'>
                    <div className='' >
                        <h1 className='font-bold text-2xl sm:text-3xl font-poppins'>Storeshoppy Pvt. Ltd.</h1>
                        <h1 className='font-bold text-xl sm:text-2xl font-poppins text-[#998F8F]'>Software Developer</h1>
                        <p className='my-3 text-lg sm:text-xl text-[#998F8F]'>Designed, developed, and deployed full-stack applications to enhance business workflows and user engagement.</p>
                        <p className='my-3 text-lg sm:text-xl text-[#998F8F]'> Nov 2024  –  Present</p>
                    </div>
                </div>
                <div className='hover:bg-[#1C1A19]   cursor-pointer flex justify-between p-5 rounded-2xl'>
                    <div className='' >
                        <h1 className='font-bold text-2xl sm:text-3xl font-poppins'>Storeshoppy Pvt. Ltd.</h1>
                        <h1 className='font-bold text-xl sm:text-2xl  font-poppins text-[#998F8F]'>Frontend Developer Intern</h1>
                        <p className='my-3 text-lg sm:text-xl text-[#998F8F]'>Collaborated closely with team leads to strategize and implement UI/UX designs, ensuring user-centric experiences.</p>
                        <p className='my-3 text-lg sm:text-xl text-[#998F8F]'> Aug 2024  –  Oct 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience