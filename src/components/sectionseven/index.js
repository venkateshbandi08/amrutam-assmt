import React from 'react'
import { IoStar } from "react-icons/io5";
import './index.css'

const SectionSeven = () => {
  return (
    <div className='sec-seven-container'>
      <h2 className='stories-main-heading'> Stories from our valued customers </h2>
      <div className='stories-cards-container'>
        <div className='each-story-card-container'>
            <p className='consult-reason'> Consulted for Skin </p>
            <div className='profile-container'>
                <div className='profile-section-one-container'>
                    <div className='profile-pic'>
                        <img
                            src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
                            alt='profile'
                            className='profile-image'
                         />
                    </div>
                    <div className='profile-name-container'>
                        <p className='profile-name'> Sophiee Moree </p>
                        <p className='profile-address'> Chennai </p>
                    </div>
                </div>
                <div className='profile-section-two-container'>
                    <p className='profile-date'> 17/02/2024 </p>
                </div>
            </div>
            <div className='stars-container'>
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
            </div>
            <div className='comment-container'>
                <h3 className='comment-heading'>“One of a kind service”</h3>
                <p className='comment-description'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
            </div>
        </div>
        <div className='each-story-card-container'>
            <p className='consult-reason' style={{backgroundColor:'lightgrey'}}> Consulted for Hair </p>
            <div className='profile-container'>
                <div className='profile-section-one-container'>
                    <div className='profile-pic'>
                        <img
                            src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
                            alt='profile'
                            className='profile-image'
                         />
                    </div>
                    <div className='profile-name-container'>
                        <p className='profile-name'> Sophiee Moree </p>
                        <p className='profile-address'> Chennai </p>
                    </div>
                </div>
                <div className='profile-section-two-container'>
                    <p className='profile-date'> 17/02/2024 </p>
                </div>
            </div>
            <div className='stars-container'>
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
            </div>
            <div className='comment-container'>
                <h3 className='comment-heading'>“One of a kind service”</h3>
                <p className='comment-description'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
            </div>
        </div>
        <div className='each-story-card-container'>
            <p className='consult-reason'> Consulted for Skin </p>
            <div className='profile-container'>
                <div className='profile-section-one-container'>
                    <div className='profile-pic'>
                        <img
                            src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
                            alt='profile'
                            className='profile-image'
                         />
                    </div>
                    <div className='profile-name-container'>
                        <p className='profile-name'> Sophiee Moree </p>
                        <p className='profile-address'> Chennai </p>
                    </div>
                </div>
                <div className='profile-section-two-container'>
                    <p className='profile-date'> 17/02/2024 </p>
                </div>
            </div>
            <div className='stars-container'>
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
                <IoStar className='star-style' />
            </div>
            <div className='comment-container'>
                <h2 className='comment-heading'>“One of a kind service”</h2>
                <p className='comment-description'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
            </div>
        </div>             
      </div>
    </div>
  )
}

export default SectionSeven