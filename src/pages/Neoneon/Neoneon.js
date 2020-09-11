import React from "react";

import EventHero from "../../components/atoms/EventHero/EventHero";
import PullImgLeft from "../../components/atoms/PullQuotes/PullImgLeft";
import PullImgRight from "../../components/atoms/PullQuotes/PullImgRight";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import Button from "../../components/atoms/Button/Button";
import "./Neoneon.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Neoneon = () => {
  const quoteOne = {
    pullImg: `${imgPath}neoneon_002.jpg`,
  };

  const quoteTwo = {
    pullImg: `${imgPath}neoneon_004.jpg`,
  };

  document.title = "Stereoh | neoneon";

  return (
    <div className="single anima">
      <EventHero
        homeHeroImg={imgPath + "neoneon_001.jpg"}
        headline="Bassline Basin"
        showFeedback={false}
      />

      <PullImgLeft {...quoteOne} />

      <section className="body-copy">
        <p>
          Left behind by an extinct civilization of advanced space-farers is a
          planetary formation traversable only in full protective gear. Shrouded
          by corrosive atmosphere here lies an acid lake surrounded by remnants
          of alien technology. Jagged basslines and abstract signals are
          broadcast from the hard core of this destination for the adventurous
          travelers.
        </p>
        <Button
          btnUrl="https://hubs.mozilla.com/f6HM9iE/neoneon"
          btnTxt="enter neoneon"
          targetBlank="true"
        />
      </section>

      <PullImgRight {...quoteTwo} />

      <nav className="related-nav">
        <ul>
          <li className="active-item">our other experiences</li>
        </ul>
      </nav>

      <RelatedItems hide="neoneon" />
    </div>
  );
};

export default Neoneon;
