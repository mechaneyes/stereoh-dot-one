import React, { Component } from "react";

import HomeHero from "../../components/atoms/HomeHero/HomeHero";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
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

        <RelatedItems relThree="true" />
      </div>
    );
  }
}

export default Homepage;
