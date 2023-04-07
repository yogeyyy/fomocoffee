import React from "react";
import "./navbar.css";
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

function Navbar() {
  return (
    <div className="navbar">
      <div className="headerNavLeft">
        <div className="headerOption">
          <p className="headerOptionLine1">Home</p>
        </div>
        <div className="headerOption">
          <p className="headerOptionLine1">About</p>
        </div>
        <div className="headerOption">
          <p className="headerOptionLine1">Shopping</p>
        </div>
        <div className="headerOption">
          <p className="headerOptionLine1">Customize</p>
        </div>
      </div>
      <div className="headerNavMiddle">
        <div className="headerLogo">
          <img src="./fomologo.svg" alt="fomo logo" className="navLogo" />
        </div>
      </div>
      <div className="headerNavRight">
        <div className="headerOption">
          <p className="headerOptionLine1">Photos</p>
        </div>
        <div className="headerOption">
          <a href="#testimonialSection"><p className="headerOptionLine1">Testimonials</p></a>
        </div>
        <div className="headerOption">
          <p className="headerOptionLine1">Sign in</p>
        </div>
        <div className="headerOption">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon id="icon" style={{ color: "#BFA17F" }}/>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
