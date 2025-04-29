import React from 'react'
import { currentCompanyName, currentRole } from '../Shared/Constant'

function CurrentCompany() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' , textAlign: 'left'}} className="flex flex-col align-items-left bg-slate-100 dark:bg-gray-700 p-6 rounded-lg shadow-md w-full md:w-1/2">
      <div><strong>Current Company:</strong> {currentCompanyName}<br/>
      <strong>Position:</strong> {currentRole}<br/>
      <strong>Duration:</strong> May 2022 to Present</div>
    </div>
  )
}

export default CurrentCompany
