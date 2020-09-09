import React from "react";

import CarouselHero from "../../components/atoms/CarouselHero/CarouselHero";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import Button from "../../components/atoms/Button/Button";
import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "./Saturn6.scss";

const Saturn6 = () => {
  return (
    <div className="single saturn6">
      <CarouselHero headline="Saturn 6" />

      <section className="copy-top">
        <h2>Saturn 6 becomes a spherical projection. </h2>
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
        <div className="ctas">
          <Button
            btnUrl="//space.neoneon.one/aMggN3t/striking-mature-soiree"
            btnTxt="enter saturn 6"
            targetBlank="true"
          />
        </div>
      </section>

      <nav className="related-nav">
        <ul>
          <li className="active-item">our other experiences</li>
        </ul>
      </nav>
      <RelatedItems hide="saturn6" />
    </div>
  );
};

export default Saturn6;
