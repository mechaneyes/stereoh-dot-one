import React from "react";

import Carousel from "../../atoms/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselHero.scss";

const CarouselHero = () => {

  let caroElements = [
    {
      src: "sat6/satSix_021.jpg",
      alt: "saturn 6 launch party",
    },
    {
      src: "sat6/saturn6_012.jpg",
      alt: "olafur eliasson 006",
    },
    {
      src: "sat6/satSix_009.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "sat6/saturn6_007.jpg",
      alt: "olafur eliasson 009",
    },
    {
      src: "sat6/satSix_015.jpg",
      alt: "olafur eliasson 011",
    },
    {
      src: "sat6/satSix_004.jpg",
      alt: "olafur eliasson 009",
    },
    {
      src: "sat6/saturn6_006.jpg",
      alt: "olafur eliasson 005",
    },
    {
      src: "sat6/satSix_024.jpg",
      alt: "olafur eliasson 007",
    },
    {
      src: "sat6/saturn6_008.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "sat6/saturn6_003.jpg",
      alt: "olafur eliasson 011",
    },
    {
      src: "sat6/satSix_001.jpg",
      alt: "olafur eliasson 005",
    },
    {
      src: "sat6/saturn6_004.jpg",
      alt: "olafur eliasson 006",
    },
    {
      src: "sat6/satSix_018.jpg",
      alt: "olafur eliasson 007",
    },
    {
      src: "sat6/saturn6_009.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "sat6/saturn6_013.jpg",
      alt: "olafur eliasson 011",
    },
    {
      src: "sat6/saturn6_015.jpg",
      alt: "olafur eliasson 006",
    },
    {
      src: "sat6/satSix_010.jpg",
      alt: "olafur eliasson 007",
    },
    {
      src: "sat6/satSix_016.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "sat6/satSix_023.jpg",
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
