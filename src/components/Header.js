import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import logo from "../images/logo.png";
import './Header.css'


function Header() {
  return (
    <div className="header">
       <Navbar bg="dark" variant="dark" expand="xl">
        <Navbar.Brand>
          <img
            alt="app-logo"
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
          />{' '}
          <span>Restaurants Review</span>
         </Navbar.Brand>
       </Navbar>
    </div>
  );
}

export default Header;
