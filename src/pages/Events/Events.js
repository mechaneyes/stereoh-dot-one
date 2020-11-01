import React from "react";
import { Link } from "react-router-dom";

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./Events.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Neoneon = () => {
  document.title = "Stereoh | Events";

  return (
    <div className="all-events">
      <section className="all-events-main">
        <div className="events-info-content">
          <h1>Stereoh Events</h1>
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
        <div className="events-tiles">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "tropicalFright_008.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "sat6/satSixSideRoom_017.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "sat6/satSixSideRoom_017.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "tropicalFright_008.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel.
              </p>
              <Link to="/bassline-basin">
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

export default Neoneon;
