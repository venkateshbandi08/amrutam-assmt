import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoStar } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { BsBookmarkStarFill } from "react-icons/bs";
import './index.css';

const SectionEight = () => {
    return (
        <div className='section-eight-container'>
        <h2 className='experts-heading'> Meet Our Ayurveda Experts </h2>
        <Carousel                 className='experts-cards-container'
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                infiniteLoop={true}>
            <div>
            <div className='each-expert-container'>
                <div className='expert-top-section'> 
                <div className='profile-icon-container'>
                    <img 
                        src='https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg'
                        alt='profile'
                        className='expert-profile'
                    />
                </div>
                <p className='rating-points'> 4.5 <IoStar className='star-image-style' /> </p>
                <h3 className='expert-name'> Dr. Vaishali Sharma </h3>
                <p className='expert-education'> Ayurveda Practitioner (BAMS, MD) </p>
                <p className='expert-experience'> <GrUserExpert className='expert-icon'/>  25 years of Experience </p>
                <p className='expert-specialist'> <BsBookmarkStarFill className='expert-specialist-icon' /> Skin Specialist</p>
            </div>
                <h4 className='book-session'> Book a Session </h4>
            </div>
            </div>
            <div>
            <div className='each-expert-container'>
                <div className='expert-top-section'> 
                <div className='profile-icon-container'>
                    <img 
                        src='https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg'
                        alt='profile'
                        className='expert-profile'
                    />
                </div>
                <p className='rating-points'> 4.5 <IoStar className='star-image-style' /> </p>
                <h3 className='expert-name'> Dr. Vaishali Sharma </h3>
                <p className='expert-education'> Ayurveda Practitioner (BAMS, MD) </p>
                <p className='expert-experience'> <GrUserExpert className='expert-icon'/>  25 years of Experience </p>
                <p className='expert-specialist'> <BsBookmarkStarFill className='expert-specialist-icon' /> Skin Specialist</p>
            </div>
                <h4 className='book-session'> Book a Session </h4>
            </div>
            </div>
            <div>
            <div className='each-expert-container'>
                <div className='expert-top-section'> 
                <div className='profile-icon-container'>
                    <img 
                        src='https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg'
                        alt='profile'
                        className='expert-profile'
                    />
                </div>
                <p className='rating-points'> 4.5 <IoStar className='star-image-style' /> </p>
                <h3 className='expert-name'> Dr. Vaishali Sharma </h3>
                <p className='expert-education'> Ayurveda Practitioner (BAMS, MD) </p>
                <p className='expert-experience'> <GrUserExpert className='expert-icon'/>  25 years of Experience </p>
                <p className='expert-specialist'> <BsBookmarkStarFill className='expert-specialist-icon' /> Skin Specialist</p>
            </div>
                <h4 className='book-session'> Book a Session </h4>
            </div>
            </div>
        </Carousel>
    </div>
    );
}

export default SectionEight;
