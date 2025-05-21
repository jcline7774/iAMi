import React from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentCompany from '../Component/CurrentCompany'
import HomeDetails from '../Component/HomeDetails'
import Skills from '../Component/Skills'
import Career from '../Component/Career'
import '../Styles/home.css'
import { Link } from 'react-router-dom'
import { Languages } from '../Shared/Constant'
import Buttons from '../Component/Buttons'
import ContactOptions from '../Component/ContactOptions'



function Home() {
  const navigate = useNavigate()

  const goToProjects = () => {
    navigate('/projects')
  }
  
  return (
    <div className="overflow-y-auto min-h-screen flex flex-col items-center justify-center bg-slate-400 text-[#2f2f2f] dark:bg-gray-900 dark:text-white transition-colors duration-300"><div className="f4 df  text-shadow">
    <h1 className="main-title text-shadow dark:text-sea"> John Cline </h1></div>
      <div className='f1 df'>
    <h2 className="subtitle">Full Stack Developer | Cloud Architect | Creative Technologist</h2></div>
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center w-full px-6 py-12 gap-12 text-center">
            
            {/* Intro Section */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full max-w-6xl">
             <HomeDetails /></div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full max-w-6xl">
            <Career /></div>
            {/* Work and Skills Section */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full max-w-6xl">
                <CurrentCompany /></div>
                <div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full max-w-6xl">
                <Skills />
            </div>

            {/* Resume Button */}
            <div className="mt-2">
  <a
    href="https://github.com/jcline7774/iAMi/blob/main/JCline_Res_IT25.pdf"
    download
    className="bg-terracotta dark:bg-sea text-white dark:text-gray-800 font-bold py-2 px-6 rounded-lg hover:scale-105 hover:bg-[#e2725b] dark:hover:bg-[#3a99c3] transition-colors duration-300"
    style={{ width: '200px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    📄  Resume
  </a>
</div>


            {/* Contact Options */}
            <ContactOptions />
            
        </div></div>
    )
}

export default Home;
