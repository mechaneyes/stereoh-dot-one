import React, { Component } from "react";

import { Link } from "react-router-dom";

import HomeHero from "../../components/atoms/HomeHero/HomeHero";
import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
import { defaultValues } from "../../components/constants";
import "./Homepage.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

export class Homepage extends Component {
  render() {
    const defaultProps = {
      title: defaultValues.HERO_TITLE,
      subhead: defaultValues.SUBHEADLINE_SHORT,
    };

    const relatedItems = [
      {
        relImage: `${imgPath}jenAndMe.png`,
        relTitle: "It's just (House of Dupree)",
        relSubhead: defaultProps.subhead,
        relLinkUrl: "#",
      },
      {
        relImage: `${imgPath}tropicalFreeze_066.png`,
        relTitle: "Pier Children",
        relSubhead: defaultProps.subhead,
        relLinkUrl: "#",
      },
      // {
      //   relImage: `${imgPath}tropicalFreeze_051.png`,
      //   relTitle: "Inside the Deku Tree",
      //   relSubhead: defaultProps.subhead,
      //   relLinkUrl: '#',
      // },
    ];

    const relatedList = relatedItems.map((rel, i) => (
      <RelatedItem key={i} {...rel} />
    ));

    return (
      <div className="homepage">
        <HomeHero
          headline="stereoh"
          homeHeroImg={imgPath + "eliasson_001.jpg"}
          exploreCta={false}
          showFeedback={false}
        />

        <nav className="related-nav">
          <ul>
            <li className="active-item">our experiences</li>
          </ul>
        </nav>

        <section className="related-content">
          <div className="related-grid">
            <article className="one-related-item">
              <img
                className="home-hero-img"
                src="/assets/saturn6_002.jpg"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>Saturn 6</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <Link to="/saturn6">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
            <article className="one-related-item">
              <img
                className="home-hero-img"
                src="/assets/tropicalFreeze_014.png"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>Tropical Freeze</h3>
                <h5>Birthdays and Going Aways</h5>
                <Link to="/tropical-freeze">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
            <article className="one-related-item">
              <img
                className="home-hero-img"
                src="/assets/neoneon_001.jpg"
                alt="neonPlatform hero"
              />
              <div className="related-copy">
                <h3>neoneon</h3>
                <h5>Our first event. Feels like forever ago</h5>
                <Link to="/neoneon">
                  <button className="transp-bg">Explore</button>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
