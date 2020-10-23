import React from "react";

import GradientHero from "../../components/atoms/GradientHero/GradientHero";  // Left here just for styling. will figure that out
import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";

import "./TropicalFreeze.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const eventInfo = {
  title: "Tropical Freeze",
  subHeadline: "Hidden oasis filled with organic house formations",
  description:
    "Hidden within the rings of a barren super-planet is an oasis asteroid unlike any other in the universe. Unique cosmic phenomena produce a climate that is able to host both abundant vegetation and unusual singing crystal formations. Land with the advance party to shelter in the warm grooves of interstellar house crustaceans found only in this ecosystem.",
  btnUrl: "https://space.stereoh.one/j9N7XHT/tropical-freeze",
  // btnTxt: "enter tropical freeze",
  btnTxt: "coming soon",
  targetBlank: "true",
  isDisabled: true,
};



const TropicalFreeze = () => {
  document.title = "Stereoh | Tropical Freeze";

  return (
    <div className="single tropical-freeze">
      <article className="gradient-hero">
        <img
          className="hero-image hero-shifted"
          src={imgPath + "tropicalFreeze_014.png"}
          alt="single event page hero"
        />
        <img
          className="hero-image"
          src={imgPath + "tropicalFreeze_014.png"}
          alt="single event page hero"
        />
        <EventInfo {...eventInfo} />
        <div className="gradient"></div>
      </article>
      <RelatedItems hide="tropical" />
    </div>
  );
};

export default TropicalFreeze;
