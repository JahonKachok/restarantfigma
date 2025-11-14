import React from 'react'
import "../styles/page1.scss";
import user from "../images/user.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import pagesBack from "../images/pagesBack.svg";


export default function Page1() {
  
    const comments = [
    {
        name: "Natasha D",
        location: "Newyork",
        image: user,
        comment: "They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy."
    },
    {
        name: "John S",
        location: "California",
        image: user,
        comment: "Amazing food and great service. The ambiance is perfect for a family dinner or a night out with friends."
    },
    {
        name: "Emily R",        
        location: "Texas",
        image: user,
        comment: "I love the variety on the menu. There's something for everyone, and the quality of the ingredients really stands out."
    },
    {
        name: "Michael B",
        location: "Florida",    
        image: user,
        comment: "The staff is always friendly and attentive. They go above and beyond to make sure you have a great dining experience."
    },
    {
        name: "Sophia L",
        location: "Nevada",
        image: user,
        comment: "The desserts are to die for! I highly recommend trying the chocolate lava cake – it's the perfect way to end a meal."
    },
];
return (
    <section id='pages'>
    <div  className="page1">
         <div className='page1-container container '>
        <div className="title-pages">
            <h1>TESTIMONIAL</h1>
            <h3>Our clients say</h3>
            <p>We love to hear from customers, so please leave a comment or say hello in an email.</p>
        </div>
        <div className="swager-cards">
            <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {comments.map((c) => (
          <SwiperSlide key={c.id}>
            <div className="comment-card di-flex flex-column align-center p-4">
            <div className="comments-header d-flex align-center">
                <img className='user-avatar' src={c.image} alt="rasm" />
                <div className="comments-title">
                <h3>{c.name}</h3>
                <h4>{c.location}</h4> 
            </div>
            </div>
            <div className="comments-body">
                <p>{c.comment}</p>
            </div>
        </div>
          </SwiperSlide>
        ))}
    
      </Swiper>

        </div>
    </div>
<img className='pagesBack' src={pagesBack} alt="" />
    </div>
    </section>

  )
  
}
