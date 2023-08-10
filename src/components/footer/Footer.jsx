import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa"
import "./style.scss"
import ContentWrapper from '../contentWrapper/contentWrapper'
const Footer = () => {
  return (
   <footer className="footer">
    <ContentWrapper>
      <ul className="menuItems">
        <li className="menuItem">Terms Of Use
        </li>
         <li className="menuItem">Privacy Policy
        </li>
         <li className="menuItem">About
        </li>
         <li className="menuItem">Blog
        </li>
         <li className="menuItem">FAQ
        </li>
      </ul>
      <div className="infoText">
       Bringing Stories to Life on the Silver Screen. Your Ultimate Movie Destination. Explore, Experience, and Escape with Our Unforgettable Selection of Films. Lights down, Hearts up – Welcome to a World of Cinematic Magic!. Stay Connected with Us! Follow for the Latest Movie News, Trailers, and Exclusive Content.
      </div>
      <div className="socialIcons">
        <span className="icon">
          <FaFacebookF/>
        </span>
        <span className="icon">
          <FaInstagram/>
        </span>
        <span className="icon">
          <FaTwitter/>
        </span>
        <span className="icon">
          <FaLinkedin/>
        </span>
      </div>
    </ContentWrapper>
   </footer>
  )
}

export default Footer
