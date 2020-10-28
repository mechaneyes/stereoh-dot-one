import React from "react";
import ReactDOM from "react-dom";

import GradientHero from "../../components/atoms/GradientHero/GradientHero"; // Left here just for styling. will figure that out
import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";

import "./Halloween.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const eventInfo = {
  title: "Freaks Come Out",
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

  let bgRef = React.createRef();
  console.log("bgRef", bgRef);
  const setPlayBack = () => {
    bgRef.current.playbackRate = 0.5;
  };

  return (
    <div className="single halloween">
      <article className="gradient-hero">
        <img
          className="hero-image"
          src={imgPath + "tropicalFreeze_014.png"}
          alt="single event page hero"
        />
        <video
          ref={bgRef}
          onCanPlay={() => setPlayBack()}
          id="spooky-bg"
          className="spooky-bg"
          width="100%"
          autoPlay
          muted
          loop
        >
          <source src={imgPath + "halloweenBg.mp4"} type="video/mp4" />
        </video>
        <video className="spooky-flyer" width="100%" autoPlay muted loop>
          <source src={imgPath + "halloween.mp4"} type="video/mp4" />
        </video>
        <EventInfo {...eventInfo} />
        <div className="gradient"></div>
      </article>
      <RelatedItems />
    </div>
  );
};

export default TropicalFreeze;
