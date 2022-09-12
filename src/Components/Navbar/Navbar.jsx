import React, { useState } from "react";
import { useAuth } from "../../store/context";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css";
import logo from "../../Assest/Logo.png";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { theme, themeToggle } = useAuth();

  function toggleMenu() {
    menu === false ? setMenu(true) : setMenu(false);
  }
  return (
    <div className="navbar" id={theme}>
      <div className="navbar-logo" onClick={themeToggle}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h3>CRAPPO</h3>
        </div>
      </div>
      <div
        className="navlink-mobile"
        id={theme}
        style={{ display: menu ? "flex" : "none" }}
      >
        <div className="navlinks">
          <ul>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-buttons">
          <button className="button1 login" id={theme}>
            Login
          </button>
          <button className="button2">Register</button>
        </div>
      </div>
      <div className="hambuger" onClick={toggleMenu}>
        {menu ? <CloseIcon /> : <MenuIcon />}
      </div>
      {/* ///////////desktop ///////////*/}
      <div className="navlink-desktop">
        <div className="navlinks-desktop" id={theme}>
          <ul>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-buttons">
          <button className="button1 login" id={theme}>Login</button>
          <button className="button2">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
