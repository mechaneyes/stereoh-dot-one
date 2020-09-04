// Soundtrack for TopNav:
// https://www.nts.live/shows/boom-bip/episodes/boom-bip-18th-may-2020

import React from "react";
import { Link } from "react-router-dom";

import "./TopNav.scss"

const MenuItem = (href) => {
  // let { label, src, href, description } = props;
  return (
    <nav className="top-nav">
      <div className="top-nav-left">
      <Link to="/"><h2>Stereoh</h2></Link>
        <ul>
          {/* <li className="menu-item">
            <Link to="/">Home</Link>
          </li> */}
          <li className="menu-item">
            <Link to="/spaceone">space one</Link>
          </li>
          <li className="menu-item">
            <Link to="/mrfingers">mrfingers</Link>
          </li>
          <li className="menu-item">
            <Link to="/equiva">equivalents</Link>
          </li>
          {/* <li className="menu-item">
            <Link to="/pnew">pnew</Link>
          </li> */}
        </ul>
      </div>
      <div className="top-nav-right">
        <div className="cta-nav" href={href}>
        <Link to="/feedback"><button>Feedback</button></Link>
        </div>
        <div className="cta-nav" href={href}>
        <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuItem;
