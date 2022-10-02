import React from 'react'
import {useState} from "react" 
import {Link, NavLink} from "react-router-dom"; 


import "./navbar.scss" 
import medicoLogo from "../../images/medico.svg";
import menuIcon from "../../images/menuIcon.svg"

function Navbar() {
  const [menuActive, setMenuActive] = useState(false); 
  const showMenu = () =>{
    setMenuActive(!menuActive); 
  }

  const menuItems = [
    {
      id:1,
      menu:"home",
      link: "/"
    }, 
    {
      id:2,
      menu:"aboutus",
      link:"aboutus"
    },
    {
      id:3,
      menu:"doctors",
      link:"doctors"
    },
    {
      id:4,
      menu:"appointment",
      link:"appointment"
    },
    {
      id:5,
      menu:"blog",
      link:"blog"
    }
  ]



  return (
    <nav className='navbar'>
      <div className="container navbar__container">
        <Link to="/" className='navbar__logo'>
        <img   src={medicoLogo} width={100} alt="medicoLogo"/>
        </Link>
        <button onClick={showMenu} className='navbar__toggle' >
          <img src={menuIcon} alt='menu-toggle'/>
        </button>
        <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>
        {menuItems.map((menuItem)=>{
           return (
           <NavLink onClick={showMenu} to={menuItem.link} className="navbar__menu-link" key={menuItem.id}>{menuItem.menu}</NavLink>
         )
         })
        }
        </div>

      </div>
    </nav>
  )
}

export default Navbar