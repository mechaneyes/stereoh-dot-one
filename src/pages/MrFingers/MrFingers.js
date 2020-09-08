import React from "react";

import { Link } from "react-router-dom";

import GradientHero from "../../components/atoms/GradientHero/GradientHero";
import { defaultValues } from "../../components/constants";
import "./MrFingers.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const defaultProps = {
  title: defaultValues.HERO_TITLE,
  subhead: defaultValues.SUBHEADLINE_SHORT,
};

const MrFingers = () => {

  return (
    <div className="single mr-fingers">
      <GradientHero />
      <nav className="related-nav">
        <ul>
          <li
            className="active-item"
          >
            our other spaces
          </li>
        </ul>
      </nav>

      <section className="related-content">
        <div className="related-grid">
          <article className="one-related-item">
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
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/tropicalFreeze_066.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
            <h3>Tropical Freeze</h3>
              <h5>Birthdays and Going Aways</h5>
              <Link to="/mrfingers">
                <button className="transp-bg">Explore</button>
                </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MrFingers;
