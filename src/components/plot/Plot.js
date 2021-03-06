import React, { Component } from "react";
import createPlotlyComponent from "react-plotlyjs";
import Plotly from "plotly.js/dist/plotly-cartesian";
const PlotlyComponent = createPlotlyComponent(Plotly);
class Plot extends Component {
  onPlotClick = e => {
    this.props.onPlotClick(e.points[0]);
  };
  render() {
    return (
      <PlotlyComponent
        data={[
          {
            x: this.props.xData.toJS(),
            y: this.props.yData.toJS(),
            type: this.props.type
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
          },
          height: 550
        }}
        config={{ displayModeBar: false }}
        onClick={this.onPlotClick}
      />
    );
  }
}

export default Plot;
