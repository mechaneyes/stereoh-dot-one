import React from "react";

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
              src="/assets/jenAndMe.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>It's just (House of Dupree)</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button className="transp-bg">Explore</button>
              </a>
            </div>
          </article>
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/tropicalFreeze_066.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>Pier Children</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button className="transp-bg">Explore</button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MrFingers;
