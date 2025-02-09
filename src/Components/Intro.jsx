import React from 'react'

function Intro() {
    return (
        <div className='text-white'>
            <h1 className='text-8xl font-extrabold uppercase'>Software <span className='text-[#353334]'>Developer</span></h1>
            <div>
            <p className='text-xl my-10 text-[#998F8F]'>Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
            </div>

            <div className='flex gap-5'>
                <div className='bg-[#F46C38]  h-60 rounded-lg p-5'>
                    <h1 className='text-3xl font-semibold'>DYNAMIC ANIMATION, MOTION DESIGN</h1>
                </div>
                <div className='bg-[#C5FF41] h-60 rounded-lg p-5'>
                    <h1 className='text-3xl text-black font-semibold'>
                    FRAMER, FIGMA, WORDPRESS, REACTJS</h1>
                </div>
              
            </div>
        </div>
    )
}

export default Intro