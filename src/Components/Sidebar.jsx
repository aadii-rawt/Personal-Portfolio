function Sidebar({isMenuActive}) {
  return (
    <div className={isMenuActive ? `fixed flex z-50 w-full h-screen justify-center bg-secondry text-white` : 'bg-secondry text-white md:w-72 md:h-[calc(100vh-56px)] md:sticky left-0 top-[56px] justify-center hidden md:flex'}>
        <ul>
            <li className='my-10'><a href="#" className='flex gap-4'><img src='github.png' alt="" className='w-7' /> GitHub</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src='telegram.png' alt="" className='w-7' /> Telegram</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src='instagram.png' alt="" className='w-7' />Insatgram</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src='telegram.png' alt="" className='w-7' />X</a></li>
            <li className='my-10'><a href="#" className='flex gap-4'><img src='mail.png' alt="" className='w-6 h-5' />Mail</a></li>
        </ul>
    </div>
  )
}

export default Sidebar