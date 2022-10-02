import React from 'react'
import {Link} from 'react-router-dom'; 
import dentistry from "../../images/dentistry.svg"

function Aboutus() {
  return (
   <section className='aboutus'>

    <div className="aboutus__left">
      <img src={dentistry} width={500} alt="dentistry"></img>
    </div>

    <div className="aboutus__right">
      <h3>Medico is the region's largest healthcare network</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      <Link to="/doctors" className='aboutus__link'>Explore Now</Link>
    </div>
    
   </section>
  )
}

export default Aboutus