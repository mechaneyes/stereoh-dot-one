import React from "react";

import CarouselHero from "../../components/atoms/CarouselHero/CarouselHero";
import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "../../components/atoms/EventInfo/EventInfo.scss";
import "./Saturn6.scss";

// import Button from "../../components/atoms/Button/Button";
// import "./EventInfo.scss";
const imgPath = process.env.PUBLIC_URL + "/assets/";

const eventInfo = {
  title: "Saturn 6",
  coming: "Launching Friday, October 02",
  subHeadline: "Cybernetic techno factory for the robo-funk bots",
  description:
    "Far in the reaches of deep space lies a secret robotics factory churning out restless machines controled by a cybernetic funk-mind entity. They move to the clanging beat of techno signals and they sway to the sounds of synthetic code melodies. Enter the network of automatons, join the cybernetic hive.",
  // btnUrl: "https://space.stereoh.one/cxFQhV6/saturn6",
  btnUrl: "",
  // btnTxt: "enter saturn 6",
  btnTxt: "coming soon",
  // targetBlank: "true",
  buttonUse: "enter-space",
};

const Saturn6 = () => {
  document.title = "Stereoh | Saturn 6";

  return (
    <div className="single saturn6">
      <section className="event-hero">
        <img
          className="home-hero-img"
          src={imgPath + "saturn6_001.jpg"}
          alt="Bassline Basin hero"
        />
        <div className="gradient"></div>
      </section>
      <section className="copy-top">
        {/* <EventInfo {...eventInfo} /> */}
        <div className="event-info">
          <h1>{eventInfo.title}</h1>
          <h2 className="disclaimer">{eventInfo.coming}</h2>
          <h5>{eventInfo.subHeadline}</h5>
          <div className="event-body">
            <p>{eventInfo.description}</p>
          </div>
          <div className="cta-container">
            <button>launching friday</button>
          </div>
        </div>
      </section>

      <CarouselHero headline="Saturn 6" />

      <RelatedItems hide="saturn6" />
    </div>
  );
};

export default Saturn6;
