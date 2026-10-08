
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'

function App() {
  return (
    <>
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