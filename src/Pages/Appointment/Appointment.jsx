import React from 'react';
import {Link} from "react-router-dom";
import procedure from "../../images/dentist__procedure.svg"

function Appointment() {
  return (
    <section className='appointment'>
      <div className="two__blocks">
        <div className="two__blocks-item">
        <img src={procedure} width={500} alt="dentist__procedure"/>
      </div>
      <div className="two__blocks-item">
        <h3>Appointment create for your treatment</h3>
        <form action="submit">
        <select name="department" id="">
                <option disabled selected value="Select Department">Select Department</option>
                <option value="Scan">Scan</option>
                <option value="Consultation">Consultation</option>
            </select>
            <select name="doctor" id="">
                <option disabled selected value="Select a Doctor">Select a Doctor</option>
                <option value="Adilet Jumaev">Shairgul Imarova</option>
                <option value="Kunduz Askarova">Rysbek Rysaliev</option>
            </select>
            <p>
                <input name="fullname" type="text" placeholder="Your Full Name"/>
                <input name="phonenumber" type="text" placeholder="Your Your Number"/>
            </p>
            <p>
                <input name="date" type="text" placeholder="Select Date"/>
                <input name="time" type="text" placeholder="Select Time"/>
            </p>
            <button type='submit'>Book Now</button>
        </form>
      </div>
      </div>
      
    </section>
  )
}

export default Appointment