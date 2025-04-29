import React, {useEffect} from 'react'
import { useSelector} from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MobNavBar from './Component/MobNavBar'
import NavBar from './Component/NavBar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Education from './Pages/Education'
import Experience from './Pages/Experience'
import Home from './Pages/Home'
import Projects from './Pages/Projects'

function App() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  
     
    return (
        <div className="gray-200 text-stone-800 dark:bg-gray-900 dark:text-white transition-all duration-300" style={{ display: 'flex', height: '100vh', width: '80vw', overflow: 'hidden' }}>
            <BrowserRouter>
                <div className='pc-navbar'>
                    <NavBar />
                </div>
                <div className='mob-navbar'>
                    <MobNavBar />
                </div>
                <div className="home-right h-screen overflow-y-auto flex-1">

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/education' element={<Education />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                   
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App