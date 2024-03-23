import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeaderSection from './Components/HeaderSection/HeaderSection'
import ShoppingSection from "./Components/ShoppingSection/ShoppingSection"
import Footer from './Components/Footer/Footer'
import "./App.css"

export default function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <ShoppingSection />
      <Footer/>
    </>
  )
}
