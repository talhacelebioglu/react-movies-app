import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="navbar container">
        {/* <Hamburger
          direction="right"
          toggled={show}
          toggle={setShow}
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
            } else {
              // close a menu
            }
          }}
        /> */}
        <NavLink to="/">
          <div className="brand">
            <RiIcons.RiMovie2Line />
          </div>
        </NavLink>
        <div className="menu-wrapper">
          <div className="menu-container">
            <ul className="menu">
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/tvshows">TV Shows</NavLink>
              </li>
              <li>
                <NavLink to="/suggest">Suggest</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
