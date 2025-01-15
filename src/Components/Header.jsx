import React from 'react'

function Header({ isMenuActive, setIsMenuActive }) {
  return (
    <header className='sticky top-0 left-0 z-30 flex border-b  border-gray-300/20 justify-end items-center gap-2 p-3 bg-[#1C1A19]'>
      <a href="mailto:rawatadii060@gmail.com" className='text-white bg-[#4891E0] py-1 px-2 rounded flex  items-center gap-2'> <img src="/avatar.jpg" alt="" className='w-8 h-8' />Contact Me</a>
      {/* <a  className='text-white bg-green-700 py-1 px-2 rounded '>Contact Me</button> */}
      {/* <button className='text-white bg-green-700 py-1 px-2 rounded md:hidden'
      >Menu</button> */}
      <span onClick={() => setIsMenuActive(!isMenuActive)} className='md:hidden '>
        <img src="menu-icon.png" alt="" className='w-6' />
      </span>
    </header>
  )
}

export default Header