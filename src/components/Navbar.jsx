import React from 'react'
import navImg from "../images/navbar-img.png"
import "../styles/navbar.scss"
import insta from "../images/insta.svg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import pic from "../images/pic.svg"
export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="navbar-top d-flex justify-content-around align-items-center">
            <div className="call-numb d-flex justify-content-center align-items-center mb-2">
                <p> Call-123-45-67</p>
            </div>
            <div className="nav-img">
            <img src={navImg} alt="navbar-image" />
            </div>
            <div className="nav-btn d-flex justify-content-center align-items-center">
                <p>Reservation</p>
            </div>
        </div>
        <div className="    navbar-bottom-container justify-content-center align-items-center"> 
            <div className='row navbar-bottom d-flex justify-content-between align-items-center w-75 m-auto'>
                <ul className=' col-8 d-flex justify-content-around align-items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Chefs</li>  
                    <li>Gallery</li>
                    <li>Events</li>
                </ul>

                <div className=" col-4 social-media container d-flex justify-content-center align-items-center gap-4">
                    <img src={insta} alt="insta-logo" />
                    <img src={facebook} alt="facebook-logo" />
                    <img src={twitter} alt="twitter-logo" />
                    <img src={pic} alt="pic-logo" />
                </div>
             </div>
        </div>
    </div>
  )
}
