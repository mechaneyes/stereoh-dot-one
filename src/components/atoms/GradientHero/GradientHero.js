import React from "react";

import EventInfo from "../EventInfo/EventInfo";
// import { defaultValues } from "../../components/constants";
import "./GradientHero.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const GradientHero = () => {
  return (
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
      <EventInfo />
      <div className="gradient">
        <div className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </article>
  );
};

export default GradientHero;
