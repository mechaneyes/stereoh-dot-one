import React, { Component } from "react";

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
          headline="space one"
          homeHeroImg={imgPath + "cybotron_0_1_0.jpg"}
          showFeedback={false}
        />
        <section className="related-content">
          <nav class="related-nav">
            <ul>
              <li class="active-item">our other spaces</li>
            </ul>
          </nav>
          <div className="related-grid">{relatedList}</div>
        </section>
      </div>
    );
  }
}

export default Homepage;
