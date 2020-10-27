import React from "react";
import { Link } from "react-router-dom";

import "./HomeHero.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const HomeHero = (props) => {
  const { headline } = props;

  return (
    <section className="homepage-hero">
      <img
        className="home-hero-img"
        // src={homeHeroImg}
        src={imgPath + "sat6/satSix_021.jpg"}
        alt="neonPlatform hero"
      />
      {/* <img className="home-flyer" src={imgPath + "bassline-reactor.jpg"} alt="Bassline Reactor Flyer" /> */}
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
        <h3>Welcome to Stereoh 0.1.1!</h3>
        <p className="home-hero-subheadline">
          We are building a platform for virtual music shows that are more
          interactive, social, and accessible. <Link to="/signup">Sign up</Link> to hear about
          future events and new features. We’d also love to hear your <Link to="/feedback">feedback</Link>
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
