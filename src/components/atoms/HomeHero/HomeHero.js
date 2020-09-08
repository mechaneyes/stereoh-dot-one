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
        <p className="home-hero-subheadline">
          Stereoh is empowering musical creators and their fans to connect
          through interactive, social, easy-to-host 3D shows accessible from a
          browser window of any recent internet-connected device. Our platform
          makes it easy to monetize your performance for a widest audience
          possible, and to find like-minded music fans from around the world.
        </p>
        {/* <div className="home-hero-ctas">
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
        </div> */}
      </div>
      <div className="gradient"></div>
    </section>
  );
};

export default HomeHero;
