import React from 'react'
import './contact.css'
import {BsMessenger} from 'react-icons/bs'
import{HiOutlineMail} from 'react-icons/hi'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_6jfujxn","template_x08027e", form.current, 'tF98CJ76YLZUVBYjm')
  e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contactContainer'>
        <div className='contactOptions'>
          <div className='contactOption'>
            <BsMessenger className='contactOptionIcon'/><h4>Messenger</h4>
            <h5>Rowlingjackson</h5>
            <a href="https://m.me//Rowlingjackson">Send a message</a>
          </div>

          <div className='contactOption'>
            <HiOutlineMail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>Rowlingjackson@gmail.com</h5>
            <a href="mailto:rowlingjackson@gmail.com">Send a message</a>
          </div>


        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your email' required/>
        <textarea name="message"  rows="7" placeholder='Your message' required />
       <button type='sumbit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact