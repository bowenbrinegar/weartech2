import React, { Component } from 'react'
import "./overview.css"
import BarChart from '../barchart/barchart';
import DB from '../../../utils/DB'
import LineChart from '../linechart/linechart';

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

const chart3 = {
  labels: ['M', 'Tu', 'W', 'Th', 'F', 'S', 'Sn'],
  datasets: [
    {
      label: 'Shoe Pressure Record',
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ]
};

const chart4 = {
  labels: ['M', 'Tu', 'W', 'Th', 'F', 'S', 'Sn'],
  datasets: [
    {
      label: 'Shoe Pressure Record',
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
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
      maintainAspectRatio: false,
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
      chart1.datasets[0].data = arr;
      setTimeout(() => {
        this.setState({chart1: chart1})
      }, 1000)
    }
  };

  chart2 = () => {
    let arr = [];
    DB.getCushionByID(this.props.institution)
      .then(res => {
        res.data.length > 0 ? arr[0] = res.data.length : arr[0] = 0
      });
    DB.getBedByID(this.props.institution)
      .then(res => {
        res.data.length > 0 ? arr[1] = res.data.length : arr[1] = 0
      });
    DB.getShoeByID(this.props.institution)
      .then(res => {
        res.data.length > 0 ? arr[2] = res.data.length : arr[2] = 0
      });
    chart2.datasets[0].data = arr;
    setTimeout(() => {
      this.setState({chart2: chart2})
    }, 1000)
  };

  chart3 = () => {
    let arr = [];
    DB.getShoeByID(this.props.institution)
      .then(res => {
         if (res.data.length > 0) {
           for (let i = 0; i < 7; i++) {
             arr.push(res.data[0].data[i].pressure)
           }
         }
      })
    chart3.datasets[0].data = arr;
    setTimeout(() => {
      this.setState({chart3: chart3})
    }, 1000)

  };
  //
  // chart4 = () => {
  //   this.setState({chart4: chart4Line})
  // }

  loadCharts = () => {
    this.chart1();
    this.chart2();
    this.chart3();
    // this.chart4();
  };

  componentWillMount() {
    this.loadCharts()
  };

  render() {
    if (!this.props.show) { return null; }
    return (
      <div className={this.props.container}>
        <div id="chartBox">
          <div id="chart1">
            <BarChart data={this.state.chart1}
                      options={this.state.options}
            />
          </div>
        </div>
        <div id="chartBox">
          <div id="chart1">
            <BarChart data={this.state.chart2}
                      options={this.state.options}
            />
          </div>
        </div>
        <div id="chartBox">
          <div id="chart1">
            <LineChart data={this.state.chart3}
                      options={this.state.options}
            />
          </div>
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