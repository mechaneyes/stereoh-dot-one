import React from "react";

import { defaultValues } from "../../constants";
import "./HomeHero.scss";

const defaultProps = {
  title: defaultValues.HERO_TITLE,
  subhead: defaultValues.SUBHEADLINE,
};

const HomeHero = (props) => {
  const { homeHeroImg } = props;
  return (
    <section className="homepage-hero">
      <img
        className="home-hero-img"
        src={homeHeroImg}
        alt="neonPlatform hero"
      />
      <div className="home-hero-content">
        <h1>Butterfly Effect</h1>
        <p className="home-hero-subheadline">{defaultProps.subhead}</p>
        <div className="home-hero-ctas">
          <button className="transp-bg">Enter</button>
          <button className="transp-bg">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
