import React, { useState } from 'react'
import './Landing.css'
import Header from '../../components/Header/Headerslide1'
import AboutUs from '../../components/AboutUs/AboutUs'
import Work from '../../components/Work/Work'
const Landing = () => {
  const [search, setSearch] = useState('') // search term state

  return (
     <div className="min-h-screen pt-2 ">
      <Header  />
      <AboutUs />
      <Work/>
    </div>
  )
}

export default Landing
 