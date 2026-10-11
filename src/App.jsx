
import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Lenis from "@studio-freight/lenis";
import { SmoothCursor } from './Components/ui/smooth-cursor'

import WebDev from './Services/WebDev'
import AppDev from './Services/AppDev'
import UiUx from './Services/UiUx'
import Marketing from './Services/Marketing'
import EnquiryPopup from './Components/EnquiryPopup'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Terms from './Pages/Terms'
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
function ScrollToTop() {

  
 const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
  }, [pathname]);

  return null;
}

function App() {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,  // Adjust scroll speed
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

   const handleWhatsAppClick = () => {
    const phoneNumber = "919040738633";
    const message = encodeURIComponent("Hello Gyanex Solutions");
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank");}

  return (
    <>
   <ScrollToTop/>
      <SmoothCursor/>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/webdev" element={<WebDev/>}/>
      <Route path="/appdev" element={<AppDev/>}/>
      <Route path="/uiux" element={<UiUx/>}/>
      <Route path="/marketing" element={<Marketing/>}/>
      <Route path="/enquire-form" element={<EnquiryPopup/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/terms" element={<Terms/>}/>
     
     
      </Routes>
        <motion.div
        className="fixed right-6 md:right-6 bottom-20 md:bottom-20 z-[100] h-[60px] w-[60px] rounded-full p-[2px] bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 bg-[length:200%_200%] shadow-xl"
        initial={{ backgroundPosition: "0% 50%", y: 0 }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          y: [0, -5, 0],
        }}
        transition={{
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={handleWhatsAppClick}
      >
        <div className="h-full w-full rounded-full bg-green-600/20 md:bg-white/20 backdrop-blur-lg shadow-xl flex justify-center items-center cursor-pointer">
          <FaWhatsapp className="text-3xl text-white" />
        </div>
      </motion.div>
       <Footer/>
      </>
      
  )
}

export default App