import React from "react";
import About1 from "../images/about1.svg";
import About2 from "../images/about2.svg";
import About3 from "../images/about3.svg";
import AboutBot from "../images/aboutBot.png";
import signature from "../images/signature.svg";
import "../styles/about.scss"; 

const aboutItems = [
  {
    img: About1,
    title: "Locate Us",
    text: "Riverside 25, San Diego, California",
  },
  {
    img: About2,
    title: "Open Hours",
    text: "Mon to Fri 9:00 AM - 9:00 PM",
  },
  {
    img: About3,
    title: "Reservation",
    text: "restaurantate@gmail.com",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container container">
        <div className="about-top d-flex justify-content-between align-items-center flex-wrap">
          {aboutItems.map((item, index) => (
            <div className="location d-flex align-items-center" key={index}>
              <img src={item.img} alt={item.title} className="about-icon" />
              <div className="about-title">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about-bot d-flex justify-content-between align-items-center ">
          <div className="about-bot-img">
            <img src={AboutBot} alt="about-image" />
          </div>
          <div className="about-bot-text">
          <div className="title-bot">
            <h2>The Delicios Story</h2>
            <p>The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.</p>
          </div>
          <div className="about-bot-info d-flex justify-content-between">
            <div className="info-item">
              <h3>2018</h3>
              <p>Plan for this restaurant to deliver healthy food.</p>  
            </div>
            <div className="info-item">
              <h3>2022</h3>
              <p>Happily in the fourth year by fulfill the motto.</p>  
            </div>
          </div>
            <div className="about-signature">
              <h3>JOSEFINE</h3>
              <img src={signature} alt="1" />
            </div>
           </div>
        </div>
      </div>
    </section>
  );
}
 