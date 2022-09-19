import React from 'react'
import './about.css'
import meAbout from '../../assets/meAbout.jpg'
import { SiAboutdotme } from 'react-icons/si'
import { BiWorld } from 'react-icons/bi'
import { FaMedal } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { TiMediaPlay } from 'react-icons/ti'
const About = () => {
  return (
    <section id="about">
      <h4>Get to know</h4>
      <h2>About Me</h2>
      <div className='container aboutContainer'>
        <div className='aboutMe'>
          <div className='aboutMeImg'>
            <img src={meAbout} alt="" />

          </div>
        </div>
        <div className='aboutContent'>
          <div className='aboutCards'>
            <article className='aboutCard'>
              <FaMedal className='aboutIcon' />
              <h5>Awards</h5>
              <small>4 times awards</small>

            </article>

            <article className='aboutCard'>
              <BiWorld className='aboutIcon' />
              <h5>Language</h5>
              <small>English,Japanese</small>

            </article>

            <article className='aboutCard'>
              <IoIosSchool className='aboutIcon' />
              <h5>Education</h5>
              <small>Master In NTUST</small>
            </article>

          </div>
          <div className='pCards'>
            <div className='pCard'>

              <p>
                <h5> <TiMediaPlay />    Eduction</h5>

                Master Degree <br />
                2020/09-2022/09<br />
                National Taiwan University Of Science and Technology<br />
                Information Management (EBSCM Lab) 
</p></div>
            <div className='pCard'>

              <p>
                <h5>    < TiMediaPlay />  Awards.</h5>
                2017 National Science Council Research Scholarship,Taiwan. <br />
                2018 National Science Council Research Scholarship,Taiwan.<br />
                2018 15th Yushow Bronze Medal Of Software Application  <br />
                2019 Sliver Medal of Graduation Project,Tatung University.<br />


              </p></div>
          </div>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>

      </div>
    </section>
  )
}

export default About