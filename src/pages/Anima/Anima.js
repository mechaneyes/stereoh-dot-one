import React, { useState } from "react";

import HomeHero from "../../components/atoms/HomeHero/HomeHero";
import PullImgLeft from "../../components/atoms/PullQuotes/PullImgLeft";
import PullImgRight from "../../components/atoms/PullQuotes/PullImgRight";
import Button from "../../components/atoms/Button/Button";
import relatedItems from "../../components/related-data";
import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
// import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "./Anima.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Anima = () => {
  const [extras, setExtras] = useState(0);

  let shownItems = [];

  if (extras === 0) {
    shownItems = relatedItems.slice(0, 2);
    // } else if (extras === 1) {
    //   shownItems = relatedItems.slice(3, 6);
    // } else if (extras === 2) {
    //   shownItems = relatedItems.slice(6, 9);
  }

  const relatedList = shownItems.map((rel, i) => (
    <RelatedItem key={i} {...rel} />
  ));

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
        headline="Anima"
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
          Through this process of refining behavior and visual complexity,
          »ANIMA« becomes life-like and impressive. Installed in the round, the
          piece is experienced from all sides. In a unique way, »ANIMA« creates
          an intelligent reactive dialogue with all bodies within its
          surroundings. The sculpture takes on an ethereal life of its own, as
          it and the viewer continue their dynamic exchange. Participants, the
          orb and soundscape combine to perpetually influence each other and
          create an immersive and captivating experience.
        </p>
      </section>

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

        <Button btnUrl="theLink" btnTxt="enter" />
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
            className={`${extras === 0 ? "active-item" : ""}`}
            onClick={() => setExtras(0)}
          >
            our other experiences
          </li>
          {/* <li
            className={`${extras === 1 ? "active-item" : ""}`}
            onClick={() => setExtras(1)}
          >
            you may also like
          </li>
          <li
            className={`${extras === 2 ? "active-item" : ""}`}
            onClick={() => setExtras(2)}
          >
            details
          </li> */}
        </ul>
      </nav>
      {/* <section className="related-content">
        <div className="related-grid">{relatedList}</div>
      </section> */}

      <section className="related-content">
        <div className="related-grid">
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/jenAndMe.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>It's just (House of Dupree)</h3>
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
              <h3>Pier Children</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button className="transp-bg">Explore</button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Anima;
