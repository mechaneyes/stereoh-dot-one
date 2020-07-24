import React from "react";

import { defaultValues } from "../../constants";
import "./RelatedItem.scss";

const defaultProps = {
  title: defaultValues.HERO_TITLE,
  subhead: defaultValues.SUBHEADLINE_SHORT,
};

const RelatedItem = (props) => {
  const { relatedImg } = props;
  return (
    <article className="one-related-item">
      <img className="home-hero-img" src={relatedImg} alt="neonPlatform hero" />
      <div className="related-copy">
        <h3>Listen Like Thieves</h3>
        <h5>{defaultProps.subhead}</h5>
        <button className="transp-bg">Explore</button>
      </div>
    </article>
  );
};

export default RelatedItem;
