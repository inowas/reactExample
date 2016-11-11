import React from "react";

import axios from 'axios';
import C3Chart from "c3-react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.data = [
      {
        key: "dataSource1",
        values: [
          {"label":"0","value":100},{"label":"1","value":200},{"label":"2","value":400},{"label":"3","value":400},{"label":"4","value":100},{"label":"5","value":400},{"label":"6","value":300},{"label":"7","value":300},{"label":"8","value":400},{"label":"9","value":300}
        ]
      }
    ];
    this.type = 'line';
    this.options = {
      padding: {
        top: 32,
        bottom: 32,
        left: 32,
        right: 32
      },
      size: {
        height: 600
      },
      //subchart: true,
      zoom: true,
      grid: {
        x: false,
        y: true
      },
      axisLabel: {
        x: 'x-Achse',
        y: 'y-Achse'
      }
    };
  };

  setData() {

  };

  render() {
    return(
      <div>
        <C3Chart data={this.data} type={this.type} options={this.options} />

      </div>
    );
  }
}
