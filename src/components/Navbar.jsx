import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <nav>
      <div className="navbar container">
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
        {/* <Hamburger direction="left" onClick={handleClick} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
