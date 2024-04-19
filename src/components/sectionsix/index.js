import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css'

const SectionSix = () => {
  return (
    <div className='section-six-container'>
      <div className='sec-six-text-content-container'>
        <h2 className='sec-six-heading'>  Our Ayurvedic Approach  </h2>
        <p className='sec-six-description'>
          At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
        </p>
      </div>
      <div className='approaches-container'>
        <Carousel className='approaches-container-carousel' showArrows={true} infiniteLoop={true}>
          <div className='each-approach-card-container'>
            <div className='number-container'>
              <h1 className='number'> 1 </h1>
            </div>
            <h2 className='approach-heading'> Make Appointment </h2>
            <p className='approach-description'>
              You must make an appointment in advance, to choose the service and date.
            </p>
          </div>
          <div className='each-approach-card-container'>
            <div className='number-container'>
              <h1 className='number'> 2 </h1>
            </div>
            <h2 className='approach-heading'> Consultations </h2>
            <p className='approach-description'>
            The next stage involves a thorough consultation with an Ayurveda practitioner.
            </p>
          </div>
          <div className='each-approach-card-container'>
            <div className='number-container'>
              <h1 className='number'> 3 </h1>
            </div>
            <h2 className='approach-heading'> Treatment Planning </h2>
            <p className='approach-description'>
            The Ayurvedic practitioner creates a personalized treatment plan for you
            </p>
          </div>
          <div className='each-approach-card-container'>
            <div className='number-container'>
              <h1 className='number'> 4 </h1>
            </div>
            <h2 className='approach-heading'> Maintenance </h2>
            <p className='approach-description'>
            These visits allow for assessment of progress, adjustments to the treatment.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default SectionSix
