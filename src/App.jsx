import { react, useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import Profile from './Components/Profile'
import Intro from './Components/Intro'
import Project from './Components/Project'

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
        <div className='max-w-[1100px] mx-auto  flex items-center gap-20'>
          <div className=''>
            <Profile />
          </div>
          <div>
            <Intro />
            <Project />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
