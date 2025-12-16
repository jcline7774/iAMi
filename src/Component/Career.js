import React from 'react';


function Career() {
   
          const calculateExperience = (startDate) => {
          const start = new Date(startDate);
          const now = new Date();
  
          let years = now.getFullYear() - start.getFullYear();
          let months = now.getMonth() - start.getMonth() + 1;
  
          if (months < 0) {
              years -= 1;
              months += 12;
          }
  
          // Return formatted string
          if (months === 0) {
              return `${years} Years`;
          } else if (years === 0) {
              return `${months} Months`;
          }
          return `${years} Years ${months} Months`;
      }
  
      const experienceYears = calculateExperience("1996-11-27");
 
  return (
    <div style={{ display: 'flex', flexDirection: 'column' , textAlign: 'left'}} className="flex flex-col align-items-left bg-slate-100 dark:bg-gray-700 p-6 rounded-lg shadow-md w-full md:w-1/2">
      <div><strong>Career Experience:</strong> {experienceYears}<br/>
      <strong>Skills:</strong> Programming, Networking, Design, Repair, Troubleshooting, Debugging <br/>
      <strong>Tech:</strong> 
    Javascript, ReactJS, Python3, 
    Azure, AWS, Node.js, ExpressJS, Jquery, 
    HTML, CSS, SQL, Jira, MongoDB, GIT
  </div></div>
  );
}

export default Career;
