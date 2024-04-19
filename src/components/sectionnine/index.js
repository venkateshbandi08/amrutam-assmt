import React from 'react'
import './index.css'

const SectionNine = () => {
  return (
    <div className='section-nine-container'>
      <div className='left-container'>
          <div className='sec-nine-top-content-container'>
              <h1 className='sec-nine-heading'> Amrutam home App </h1>
              <p className='sec-nine-description'>
                  The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
              </p>
          </div>
          <div className='sec-nine-image-container'>
              <img src='https://amrutam.co.in/cdn/shop/files/amrutam_features2.jpg?v=1657712116&width=600'
              alt='amrutam'
              className='sec-nine-amrutam-image' />
          </div>
          <div className='sec-nine-bottom-content-container'>
              <h2 className='diet-heading'> Get a diet & lifestyle consultation with ayurvedic experts across the globe </h2>
              <h1 className='get-app-heading'> Get The APP Now </h1>
              <div className='store-container'>
              <img
                  src='https://amrutam.co.in/cdn/shop/files/google-play-badge.png?v=1676873119&width=400'
                  alt='playstore'
                  className='playstore'
              />
              <img
                  src='https://amrutam.co.in/cdn/shop/files/app-store-badge.png?v=1676873119&width=400'
                  alt='appstore'
                  className='playstore'
                />
                </div>
          </div>
        </div>
        <div className='sec-nine-image-container-landscape'>
              <img src='https://amrutam.co.in/cdn/shop/files/amrutam_features2.jpg?v=1657712116&width=600'
              alt='amrutam'
              className='sec-nine-amrutam-image-landscape' />
          </div>
    </div>
  )
}

export default SectionNine
