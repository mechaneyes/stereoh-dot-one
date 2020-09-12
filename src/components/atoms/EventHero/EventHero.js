import React from "react";

import "./EventHero.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const EventHero = (props) => {
  const { homeHeroImg, headline, subheadline } = props;

  return (
    <section className="event-hero">
      <img
        className="home-hero-img"
        src={homeHeroImg}
        alt="neonPlatform hero"
      />
      <div className="home-hero-content">
        {headline ? (
          <h1>{headline}</h1>
        ) : (
          <img
            className="neoneon-logo"
            src={imgPath + "neonTron.png"}
            alt="neoneon logo"
          />
        )}
        {subheadline ? (
          <p className="home-hero-subheadline">{subheadline}</p>
        ) : (
          <p className="home-hero-subheadline">Corrosive environment filled with radioactive beats</p>
        )}
      </div>
      <div className="gradient">
        <div className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
