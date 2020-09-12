import React from "react";

import EventHero from "../../components/atoms/EventHero/EventHero";
import PullImgLeft from "../../components/atoms/PullQuotes/PullImgLeft";
import PullImgRight from "../../components/atoms/PullQuotes/PullImgRight";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./About.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Neoneon = () => {
  const quoteOne = {
    pullImg: `${imgPath}neoneon_002.jpg`,
  };

  const quoteTwo = {
    pullImg: `${imgPath}neoneon_004.jpg`,
  };

  document.title = "Stereoh | About";

  return (
    <div className="single anima">
      <EventHero
        homeHeroImg={imgPath + "barclays.jpg"}
        headline="About"
        subheadline="Stereoh is a platform for live music shows and interactive experiences
        in a novel format that combines streaming video with freely
        traversable social 3D environments, where audience members can talk
        and interact naturally, and artists can meet their fans personally. We
        are constantly adding new functionality and plotting new experiences,
        so keep in touch /hyperlink to signup/ and drop by to check out the
        latest events."
      />

      <nav className="related-nav">
        <ul>
          <li className="active-item">our other experiences</li>
        </ul>
      </nav>

      <RelatedItems />
    </div>
  );
};

export default Neoneon;
