// Soundtrack for TopNav:
// https://www.nts.live/shows/boom-bip/episodes/boom-bip-18th-may-2020

import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./TopNav.scss";

const MenuItem = (href) => {
  let location = useLocation();
  // console.log(location.pathname);

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
      <div className="top-nav-left">
        <Link to="/">
          <h2>Stereoh</h2>
        </Link>
        <ul>
          <li className={`menu-item saturn6 ${saturnActive ? "active" : ""}`}>
            <Link to="/saturn6">saturn&nbsp;6</Link>
          </li>
          <li
            className={`menu-item tropical-freeze ${
              tropicalActive ? "active" : ""
            }`}
          >
            <Link to="/tropical-freeze">tropical&nbsp;freeze</Link>
          </li>
          <li
            className={`menu-item bassline-basin ${
              basslineActive ? "active" : ""
            }`}
          >
            <Link to="/bassline-basin">Bassline&nbsp;Basin</Link>
          </li>
          <li className={`menu-item about ${aboutActive ? "active" : ""}`}>
            <Link to="/about">About</Link>
          </li>
          {/* <li className="menu-item">
            <Link to="/pnew">pnew</Link>
          </li> */}
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
    </nav>
  );
};

export default MenuItem;
