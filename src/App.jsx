import { react,useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <>
     <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
     <div className="flex">
      <Sidebar isMenuActive={isMenuActive} />
      <Home />
     </div>
    </>
  )
}

export default App
