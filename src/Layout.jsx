import React from "react"
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar/Navbar"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"

function Layout() {
    return (
      <>
      <SocialMedia />
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )
  }
  
  export default Layout