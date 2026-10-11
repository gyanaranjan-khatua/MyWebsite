import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import WhyChooseUs from './WhyChooseUs'
import WebsiteDevelopment from './WebsiteDevelopment'
import Faq from './Faq'




function Home() {
  return (
    <>
    <HeroSection/>
   
  
     <ServiceSection/>
   <WebsiteDevelopment/>
  

   
    <WhyChooseUs/>
    <Faq/>
    
    </>
  )
}

export default Home