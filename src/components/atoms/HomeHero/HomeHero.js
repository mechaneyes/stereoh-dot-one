import React from "react";

import "./HomeHero.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const HomeHero = (props) => {
  const {headline} = props;

  return (
    <section className="homepage-hero">
      <img
        className="home-hero-img"
        // src={homeHeroImg}
        src={imgPath + "cybotron_0_1_0.jpg"}
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
        <h3>Welcome to Stereoh 0.1.0!</h3>
        <p className="home-hero-subheadline">
          Stereoh is a content platform making hosting and attending virtual
          shows in social 3D environments easy, cost-effective, and accessible.
        </p>
        <p className="home-hero-subheadline">
          Have a look around, please give us feedback about the site and
          experiences using the link up top and add your email to our list so we can
          keep you in the loop.
        </p>
        <p className="home-hero-subheadline">
          Our most recent experience is Saturn 6. Meet us inside!
        </p>
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

export default HomeHero;
