import React from "react";

import PullImgLeft from "../../components/atoms/PullQuotes/PullImgLeft";
import PullImgRight from "../../components/atoms/PullQuotes/PullImgRight";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import Button from "../../components/atoms/Button/Button";
import "./BasslineBasin.scss";
import "./EventHero.scss";

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

      <section className="event-hero">
        <img
          className="home-hero-img"
          src={imgPath + "neoneon_001.jpg"}
          alt="Bassline Basin hero"
        />
        <div className="home-hero-content">
          <h1>Bassline Basin</h1>
          <p className="tag-line">Corrosive environment filled with radioactive beats</p>
          <p>
            Left behind by an extinct civilization of advanced space-farers is a
            planetary formation traversable only in full protective gear.
            Shrouded by corrosive atmosphere here lies an acid lake surrounded
            by remnants of alien technology. Jagged basslines and abstract
            signals are broadcast from the hard core of this destination for the
            adventurous travelers.
          </p>
          <Button
            type="enter-space"
            btnUrl="https://hubs.mozilla.com/8exPtiS/bassline-basin"
            btnTxt="enter bassline basin"
            targetBlank="true"
          />
        </div>
        <div className="gradient">
          <div className="scroll-down">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

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
          type="enter-space"
          btnUrl="https://hubs.mozilla.com/f6HM9iE/neoneon"
          btnTxt="enter bassline basin"
          targetBlank="true"
        />
      </section>

      <PullImgRight {...quoteTwo} />

      <RelatedItems hide="neoneon" />
    </div>
  );
};

export default Neoneon;
