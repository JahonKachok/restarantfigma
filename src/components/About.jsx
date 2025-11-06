import React from "react";
import About1 from "../images/about1.svg";
import About2 from "../images/about2.svg";
import About3 from "../images/about3.svg";
import "../styles/about.scss"; // SCSS faylni ham import qilamiz

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
    <section className="about">
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
      </div>
    </section>
  );
}
