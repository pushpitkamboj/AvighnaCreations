import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import OurServices from './components/OurServices.jsx'
import ContactUsPage from './components/ContactUsPage.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Blog from './components/Blog.jsx'
import Gallery from './components/Gallery.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
      <Route path='' element={<Home/>} /> 
      <Route path='our services' element={<OurServices/>} />
      <Route path= 'contact us' element={<ContactUsPage/>} />
      <Route path= 'about us' element={<AboutUs/>} />
      <Route path= 'Gallery' element={<Gallery/>} />
      <Route path= 'Blog' element={<Blog/>} />




      {/* <Route path='About' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route path='github' element={<Github/>} /> */}

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
