import React, { Component } from "react";

import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
import { defaultValues } from "../../components/constants";
import "./McCall.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

export class McCall extends Component {
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
        relLinkUrl: '#',
      },
      {
        relImage: `${imgPath}tropicalFreeze_066.png`,
        relTitle: "Pier Children",
        relSubhead: defaultProps.subhead,
        relLinkUrl: '#',
      },
      {
        relImage: `${imgPath}tropicalFreeze_051.png`,
        relTitle: "Inside the Deku Tree",
        relSubhead: defaultProps.subhead,
        relLinkUrl: '#',
      },
    ];

    const relatedList = relatedItems.map( (rel, i) => <RelatedItem key={i} {...rel} />)

    return (
      <div className="single mccall">
        <section className="related-content">
          <h2>Moar Experiences</h2>
          <div className="related-grid">
            {relatedList}
          </div>
        </section>
      </div>
    );
  }
}

export default McCall;
