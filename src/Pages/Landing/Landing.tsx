import React, { useState } from 'react'
import './Landing.css'
import Header from '../../components/Header/Headerslide1'
import AboutUs from '../../components/AboutUs/AboutUs'
const Landing = () => {
  const [search, setSearch] = useState('') // search term state

  return (
     <div className="min-h-screen pt-2 ">
      <Header  />
      <AboutUs />
    </div>
  )
}

export default Landing
 