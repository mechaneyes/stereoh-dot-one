import React from "react";

import { defaultValues } from "../../constants";
// import Button from "../Button/Button";
import "./EventHero.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";
const defaultProps = {
  title: defaultValues.HERO_TITLE,
  subhead: defaultValues.SUBHEADLINE,
};

const EventHero = (props) => {
  const { homeHeroImg, headline, enterUrl } = props;

  console.log("enterUrl", enterUrl);

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
        <p className="home-hero-subheadline">{defaultProps.subhead}</p>
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
