import React from "react";
import {Link}from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="Navbar_light" >
        <div className="nav-wrapper">
          <Link to={"/"} className="Navbar_Title">
            Bibliophile
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="Popular_books">
              <a href="sass.html" className='Nav_list_items'>Popular Books</a>
            </li>
            <li className="Novels">
              <a href="badges.html" className='Nav_list_items'>Novels</a>
            </li>
            <li className="Profile">
              <a href="collapsible.html" className='Nav_list_items'>Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
