import React from "react";
import { Link } from "react-router-dom";

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./Experiences.scss";

const experiences = () => {
  document.title = "Stereoh | Events";

  return (
    <div className="all-events">
      <section className="all-events-main">
        <div className="events-info-content">
          <h1>Stereoh Experiences</h1>
          <p className="events-info-subheadline">
            Stereoh is a platform for live music shows and interactive
            experiences in a novel format that combines streaming video with
            freely traversable social 3D environments, where audience members
            can talk and interact naturally, and artists can meet their fans
            personally. We are constantly adding new functionality and plotting
            new experiences, so <Link to="/signup">keep in touch</Link> and drop
            by to check out the latest events.
          </p>
        </div>
        {/* <div className="gradient"></div> */}

        {/* // ————————————————————————————————————o————————————————————————————————————o TWO ACROSS -->
        // TWO ACROSS -->
        // ———————————————————————————————————— TWO ACROSS —> */}
        <div className="events-tiles">
          <article className="one-event-tile">
            <div className="tile-img-cont">
              <img
                className="one-event-img"
                src="/assets/tropicalFright_008.jpg"
                alt="neonPlatform hero"
              />
            </div>
            <div className="one-tile-copy">
              <div className="tile-copy-inner">
                <h2>Tropical Fright</h2>
                <p>
                  Stereoh presents Halloween spooktacular edition with Detroit
                  techno songstress Milan Ariel.
                </p>
              </div>
              <Link to="/spooky">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <div className="tile-img-cont">
              <img
                className="one-event-img"
                src="/assets/basslineIroc.jpg"
                alt="neonPlatform hero"
              />
            </div>
            <div className="one-tile-copy">
              <div className="tile-copy-inner">
                <h2>Bassline Reactor</h2>
                <p>
                  Stereoh is welcoming Detroit native musician, DJ and
                  tastemaker Drummer B.
                </p>
              </div>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <div className="tile-img-cont">
              <img
                className="one-event-img"
                src="/assets/sat6/satSixSideRoom_017.jpg"
                alt="neonPlatform hero"
              />
            </div>
            <div className="one-tile-copy">
              <div className="tile-copy-inner">
                <h2>Saturn 6</h2>
                <p>
                  Stereoh is welcoming Heidi Sabertooth and R.Gamble
                  of Lost Soul Enterprises to the inaugural Saturn6 party.
                </p>
              </div>
              <Link to="/saturn6">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile coming-soon">
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
          </article>
        </div>
      </section>

      <RelatedItems relThree="true" />
    </div>
  );
};

export default experiences;
