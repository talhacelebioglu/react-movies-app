import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [show, setShow] = useState(false);

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
            <ul className={show ? "menu active" : "menu"}>
              <li>
                <NavLink to="/movies" onClick={() => setShow(!show)}>
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink to="/tvshows" onClick={() => setShow(!show)}>
                  TV Shows
                </NavLink>
              </li>
              <li>
                <NavLink to="/suggest" onClick={() => setShow(!show)}>
                  Suggest
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Hamburger
          size={25}
          direction="right"
          toggled={show}
          toggle={setShow}
        />
      </div>
    </nav>
  );
};

export default Navbar;
