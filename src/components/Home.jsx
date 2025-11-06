import React from "react";
import homeimg from "../images/home.svg";
import homeimg2 from "../images/homeImg2.svg";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Restaurant</h1>
          <p>
            The people, food and the prime locations make the perfect place for
            good friends & family to come together and have great time.
          </p>
          <button className="home-btn">View Menu</button>
        </div>

        <div className="home-images">
          <img className="img1" src={homeimg} alt="main" />
          <img className="img2" src={homeimg2} alt="decoration" />
        </div>
      </div>
    </div>
  );
}
