import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";


function Mnavbar() {
  

  return (
   
    <div className="header">
        
        <div class="nav">
        <div class="logo">
        <Link to={"/"}><img src={logo} alt="Logo" id="logo1" /></Link>
        </div>
        <ul class="menu">

        <li>
        <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/"}>About</Link>
        </li>
        <li>
        <Link to={"/"}>Contact</Link>
        </li>
        </ul>
        </div>

      </div>
  );
}

export default Mnavbar;
