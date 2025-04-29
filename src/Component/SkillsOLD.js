import React from 'react';
import '../Styles/Skills.css';
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <Element name="skills" className="skills-item">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ><div className="flex flex-col items-center bg-slate-100 dark:bg-gray-700 p-6 rounded-lg shadow-md w-full ">
        <h1><font color="#0da6ff">SKILLS </font>I HAVE EMBRACED OVER YEARS OF HARD WORK & PRACTICE</h1>
       </div>

        {/* Frontend Skills */}
        <h3>Frontend</h3>
        <div className="skills-container">
          {frontendSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <h4>{skill.name}</h4>
              <div className="progress-bar">
  <motion.div
    className="progress-bar-inner"
    initial={{ width: 0 }}
    animate={{ width: skill.level }}
    transition={{ duration: 1 }}
  />
</div>

            </div>
          ))}
        </div>

        {/* Backend Skills */}
        <h3>Backend</h3>
        <div className="skills-container2">
          {backendSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <h4>{skill.name}</h4>
              <div className="progress-bar">
  <motion.div
    className="progress-bar-inner"
    initial={{ width: 0 }}
    animate={{ width: skill.level }}
    transition={{ duration: 1 }}
  />
</div>

            </div>
          ))}
        </div>

        {/* UI / Design Skills */}
        <h3>UI / Design</h3>
        <div className="skills-container2">
          {designSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <h4>{skill.name}</h4>
              <div className="progress-bar">
  <motion.div
    className="progress-bar-inner"
    initial={{ width: 0 }}
    animate={{ width: skill.level }}
    transition={{ duration: 1 }}
  />
</div>

            </div>
          ))}
        </div>
      </motion.div>
    </Element>
  );
}

// Separate skill data neatly
const frontendSkills = [
  { name: 'Javascript(ES6+)', level: '97%' },
  { name: 'React.js', level: '93%' },
  { name: 'HTML/CSS', level: '99%' },
  { name: 'XML', level: '97%' },
  { name: 'Redux', level: '89%' },
  { name: 'Mongoose', level: '91%' },
  { name: 'Typescript', level: '89%' },
  { name: 'jQuery', level: '90%' },
];

const backendSkills = [
  { name: 'Python3', level: '90%' },
  { name: 'ExpressJS', level: '92%' },
  { name: 'MongoDB', level: '89%' },
  { name: 'Node.JS', level: '97%' },
  { name: 'Java(basic)', level: '80%' },
  { name: 'JSON', level: '97%' },
  { name: 'MySQL / PostgreSQL', level: '92%' },
  { name: 'AWS - Cloud', level: '88%' },
  { name: 'Oracle(basic)', level: '83%' },
  { name: 'Docker', level: '85%' },
  { name: 'GitHub', level: '96%' },
  { name: 'Jira', level: '91%' },
];

const designSkills = [
  { name: 'CSS', level: '94%' },
  { name: 'Bootstrap', level: '82%' },
  { name: 'VS Code', level: '98%' },
  { name: 'Adobe CS', level: '98%' },
  { name: 'Marvel', level: '92%' },
  { name: 'Figma', level: '90%' },
];

export default Skills;
