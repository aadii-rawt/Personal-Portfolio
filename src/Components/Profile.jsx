import React from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
function Profile() {
  return (
    <div className='w-[400px] h-[500px] bg-white rounded-lg p-10'>
      <img src="/goku.jpg" alt="" className='bg-cover' />
      <h1 className='text-black text-3xl  font-bold my-4 text-center'>Aditya Rawat</h1>
      <p className='text-[#6A6B6E] text-xl font-semibold text-center'>A Software Developer who has developed countless innovative solutions.</p>
      <div className='text-[#F46C38] text-3xl text-center flex items-center justify-center my-5 gap-8 '>
        <a href="https://dotdazzle.in" target='_blank'><IoGlobeOutline /></a>
        <a href="https://www.instagram.com/aadii_rawt/" target='_blank'><FaInstagram /></a>
        <a href="https://www.github.com/aadii-rawt/" target='_blank'><FaGithub /></a>
        <a href="https://x.com/aadii_rawt" target='_blank'><FaXTwitter /></a>
        <a href="https://linkedin.com/in/aditya-rawat-96701524b" target='_blank'><FaLinkedinIn /></a></div>
    </div>
  )
}

export default Profile