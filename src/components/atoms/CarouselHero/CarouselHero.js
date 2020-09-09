import React from "react";

import Carousel from "../../atoms/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselHero.scss";

const CarouselHero = (props) => {
  const { headline } = props;

  let caroElements = [
    {
      src: "saturn6_002.jpg",
      alt: "olafur eliasson 009",
    },
    {
      src: "saturn6_002.jpg",
      alt: "olafur eliasson 005",
    },
    {
      src: "saturn6_002.jpg",
      alt: "olafur eliasson 006",
    },
    {
      src: "saturn6_002.jpg",
      alt: "olafur eliasson 007",
    },
    {
      src: "saturn6_002.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "saturn6_002.jpg",
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
      <div className="home-hero-content">
        <h1>{headline}</h1>
        <p className="home-hero-subheadline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc dolor, porttitor non felis et, auctor elementum dolor.</p>
      </div>
    </section>
  );
};

export default CarouselHero;
