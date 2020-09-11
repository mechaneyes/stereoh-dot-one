import React from "react";

import CarouselHero from "../../components/atoms/CarouselHero/CarouselHero";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import Button from "../../components/atoms/Button/Button";
import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "./Saturn6.scss";

const Saturn6 = () => {

  document.title = "Stereoh | Saturn 6";

  return (
    <div className="single saturn6">
      <CarouselHero headline="Saturn 6" />

      <section className="copy-top">
        {/* <h2>Saturn 6</h2> */}
        <p>
        Far in the reaches of deep space lies a secret robotics factory churning out restless machines controled by a cybernetic funk-mind entity. They move to the clanging beat of techno signals and they sway to the sounds of synthetic code melodies. Enter the network of automatons, join the cybernetic hive.
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
