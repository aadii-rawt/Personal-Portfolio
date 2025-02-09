import { react, useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import Profile from './Components/Profile'
import Intro from './Components/Intro'
import Project from './Components/Project'
import Experience from './Components/Experience'

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
        <div className='max-w-[1100px] mx-auto  flex  gap-20 relative '>
          <div className='sticky left-0 top-0'>
            <Profile />
          </div>
          <div>
            <Intro />
            <Project />
            <Experience />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
