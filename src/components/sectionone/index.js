import React from 'react'
import './index.css'

const SectionOne = () => {
  return (
    <div className='section-one-container' style={{ paddingTop: '80px' }}>
      <div className='content-container'>
        <h2 className='namaste-greeting'> Namaste, welcome to <span className='amrutam-name'>Amrutam</span>  !</h2>
        <h1 className='sec-one-main-heading'>
            Step into Holistic Healing with <span className='ayurveda-name'>Ayurveda</span> Book Consultation With Certified Experts.
        </h1>
        <h3 className='sec-one-description'>
            Dive into the world of ayurveda and experience
            personalized health solutions and holistic guidance from trusted ayurvedic doctors anytime,
            anywhere
        </h3>
        <button className='btn btn-success button-style'>
            BOOK AN APPOINTMENT
        </button>
        </div>
    </div>
  )
}

export default SectionOne
