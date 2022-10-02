import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import "./Pages/Home/home.scss";
import "./Pages/Aboutus/aboutus.scss";
import "./Pages/Doctors/doctors.scss";
import "./Pages/Appointment/appointment.scss";
import "./Pages/Blog/blog.scss";
import App from './App';


ReactDOM.render(
    <Router>
      
       <App/>
      
    </Router>,
  document.getElementById('root')
  );
    



