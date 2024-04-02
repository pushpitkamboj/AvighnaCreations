import React from 'react';
// import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import ContactUs from './ContactUs';
import Intro from './Intro'
import ServicesSection from './ServicesSection'
// import SocialMedia from './SocialMedia'


function App() {
  return (
    <>
     {/* <Navbar/> */}
     
     <Intro />
     <ImageSlider/>
    <ServicesSection />
    <ContactUs />
    {/* <SocialMedia /> */}
    {/* <Footer /> */}
    </>
  )
}

export default App;