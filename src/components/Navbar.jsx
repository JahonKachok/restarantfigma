import React, { useEffect, useState } from 'react';
import navImg from "../images/navbar-img.svg";
import "../styles/navbar.scss";
import insta from "../images/insta.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import pic from "../images/pic.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-150px 0px -50% 0px", // fixed navbar offset
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-top d-flex justify-content-between align-items-center flex-wrap">
        <div className="call-numb">
          <p>Call - 123 - 45 - 67</p>
        </div>

        <div className="nav-img text-center">
          <img src={navImg} alt="navbar-logo" />
        </div>

        <div className="nav-btn">
          <p>Reservation</p>
        </div>

        {/* Hamburger tugmasi */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Pastki qism */}
      <div className={`navbar-bottom ${open ? "open" : ""}`}>
        <ul className='menu-list d-flex justify-content-around align-items-center flex-wrap'>
          {["home", "about", "menu", "pages", "blog", "contact"].map((item) => (
            <li key={item} className='nav-item'>
              <a
                className={`nav-link ${activeSection === item ? "active" : ""}`}
                href={`#${item}`}
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="social-media d-flex justify-content-center align-items-center gap-4 flex-wrap">
          <img src={insta} alt="insta-logo" />
          <img src={facebook} alt="facebook-logo" />
          <img src={twitter} alt="twitter-logo" />
          <img src={pic} alt="pic-logo" />
        </div>
      </div>
    </div>
  );
}
