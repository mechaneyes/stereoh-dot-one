import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../../components/atoms/Button/Button";
import PullImgLeft from "../../components/atoms/PullQuotes/PullImgLeft";
import PullImgRight from "../../components/atoms/PullQuotes/PullImgRight";
import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./BasslineBasin.scss";
import "./EventHero.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

document.title = "Stereoh | neoneon";

const eventInfo = {
  title: "Bassline Reactor",
  // subHeadline: "Corrosive environment filled with radioactive beats",
  subHeadline: "Drummer B | MPC Set | Transmat, Detroit",
  description:
    "Stereoh is welcoming Detroit native musician, DJ and tastemaker Drummer B. Known internationally for his deep knowledge of the art and science of music production, he has released and contributed his skill to records on such storied labels as Transmat, Fool's Gold, and his own Soul Touch Recordings. Spanning styles from funk and hip-hop to ghetto tech, electro and techno, Drummer B will showcase his influences on this special live MPC mix - beaming direct from Detroit warehouse into the radioactive lagoon of the Bassline Basin.",
  btnUrl: "https://hubs.mozilla.com/pSxkF3u/bassline-reactor",
  btnTxt: "enter bassline reactor",
  btnTxt: "coming soon",
  targetBlank: "true",
  // buttonUse: "enter-space",
  isDisabled: "true",
};

const Neoneon = () => {
  let [isBefore, setBefore] = useState(true);

  // Countdown
  // Set the date we're counting down to
  var countDownDate = new Date("Oct 18, 2020 20:00:00").getTime();
  // console.log('countDownDate', countDownDate)

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("countdown") != null) {
      document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setBefore(false);
      }
    }
  }, 1000);

  const quoteOne = {
    pullImg: `${imgPath}bassline-reactor.jpg`,
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
          {/* <EventInfo {...eventInfo} /> */}
          <div className="event-info">
            {/* <img
              className="event-flyer"
              src={imgPath + "bassline-reactor.jpg"}
              alt="Bassline Reactor Flyer"
            /> */}
            <h1>{eventInfo.title}</h1>
            <h2 className="disclaimer">{eventInfo.coming}</h2>
            <h5>{eventInfo.subHeadline}</h5>
            <div className="event-body">
              <p>{eventInfo.description}</p>
            </div>
            <div className="cta-container">
              {isBefore ? (
                <a className="hide-me"></a>
              ) : (
                <Link to="/verification">
                  <button>Enter Bassline Reactor</button>
                </Link>
              )}
              <div className={`count-container ${isBefore ? "" : "hide-me"}`}>
                Launching in <div id="countdown"></div>
                {/* Launching in a Few */}
                <p>Look for the link here at the time of the event</p>
              </div>
              {/* <Button
                // buttonUse="enter-space"
                btnUrl={eventInfo.btnUrl}
                btnTxt={eventInfo.btnTxt}
                targetBlank={eventInfo.targetBlank}
                disabled={eventInfo.isDisabled}
              /> */}
            </div>
          </div>
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
