import React, { Component } from "react";
import "../../app.css";
import "./scss/bootstrap/bootstrap.css";
import { Link } from "react-router-dom";

class Team extends Component {
  render() {
    return (
      <div id="applicationContainer">
        <div id="appContainer">
          <div className="agency-about-hero">
            <section className="container">
              <div className="row">
                <div className="hero-text">
                  <p className="customFadeInUp">
                    We believe in using IoT data to help brands better connect
                    and predict the needs of their customers.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="agency-about-team">
            <h4>Meet Our Team</h4>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="member">
                    <div className="mask">
                      <Link
                        to="https://www.linkedin.com/in/bowen-brinegar-6047ab67/"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin" />
                      </Link>
                      <Link
                        to
                        href="https://github.com/bowenbrinegar"
                        target="_blank"
                      >
                        <i className="fa fa-github" />
                      </Link>
                    </div>
                    <img src="images/uifaces/bowen.png" />
                  </div>
                  <div className="name">Bowen Brinegar</div>
                </div>
                <div className="col-md-4">
                  <div className="member">
                    <div className="mask">
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fa fa-github" />
                      </a>
                    </div>
                    <img src="images/uifaces/1.jpg" />
                  </div>
                  <div className="name">Will Holt</div>
                </div>
                <div className="col-md-4">
                  <div className="member">
                    <div className="mask">
                      <Link
                        to="https://www.linkedin.com/in/parkerpreyer/"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin" />
                      </Link>
                      <Link to="https://github.com/ppreyer" target="_blank">
                        <i className="fa fa-github" />
                      </Link>
                    </div>
                    <img src="images/uifaces/parker.png" />
                  </div>
                  <div className="name">Parker Preyer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="agency-about-pics">
            <div id="photos" />
          </div>

          <div className="agency-about-cta">
            <div className="container">
              <h3>Want to work with us?</h3>

              <p>
                Have a new product use case? We'd love <br /> to help turn it
                into reality.
                <Link to="/contact"> Get in touch</Link>
              </p>
            </div>
          </div>

          <div className="agency-footer">
            <a href="#" className="go-top">
              <i className="fa fa-angle-up" />
              TOP
            </a>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h4>About</h4>
                  <Link to="/app" className="legal">
                    App
                  </Link>
                  <Link to="/team" className="legal">
                    Team
                  </Link>
                </div>
                <div className="col-md-3">
                  <h4>Address</h4>
                  <p>
                    530 Foster Street, <br />Durham, NC, 27701
                  </p>
                </div>
                <div className="col-md-3">
                  <h4>Contact</h4>
                  <p>(919) 740-4206 info@weartech.com</p>
                </div>
                <div className="col-md-3">
                  <h4>Social</h4>
                  <Link to="#" className="social first">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="#" className="social">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="#" className="social">
                    <i className="fa fa-github" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
