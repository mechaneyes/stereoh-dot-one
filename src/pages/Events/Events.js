import React from "react";
import { Link } from "react-router-dom";

import HeroGradient from "../../components/atoms/HeroGradient/HeroGradient";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./Events.scss";

const events = () => {
  document.title = "Stereoh | Events";

  return (
    <div className="all-events">
      <section className="events-hero">
        {/* <img
          className="events-hero-img"
          src="/assets/events-hero-fright.jpg"
          alt="events hero"
        /> */}
        {/* <video className="hero-video" autoPlay muted loop playsinline>
          <source src="/assets/events-hero-hyperloop.mp4" type="video/mp4" />
        </video> */}
        <div className="hero-vid-holder"
          dangerouslySetInnerHTML={{
            __html: `
                <video
                  loop
                  muted
                  autoplay
                  playsinline
                  src="/assets/events-hero-hyperloop.mp4"
                  class="hero-video"
                />,
              `,
          }}
        ></div>
        <div className="gradient"></div>
        {/* <HeroGradient /> */}
        <div className="events-hero-content">
          <h1>Stereoh Events</h1>
          <p className="events-hero-subheadline">
            These are our upcoming and previous events. We are constantly
            plotting new experiences, so <Link to="/signup">keep in touch</Link>{" "}
            and drop by to check out the latest events.
          </p>
        </div>
      </section>
      <section className="all-events-main">
        <article className="one-event-tile">
          {/* <video className="event-flyer-video" autoPlay muted loop playsinline>
            <source src="/assets/events-beatdown-simple.mp4" type="video/mp4" />
          </video> */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <video
                  loop
                  muted
                  autoplay
                  playsinline
                  src="/assets/events-beatdown-simple.mp4"
                  class="event-flyer-video"
                />,
              `,
            }}
          ></div>
          <div className="one-tile-copy">
            <div className="tile-copy-inner">
              <h5 className="coming-flag">Coming 2020.12.31</h5>
              <h2>Detroit Beatdown</h2>
              <h3>
                Delano Smith &middot; Norm Talley &middot; <br /> Mike "Agent X"
                Clark &middot; Rick Wilhite &middot; Special Guest Fred P
              </h3>
              <Link to="/nye">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </div>
        </article>
        <article className="one-event-tile">
          <img
            className="one-event-img"
            src="/assets/halloween_001.jpg"
            alt="neonPlatform hero"
          />
          <div className="one-tile-copy">
            <div className="tile-copy-inner">
              <h5>2020.10.30</h5>
              <h2>Tropical Fright</h2>
              <h3>Milan Ariel &middot; Detroit</h3>
              <Link to="/spooky">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </div>
        </article>
        <article className="one-event-tile">
          <img
            className="one-event-img"
            src="/assets/basslineIroc.jpg"
            alt="neonPlatform hero"
          />
          <div className="one-tile-copy">
            <div className="tile-copy-inner">
              <h5>2020.10.18</h5>
              <h2>Bassline Reactor</h2>
              <h3>
                Drummer B &middot; MPC Set &middot; Transmat &middot; Detroit
              </h3>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </div>
        </article>
        <article className="one-event-tile">
          <img
            className="one-event-img"
            src="/assets/sat6/satSix_021.jpg"
            alt="neonPlatform hero"
          />
          <div className="one-tile-copy">
            <div className="tile-copy-inner">
              <h5>2020.10.02</h5>
              <h2>Saturn&nbsp;6</h2>
              <h3>
                Heidi Sabertooth + R.Gamble &middot; <br />
                Lost Soul Enterprises
              </h3>
              <Link to="/saturn6">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </div>
        </article>
        {/* <article className="one-event-tile coming-soon">
            <div className="tile-img-cont">
              <img
                className="one-event-img"
                src="/assets/tropicalFreeze_014.png"
                alt="neonPlatform hero"
              />
            </div>
            <div className="one-tile-copy">
              <div className="tile-copy-inner">
                <h2>Tropical Freeze</h2>
                <p>
                  Stereoh presents Halloween spooktacular edition with Detroit
                  techno songstress Milan Ariel.
                </p>
              </div>
              <Link to="/tropical-freeze">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article> */}
      </section>

      <RelatedItems relThree="true" />
    </div>
  );
};

export default events;
