import React from 'react'

function Intro() {
    return (
        <div className='text-white pb-10'>
            <h1 className='text-5xl text-center md:text-left lg:text-8xl font-extrabold uppercase font-poppins tracking-wide'>Software <span className='text-[#353334]'>Developer</span></h1>
            <div>
            <p className='text-xl text-center md:text-left my-5 text-[#998F8F] font-liter'>Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
            </div>
            <div className='flex flex-col sm:flex-row py-5 gap-5'>
                <div className='bg-[#F46C38] flex items-center  h-60 rounded-lg p-5'>
                    <h1 className='text-3xl font-semibold font-poppins tracking-wide'>REACT, TYPESCRIPT, NEXT, SHADCN
                    </h1>
                </div>
                <div className='bg-[#C5FF41] flex items-center h-60 rounded-lg p-5'>
                    <h1 className='text-3xl text-black font-semibold font-poppins tracking-wide'>
                    NODE, EXPRESS, PRISMA, MONOGODB</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro