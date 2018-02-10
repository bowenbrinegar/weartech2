import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./table.css"

class ReactTable extends Component {

  render() {

    const products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];



    return (
      <div id="tableContainer">
        <BootstrapTable data={products} striped hover>
          <TableHeaderColumn isKey={true} dataSort={true} dataField='id'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={true}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataSort={true}>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default ReactTable;