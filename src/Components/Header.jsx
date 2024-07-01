import React from 'react'

function Header({ isMenuActive, setIsMenuActive }) {
  return (
    <header className='sticky top-0 left-0 z-30 flex justify-end items-center gap-2 p-3 bg-primary'>
      <button className='text-white bg-green-700 py-1 px-2 rounded '>Contact Me</button>
      {/* <button className='text-white bg-green-700 py-1 px-2 rounded md:hidden'
      >Menu</button> */}
      <span onClick={() => setIsMenuActive(!isMenuActive)} className='md:hidden '>
        <img src="menu-icon.png" alt="" className='w-6' />
      </span>
    </header>
  )
}

export default Header