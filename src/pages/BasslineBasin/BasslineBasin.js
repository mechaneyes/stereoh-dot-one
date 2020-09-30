import React from "react";

import PullImgLeft from "../../components/atoms/PullQuotes/PullImgLeft";
import PullImgRight from "../../components/atoms/PullQuotes/PullImgRight";
import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./BasslineBasin.scss";
import "./EventHero.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

document.title = "Stereoh | neoneon";

const eventInfo = {
  title: "Bassline Basin",
  subHeadline: "Corrosive environment filled with radioactive beats",
  description:
    "Left behind by an extinct civilization of advanced space-farers is a planetary formation traversable only in full protective gear. Shrouded by corrosive atmosphere here lies an acid lake surrounded by remnants of alien technology. Jagged basslines and abstract signals are broadcast from the hard core of this destination for the adventurous travelers.",
  btnUrl: "https://space.stereoh.one/ehrRnaD/bassline-basin",
  // btnTxt: "enter bassline basin",
  btnTxt: 'coming soon',
  targetBlank: "true",
  // buttonUse: "enter-space",
  isDisabled: "true",
};

const Neoneon = () => {
  const quoteOne = {
    pullImg: `${imgPath}neoneon_002.jpg`,
  };

  const quoteTwo = {
    pullImg: `${imgPath}neoneon_004.jpg`,
  };

  return (
    <div className="single bassline">
      <section className="event-hero">
        <img
          className="home-hero-img"
          src={imgPath + "neoneon_001.jpg"}
          alt="Bassline Basin hero"
        />

        <div className="home-hero-content">
          <EventInfo {...eventInfo} />
        </div>

        <div className="gradient"></div>
      </section>

      <section className="bassline-body">
        <PullImgLeft {...quoteOne} />

        <section className="body-copy">
          <p>
            Left behind by an extinct civilization of advanced space-farers is a
            planetary formation traversable only in full protective gear.
            Shrouded by corrosive atmosphere here lies an acid lake surrounded
            by remnants of alien technology. Jagged basslines and abstract
            signals are broadcast from the hard core of this destination for the
            adventurous travelers.
          </p>
        </section>

        <PullImgRight {...quoteTwo} />

        <RelatedItems hide="neoneon" />
      </section>
    </div>
  );
};

export default Neoneon;
