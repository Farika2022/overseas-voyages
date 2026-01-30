import React, { useState } from 'react'
import './Landing.css'
import Header from '../../components/Header/Headerslide1'

const Landing = () => {
  const [search, setSearch] = useState('') // search term state

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      
    </div>
  )
}

export default Landing
