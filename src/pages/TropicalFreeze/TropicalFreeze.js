import React from "react";

import GradientHero from "../../components/atoms/GradientHero/GradientHero";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";

import "./TropicalFreeze.scss";

const TropicalFreeze = () => {
  
  document.title = "Stereoh | Tropical Freeze";

  return (
    <div className="single tropical-freeze">
      <GradientHero />
      <RelatedItems hide="tropical" />
    </div>
  );
};

export default TropicalFreeze;
