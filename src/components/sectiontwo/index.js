import React from 'react'
import { PiChatsFill } from "react-icons/pi";
import { AiFillSafetyCertificate  } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { FaPersonCircleCheck } from "react-icons/fa6";

import './index.css'

const SectionTwo = () => {
  return (
    <div className='section-two-container'>
      <div className='each-item-container'>
        <div className='icon-container'>
            <PiChatsFill className='icon-style' />
        </div>
        <h4 className='service-name'> Convinient Online & In-Clinic Consultations </h4>
      </div>
      <div className='each-item-container'>
        <div className='icon-container'>
            <AiFillSafetyCertificate className='icon-style' />
        </div>
        <h4 className='service-name'> Safe & Effective Treatment </h4>
      </div>
      <div className='each-item-container'>
        <div className='icon-container'>
            <GrUserExpert className='icon-style' />
        </div>
        <h4 className='service-name'> Experienced Ayurvedic Practitioners </h4>
      </div>
      <div className='each-item-container'>
        <div className='icon-container'>
            <FaPersonCircleCheck className='icon-style' />
        </div>
        <h4 className='service-name'> Personalised Treatment Plan & Guidance </h4>
      </div>
    </div>
  )
}

export default SectionTwo
