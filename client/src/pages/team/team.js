import React, { Component } from "react";
import { Row, Col } from "../../components/app/grid";
import Jumbotron from "../../components/app/jumbotron/jumbotron";
import Thumbnail from "../../components/app/thumbnail/thumbnail";
import ScrollAnimation from "react-animate-on-scroll";
import "../../app.css";
import "./team.css";

class Team extends Component {
  render() {
    return (
      <div id="homeTeamContainer">
        <div id="teamContainer">
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Meet Our Team</h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <ScrollAnimation
                animateIn="slideInLeft"
                duration={3}
                delay={1000}
                animateOnce={true}
              >
                <Thumbnail />
              </ScrollAnimation>
            </Col>
            <Col size="md-4">
              <ScrollAnimation
                animateIn="slideInLeft"
                duration={3}
                delay={2000}
                animateOnce={true}
              >
                <Thumbnail />
              </ScrollAnimation>
            </Col>
            <Col size="md-4">
              <ScrollAnimation
                animateIn="slideInLeft"
                duration={3}
                delay={3000}
                animateOnce={true}
              >
                <Thumbnail />
              </ScrollAnimation>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Team;
