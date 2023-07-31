import { IoCallOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { BsList } from "react-icons/bs";

import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("list");

  function closeNav() {
    setActive("list");
  }

  function openNav() {
    setActive("active list");
  }
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <h1>On The Beach</h1>
          <div className="bottom-logo">
            <h4>NOOSA RESORT</h4>
          </div>
        </div>

        <div className="nav-list">
          <ul className={active}>
            <div className="close-navbar" onClick={closeNav}>
              <GrClose className="icon" />
            </div>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Accomodation
              </a>
              <div className="hover"></div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Packages
              </a>
              <div className="hover"></div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Experiences
              </a>
              <div className="hover"></div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Gallery
              </a>
              <div className="hover"></div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
              <div className="hover"></div>
            </li>
            <li className="nav-item phone">
              <div href="" className="nav-link">
                <div className="contact">
                  <a className="number">
                    <span>+</span>123 4567 890
                  </a>
                  <a className="btn">BOOK NOW</a>
                </div>
              </div>
            </li>
          </ul>
          <div className="open-navbar" onClick={openNav}>
            <BsList className="icon" />
          </div>
          <div className="call">
            <IoCallOutline className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
