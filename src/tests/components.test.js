import React from "react";
import renderer from "react-test-renderer";
import App from "../components/app/App";
import { fromJS } from "immutable";
import Plot from "../components/plot/Plot.js"
describe("components", () => {
  describe("<App />", () => {
    it("renders correctly", () => {
      const WrappedApp = App.WrappedComponent;
      const tree = renderer.create(<WrappedApp redux={fromJS({})} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('<Plot />', ()=> {
    // global.Plotly = {
    //     newPlot: () => {}
    //   };
    //   global.Plot = {
    //     onPlotClick: function() { }
    //   };
    // global.Plotly = {
    //     PlotlyComponent: function(){return {
    //         onClick: function(){}
    //     }}
    // }
   
    // global.document = {
    //     getElementById: function() { return {
    //       on: function() {}
    //     }}
    //   };
    const PlottedElement = Plot.PlotlyComponent
    it('renders correctly', () => {
      const tree = renderer.create(<PlottedElement xData={fromJS({})} yData={fromJS({})} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
