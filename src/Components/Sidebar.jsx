function Sidebar({isMenuActive}) {
  return (
    <div className={isMenuActive ? `fixed flex z-50 w-full h-screen justify-center bg-secondry text-white` : 'bg-secondry text-white md:w-72 md:h-[calc(100vh-56px)] md:sticky left-0 top-[56px] justify-center hidden md:flex'}>
        <ul>
            <li className='my-10'><a href="https://www.github.com/aadii-rawt/" target="_blank" className='flex gap-4'><img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png' alt="" className='w-7' /> GitHub</a></li>
            <li className='my-10'><a href="https://linkedin.com/in/aditya-rawat-96701524b" target="_blank" className='flex gap-4'><img src='   https://cdn-icons-png.flaticon.com/512/145/145807.png ' alt="" className='w-7' /> LinkedIn</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src='/x.png' alt="" className='w-7' />X</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src='instagram.png' alt="" className='w-7' />Instagram</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src='telegram.png' alt="" className='w-7' /> Telegram</a></li>
            <li className='my-10'><a href="mailto:adityarawat4" className='flex gap-4'><img src='mail.png' alt="" className='w-6 h-5' />Mail</a></li>
        </ul>
    </div>
  )
}

export default Sidebar