import React, { Component } from "react";

import HomeHero from "../../components/atoms/HomeHero/HomeHero";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import RelatedItem from "../../components/atoms/RelatedItem/RelatedItem";
import "./Homepage.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

export class Homepage extends Component {

  render() {
    document.title = "Stereoh";

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

        <RelatedItems />
      </div>
    );
  }
}

export default Homepage;
