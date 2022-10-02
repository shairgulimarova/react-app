
import { Routes,Route } from 'react-router-dom';
import './app.scss';
import Navbar from './Components/Navbar/Navbar';
//import {Home, Aboutus, Doctors, Testimonials,Blog} from "./Pages"; 
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Doctors from "./Pages/Doctors/Doctors";
import Appointment from "./Pages/Appointment/Appointment";
import Blog from "./Pages/Blog/Blog";


function App() {
  return (
    <div className="app">   
    <header>
      <Navbar/>
    </header> 
    <main>
      <Routes>
        <Route index="/" element={<Home/>}/>
        <Route path="aboutus" element={<Aboutus/>}/>
        <Route path="doctors" element ={<Doctors/>}/>
        <Route path="appointment" element ={<Appointment/>}/>
        <Route path = "blog" element = {<Blog/>}/>
      </Routes>
      </main> 

     
     
    </div>
  );
}

export default App;
