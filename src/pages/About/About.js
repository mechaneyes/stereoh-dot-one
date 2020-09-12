import React from "react";

import EventHero from "../../components/atoms/EventHero/EventHero";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./About.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Neoneon = () => {

  document.title = "Stereoh | About";

  return (
    <div className="single anima">

      <section className="event-hero">
        <img
          className="home-hero-img"
          src={imgPath + "barclays.jpg"}
          alt="neonPlatform hero"
        />
        <div className="home-hero-content">
          <h1>About</h1>
          <p className="home-hero-subheadline">
            Stereoh is a platform for live music shows and interactive
            experiences in a novel format that combines streaming video with
            freely traversable social 3D environments, where audience members
            can talk and interact naturally, and artists can meet their fans
            personally. We are constantly adding new functionality and plotting
            new experiences, so keep in touch /hyperlink to signup/ and drop by
            to check out the latest events.
          </p>
        </div>
        <div className="gradient"></div>
      </section>

      <nav className="related-nav">
        <ul>
          <li className="active-item">our other experiences</li>
        </ul>
      </nav>

      <RelatedItems />
    </div>
  );
};

export default Neoneon;
