import React from "react";
import ReactDOM from "react-dom";

import GradientHero from "../../components/atoms/GradientHero/GradientHero"; // Left here just for styling. will figure that out
// import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import Button from "../../components/atoms/Button/Button";
import Countdown from "../../components/atoms/Countdown/Countdown";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";

import "./Halloween.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const eventInfo = {
  title: "Freaks Come Out",
  //   subHeadline: "Hidden oasis filled with organic house formations",
  description:
    "Stereoh presents Halloween spooktacular edition with Detroit techno songstress Milan Ariel. As a singer, songwriter and performer she fuses hip-hop, techno and nu-soul to create modern pop music with unique Motor City sound. As a DJ Milan proudly carries her family heritage inspired by her father the originator of techno Juan Atkins. Join us and Milan this Friday night on a floating frozen oasis, complete with spooky avatars for you to try on, and eerie artifacts to discover.",
  btnUrl: "signup",
  // btnTxt: "enter tropical freeze",
  btnTxt: "sign up",
  targetBlank: false,
  //   isDisabled: true,
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
          className="spooky-bg desktop-only"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={imgPath + "halloweenBg.mp4"} type="video/mp4" />
        </video>
        <video
          className="spooky-flyer"
          width="100%"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={imgPath + "halloween.mp4"} type="video/mp4" />
        </video>
        {/* <EventInfo {...eventInfo} /> */}
        <div className="gradient"></div>
      </article>
      <div className="event-info">
        <h1>{eventInfo.title}</h1>
        <h2 className="disclaimer">{eventInfo.coming}</h2>
        <h5>{eventInfo.subHeadline}</h5>
        <div className="event-body">
          <p>{eventInfo.description}</p>
        </div>
        <div className="cta-container">
          {/* <Button
            // buttonUse="enter-space"
            btnUrl={eventInfo.btnUrl}
            btnTxt={eventInfo.btnTxt}
            targetBlank={eventInfo.targetBlank}
            disabled={eventInfo.isDisabled}
          /> */}
          <Countdown />
        </div>
      </div>
      {/* <Countdown /> */}
      <RelatedItems />
    </div>
  );
};

export default TropicalFreeze;
