import React, { Component } from "react";
import "../../App.css";
import "./scss/bootstrap/bootstrap.css";
import JumbotronBusiness from "../../components/home/jumbotrons/jumbotron_business";
import JumbotronFounder from "../../components/home/jumbotrons/jumbotron_founder";
import Button from "../../components/home/button/button";
import Features from "../../components/home/features";
import Feature from "../../components/home/feature";
import Header from "../../components/home/header";
import Image from "../../components/home/featureimage/featureimage";
import MdBlurOn from "react-icons/lib/md/blur-on";
import MdPhoneIphone from "react-icons/lib/md/phone-iphone";
import MdCode from "react-icons/lib/md/code";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">
        <div id="appContainer">
          <JumbotronBusiness>
            <h2 className="customFadeInUp">
              WearTech Means Intelligent Products
            </h2>
            <p>Faciliating communication between you and your products.</p>
            {/*<p className="customFadeInUp">
              Imagine being inside your customer's head at the point of decision
              making. Our data products offer a direct path into the mind of the
              consumer.
              <br />
              <br />
              At Weartech, we design IoT and AI solutions that determine when a
              product’s life-cycle is ending thus enabling direct B2B and B2C
              marketing at the most critical decision making time...when the
              product wears out.
            </p>*/}
            <Link to="/contact">
              <Button
                value="Let's Go"
                className="actions customFadeInUp btn-pill btn-pill-primary btn-pill-lg"
              />
            </Link>
          </JumbotronBusiness>

          <div className="spacial-features" data-scroll>
            <section className="container">
              <div className="row">
                <div className="col-12">
                  <Header>
                    <h2>Manage your Product's Entire Lifecycle</h2>
                    <p>
                      Weartech's web and mobile application grants companies the
                      ability to uncover insights about their consumers product
                      usage.
                    </p>
                  </Header>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Feature className="feature">
                    <img src="images/icons/spacial-devices.png" />
                    <h3>Marketers</h3>
                    <p>
                      Know when your product needs to be replaced and engage
                      with the customer at that exact moment.
                    </p>
                  </Feature>
                </div>

                <div className="col-md-6">
                  <Feature className="feature">
                    <img src="images/icons/spacial-download.png" />
                    <h3>Manufacturers: Discover product insights.</h3>
                    <p>
                      Gain deep and previously unknown insights about your
                      product's usage. Easily predict when to replace your
                      inventory.
                    </p>
                  </Feature>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Feature className="feature">
                    <img src="images/icons/spacial-settings.png" />
                    <h3>
                      Data Scientists: Connect marketing and production data.
                    </h3>
                    <p>
                      Uncover new data patterns with Weartech's turnkey AI
                      platform.
                    </p>
                  </Feature>
                </div>
              </div>
            </section>
          </div>

          <JumbotronFounder>
            <img src="images/logos/WearTech-Logo.png" />
            <p>
              "This company was created to eliminate the unknowns surrounding
              business and consumer purchases. We create a transparent
              communication channel between the products and their stakeholders.
              The trust our system provides creates relationships for life."
            </p>
            <div className="author">Will Holt, Founder</div>
          </JumbotronFounder>

          <div className="index-features" data-scroll>
            <div className="container">
              <header>
                <h3>Product Offerings</h3>
              </header>
              <section className="features">
                <div className="row">
                  <div className="col-md-6 feature">
                    <img
                      src="images/icons/features-icon-ok.png"
                      className="icon"
                    />
                    <section>
                      <h4>Hardware</h4>
                      <p>
                        Sensor technology that monitors the working condition of
                        your products.
                      </p>
                    </section>
                  </div>
                  <div className="col-md-6 feature">
                    <img
                      src="images/icons/features-icon-canvas.png"
                      className="icon"
                    />
                    <section>
                      <h4>Software</h4>
                      <p>
                        Full suite of software products to manage the
                        connection, monitoring and marketing communication of
                        your products.
                      </p>
                    </section>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 feature">
                    <img
                      src="images/icons/features-icon-world.png"
                      className="icon"
                    />
                    <section>
                      <h4>Data Science</h4>
                      <p>
                        Our Big Data product leverages AI to yield deep insights
                        into your products and your customers behavior.
                      </p>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="index-clients">
            <div className="container">
              <header>
                <h4>Used and trusted by these guys</h4>
              </header>
              <div className="row justify-content-center">
                <div className="col-12 col-md-3 col-lg">
                  <img
                    className="img-fluid mb-4"
                    src="images/logos/google.jpg"
                  />
                </div>
                <div className="col-12 col-md-3 col-lg">
                  <img
                    className="img-fluid mb-4"
                    src="images/logos/dropbox.jpg"
                  />
                </div>
                <div className="col-12 col-md-3 col-lg">
                  <img className="img-fluid mb-4" src="images/logos/fb.jpg" />
                </div>
                <div className="col-12 col-md-3 col-lg">
                  <img
                    className="img-fluid mb-4"
                    src="images/logos/twitter.jpg"
                  />
                </div>
                <div className="col-12 col-md-3 col-lg">
                  <img
                    className="img-fluid mb-4"
                    src="images/logos/instagram.jpg"
                  />
                </div>
                <div className="col-12 col-md-3 col-lg">
                  <img
                    className="img-fluid mb-4"
                    src="images/logos/apple.jpg"
                  />
                </div>
                <div className="col-12 col-md-3 col-lg">
                  <img
                    className="img-fluid mb-4"
                    src="images/logos/stripe.jpg"
                  />
                </div>
              </div>
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
                    530 Foster Street, <br />
                    Durham, NC, 27701
                  </p>
                </div>
                <div className="col-md-3">
                  <h4>Contact</h4>
                  <p>(919) 740-4206 info@weartech.com</p>
                </div>
                <div className="col-md-3">
                  <h4>Social</h4>
                  <a href="#" className="social first">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="social">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="social">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
