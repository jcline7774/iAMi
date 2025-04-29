import React from 'react'
import Buttons from './Buttons'

import CurrentCompany from './CurrentCompany'


function HomeDetails() {
  

    return (
        <div style={{ display: 'flex', flexDirection: 'column' , textAlign: 'center'}} >
  
    <div className=' w-full slate-100 bg-slate-100 dark:bg-gray-700 text-[#2f2f2f] dark:text-white p-6 rounded-2xl shadow-md transition-colors duration-300'>
    <p className="bio">
      I bring over a decade of cross-functional experience in full-stack development, network engineering, 
      and digital design. From building scalable cloud applications to streamlining business operations 
      with modern tech stacks, I deliver elegant solutions that balance performance and aesthetics.
    </p>
    <p className="location w-full slate-100 dark:bg-gray-700 text-[#2f2f2f] dark:text-white transition-colors duration-300"><strong>Location:</strong> 📍 Fort Lauderdale, FL &nbsp; &nbsp;<strong>Citizenship</strong> 🇺🇸 USA 🇮🇹 Italy</p>
  </div>

  

  
</div>


    )
}

export default HomeDetails