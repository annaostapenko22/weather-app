import React, { Component } from "react";
import "./App.css";
import Plot from "../plot/Plot";
import { handleChangeLocation } from "../../redux/forecastOperations";
import { connect } from "react-redux";

class App extends Component {
  state = {
    location: "",
    selected: {
      date: "",
      temp: null
    }
  };

  fetchData = async e => {
    e.preventDefault();
    let location = this.state.location;
    this.props.handleChangeLocation(location);
  };
  changeLocation = e => {
    let location = e.target.value;
    this.setState({ location });
  };
  onPlotClick = data => {
    if (data) {
      this.setState({
        selected: {
          date: data.x,
          temp: data.y
        }
      });
    }
  };
  render() {
    let currentTemp = "Specify location";
    if (this.props.redux.getIn(["data", "0"])) {
      currentTemp = this.props.redux.getIn(["data", "0", "main", "temp"]);
    }
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>
            I want to know the weather for
            <input
              placeholder={"City, Country"}
              type="text"
              onChange={this.changeLocation}
              value={this.state.location}
            />
          </label>
        </form>
        {this.props.redux.getIn(["data", "0"]) ? (
          <div className="wrapper">
            <p className="temp-wrapper">
              {this.state.selected.temp ? (
                <span className="temp">{this.state.selected.temp}</span>
              ) : (
                <span className="temp">{currentTemp}</span>
              )}
              <span className="temp-symbol">°C</span>
              <span className="temp-date">
                {this.state.selected.temp ? this.state.selected.date : ""}
              </span>
            </p>
            <h2>Forecast</h2>
            <Plot
              xData={this.props.redux.get("dates")}
              yData={this.props.redux.get("temps")}
              type="scatter"
              onPlotClick={this.onPlotClick}
              style={{ width: 300, height: 600 }}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = {
  handleChangeLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
