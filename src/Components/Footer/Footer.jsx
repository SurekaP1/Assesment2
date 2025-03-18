import React from 'react'
import './Footer.css'

import AppStore from '../../assets/AppStore.png'
import googleplaystore from '../../assets/googleplaystore.png'
import QrCode from '../../assets/QrCode.png'
import send from '../../assets/send.png'
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/Linkedin.png'



const Footer = () => {
  return (
    <footer className='footer'> 
        <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Exclusive</h3>
          <p className="footer-subtitle">Subscribe</p>
          <p className="footer-text text-brown">Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button className= "subscribe-btn">
              <img src={send} alt="" />
            </button>
          </div>
        </div>

        
        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <p className="footer-text  text-brown">
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="footer-text  text-brown">exclusive@gmail.com</p>
          <p className="footer-text  text-brown">+88015-88888-9999</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Account</h3>
          <ul className="footer-list">
            <li className="text-brown">My Account</li>
            <li className="text-brown">Login / Register</li>
            <li className="text-brown">Cart</li>
            <li className="text-brown">Wishlist</li>
            <li className="text-brown">Shop</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Link</h3>
          <ul className="footer-list">
            <li className="text-brown">Privacy Policy</li>
            <li className="text-brown">Terms Of Use</li>
            <li className="text-brown">FAQ</li>
            <li className="text-brown">Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Download App</h3>
          <p className="footer-text  text-brown">
            Save $3 with App New User Only
          </p>
          <div className="qr-and-store">
            <img src={QrCode} alt="QR Code" className="qr-code" />
            <div className="app-buttons">

              <img src={AppStore} alt="Google Play"/>
              <img src={googleplaystore} alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={Linkedin} alt="" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Rimel 2025. All rights reserved</p>
      </div>
 
    </footer>
  )
   
}

export default Footer
