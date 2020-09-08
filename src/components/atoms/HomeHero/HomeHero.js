import React from "react";

import { defaultValues } from "../../constants";
import Button from "../Button/Button";
import "./HomeHero.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";
const defaultProps = {
  title: defaultValues.HERO_TITLE,
  subhead: defaultValues.SUBHEADLINE,
};

const HomeHero = (props) => {
  const { homeHeroImg, headline, enterUrl, showFeedback } = props;

  return (
    <section className="homepage-hero">
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
        {/* <img className="neoneon-logo" src={imgPath + "neonTron.png"} alt="neoneon logo" /> */}
        <h3>Welcome to the launch of Stereoh!</h3>
        <p className="home-hero-subheadline">
          Stereoh is a content platform making hosting and attending virtual
          shows in social 3D environments easy, cost-effective, and accessible.
        </p>
        <p className="home-hero-subheadline">
          Have a look around, please give us feedback about the site and
          experiences using the link up top add your email to our list so we can
          keep you informed.
        </p>
        <p className="home-hero-subheadline">
          Our most recent experience is Saturn 6. Give it a spin.
        </p>
      </div>
      <div className="gradient"></div>
      <div class="scroll-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default HomeHero;
