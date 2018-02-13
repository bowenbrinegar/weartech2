import React, { Component } from 'react'
import "./overview.css"
import BarChart from '../barchart/barchart';
import DB from '../../../utils/DB'

const chart1 = {
  labels: ["Cushion", "Shoe", "Bed"],
  datasets: [
    {
      label: "Sensor Totals",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [4,8,9]
    }
  ]
};


const chart2 = {
  labels: ["Institutions"],
  datasets: [
    {
      label: "Number of Institutions",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [1,2,3]
    }
  ]
};

const chart3 = {
  labels: ["Shoe", "Cushion", "Bed"],
  datasets: [
    {
      label: "# of Data Collected",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [2,1,3]
    }
  ]
};

const chart4Line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ]
};


class OverView extends Component {
  state = {
    institution: this.props.institution,
    chart1: {},
    chart2: {},
    chart3: {},
    chart4: {},
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      },
      size: {
        height: 800,
        width: 1600
      }
    }
  };

  chart1 = () => {
    let arr = [];
    if (this.props.institution !== '') {
      DB.getInstitutionByID(this.props.institution)
        .then(res => {
          arr[0] = res.data[0].bed.length;
          arr[1] = res.data[0].cushion.length;
          arr[2] = res.data[0].shoe.length;
        });
      chart1.datasets[0].data = arr;
      setTimeout(() => {
        this.setState({chart1: chart1})
      }, 1000)
    } else {
      DB.getShoes().then(res => arr[0] = res.data.length);
      DB.getCushions().then(res => arr[1] = res.data.length);
      DB.getShoes().then(res => arr[2] = res.data.length);
      setTimeout(() => {
        this.setState({chart1: chart1})
      }, 1000)
    }
  };

  chart2 = () => {
    DB.getInstitutions()
      .then(res => chart2.datasets[0].data.splice(0, 1, res.data.length))
    this.setState({chart2: chart2})
  };

  // chart3 = () => {
  //   let arr = [];
  //   DB.getCushionData()
  //     .then(res => arr.push(res.data.length));
  //   DB.getBedData()
  //     .then(res => arr.push(res.data.length));
  //   DB.getShoeData()
  //     .then(res => arr.push(res.data.length));
  //   chart3.datasets[0].data = arr
  //   this.setState({chart3: chart3})
  // };
  //
  // chart4 = () => {
  //   this.setState({chart4: chart4Line})
  // }

  loadCharts = () => {
    this.chart1();
    // this.chart2();
    // this.chart3();
    // this.chart4();
  }

  componentWillMount() {
    this.loadCharts()
  }

  render() {
    if (!this.props.show) { return null; }
    return (
      <div className={this.props.container}>
        <div id="chart1">
          <BarChart data={this.state.chart1}
                    options={this.state.options}
          />
        </div>
        <div id="chart2">
          <BarChart data={this.state.chart1}
                    options={this.state.options}
          />
        </div>
        {/*{this.chart2 ? (<div id="chart2">*/}
          {/*<BarChart data={this.state.chart2}/>*/}
        {/*</div>) : (<h1 id="chart2">No Data</h1>)}*/}
        {/*{this.chart3 ? (<div id="chart3">*/}
          {/*<BarChart data={this.state.chart3}/>*/}
        {/*</div>) : (<h1 id="chart3">No Data</h1>)}*/}
        <div id='chart4'></div>
      </div>
    )
  }
}

export default OverView