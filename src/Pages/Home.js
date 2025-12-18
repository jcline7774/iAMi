import React from 'react'
import CurrentCompany from '../Component/CurrentCompany'
import HomeDetails from '../Component/HomeDetails'
import Skills from '../Component/Skills'
import Career from '../Component/Career'
import '../Styles/home.css'
import ContactOptions from '../Component/ContactOptions'



function Home() {
  
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
            <a href="https://jcline7774.github.io/iAMi/JCline_Res_IT25.pdf" download="JCline_Res_IT25.pdf" className="bg-terracotta dark:bg-sea text-white dark:text-gray-800 font-bold py-2 px-6 rounded-lg hover:scale-105 hover:bg-[#e2725b] dark:hover:bg-[#3a99c3] transition-colors duration-300 w-[140px] h-[40px] flex items-center justify-center gap-2">
    📄  Resume
  </a>
</div>


            {/* Contact Options */}
            <ContactOptions />
            
        </div></div>
    )
}

export default Home;
