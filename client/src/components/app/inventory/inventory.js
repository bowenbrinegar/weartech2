import React, { Component } from 'react'
import "./inventory.css"
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import DB from '../../../utils/DB';

class Inventory extends Component {
  state = {
    data: []
  };

  get = () => {
    let arr = []
    DB.getCushionData()
      .then(res => {
        let temp = res.data;
        for (let i = 0; i < 10; i++) {
          arr.push(temp[i])
        }
      });
    this.setState({data: arr})
  };

  componentWillMount() {
    this.get()
  };

  render() {
    if (!this.props.show) { return null; }

    return (
      <div className={this.props.container}>
        <div id='tableID'>
            <BootstrapTable data={this.state.data} striped={true} hover={true}>
              <TableHeaderColumn dataField="_id" isKey={true} dataSort={true}>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField="sensor" dataSort={true}>
                Sensor #Ref
              </TableHeaderColumn>
              <TableHeaderColumn dataField="health" dataSort={true}>
                Health
              </TableHeaderColumn>
              <TableHeaderColumn dataField="sitTime" dataSort={true}>
                Sit Time
              </TableHeaderColumn>
              <TableHeaderColumn dataField="connectionStrength" dataSort={true}>
                Connection
              </TableHeaderColumn>
              <TableHeaderColumn dataField="pressure" dataSort={true}>
                Pressure
              </TableHeaderColumn>
            </BootstrapTable>
        </div>
      </div>
    )
  }
}

export default Inventory