import React from 'react';
import "./Navbar.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">Dominik Lewicki</div>
        <div className="links">
          <div className="link">Home</div>
          <div className="link">About</div>
          <div className="link">Contact</div>
          <div className="link">Work</div>
        </div>
        <button className="button1">
          Project request <MdOutlineKeyboardArrowRight size={16}/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
