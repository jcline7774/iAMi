import React from 'react'
import '../Styles/Experience.css'
import { oldCompanyHistory } from '../Shared/Constant'
import BodyCard from '../Component/BodyCard'
import Card2 from '../Component/Card2'


function Experience() {
  return (
    <div className='dp experience flex flex-col items-center px-4 md:px-16 py-12 min-h-screen bg-slate-400 dark:bg-gray-900 transition-colors duration-300'>
      <div className='f4 df text-shadow text-slate-700 dark:text-sea'>WORK EXPERIENCE</div>
      <div className='mob-exp '>
        <div className='exp-top df '>
          <div className='left-exp ' >
          <Card2
  pno="01"
  details={
    <div className="card group relative rounded-xl  p-4  transition">
      <div className="box relative">
        <div className="ex-c-details text-slate-800 dark:text-gray-100">
          Company: {oldCompanyHistory[0].name}<br />
          Position: {oldCompanyHistory[0].designation} <br />
          Start Date: {oldCompanyHistory[0].startDate} <br />
          Last Date: {oldCompanyHistory[0].endDate}<br />
          Location: {oldCompanyHistory[0].location}
          <div className="job-duties hidden group-hover:block animate-slideDown mt-2 text-sm text-gray-600 dark:text-gray-300 bg-slate-200 dark:bg-slate-700">
            <ul className="list-disc pl-4">
              <li>Built and deployed backend services for mobile apps using Node.js and Express, integrating MongoDB via Mongoose and RESTful APIs</li>
              <li>Building and testing custom AI agents with Langchain.</li>
              <li> Enhanced React-based UI features, debugged Redux states, and improved routing/navigation</li>
              <li>Managed database logic using MySQL for transactional data; authored complex SQL queries</li>
              <li>Led sprint planning with Jira dashboards to optimize Agile workflows and cross-team delivery</li>
              <li>Supported CI/CD using GitHub and Git workflows.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  }
/>

           
<Card2
  pno="02"
  details={
    <div className="card group relative rounded-xl  p-4  transition">
      <div className="box relative">
        <div className="ex-c-details text-slate-800 dark:text-gray-100">
          Company: {oldCompanyHistory[1].name}<br />
          Position: {oldCompanyHistory[1].designation} <br />
          Start Date: {oldCompanyHistory[1].startDate} <br />
          Last Date: {oldCompanyHistory[1].endDate}<br />
          Location: {oldCompanyHistory[1].location}
          <div className="job-duties hidden group-hover:block animate-slideDown mt-2 text-sm text-gray-600 dark:text-gray-300">
            <ul className="list-disc pl-4">
    <li>Engineered internal scheduling app for high-turnover staffing; integrated MySQL backend.</li><li>
Developed web-based dashboards and data structures for HR and timesheet automation.</li><li>
Planned product roadmap for seamless integration with ADP payroll APIs.
</li>
</ul>
          </div>
        </div>
      </div>
    </div>
  }
/>
           
<Card2
  pno="03"
  details={
    <div className="card group relative rounded-xl  p-4  transition">
      <div className="box relative">
        <div className="ex-c-details text-slate-800 dark:text-gray-100">
          Company: {oldCompanyHistory[2].name}<br />
          Position: {oldCompanyHistory[2].designation} <br />
          Start Date: {oldCompanyHistory[2].startDate} <br />
          Last Date: {oldCompanyHistory[2].endDate}<br />
          Location: {oldCompanyHistory[2].location}
          <div className="job-duties hidden group-hover:block animate-slideDown mt-2 text-sm text-gray-600 dark:text-gray-300">
            <ul className="list-disc pl-4">
    <li>Developed 3D design pipelines and digital showroom using Adobe Creative Suite.</li><li>
Delivered project apps for vendors and oversaw digital transformation of client production.</li><li>
Generated $2.5M+ annual revenue; led Agile team sprints and implemented scrum training.
</li>
</ul>
          </div>
        </div>
      </div>
    </div>
  }
/>
           
<Card2
  pno="04"
  details={
    <div className="card group relative rounded-xl  p-4  transition">
      <div className="box relative">
        <div className="ex-c-details text-slate-800 dark:text-gray-100">
          Company: {oldCompanyHistory[3].name}<br />
          Position: {oldCompanyHistory[3].designation} <br />
          Start Date: {oldCompanyHistory[3].startDate} <br />
          Last Date: {oldCompanyHistory[3].endDate}<br />
          Location: {oldCompanyHistory[3].location}
          <div className="job-duties hidden group-hover:block animate-slideDown mt-2 text-sm text-gray-600 dark:text-gray-300">
            <ul className="list-disc pl-4">
    <li>Migrated office to Windows Server 2003; redesigned network infrastructure.</li><li>
Launched redesigned corporate website and digital billing system.</li><li>
Reduced operational costs by 40% through automation and database optimization.
</li>
</ul>
          </div>
        </div>
      </div>
    </div>
  }
/>
           
<Card2
  pno="05"
  details={
    <div className="card group relative rounded-xl  p-4  transition">
      <div className="box relative">
        <div className="ex-c-details text-slate-800 dark:text-gray-100">
          Company: {oldCompanyHistory[4].name}<br />
          Position: {oldCompanyHistory[4].designation} <br />
          Start Date: {oldCompanyHistory[4].startDate} <br />
          Last Date: {oldCompanyHistory[4].endDate}<br />
          Location: {oldCompanyHistory[4].location}
          <div className="job-duties hidden group-hover:block animate-slideDown mt-2 text-sm text-gray-600 dark:text-gray-300">
            <ul className="list-disc pl-4">
    <li>Implemented client-server network architecture and integrated MS Access with QuickBooks.</li><li>
Deployed and maintained Active Directory across internal networks.
</li>
</ul>
          </div>
        </div>
      </div>
    </div>
  }
/>
           
<Card2
  pno="06"
  details={
    <div className="card group relative rounded-xl  p-4  transition">
      <div className="box relative">
        <div className="ex-c-details text-slate-800 dark:text-gray-100">
          Company: {oldCompanyHistory[5].name}<br />
          Position: {oldCompanyHistory[5].designation} <br />
          Start Date: {oldCompanyHistory[5].startDate} <br />
          Last Date: {oldCompanyHistory[5].endDate}<br />
          Location: {oldCompanyHistory[5].location}
          <div className="job-duties hidden group-hover:block animate-slideDown mt-2 text-sm text-gray-600 dark:text-gray-300">
            <ul className="list-disc pl-4">
    <li>Supported over 250 users in a trading environment using Windows NT and Exchange.</li><li>
Executed daily reconciliations and managed department infrastructure.</li><li>
Deploy Windows NT across all user workstations in a commercial credit bank.</li><li>
Maintain Active Directory and email accounts using Microsoft Exchange.
</li>
</ul>
          </div>
        </div>
      </div>
    </div>
  }
/>
        
             
           {/*
            <div className='small-blocks'>
              <div className='frame neu-btn-2 df small-block-child'>
                <div className='f3 text-shadow' style={{ height: '40%' }}>10 +</div>
                <div className='f1 df center-container'><span>Years of experience</span></div>


              </div>

              <div className='frame neu-btn-2 df small-block-child block-details'>
                <div className='f3 text-shadow'>30 +</div>
                <div className='f1 df center-container'>Projects Completed</div>

              </div>

              <div className='frame neu-btn-2 df small-block-child block-details'>
                <div className='f3 text-shadow'>4</div>
                <div className='f1 df center-container'>Working Platforms</div>

              </div>
            </div>*/}
          
          <div className='f4 df text-shadow text-slate-700 dark:text-sea'>SKILL SET</div>
        <div className='exp-bottom df ' >
          <div className='exp-bottom-left df text-slate-800 dark:text-gray-100 bg-slate-400 dark:bg-gray-900' >
             <BodyCard header={'AWS/Cloud'} skills={[
               { name: 'Lambda', level: '95%', color: '#61dafb' },
               { name: 'DynamboDB', level: '98%', color: '#68a063' },
               { name: 'Bedrock', level: '97%', color: '#61dafb' },
               { name: 'Sagemaker', level: '94%', color: '#68a063' },
               { name: 'EC2', level: '99%', color: '#61dafb'},
               { name: 'ECS/EKS', level: '92%', color: '#68a063' },
               { name: 'S3', level: '99%', color: '#61dafb'},
               { name: 'AWS CLI', level: '99%', color: '#68a063' },
               { name: 'RDS', level: '97%', color: '#61dafb'},
               { name: 'EventBridge', level: '95%', color: '#68a063' },
               { name: 'Kubernetes', level: '93%', color: '#61dafb' },
               { name: 'SQS/SNS', level: '95%', color: '#68a063' },
               { name: 'CloudTrail', level: '93%', color: '#61dafb' },
               { name: 'Cloudwatch', level: '95%', color: '#68a063' }]}/>
            <BodyCard header={'Frontend'} skills={[
               { name: 'React.js', level: '93%', color: '#61dafb' },
               { name: 'JavaScript(ES6+)', level: '94%', color: '#68a063' },
               { name: 'XML', level: '97%', color: '#61dafb' },
               { name: 'Redux', level: '89%', color: '#68a063' },
               { name: 'Django', level: '92%', color: '#61dafb' },
               { name: 'Typescript', level: '87%', color: '#68a063'},
               { name: 'HTML/CSS', level: '99%', color: '#61dafb' },
               { name: 'Mongoose', level: '91%', color: '#68a063' },
               { name: 'jQuery/CSS', level: '90%', color: '#61dafb' }]}/>
            <BodyCard header={'Backend'} skills={[
               { name: 'Python3', level: '92%', color: '#68a063' },
              { name: 'Langchain', level: '90%', color: '#61dafb' },
              { name: 'ExpressJS', level: '92%', color: '#68a063' },
              { name: 'Node.js', level: '97%', color: '#61dafb' },
              { name: 'mySQL/PostgreSQL', level: '92%', color: '#68a063' },
              { name: 'MongoDB', level: '87%', color: '#61dafb' },
              { name: 'JSON', level: '97%', color: '#68a063' },
              { name: 'YAML', level: '90%', color: '#61dafb' },
              { name: 'Pandas', level: '95%', color: '#68a063' },
              { name: 'Seaborn', level: '89%', color: '#61dafb' },              
              { name: 'Docker', level: '88%', color: '#68a063' },
              { name: 'Jira', level: '91%', color: '#61dafb' },
               { name: 'APIs', level: '98%', color: '#68a063' },
              { name: 'Django', level: '93%', color: '#61dafb' },
              { name: 'GitHub', level: '96%', color: '#68a063' }]}/>
            <BodyCard header={'DevOps'} skills={[
              { name: 'AWS', level: '94%', color: '#61dafb' },
              { name: 'Azure', level: '89%', color: '#68a063' },
              { name: 'CI/CD', level: '92%', color: '#61dafb' },
              { name: 'IaC', level: '83%', color: '#68a063' },
              { name: 'Git', level: '87%', color: '#61dafb' }]}/>
            <BodyCard header={'UI/Design'} skills={[
              { name: 'CSS', level: '94%', color: '#61dafb' },
              { name: 'Bootstrap', level: '82%', color: '#68a063' },
              { name: 'VS Code', level: '98%', color: '#61dafb' },
              { name: 'Adobe CS', level: '98%', color: '#68a063' },
              { name: 'Marvel', level: '92%', color: '#61dafb' },
              { name: 'Figma', level: '90%', color: '#68a063' }]}/>



          </div>
        </div>
      </div>
    </div>
    </div></div>
  )
}

export default Experience