import React from 'react'
import './service.css';
import { SiAdobe } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { MdWork } from 'react-icons/md'
import { IoChevronForward } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md"
import { TbCertificate } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
const Service = () => {
  return (
    <section id="service"><h4>
      More about me</h4>
      <h2>Experience</h2>
      <div className='container serviceContainer'>
        <article className='service'>
          <div className='serviceHead'>
            <SiAdobe />
            <h3>UI/UX Design</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <SiAdobexd className="serviceListIcon" />
              <p>
                Adobe XD

              </p>
            </li>

            <li>
              <SiAdobephotoshop className="serviceListIcon" />
              <p>
                Photoshop
              </p>
            </li>

            <li>

              <SiAdobeillustrator className="serviceListIcon" />
              <p>Illustrator</p>
            </li>
          </ul>

        </article>

        {/*Web dev */}
        <article className='service'>
          <div className='serviceHead'><TbCertificate />
            <h3>Certification</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <MdBusinessCenter className="serviceListIcon" />
              <p>
              ERP Planner
              </p>
            </li>

            <li>
              <MdBusinessCenter className="serviceListIcon" />
              <p>
                BI Planner
              </p>
            </li>


            <li>

              <MdBusinessCenter className="serviceListIcon" />
              <p>Digital FinTech Ability</p>
            </li>
            <li>

              <RiEnglishInput className="serviceListIcon" />
              <p>TOEIC 700</p>
            </li>
          </ul>
        </article>
        {/* Certicification*/}

        <article className='service'>
          <div className='serviceHead'><MdWork />
            <h3>Job Experience</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <IoChevronForward className="serviceListIcon" />
              <h4>2019/07-2020/01</h4>
              <p>Tatung System Technologies,Inc<br />
                Research Developement Department<br />
                Internship
              </p>
            </li>

            <li>
              <IoChevronForward className="serviceListIcon" />
              <h4>2018/07-2018/08</h4>

              <p>Getac,Inc<br />
                Industrial Design Department<br />
                Internship</p>
            </li>

          </ul>



        </article>
      </div>
    </section>
  )
}

export default Service