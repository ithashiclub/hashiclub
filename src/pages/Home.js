import React from 'react'
import BackImage from '../assets/backgroundHome.png'
import '../styles/Home.css'

function Home() {  
  return (
    <div className="home" >
        <div className="homeMain">
        <div className='homeText'  >
            <div className="heading1 color-white">The <br></br>People's <br></br>Asset</div> 
          <div className='color-orange heading3 margin-top-base'>Made by & for the community</div>
          <div className='color-white heading4 margin-top-base'>HASHI is your access ticket to an exclusive  <br></br>Decentralized Asset Fund (DAF)</div>
          <a href="https://twitter.com/ClubHashi"><div className="background-orange buttonHome">Follow the path</div></a>
          </div>
          <div className="homecontainer" style={{ backgroundImage: `url(${BackImage})`   }}>  </div>
        </div>
          
          
    </div>
  )
}

export default Home