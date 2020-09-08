import React from "react";

import EventHero from "../../components/atoms/EventHero/EventHero";
import PullImgLeft from "../../components/atoms/PullQuotes/PullImgLeft";
import PullImgRight from "../../components/atoms/PullQuotes/PullImgRight";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import "./Neoneon.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Neoneon = () => {

  const quoteOne = {
    pullImg: `${imgPath}anima_iki_05.jpg`,
    pullTitle: "Spherical Projection",
    pullPara:
      "developed to explore the relationship between itself and its surroundings through the use of movement, texture, light and sound",
  };

  const quoteTwo = {
    pullImg: `${imgPath}anima_iki_09.jpg`,
    pullTitle: "Fluid Shimmering Patterns",
    pullPara:
      "Through this process of refining behavior and visual complexity, »ANIMA« becomes life-like and impressive.",
  };

  return (
    <div className="single anima">
      <EventHero
        homeHeroImg={imgPath + "anima_iki_03.jpg"}
        headline="neoneon"
        showFeedback={false}
      />

      <PullImgLeft {...quoteOne} />

      <PullImgRight {...quoteTwo} />

      <section className="body-copy">
        <p>
          The spherical projection is achieved from inside the globe with a
          powerful wide angle projector and fisheye lens, producing images in a
          full 360 degree directional beam. Modulating frequencies audible in
          the installation respond to those in the space as sound is picked up
          and resonated back as feedback to the atmosphere.
        </p>

        <p>
          Through this process of refining behavior and visual complexity,
          »ANIMA« becomes life-like and impressive. Installed in the round, the
          piece is experienced from all sides. In a unique way, »ANIMA« creates
          an intelligent reactive dialogue with all bodies within its
          surroundings. The sculpture takes on an ethereal life of its own, as
          it and the viewer continue their dynamic exchange. Participants, the
          orb and soundscape combine to perpetually influence each other and
          create an immersive and captivating experience.
        </p>
        <Button btnUrl="https://hubs.mozilla.com/f6HM9iE/neoneon" btnTxt="enter neoneon" />
      </section>

      <nav className="related-nav">
        <ul>
          <li
            className="active-item"
          >
            our other experiences
          </li>
        </ul>
      </nav>

      <section className="related-content">
        <div className="related-grid">
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/neoneon_001.jpg"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>neoneon</h3>
              <h5>Our first event. Feels like forever ago</h5>
              <Link to="/neoneon">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/tropicalFreeze_066.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
            <h3>Tropical Freeze</h3>
              <h5>Birthdays and Going Aways</h5>
              <Link to="/mrfingers">
                <button className="transp-bg">Explore</button>
                </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Neoneon;
