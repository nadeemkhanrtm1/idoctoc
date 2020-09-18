import React from 'react';
import Logo from "../../images/logo.png";
import david from "../../images/david.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="nav_bar">
        <div className="logo_items">
          <img src={Logo}></img>
          <Link to="/home" className="link">HOME</Link>
          <Link to="/profile" className="link">PROFILE</Link>
          <Link to="/schedule" className="link">SCHEDULE APPOINTMENTS</Link>
        </div>
        <div className="profile_nav">
          <p>Hello!<br/>
            Dmitry Galkin</p>
          <img src={david}></img>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
