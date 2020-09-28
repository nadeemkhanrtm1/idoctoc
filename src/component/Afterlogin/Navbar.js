import React from 'react';
import Logo from "../../images/logo.png";
import david from "../../images/david.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const p = {
    fontFamily: 'Playfair Display',
fontSize: '0.9rem',
fontStyle: 'normal',
fontWeight: '700',
color: '#19193E',
  }
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
          <a style={p}>Hello!<br/>
            Dmitry Galkin<br/>
            <Link className="btn p-0 m-0 logoutbtn" to="/">LOG OUT</Link></a>
          <img src={david}></img>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
