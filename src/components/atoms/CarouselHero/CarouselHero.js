import React from "react";

import Carousel from "../../atoms/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselHero.scss";

const CarouselHero = (props) => {

  let caroElements = [
    {
      src: "saturn6_001.jpg",
      alt: "olafur eliasson 009",
    },
    {
      src: "saturn6_004.jpg",
      alt: "olafur eliasson 007",
    },
    {
      src: "saturn6_006.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "saturn6_008.jpg",
      alt: "olafur eliasson 011",
    },
    {
      src: "saturn6_010.jpg",
      alt: "olafur eliasson 009",
    },
    {
      src: "saturn6_012.jpg",
      alt: "olafur eliasson 005",
    },
    {
      src: "saturn6_015.jpg",
      alt: "olafur eliasson 006",
    },
    {
      src: "saturn6_019.jpg",
      alt: "olafur eliasson 007",
    },
    {
      src: "saturn6_020.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "saturn6_022.jpg",
      alt: "olafur eliasson 011",
    },
  ];

  return (
    <section className="event-hero">
      <section className="image-carousel">
        <div className="inner-carousel">
          <Carousel items={caroElements} />
        </div>
      </section>
    </section>
  );
};

export default CarouselHero;
