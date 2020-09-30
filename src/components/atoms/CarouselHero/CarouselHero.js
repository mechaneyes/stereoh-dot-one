import React from "react";

import Carousel from "../../atoms/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselHero.scss";

const CarouselHero = () => {

  let caroElements = [
    {
      src: "saturn6_003.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "saturn6_001.jpg",
      alt: "olafur eliasson 009",
    },
    {
      src: "saturn6_004.jpg",
      alt: "olafur eliasson 011",
    },
    // {
    //   src: "saturn6_002.jpg",
    //   alt: "olafur eliasson 007",
    // },
    {
      src: "saturn6_005.jpg",
      alt: "olafur eliasson 009",
    },
    // {
    //   src: "saturn6_006.jpg",
    //   alt: "olafur eliasson 005",
    // },
    {
      src: "saturn6_007.jpg",
      alt: "olafur eliasson 006",
    },
    {
      src: "saturn6_008.jpg",
      alt: "olafur eliasson 007",
    },
    // {
    //   src: "saturn6_009.jpg",
    //   alt: "olafur eliasson 010",
    // },
    // {
    //   src: "saturn6_010.jpg",
    //   alt: "olafur eliasson 011",
    // },
    {
      src: "saturn6_011.jpg",
      alt: "olafur eliasson 005",
    },
    {
      src: "saturn6_012.jpg",
      alt: "olafur eliasson 006",
    },
    {
      src: "saturn6_013.jpg",
      alt: "olafur eliasson 007",
    },
    {
      src: "saturn6_014.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "saturn6_015.jpg",
      alt: "olafur eliasson 011",
    },
  ];

  return (
    <section className="carousel-hero">
      <section className="image-carousel">
        <div className="inner-carousel">
          <Carousel items={caroElements} />
        </div>
      </section>
    </section>
  );
};

export default CarouselHero;
