import React from "react";

import { Link } from "react-router-dom";


const RelatedItems = (props) => {
  let { hide } = props
  return (
    <>
      <section className="related-content">
          <div className="related-grid">
            <article className={`one-related-item ${hide === "saturn6" ? "hide-me" : ""}`}>
              <img
                className="home-hero-img"
                src="/assets/saturn6_015.jpg"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>Saturn 6</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <Link to="/saturn6">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
            <article className={`one-related-item ${hide === "tropical" ? "hide-me" : ""}`}>
              <img
                className="home-hero-img"
                src="/assets/tropicalFreeze_014.png"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>Tropical Freeze</h3>
                <h5>Birthdays and Going Aways</h5>
                <Link to="/tropical-freeze">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
            <article className={`one-related-item ${hide === "neoneon" ? "hide-me" : ""}`}>
              <img
                className="home-hero-img"
                src="/assets/neoneon_001.jpg"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>neoneon</h3>
                <h5>Our first event. Feels like forever ago</h5>
                <Link to="/neoneon">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
          </div>
        </section>
    </>
  );
};

export default RelatedItems;
