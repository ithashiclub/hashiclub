import React from 'react'
import BackImage from '../assets/hashi-no-back.png'
import '../styles/Home.css'

function Home() {  
  return (
    <div className="home"  >
        <div className="homeMain">
          <div className="homecontainer" style={{ backgroundImage: `url(${BackImage})`   }}>  </div>
          <div className='homeText'>
            Content to be revealed on 9th April, 7:00 PM (EST).  
          <div className='textTest'>Stay tunned. </div></div>
        </div>
    </div>
  )
}

export default Home