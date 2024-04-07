import React from 'react'

function Sidebar({isMenuActive}) {
  return (
    <div className={isMenuActive ? `fixed flex z-50 w-full h-screen justify-center bg-secondry text-white` : 'bg-secondry text-white md:w-72 md:h-[calc(100vh-56px)] md:sticky left-0 top-[56px] justify-center hidden md:flex'}>
        <ul>
            <li className='my-10'>GitHub</li>
            <li className='my-10'>LinkedIN</li>
            <li className='my-10'>Insatgram</li>
            <li className='my-10'>X</li>
            <li className='my-10'>Mail</li>
        </ul>
    </div>
  )
}

export default Sidebar