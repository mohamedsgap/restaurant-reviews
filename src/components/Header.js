import React from "react";
import logo from "../images/logo.png";
import './Header.css'


function Header() {
  return (
    <div className="header">
     <header>
          <img
            alt="app-logo"
            src={logo}
            width="70"
            height="70"
            className="app-logo"
          />
          <h1>Restaurants Review</h1>
      </header>  
    </div>
  );
}

export default Header;
