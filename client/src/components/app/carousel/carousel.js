import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import photo1 from "./photo_1.jpeg";
import photo2 from "./photo_2.jpeg";
import photo3 from "./photo_3.jpeg";

class DemoCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={photo1} alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={photo2} alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={photo3} alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
