import { react, useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import Profile from './Components/Profile'
import Intro from './Components/Intro'
import Project from './Components/Project'
import Experience from './Components/Experience'
import Skills from './Components/Skills'

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <>
      {/* <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
     <div className="flex">
      <Sidebar isMenuActive={isMenuActive} />
      <Home />
     </div> */}
      <div className='bg-[#151312] text-white w-full min-h-screen'>
        <div className='max-w-[1150px] mx-auto py-24 flex items-start gap-20 relative '>
          <div className='sticky left-0 top-24'>
            <Profile />
          </div>
          <div className='flex-1'>
            <Intro />
            <Project />
            <Experience />
            <Skills />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
