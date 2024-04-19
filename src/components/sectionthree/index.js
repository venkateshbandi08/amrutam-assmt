import React from 'react'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { RiBodyScanFill } from "react-icons/ri";
import { GiHealing } from "react-icons/gi";
import { FaMortarPestle } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import './index.css'

const SectionThree = () => {
  return (
    <div className='section-three-container'>
      <div className='top-section-container'>
        <h2 className='heading'>
            Discover Ayurveda's Magic With Us
        </h2>
        <p className='description'>
            Ayurvedic treatment aims to balance your body and mind,
            bringing harmony and vitality. It's like a journey 
            to better health using ancient wisdom, a totally 
            effective approach for a better life.
        </p>
        <div className='yoga-image'>
            <img 
                src='https://t4.ftcdn.net/jpg/03/58/54/11/360_F_358541161_vibeXt5KFAcWoXzVDu4IXzfbdaYj5DKq.jpg'
                className='yoga-img'
                alt='yoga'
            />
        </div>
      </div>
      <div className='bottom-section-container'>
            <div className='each-service-card-container'>
                <div className='service-icon-container'>
                    <FaHeartCirclePlus className='service-icon' />
                </div>
                <h4 className='service-heading'> Personalised Wellness Training </h4>
                <p className='service-description'>
                    treatment made just for you based on your individual doshas, [body type]
                </p>
            </div>
            <div className='each-service-card-container'>
                <div className='service-icon-container' style={{backgroundColor: 'rgb(200, 245, 200)'}}>
                    <FaHandsHelping className='service-icon' style={{color: 'green'}} />
                </div>
                <h4 className='service-heading'> Focus on Prevention </h4>
                <p className='service-description'>
                    stop problems even before they start
                </p>
            </div>
            <div className='each-service-card-container'>
                <div className='service-icon-container' style={{backgroundColor: 'lightpink'}}>
                    <RiBodyScanFill className='service-icon' style={{color: 'brown'}} />
                </div>
                <h4 className='service-heading'> Mind-Body connection </h4>
                <p className='service-description'>
                    Keep your mind and body in sync, for a happy life
                </p>
            </div>
            <div className='each-service-card-container'>
                <div className='service-icon-container' style={{backgroundColor: 'lightskyblue'}}>
                    <GiHealing className='service-icon' style={{color: 'purple'}} />
                </div>
                <h4 className='service-heading'> Holistic Healing </h4>
                <p className='service-description'>
                    Fix the root problem for long lasting health
                </p>
            </div>
            <div className='each-service-card-container'>
                <div className='service-icon-container' style={{backgroundColor: 'gray'}}>
                    <FaMortarPestle className='service-icon' style={{color: 'yellow'}}/>
                </div>
                <h4 className='service-heading'> Natural Remedies </h4>
                <p className='service-description'>
                    Using herbs and natural therapies for healing
                </p>
            </div>
            <div className='each-service-card-container'>
                <div className='service-icon-container' style={{backgroundColor:'lightgreen'}} >
                    <GiBiceps className='service-icon' style={{color: 'green'}} />
                </div>
                <h4 className='service-heading'> Boosting Immunity </h4>
                <p className='service-description'>
                    Stay strong and healthy for life not for today
                </p>
            </div>
      </div>
    </div>
  )
}

export default SectionThree
