import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non tincidunt eros Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dinig experience, one delicious meal at a time Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dinig experience, one delicious meal at a time
          </p>
          <div className='footer-social-icon'>
            <img src={assets.facebook_icon} alt=''/>
            <img src={assets.twitter_icon} alt=''/>
            <img src={assets.linkedin_icon} alt=''/>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-342-4214</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
    <hr/>
    <p className='footer-copyrights'>Copyright 2025 @ Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
