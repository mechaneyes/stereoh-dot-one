import React from "react";

import { Link } from "react-router-dom";

const RelatedItems = (props) => {
  let { hide } = props;
  return (
    <>
      <section className="related-content">
        <nav className="related-nav">
          <ul>
            <li className="active-item">our other experiences</li>
          </ul>
        </nav>
        <div className="related-grid">
          <article
            className={`one-related-item ${
              hide === "saturn6" ? "hide-me" : ""
            }`}
          >
            <img
              className="home-hero-img"
              src="/assets/saturn6_009.jpg"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>Saturn 6</h3>
              <h4>Cybernetic techno factory for the robo-funk bots</h4>
              <Link to="/saturn6">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article
            className={`one-related-item ${
              hide === "tropical" ? "hide-me" : ""
            }`}
          >
            <img
              className="home-hero-img"
              src="/assets/tropicalFreeze_014.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>Tropical Freeze</h3>
              <h4>Hidden oasis filled with organic house formations</h4>
              <Link to="/tropical-freeze">
                <button className="transp-bg">Coming Soon</button>
              </Link>
            </div>
          </article>
          <article
            className={`one-related-item ${
              hide === "neoneon" ? "hide-me" : ""
            }`}
          >
            <img
              className="home-hero-img"
              src="/assets/neoneon_001.jpg"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>Bassline Basin</h3>
              <h4>Corrosive environment filled with radioactive beats</h4>
              <Link to="/bassline-basin">
                <button className="transp-bg">Coming Soon</button>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default RelatedItems;
