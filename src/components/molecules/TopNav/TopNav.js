// Soundtrack for TopNav:
// https://www.nts.live/shows/boom-bip/episodes/boom-bip-18th-may-2020

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./TopNav.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const MenuItem = (href) => {
  let [isVisible, setIsVisible] = useState(false);

  let location = useLocation();

  const burgerWidth = {
    width: "30px",
  };
  let saturnActive;
  let tropicalActive;
  let basslineActive;
  let aboutActive;

  switch (location.pathname) {
    case "/saturn6":
      saturnActive = true;
      break;
    case "/tropical-freeze":
      tropicalActive = true;
      break;
    case "/bassline-basin":
      basslineActive = true;
      break;
    case "/about":
      aboutActive = true;
      break;
    default:
    // code block
  }

  return (
    <nav className="top-nav">
      <div className="top-nav-left" onClick={() => setIsVisible(false)}>
        <Link to="/">
          <h2>Stereoh</h2>
        </Link>
        <ul className={isVisible === true ? "show-menu" : ""}>
          <li className={`menu-item saturn6 ${saturnActive ? "active" : ""}`}>
            <Link to="/saturn6">saturn&nbsp;6</Link>
          </li>
          <li
            className={`menu-item tropical ${tropicalActive ? "active" : ""}`}
          >
            <Link to="/tropical-freeze">tropical&nbsp;freeze</Link>
          </li>
          <li
            // className={`menu-item bassline-basin upcoming ${
            className={`menu-item bassline-basin ${
              basslineActive ? "active" : ""
            }`}
          >
            <Link to="/bassline-basin">Bassline&nbsp;Reactor</Link>
            {/* <Link to="/bassline-basin">October&nbsp;18th</Link> */}
          </li>
          <li className={`menu-item about ${aboutActive ? "active" : ""}`}>
            <Link to="/about">About</Link>
          </li>
          <li className="mobile-only menu-item">
            <Link to="/feedback">Feedback
            </Link>
          </li>
          <li className="mobile-only menu-item">
            <Link to="/signup">Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-nav-right">
        <div className="cta-nav" href={href}>
          <Link to="/feedback">
            <button>Feedback</button>
          </Link>
        </div>
        <div className="cta-nav" href={href}>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
      <img
        className="hamburger-icon"
        src={imgPath + "hamburger.png"}
        alt="hamburger menu"
        style={burgerWidth}
        onClick={() => setIsVisible(!isVisible)}
      />
    </nav>
  );
};

export default MenuItem;
