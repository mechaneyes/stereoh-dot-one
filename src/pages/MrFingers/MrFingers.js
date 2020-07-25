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
  const [extras, setExtras] = useState(0)

  let shownItems = []  
  

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
    {
      relImage: `${imgPath}tropicalFreeze_051.png`,
      relTitle: "Inside the Deku Tree",
      relSubhead: defaultProps.subhead,
      relLinkUrl: "#",
    },
  ];

  const alsoItems = [
    {
      relImage: `${imgPath}tropicalFreeze_066.png`,
      relTitle: "Pier Children",
      relSubhead: defaultProps.subhead,
      relLinkUrl: "#",
    },
    {
      relImage: `${imgPath}tropicalFreeze_051.png`,
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
      relImage: `${imgPath}tropicalFreeze_051.png`,
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
    {
      relImage: `${imgPath}tropicalFreeze_066.png`,
      relTitle: "Pier Children",
      relSubhead: defaultProps.subhead,
      relLinkUrl: "#",
    },
  ];

  if (extras === 0) {
    shownItems = earlierItems
  } else if (extras === 1) {
    shownItems = alsoItems
  } else if (extras === 2) {
    shownItems = detailsItems
  }

  const relatedList = shownItems.map((rel, i) => (
    <RelatedItem key={i} {...rel} />
  ));

  return (
    <div className="single mr-fingers">
      <GradientHero />
      <nav className="related-nav">
        <ul>
          <li onClick={() => setExtras(0)}>earlier</li>
          <li onClick={() => setExtras(1)}>you may also like</li>
          <li onClick={() => setExtras(2)}>details</li>
          <li>{extras}</li>
        </ul>
      </nav>
      <section className="related-content">
        <div className="related-grid">{relatedList}</div>
      </section>
    </div>
  );
};

export default MrFingers;
