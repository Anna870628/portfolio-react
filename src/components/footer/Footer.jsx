import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footerLogo'>Anna</a>
      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#service">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonials">Testmonials</a></li>
        <li><a href="#contact">Contacts</a></li>

      </ul>
      <div className='footerSocials'>
        <a href=""><BsFacebook /></a>
        <a href=""><FaTwitter /></a>
        
      </div>

      <div className='footerCopyright'> <small>
        &copy;Anna.
        All Right reserved.</small></div>
    </footer>
  )
}

export default Footer