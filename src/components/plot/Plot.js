import React, { Component } from "react";
import createPlotlyComponent from "react-plotlyjs";

import Plotly from "plotly.js/dist/plotly-cartesian";
const PlotlyComponent = createPlotlyComponent(Plotly);
class Plotlyy extends Component {
  render() {
    return (
      <PlotlyComponent
        data={[
          {
            type: this.props.type,
            x: this.props.xData,
            y: this.props.yData
          },
          {
            margin: {
              t: 0,
              r: 0,
              l: 30
            }
          }
        ]}
        layout={{
          xaxis: {
            gridcolor: "transparent"
          }
        }}
        config={{ displayModeBar: false }}
      />
    );
  }
}

export default Plotlyy;
