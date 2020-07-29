import React from "react";
import "./PullQuotes.scss";

const PullImgLeft = (props) => {
  const { pullImg, pullTitle, pullPara } = props;
  return (
    <section className="pull-quote quote-img-left">
      <div className="pull-aspect-ratio-box">
        <img
          className="pull-img pull-left-img"
          src={pullImg}
          alt="neonPlatform hero"
        />
      </div>
      <div className="pull-quote-copy">
        <h3>{pullTitle}</h3>
        <p>{pullPara}</p>
      </div>
    </section>
  );
};

export default PullImgLeft;
