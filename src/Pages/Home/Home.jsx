import React from 'react'
import {Link} from "react-router-dom";


function Home() {
  return ( 
  <div className="top-screen" >
    <section className='home'>
     
        <h2 className="home__title">Take qualified dental team service</h2>
      <p className='home__description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      <Link to="/doctors" className='home__link'>Appointment Now</Link>
      
      
    </section>
    </div>
  )
}

export default Home