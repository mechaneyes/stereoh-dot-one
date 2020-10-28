import React from "react";

import CarouselHero from "../../components/atoms/CarouselHero/CarouselHero";
import EventInfo from "../../components/atoms/EventInfo/EventInfo";
// import Button from "../../components/atoms/Button/Button";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "../../components/atoms/EventInfo/EventInfo.scss";
import "./Saturn6.scss";

// import Button from "../../components/atoms/Button/Button";
// import "./EventInfo.scss";
const imgPath = process.env.PUBLIC_URL + "/assets/";

const eventInfo = {
  title: "Saturn 6",
  // coming: "Launching Friday, October 02",
  subHeadline: "Cybernetic techno factory for the robo-funk bots",
  description:
    "Stereoh is welcoming Heidi Sabertooth and R.Gamble to the inaugural Saturn6 party. They will be broadcasting an icy mix of no-wave, electro punk, and analog techno straight into the cavernous confines of the deep space cybernetic factory.",
  btnUrl: "https://space.stereoh.one/suJFdn4/saturn6-v21",
  btnTxt: "enter saturn 6",
  targetBlank: "true",
  buttonUse: "enter-space",
};

const Saturn6 = () => {
  document.title = "Stereoh | Saturn 6";

  return (
    <div className="single saturn6">
      <section className="event-hero">
        <img
          className="home-hero-img"
          src={imgPath + "sat6/saturn6_007.jpg"}
          alt="Bassline Basin hero"
        />
        <div className="gradient"></div>
      </section>
      <section className="copy-top">
        <EventInfo {...eventInfo} />
      </section>

      <CarouselHero headline="Saturn 6" />

      <img
        className="home-flyer"
        src={imgPath + "launch2020.10.02.jpg"}
        alt="flyer"
      />
      <img
        className="home-flyer"
        src={imgPath + "tutorial_01.jpg"}
        alt="faq 01"
      />
      <img
        className="home-flyer"
        src={imgPath + "tutorial_02.jpg"}
        alt="faq 02"
      />
      <img
        className="home-flyer"
        src={imgPath + "tutorial_03.jpg"}
        alt="faq 03"
      />

      <RelatedItems hide="saturn6" />
    </div>
  );
};

export default Saturn6;
