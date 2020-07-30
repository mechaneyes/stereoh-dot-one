import React from "react";

import Slider from "react-slick";
import "./Carousel.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Carousel = (props) => {
  const caroList = props.items.map((caro, i) => (
    <img
      className="carousel-element"
      key={i}
      src={imgPath + caro.src}
      alt={caro.alt}
    />
  ));

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    cenderPadding: '50px',
  };

  return <Slider {...slickSettings}>{caroList}</Slider>;
};

export default Carousel;
