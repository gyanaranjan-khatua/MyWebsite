
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'

import { SmoothCursor } from './Components/ui/smooth-cursor'
import { motion } from "framer-motion";
import WebDev from './Services/WebDev'
import AppDev from './Services/AppDev'
import UiUx from './Services/UiUx'
import Marketing from './Services/Marketing'
import EnquiryPopup from './Components/EnquiryPopup'
function App() {
  return (
    <>
   
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
     
     
      </Routes>
      
       <Footer/>
      </>
      
  )
}

export default App