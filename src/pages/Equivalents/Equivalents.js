import React, { useState } from "react";

import HomeHero from "../../components/atoms/HomeHero/HomeHero";
import Button from "../../components/atoms/Button/Button";
import relatedItems from "../../components/related-data";
import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "./Equivalents.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Equivalents = () => {
  const [extras, setExtras] = useState(1);

  let shownItems = [];

  if (extras === 0) {
    shownItems = relatedItems.slice(0, 6);
  } else if (extras === 1) {
    shownItems = relatedItems.slice(3, 6);
  } else if (extras === 2) {
    shownItems = relatedItems.slice(6, 9);
  }

  const relatedList = shownItems.map((rel, i) => (
    <RelatedItem key={i} {...rel} />
  ));

  return (
    <div className="single equiva">
      <HomeHero
        homeHeroImg={imgPath + "eliasson_001.jpg"}
        headline="Equivalents"
      />

      <section className="copy-top">
        <h2>»ANIMA« becomes life-like and impressive. </h2>
        <p>
          The spherical projection is achieved from inside the globe with a
          powerful wide angle projector and fisheye lens, producing images in a
          full 360 degree directional beam. Modulating frequencies audible in
          the installation respond to those in the space as sound is picked up
          and resonated back as feedback to the atmosphere.
        </p>
      </section>

      <section className="image-carousel">
        <img className="carousel-img" src={imgPath + "eliasson_005.jpg"} />
      </section>

      <section className="copy-body">
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
          create an immersive and captivating experience. The spherical projection is achieved from inside the globe with a
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

        <Button btnTxt="follow anima" />
        <Button btnTxt="contact anima" />
      </section>

      <nav className="related-nav">
        <ul>
          <li
            className={`${extras === 1 ? "active-item" : ""}`}
            onClick={() => setExtras(1)}
          >
            earlier
          </li>
          <li
            className={`${extras === 0 ? "active-item" : ""}`}
            onClick={() => setExtras(0)}
          >
            you may also like
          </li>
          <li
            className={`${extras === 2 ? "active-item" : ""}`}
            onClick={() => setExtras(2)}
          >
            details
          </li>
        </ul>
      </nav>
      <section className="related-content">
        <div className="related-grid">{relatedList}</div>
      </section>
    </div>
  );
};

export default Equivalents;
