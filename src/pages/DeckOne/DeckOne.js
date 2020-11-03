import React from "react";
import { Link } from "react-router-dom";

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./DeckOne.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const experiences = () => {
  document.title = "Stereoh | Events";

  return (
    <div className="deck-one">
      <main className="deck-main">
        <section className="deck-info-content">
          <h1>Stereoh One</h1>
          <p className="deck-info-subheadline">
            Stereoh is a content platform making hosting and attending virtual
            shows in social 3D environments easy, cost-effective, and
            accessible.
          </p>
        </section>
        {/* <div className="gradient"></div> */}

        {/* // ————————————————————————————————————o————————————————————————————————————o VERT TILES -->
        // VERT TILES -->
        // ———————————————————————————————————— VERT TILES —> */}
        {/* <section className="events-tiles event-tiles-vert">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </section> */}

        <section className="events-cover">
          <img
            // className="one-event-img"
            src="/assets/sat6/satSix_021.jpg"
            alt="neonPlatform hero"
          />
        </section>

        {/* // ————————————————————————————————————o————————————————————————————————————o TWO ACROSS - 16x9 -->
        // TWO ACROSS - 16x9 -->
        // ———————————————————————————————————— TWO ACROSS - 16x9 —> */}
        <section className="events-tiles two-across sixteen-nine">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h3>Tropical Fright</h3>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel.
              </p>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFreeze_014.png"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h3>Saturn 6</h3>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural
              </p>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFreeze_014.png"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h3>Saturn 6</h3>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugura
              </p>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h3>Tropical Fright</h3>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises
              </p>
            </div>
          </article>
        </section>

        {/* // ————————————————————————————————————o————————————————————————————————————o TWO ACROSS - LESS CONTENT -->
        // TWO ACROSS - LESS CONTENT -->
        // ———————————————————————————————————— TWO ACROSS - LESS CONTENT —> */}
        <section className="events-tiles two-across two-shorter-text">
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
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </section>

        {/* // ————————————————————————————————————o————————————————————————————————————o TWO ACROSS -->
        // TWO ACROSS -->
        // ———————————————————————————————————— TWO ACROSS —> */}
        <div className="events-tiles two-across">
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
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o SINGLE COLUMN WIDE -->
        // SINGLE COLUMN WIDE -->
        // ———————————————————————————————————— SINGLE COLUMN WIDE —> */}
        <div className="events-tiles single-column">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFreeze_014.png"
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
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o SINGLE COLUMN 50x50 -->
        // SINGLE COLUMN 50x50 -->
        // ———————————————————————————————————— SINGLE COLUMN 50x50 —> */}
        <div className="events-tiles single-fifty">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFreeze_014.png"
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
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o SINGLE SQUARES -->
        // SINGLE SQUARES -->
        // ———————————————————————————————————— SINGLE SQUARES —> */}
        <div className="events-tiles single-square">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFright_008.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia, lobortis
                ante vel. Proin eu arcu lacinia, lobortis ante vel. Proin eu
                arcu lacinia, lobortis.
              </p>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSixSideRoom_017.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFright_008.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia, lobortis
                ante vel. Proin eu arcu lacinia, lobortis ante vel. Proin eu
                arcu lacinia, lobortis.
              </p>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o VERT TILES -->
        // VERT TILES -->
        // ———————————————————————————————————— VERT TILES —> */}
        <div className="events-tiles event-tiles-vert">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>
      </main>

      <RelatedItems relThree="true" />
    </div>
  );
};

export default experiences;
