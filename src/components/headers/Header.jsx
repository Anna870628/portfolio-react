import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/master02.png'
import HeaderSocial from './HeaderSocial'
const Headers = () => {
  return (<header>
    <div className='container headerContainer'>
      <h5>Hello I'm</h5>
      <h1>Anna</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocial />  
      <div className='me'>
        <img src={Me} alt="me" />

      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
</header>
  )
}

export default Headers