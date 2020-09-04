import React, { useState } from "react";

// import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import GradientHero from "../../components/atoms/GradientHero/GradientHero";
import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
import { defaultValues } from "../../components/constants";
import "./MrFingers.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const defaultProps = {
  title: defaultValues.HERO_TITLE,
  subhead: defaultValues.SUBHEADLINE_SHORT,
};

const MrFingers = () => {
  const [extras, setExtras] = useState(0);

  let shownItems = [];

  const earlierItems = [
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
    //   relLinkUrl: "#",
    // },
  ];

  const alsoItems = [
    {
      relImage: `${imgPath}tropicalFreeze_010.png`,
      relTitle: "Pier Children",
      relSubhead: defaultProps.subhead,
      relLinkUrl: "#",
    },
    {
      relImage: `${imgPath}tropicalFreeze_070.png`,
      relTitle: "Inside the Deku Tree",
      relSubhead: defaultProps.subhead,
      relLinkUrl: "#",
    },
    {
      relImage: `${imgPath}jenAndMe.png`,
      relTitle: "It's just (House of Dupree)",
      relSubhead: defaultProps.subhead,
      relLinkUrl: "#",
    },
  ];

  const detailsItems = [
    {
      relImage: `${imgPath}tropicalFreeze_077.png`,
      relTitle: "Inside the Deku Tree",
      relSubhead: defaultProps.subhead,
      relLinkUrl: "#",
    },
    {
      relImage: `${imgPath}tropicalFreeze_074.png`,
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
  ];

  if (extras === 0) {
    shownItems = earlierItems;
    // console.log(this)
  } else if (extras === 1) {
    shownItems = alsoItems;
  } else if (extras === 2) {
    shownItems = detailsItems;
  }

  const relatedList = shownItems.map((rel, i) => (
    <RelatedItem key={i} {...rel} />
  ));

  return (
    <div className="single mr-fingers">
      <GradientHero />
      <nav className="related-nav">
        <ul>
          <li
            className={`${extras === 0 ? "active-item" : ""}`}
            onClick={() => setExtras(0)}
          >
            our other spaces
          </li>
          {/* <li className={`${extras === 1 ? 'active-item' : ""}`} onClick={() => setExtras(1)}>you may also like</li>
          <li className={`${extras === 2 ? 'active-item' : ""}`} onClick={() => setExtras(2)}>details</li> */}
        </ul>
      </nav>
      {/* <section className="related-content">
        <div className="related-grid">{relatedList}</div>
      </section> */}

      <section className="related-content">
        <div className="related-grid">
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/jenAndMe.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>It's just (House of Dupree)</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button className="transp-bg">Explore</button>
              </a>
            </div>
          </article>
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/tropicalFreeze_066.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>Pier Children</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <a href="#">
                <button className="transp-bg">Explore</button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MrFingers;
