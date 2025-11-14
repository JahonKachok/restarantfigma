import React from 'react'
import navbarImg from '..//images/navbar-img.svg'
import insta from "../images/insta.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import pic from "../images/pic.svg";
import '..//styles/footer.scss'
export default function Footer() {
  return (
    <section id='contact'>  
    <div className='footer'>
        <div className="footer-container container">
            <div className="footer-top d-flex justify-content-between align-items-center flex-wrap">
                <div className="xashtag">
                    <h1>#TheTastEat</h1>
                </div>
                <div className="footer-logo">
                    <img src={navbarImg} alt="" />
                </div>
        <div className="social-media d-flex justify-content-center align-items-center gap-4 flex-wrap">
          <img src={insta} alt="insta-logo" />
          <img src={facebook} alt="facebook-logo" />
          <img src={twitter} alt="twitter-logo" />
          <img src={pic} alt="pic-logo"/>
        </div>
            </div>

        <div className="footer-midle  d-flex justify-content-between align-items-center">
            <h1>Contact</h1>
            <p>Join our mailing list for updates, Get news & offers events.</p>
            <h1> Working hours</h1>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>5 Rue Dalou, 75015 Paris</p>
                <p>+123 456 789</p>
                <p>josefin@mail.com</p>
            </div>
            <div className="footer-bottom-center">
                <div className="subscribe d-flex justify-content-center align-items-center gap-3">
                    <input type="text" placeholder='Enter your email address' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-bottom-right d-flex">
            <div className="right-item d-flex gap-3"> 
                <h4>Mon – Fri:</h4>   <p>7.00am – 6.00pm</p>
                </div>   
            <div className="right-item d-flex gap-3">
                        <h4>Sat:</h4>  <p>7.00am – 6.00pm</p>
            </div> 
            <div className="right-item d-flex gap-3">
              <h4>Sun:</h4>  <p>8.00am – 6.00pm</p>
              </div>
            </div>
         </div>
        </div>
    </div>
    </section>
  )
}
