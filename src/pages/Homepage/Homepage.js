import React, { Component } from "react";

import HomeHero from "../../components/atoms/HomeHero/HomeHero";
import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";

const iconPath = process.env.PUBLIC_URL + "/assets/";

export class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <HomeHero homeHeroImg={iconPath + "tropicalFreeze_014.png"} />
        <section className="related-content">
            <h2>Moar Experiences</h2>
          <div className="related-grid">
            <RelatedItem relatedImg={iconPath + "tropicalFreeze_014.png"} />
            <RelatedItem relatedImg={iconPath + "tropicalFreeze_014.png"} />
            <RelatedItem relatedImg={iconPath + "tropicalFreeze_014.png"} />
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
