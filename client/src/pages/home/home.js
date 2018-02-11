import React, { Component } from "react";
import Jumbotron from "../../components/app/jumbotron/jumbotron";
import Icon from "../../components/app/icon/icon";
import { Row, Col } from "../../components/app/grid";
import DemoCarousel from "../../components/app/carousel/carousel";
import "./home.css";
import "../../app.css";
import ScrollAnimation from "react-animate-on-scroll";
import FounderTron from "../../components/app/jumbotron/founderTron";
import Circle from "../../components/app/circle/circle";
import MdBlurOn from "react-icons/lib/md/blur-on";
import MdPhoneIphone from "react-icons/lib/md/phone-iphone";
import MdCode from "react-icons/lib/md/code";
import ContentBox from "../../components/app/contentBox/contentBox";
import ContentBox2 from "../../components/app/contentBox/contentBox2";
import ContentBox3 from "../../components/app/contentBox/contentBox3";
import ImageShape from "../../components/app/imageShape/imageShape";
import BarChart from "../../components/app/barchart/barchart";

class Home extends Component {
  render() {
    return (
      <div id="homeAppContainer">
        <div id="homeContainer">
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>WearTech</h1>
                <p>Predicting the correct time to replace your products</p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <div id="circleContainer">
              <Col size="md-4">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                  <Circle>
                    <p>Hardware</p>
                    <MdPhoneIphone size={60} />
                  </Circle>
                </ScrollAnimation>
              </Col>
              <Col size="md-4">
                <ScrollAnimation
                  animateIn="fadeIn"
                  delay={1000}
                  animateOnce={true}
                >
                  <Circle>
                    <p>Software</p>
                    <MdCode size={60} />
                  </Circle>
                </ScrollAnimation>
              </Col>
              <Col size="md-4">
                <ScrollAnimation
                  animateIn="fadeIn"
                  delay={2000}
                  animateOnce={true}
                >
                  <Circle>
                    <p>Data Science</p>
                    <MdBlurOn size={60} />
                  </Circle>
                </ScrollAnimation>
              </Col>
            </div>
          </Row>
          <Row>
            <Col size="md-12">
              <FounderTron>
                <h1>FounderTron</h1>
                <p>Will's product hot take...</p>
              </FounderTron>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <ContentBox>
                <ImageShape>
                  <p>Explore Technology</p>
                </ImageShape>
              </ContentBox>
            </Col>
            <Col size="md-4">
              <ContentBox2>
                <ImageShape>
                  <p>Email Us</p>
                </ImageShape>
              </ContentBox2>
            </Col>
            <Col size="md-4">
              <ContentBox3>
                <ImageShape>
                  <p>Demo App</p>
                </ImageShape>
              </ContentBox3>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
