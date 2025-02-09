import React from 'react'

function Profile() {
  return (
    <div className='w-[400px] h-[500px] bg-white rounded-lg p-10'>
      <img src="/goku.jpg" alt=""  className='bg-cover'/>
      <h1 className='text-black text-3xl  font-bold my-4 text-center'>Aditya Rawat</h1>
      <p className='text-[#6A6B6E] text-xl font-semibold text-center'>A Software Engineer who has developed countless innovative solutions.</p>
    </div>
  )
}

export default Profile