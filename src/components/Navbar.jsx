import React from 'react'
import navImg from "../images/navbar-img.png"
export default function Navbar() {
  return (
    <div>
        <div className="navbar-top display-flex">
            <div className="call-numb">
                <p> Call-123-45-67</p>
            </div>
            <div className="nav-img">
            <img src={navImg} alt="navbar-image" />
            </div>
            <div className="nav-btn">
                <button>Reservation</button>
            </div>
        </div>
    </div>
  )
}
