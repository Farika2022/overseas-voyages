import React, { useState } from 'react';
import './Headerslide1.css';
import BgVideo from '../../assets/voyages.mp4'

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Headerslide1: React.FC<HeaderProps> = () => {
 
  return (
   
          <section className= 'header'>
     
      {/*<img className="header-logo" src={logotext} alt="" />*/}
      <video src={BgVideo} autoPlay muted loop className="video-bg" />
      
     <div className='bg-overlay'></div>
      <div className="title">

       <h1 >
         "We Travel Everywhere <br />
          to Help <br /> You Travel Anywhere"</h1>
      </div>
    </section>
   
    
  )
}

export default Headerslide1