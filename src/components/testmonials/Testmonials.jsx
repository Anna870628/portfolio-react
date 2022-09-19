import React, { lazy } from 'react'
import './testmonials.css'
import IMG1 from '../../assets/avatar1.jpeg'
import IMG2 from '../../assets/avatar2.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [{
  name: "Ada Yu",
  avatar: IMG1,
  review: "She is so powerful,and fulled of activity person."
},{
  name: "Brian Chien",
  avatar: IMG2,
  review: "She is so powerful,and fulled of activity person."
}]

const Testmonials = () => {
  return (
    <section id="testmonials">
      <h4>Review from others</h4>
      <h2>Testmonials</h2>

      <Swiper className='container testmonialsContainer' 
      pagination={{clickable:true}} modules={[Pagination]} >
        {data.map(({ name, avatar, review }, index) => {
          return (
          <SwiperSlide key={index} className='testmonial'>
            <div className="avatars">
              <img src={avatar} /></div>
            <h5 className='avatarName'>{name}</h5>
            <small className='review'>
              {review}
            </small>

          </SwiperSlide>)
        })}

      </Swiper>

    </section>
  )
}

export default Testmonials