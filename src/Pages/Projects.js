import React from 'react'
import Card from '../Component/Card'
import ECS from "../assets/images/ECS.jpg"
import AH from "../assets/images/AH.jpg"
import TB from "../assets/images/TB.jpg"
import ResImage from '../Component/ResImage'
import '../Styles/ResImage.css'

function Projects() {
  return (
    <div className="w-full min-h-screen overflow-y-auto bg-slate-400 dark:text-white dark:bg-slate-800 px-4 py-10">
       <div className="text-4xl font-bold text-slate-700 dark:text-sea mb-10 text-center">
       PROJECTS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Card
          pno="04"
          preview="In this project, we create an online retail site using ReactJS, Node.js with Express, Stripe API and SQL Lite."
          details={
            <div>
              <b>Tech Set:</b> ReactJS, Node.js with Express, Stripe API and SQL-Lite (Frontend Only)<br />
              <b>Goal:</b> Online retail site with payment gateway and shopping cart.<br />
              The backend can be deployed locally if you install SQL-Lite.<br />
              <br />
              <a href="https://jcline7774.github.io/E-Commerce-Store/">
                <img src={ECS} alt="ECS" className="w-1/2 mx-auto mt-1" />
              </a>
            </div>
          }
        />

        <Card
          pno="03"
          preview="In this project, we show a dynamic homepage intro using Vite + ReactJS and some Javascript"
          details={
            <div>
              <b>Tech Set:</b> Vite + ReactJS, Javascript, CSS (Frontend Only). Backend in MySql or Postgres<br />
              <b>Goal:</b> To show a dynamic homepage using Vite with ReactJS. Opening animation for an eyecatching experience.<br />
              <br />
              <a href="https://jcline7774.github.io/VitePage/">
                <img src={AH} alt="AH" className="w-1/2 mx-auto mt-2" />
              </a>
            </div>
          }
        />

        <Card
          pno="02"
          preview="Creating one of the core marketing tools of any retail site - a color-selector."
          details={
            <div>
              <b>Tech Set:</b> JavaScript, Adobe Photoshop, Adobe Illustrator<br />
              <b>Goal:</b> Build a product color selector to enhance customer interaction.<br />
              <br />
              <a href="https://jcline7774.github.io/Color-Selector/">
                <img src={TB} alt="TB" className="w-1/4 mx-auto mt-1" />
              </a>
            </div>
          }
        />

        <Card
          pno="01"
          preview="A retro take on a resume with some color."
          details={
            <div>
              <b>Tech Set:</b> ReactJS, JavaScript, Hooks, CSS Animation<br />
              <b>Goal:</b> A retro take on a resume site using CSS and animation packages.  Heavy on millenium style fonts.<br />
              <br />
              <a href="https://jcline7774.github.io/John-cline-resume/">
                <ResImage />
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Projects;
