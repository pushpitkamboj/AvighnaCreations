import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import OurServices from './components/OurServices.jsx'
import ContactUsPage from './components/ContactUsPage.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Blog from './components/Blog.jsx'
import Gallery from './components/Gallery.jsx'


function App() {
  return (
    <>
    <Routes>

      <Route path='/' element = {<Layout />} />
      <Route path='/home' element={<Home/>} /> 
      <Route path='/services' element={<OurServices/>} />
      <Route path= '/contact us' element={<ContactUsPage/>} />
      <Route path= '/about us' element={<AboutUs/>} />
      <Route path= '/gallery' element={<Gallery/>} />
      <Route path= '/blog' element={<Blog/>} />
    </Routes>

    </>
  )
}

export default App;