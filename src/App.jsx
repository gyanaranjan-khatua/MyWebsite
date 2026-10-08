
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import { DockDemo } from './Components/dockIcon'
import { SmoothCursor } from './Components/ui/smooth-cursor'
import { motion } from "framer-motion";
function App() {
  return (
    <>
     <motion.div
  className="fixed bottom-6 right-6 z-50"
  animate={{
    y: [0, -6, 0, 5, 0],
    x: [0, 2, 0, -2, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <DockDemo />
</motion.div>
      <SmoothCursor/>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
     
     
      </Routes>
      
       <Footer/>
      </>
      
  )
}

export default App