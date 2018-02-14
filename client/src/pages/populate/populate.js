import React, { Component } from "react";
import DB from "../../utils/DB.js";
import Moment from "moment";
import Input from "../../components/app/list/search/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

let connection = Math.floor(Math.random() * (10 - 6)) + 6;
let sitTime = Math.floor(Math.random() * (480 - 30)) + 30;
let pressure = Math.floor(Math.random() * (250 - 100)) + 100;
let compressionTime = Math.floor(Math.random() * (480 - 30)) + 30;
let compressionAmount = Math.floor(Math.random() * (10 - 6)) + 6;
let springRate = Math.floor(Math.random() * (10 - 6)) + 6;
let distance = Math.floor(Math.random() * (5 - 1)) + 1;
let steps = Math.floor(Math.random() * (10000 - 1000)) + 1000;
let date = Moment().subtract(Math.floor(Math.random() * (200 - 1)) + 1, "days");
let num = Math.floor(Math.random() * (100 - 40)) + 40;

const refresh = () => {
  connection = Math.floor(Math.random() * (10 - 6)) + 6;
  sitTime = Math.floor(Math.random() * (480 - 30)) + 30;
  pressure = Math.floor(Math.random() * (250 - 100)) + 100;
  compressionTime = Math.floor(Math.random() * (480 - 30)) + 30;
  compressionAmount = Math.floor(Math.random() * (10 - 6)) + 6;
  springRate = Math.floor(Math.random() * (10 - 6)) + 6;
  distance = Math.floor(Math.random() * (5 - 1)) + 1;
  steps = Math.floor(Math.random() * (10000 - 1000)) + 1000;
  date = Moment().subtract(Math.floor(Math.random() * (200 - 1)) + 1, "days");
  num = Math.floor(Math.random() * (100 - 40)) + 40;
};

class Populate extends Component {
  state = {
    institutionName: "",
    institutionId: "",
    size: "",
    cushionSensor: "",
    bedSensor: "",
    shoeSensor: "",
    date: Moment(),
    data: []
  };

  clear = () => {
    DB.clear();
  };

  addInstitution = () => {
    DB.createInstitution({
      institution: this.state.institutionName,
      size: this.state.size,
      createAt: Moment(),
      updatedAt: Moment()
    }).then(res => {
      this.setState({ institutionId: res.data._id });
    });
  };

  addCushion = () => {
    DB.createCushion({
      createAt: Moment(),
      updatedAt: Moment(),
      institution: this.state.institutionId
    })
      .then(res => {
        this.setState({ cushionSensor: res.data._id });
      })
      .catch(err => console.log(err));
  };

  addBed = () => {
    DB.createBed({
      createAt: Moment(),
      updatedAt: Moment(),
      institution: this.state.institutionId
    })
      .then(res => {
        this.setState({ bedSensor: res.data._id });
      })
      .catch(err => console.log(err));
  };

  addShoe = () => {
    DB.createShoe({
      createAt: Moment(),
      updatedAt: Moment(),
      institution: this.state.institutionId
    })
      .then(res => {
        this.setState({ shoeSensor: res.data._id });
      })
      .catch(err => console.log(err));
  };

  addCushionData = () => {
    refresh();
    for (let i = 0; i < num; i++) {
      refresh();
      DB.createCushionData({
        health: 10,
        connectionStrength: connection,
        sitTime: sitTime,
        pressure: pressure,
        createAt: date,
        sensor: this.state.cushionSensor
      }).then(res => {
        console.log(res);
      });
    }
  };

  addBedData = () => {
    refresh();
    for (let i = 0; i < num; i++) {
      refresh();
      DB.createBedData({
        health: 10,
        connectionStrength: connection,
        compressionTime: compressionTime,
        compressionAmount: compressionAmount,
        springRate: springRate,
        createAt: date,
        sensor: this.state.bedSensor
      }).then(res => {
        console.log(res);
      });
    }
  };

  addShoeData = () => {
    refresh();
    for (let i = 0; i < num; i++) {
      refresh();
      DB.createShoeData({
        health: 10,
        connectionStrength: connection,
        steps: steps,
        pressure: pressure,
        distance: distance,
        createAt: date,
        sensor: this.state.shoeSensor
      }).then(res => {
        console.log(res);
      });
    }
  };

  findAllInstitutions = () => {
    DB.getInstitutions()
      .then(res => {
        console.log(res);

        return res;
      })
      .then(sortedData => {
        this.setState({ data: sortedData.data });
      })
      .catch(err => console.log(err));
  };

  findAllCushionData = () => {
    DB.getCushionData()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  findAllBedData = () => {
    DB.getBedData()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  findAllShoeData = () => {
    DB.getShoeData()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleDate = date => {
    this.setState({ date: date });
    console.log(this.state.date);
  };

  render() {
    return (
      <div id="applicationContainer">
        <DatePicker selected={this.state.date} onChange={this.handleDate} />;
        <br />
        <br />
        <br />
        <button onClick={this.clear} id="buttonPop">
          clear
        </button>
        <h1 style={{ color: "white" }}>Add Institution</h1>
        <Input
          placeholder="institution name"
          value={this.state.institution}
          onChange={this.handleInputChange}
          name="institutionName"
        />
        <Input
          placeholder="institution size (number)"
          value={this.state.institution}
          onChange={this.handleInputChange}
          name="size"
        />
        <button onClick={this.addInstitution} id="buttonPop">
          Add Institution
        </button>
        <h1 style={{ color: "white" }}>Add Sensors</h1>
        <button onClick={this.addCushion} id="buttonPop">
          Add Cushion Sensor
        </button>
        <button onClick={this.addBed} id="buttonPop">
          Add Bed Sensor
        </button>
        <button onClick={this.addShoe} id="buttonPop">
          Add Shoe Sensor
        </button>
        <h1 style={{ color: "white" }}>Add Data</h1>
        <button onClick={this.addCushionData} id="buttonPop">
          Add Cushion Data
        </button>
        <button onClick={this.addBedData} id="buttonPop">
          Add Bed Data
        </button>
        <button onClick={this.addShoeData} id="buttonPop">
          Add Shoe Data
        </button>
        <h1 style={{ color: "white" }}>Find All</h1>
        <button onClick={this.findAllInstitutions} id="buttonPop">
          Find all institutions
        </button>
        <button onClick={this.findAllCushionData} id="buttonPop">
          Find all CushionData
        </button>
        <button onClick={this.findAllBedData} id="buttonPop">
          Find all BedData
        </button>
        <button onClick={this.findAllShoeData} id="buttonPop">
          Find all ShoeData
        </button>
      </div>
    );
  }
}

export default Populate;
