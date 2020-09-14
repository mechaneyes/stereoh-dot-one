import React from "react";

import CarouselHero from "../../components/atoms/CarouselHero/CarouselHero";
import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "./Saturn6.scss";

const eventInfo = {
  title: "Saturn 6",
  subHeadline: "Cybernetic techno factory for the robo-funk bots",
  description:
    "Far in the reaches of deep space lies a secret robotics factory churning out restless machines controled by a cybernetic funk-mind entity. They move to the clanging beat of techno signals and they sway to the sounds of synthetic code melodies. Enter the network of automatons, join the cybernetic hive.",
  btnUrl: "https://hubs.mozilla.com/vaUfRRi/saturn6",
  btnTxt: "enter saturn 6",
  targetBlank: "true",
  buttonUse: "enter-space",
};

const Saturn6 = () => {
  document.title = "Stereoh | Saturn 6";

  return (
    <div className="single saturn6">
      <CarouselHero headline="Saturn 6" />

      <section className="copy-top">
        <EventInfo {...eventInfo} />
      </section>

      <RelatedItems hide="saturn6" />
    </div>
  );
};

export default Saturn6;
