import React, { Component } from "react";
import "../../App.css";
import "./scss/bootstrap/bootstrap.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    number: null,
    message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.name);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // send data to backend in object
    console.log(this.state);
    this.setState({ name: "", email: "", number: "", message: "" });
  };

  render() {
    return (
      <div id="contactContainer">
        <div id="appContainer">
          <div className="agency-contact-hero">
            <div className="container">
              <h3 className="customFadeInUp">
                Questions, advice or just want to say hi?
              </h3>
            </div>
          </div>

          <div className="agency-contact-intro">
            <div className="container">
              <p>
                For all inquiries including new business, employment
                opportunities or to hear more about our services, please get in
                touch. We'd love to help you learn more about how customers are
                using your products.
              </p>
            </div>
          </div>

          <div className="agency-contact-form">
            <div className="container">
              <form onSubmit={this.handleFormSubmit} method="post">
                <input
                  onChange={this.handleInputChange}
                  name="name"
                  type="text"
                  value={this.state.name}
                  placeholder="Your name"
                />
                <input
                  onChange={this.handleInputChange}
                  name="email"
                  type="text"
                  value={this.state.email}
                  placeholder="Email address"
                />
                <input
                  onChange={this.handleInputChange}
                  name="number"
                  value={this.state.number}
                  type="text"
                  placeholder="Phone number"
                />
                <textarea
                  onChange={this.handleInputChange}
                  name="message"
                  value={this.state.message}
                  placeholder="Message"
                  rows="6"
                />
                <input type="submit" value="Send message" />
              </form>
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
                  <a href="#" className="legal">
                    App
                  </a>
                  <a href="#" className="legal">
                    Team
                  </a>
                </div>
                <div className="col-md-3">
                  <h4>Address</h4>
                  <p>530 Foster Street, Durham, NC, 27701</p>
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

export default Contact;
