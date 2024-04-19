import React from 'react'
import Header from '../header'
import SectionOne from '../sectionone'
import SectionTwo from '../sectiontwo'
import SectionThree from '../sectionthree'
import SectionFour from '../sectionfour'
import SectionFive from '../sectionfive'
import SectionSix from '../sectionsix'
import SectionSeven from '../sectionseven'
import SectionEight from '../sectioneight'
import SectionNine from '../sectionnine'
import Footer from '../footer'
import './index.css'

const Home = () => {
  return (
    <div className='amrutam-home-container'>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <Footer />
    </div>
  )
}

export default Home
