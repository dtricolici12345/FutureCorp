import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slide from "./Slide";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section id="carousel">
        <Slider {...settings}>
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </Slider>
      </section>
    );
  }
}
