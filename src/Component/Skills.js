import React from 'react';
import '../Styles/Skills.css'

function Skills() {
  const skills = ['JavaScript', 'ReactJS', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Git', 'AWS', 'Azure', 'Python3', 'Jquery', 'JSON', 'HTML', 'CSS', 'MySQL', 'Jira', 'Tableau', 'Power BI'];

  return (
    <div className="flex flex-col items-center bg-slate-100 dark:bg-gray-700 p-6 rounded-lg shadow-md w-full md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul style={{textAlign: 'left'}} className="list-disc list-inside space-y-2 text-lg">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;