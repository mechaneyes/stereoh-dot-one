import React from "react";

import HomeHero from "../../components/atoms/HomeHero/HomeHero";
import PullImgLeft from "../../components/atoms/PullQuotes/PullImgLeft";
import PullImgRight from "../../components/atoms/PullQuotes/PullImgRight";
import Button from "../../components/atoms/Button/Button";
import "./Saturn6.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Saturn6 = () => {

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
      <HomeHero
        homeHeroImg={imgPath + "anima_iki_03.jpg"}
        headline="Saturn 6"
        enterUrl="https://space.neoneon.one/aMggN3t/striking-mature-soiree"
        showFeedback={true}
      />
      {/* <HomeHero headline="Cybotron" /> */}

      <PullImgLeft {...quoteOne} />

      <section className="body-copy">
        <h2>ANIMA iki</h2>
        <p>
          The spherical projection is achieved from inside the globe with a
          powerful wide angle projector and fisheye lens, producing images in a
          full 360 degree directional beam. Modulating frequencies audible in
          the installation respond to those in the space as sound is picked up
          and resonated back as feedback to the atmosphere.
        </p>
        <p>
          The spherical projection is achieved from inside the globe with a
          powerful wide angle projector and fisheye lens, producing images in a
          full 360 degree directional beam. Modulating frequencies audible in
          the installation respond to those in the space as sound is picked up
          and resonated back as feedback to the atmosphere.
        </p>
      </section>

      <PullImgRight {...quoteTwo} />

      <section className="body-copy">
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

        <Button btnUrl="https://space.neoneon.one/aMggN3t/striking-mature-soiree" btnTxt="enter space one" />
        <Button btnUrl="feedback" btnTxt="feedback" />
      </section>

      {/* <img
        className="full-width-img"
        src={imgPath + "anima_iki_01.jpg"}
        alt="full width"
      /> */}

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
              src="/assets/jenAndMe.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>Tropical Freeze</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button className="transp-bg">Explore</button>
              </a>
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
              <h5>Andrey, Kelly, Jen, Ray and Sam are all celebrating another trip around the sun. David and Liz are packing up soon for a new chapter in LA.</h5>
              <a href="https://space.neoneon.one/VY3mMZa/tropical-freeze">
                <button className="transp-bg">Explore</button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Saturn6;
