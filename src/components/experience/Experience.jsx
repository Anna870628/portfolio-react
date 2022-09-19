import React from 'react'
import './experience.css';
import { AiFillHtml5 } from 'react-icons/ai';
import{DiCss3} from 'react-icons/di'
import{IoLogoJavascript} from 'react-icons/io'
import{FaReact} from 'react-icons/fa'
import{IoLogoNodejs}from 'react-icons/io'
import{FaJava} from'react-icons/fa'
const Experience = () => {
  return (
    <section id="experience">
      <h4>What Skills I have</h4>
      <h2>My Experience</h2>
      <div className='container experienceContainer'>
        <div className='containerFrontend'>
          <h3>Frontend Devlopement</h3>
          <div className='experienceContent'>
            <article className='experienceDetails'>
              <AiFillHtml5 className='experienceIcon' />
             <div> <h4>HTML</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experienceDetails'>
              <DiCss3  className='experienceIcon'/>
              <div><h4>Css</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experienceDetails'>
              < IoLogoJavascript className='experienceIcon'/>
              <div><h4>Javascript</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experienceDetails'>
              <FaReact  className='experienceIcon'/>
              <div><h4>React</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>


        <div className='containerBackend'>
          <h3>Backend Devlopement</h3>
          <div className='experienceContent'>
            <article className='experienceDetails'>
              <IoLogoNodejs className='experienceIcon' />
<div>              <h4>Node.js</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experienceDetails'>
              <FaJava className='experienceIcon' />
            <div>  <h4>Java</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience