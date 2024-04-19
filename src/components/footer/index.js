import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import './index.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <h4 className='footer-h'> Get in Touch </h4>
        <p className='footer-p'> support@amrutam.co.in </p>
        <p className='footer-p'> Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001 </p>
        <p className='footer-p'> +91 9713171999 </p>
        <div className='social-icons-container'>
            <FaFacebook className='footer-social-icon' />
            <FaSquareInstagram className='footer-social-icon' />
            <FaYoutube className='footer-social-icon' />
            <FaTwitter className='footer-social-icon' />
            <FaLinkedin className='footer-social-icon' />
            <FaPinterestSquare className='footer-social-icon' />
        </div>
        <h4 className='footer-h'> Information </h4>
        <p className='footer-p'> About Us </p>
        <p className='footer-p'> Terms and Conditions </p>
        <p className='footer-p'> Privacy Policy </p>
        <p className='footer-p'> Privacy Policy for Mobile Apps </p>
        <p className='footer-p'> Shipping and Returns Policy </p>
        <p className='footer-p'> International Delivery </p>
        <p className='footer-p'> For Businesses, Hotels and Resorts </p>
        <h4 className='footer-h'> Subscribe to our Newsletter and join Amrutam Family today! </h4>
        <div className='mail-box-container'>
            <div className='left'>
                add your name
            </div>
            <div className='right'>
                subscribe
            </div>
        </div>
    </div>
  )
}

export default Footer
