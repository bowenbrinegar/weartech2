import React, { Component } from "react";
import "./app.css";
import Button from "../../components/app/button";
import Modal from "../../components/app/modals";
import Inventory from "../../components/app/inventory";
import OverView from "../../components/app/overview";
import List from "../../components/app/list/list";

class App extends Component {
  state = {
    showSensor: false,
    showInstitution: false,
    overViewShow: true,
    inventoryShow: false,
    institution: ''
  };

  handleInstitutionSelect = (event) => {
    const id = event.target.getAttribute('dataId');
    this.setState({institution: id});
    setTimeout(() => {
      this.refs.child.loadCharts();
    },100)
  };

  toggleView = () => {
    if (this.state.inventoryShow) {
      this.setState({
        overViewShow: true,
        inventoryShow: false
      });
    } else {
      this.setState({
        overViewShow: false,
        inventoryShow: true
      });
    }
  };

  toggleModal = event => {
    const { value } = event.target;
    if (value === "Add Sensor") {
      if (this.state.showSensor) {
        return;
      } else {
        this.setState({
          showSensor: true,
          showInstitution: false
        });
      }
    } else if (value === "Add Institution") {
      if (this.state.showInstitution) {
        return;
      } else {
        this.setState({
          showInstitution: true,
          showSensor: false
        });
      }
    }

    if (value === "Close") {
      this.setState({
        showSensor: false,
        showInstitution: false
      });
    }
  };

  render() {
    return (
      <div id="applicationContainer">
        <div id="appContainer">
          <List onClick={this.handleInstitutionSelect.bind(this)}/>
          <div id="portal">
            <Button
              onClick={this.toggleModal}
              value="Add Sensor"
              className="appButton"
              id="red"
            />
            <Button
              onClick={this.toggleModal}
              value="Add Institution"
              className="appButton"
              id="blue"
            />
            <Button
              onClick={this.toggleView}
              value="Toggle"
              className="appButton"
              id="toggle"
            />
            <Modal
              show={this.state.showSensor}
              value="sensor"
              close={this.toggleModal.bind(this)}
            />
            <Modal
              show={this.state.showInstitution}
              value="institution"
              close={this.toggleModal.bind(this)}
            />
            <div id='toggleContainer'>
              <Inventory
                container="inventoryContainer"
                show={this.state.inventoryShow}
                institution={this.state.institution}
              />
              <OverView
                container="overviewContainer"
                show={this.state.overViewShow}
                institution={this.state.institution}
                ref="child"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
