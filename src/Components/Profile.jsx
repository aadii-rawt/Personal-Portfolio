import React from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
function Profile() {
  return (
    <div className=' lg:w-[400px] lg:h-[600px] bg-white rounded-lg p-5'>
      <div className='flex items-center justify-center'>
        <img src="/download.jpg" alt="" className='bg-cover sm:w-[200px] lg:w-[70%] text-center' />
      </div>
      <h1 className='text-black text-3xl  font-bold my-4 text-center font-poppins'>Aditya Rawat</h1>
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