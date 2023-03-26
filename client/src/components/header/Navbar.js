import React from "react";
import "./navbar.css";
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

function Navbar() {
  return (
    <div className="navbar">
      <div className="headerNavLeft">
        <div className="headerOption">
          <span className="headerOptionLine1">Home</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLine1">About</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLine1">Shopping</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLine1">Customize</span>
        </div>
      </div>
      <div className="headerNavMiddle">
        <div className="headerLogo">
          <img src="./fomologo.svg" alt="fomo logo" className="navLogo" />
        </div>
      </div>
      <div className="headerNavRight">
        <div className="headerOption">
          <span className="headerOptionLine1">Photos</span>
        </div>
        <div className="headerOption">
          <a href="#testimonialSection"><span className="headerOptionLine1">Testimonials</span></a>
        </div>
        <div className="headerOption">
          <span className="headerOptionLine1">Sign in</span>
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
