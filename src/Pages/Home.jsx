import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import WhyChooseUs from './WhyChooseUs'
import WebsiteDevelopment from './WebsiteDevelopment'
import Faq from './Faq'
import AppDev from '@/Services/AppDev'
import AppDevelopment from './AppDevelopment'
import AdminPanel from './AdminPanel'




function Home() {
  return (
    <>
    <HeroSection/>
   
  
     <ServiceSection/>
   <WebsiteDevelopment/>
   <AppDevelopment/>
   <AppDev/>
   <AdminPanel/>
  

   
    <WhyChooseUs/>
    <Faq/>
    
    </>
  )
}

export default Home