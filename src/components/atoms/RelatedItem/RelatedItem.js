import React from "react";

import "./RelatedItem.scss";

const RelatedItem = (props) => {
  const { relImage, relTitle, relSubhead, relLinkUrl } = props;
  return (
    <article className="one-related-item">
      <img className="home-hero-img" src={relImage} alt="neonPlatform hero" />
      <div className="related-copy">
        <h3>{relTitle}</h3>
        <h5>{relSubhead}</h5>
        <a href={relLinkUrl}><button className="transp-bg">Explore</button></a>
      </div>
    </article>
  );
};

export default RelatedItem;
