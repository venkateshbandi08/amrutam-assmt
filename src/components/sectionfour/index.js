import React from 'react'
import './index.css'

const SectionFour = () => {
  return (
    <div className='section-four-container'>
        <h2 className='sec-four-main-heading'> What sets Ayurvedic consultation's apart? </h2>
        <div className='cards-container'>
            <div className="each-card-container">
                <h3 className='description-heading'>
                    आयुर्वेदस्य लक्ष्यं स्वास्थ्यं स्वस्थं च व्यक्तिं निर्वाहयितुम् अस्ति
                    व्याधिग्रस्तस्य च रोगस्य चिकित्सायाम्
                </h3>
                <h4 className='main-description-text'>
                    [Meaning: The Goal of Ayurveda is to maintain the health and healthy person
                    and to cure the disease of a diseased person.]
                </h4>
            </div>
            <div className='card-image-container'>
                <img 
                    src='https://amrutam.co.in/cdn/shop/files/Lifestyle_Kit_2.4.jpg?v=1658141319&width=600'
                    className='card-image'
                    alt='card'
                />
            </div>
            <div className="each-card-container">
                <h3 className='description-heading'>
                    Precise Diagnosis
                </h3>
                <h4 className='description-text'>
                    Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, 
                    guiding you with precise diagnosis and treatment.
                </h4>
            </div>
            <div className='card-image-container'>
                <img 
                    src='https://amrutam.co.in/cdn/shop/files/Dentkey_Manjan_2.jpg?v=1658129215&width=600'
                    className='card-image'
                    alt='card'
                />
            </div>
            <div className="each-card-container">
                <h3 className='description-heading'>
                    Zero Side-effects
                </h3>
                <h4 className='description-text'>
                    Ayurvedic treatments are devoid of chemicals, 
                    and are based completely on natural herbs
                </h4>
            </div>
            <div className='card-image-container'>
                <img 
                    src='https://amrutam.co.in/cdn/shop/files/Lifestyle_Kit_1.3.jpg?v=1658141838&width=600'
                    className='card-image'
                    alt='card'
                />
            </div>
            <div className="each-card-container">
                <h3 className='description-heading'>
                    Individual Treatment
                </h3>
                <h4 className='description-text'>
                    all Treatments are personalized based on 
                    a person's unique constitution and health concerns.
                </h4>
            </div>
        </div>
    </div>
  )
}

export default SectionFour
