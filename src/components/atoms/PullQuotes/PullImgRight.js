import React from "react";
import "./PullQuotes.scss";

const PullImgRight = (props) => {
  const { pullImg, pullTitle, pullPara } = props;
  return (
    <section className="pull-quote quote-img-right">
      <div className="pull-aspect-ratio-box">
        <img className="pull-img pull-right-img" src={pullImg} alt="neonPlatform hero" />
      </div>
      <div className="pull-quote-copy">
        <h3>{pullTitle}</h3>
        <p>{pullPara}</p>
      </div>
    </section>
  );
};

export default PullImgRight;
