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

  console.log('enterUrl', enterUrl)

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
        <p className="home-hero-subheadline">{defaultProps.subhead}</p>
        <div className="home-hero-ctas">
          {enterUrl ? (
            <Button btnUrl={enterUrl} btnTxt="enter space one" />
          ) : (
            <button className="transp-bg">explore {headline}</button>
          )}
          {showFeedback ? (
            <button className="transp-bg">Feedback</button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="gradient"></div>
    </section>
  );
};

export default HomeHero;
