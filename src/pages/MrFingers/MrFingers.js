import React from "react";

import GradientHero from "../../components/atoms/GradientHero/GradientHero";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";

import "./MrFingers.scss";

const MrFingers = () => {
  
  document.title = "Stereoh | Tropical Freeze";

  return (
    <div className="single mr-fingers">
      <GradientHero />

      <nav className="related-nav">
        <ul>
          <li className="active-item">our other spaces</li>
        </ul>
      </nav>

      <RelatedItems hide="tropical" />
    </div>
  );
};

export default MrFingers;
