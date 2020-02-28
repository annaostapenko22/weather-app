import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Plot from "../plot/Plot";
import {handleChangeLocation} from "../../redux/forecastOperations"
import {connect} from "react-redux"
class App extends Component {
  state = {
    location: "",
    data: [],
    dates: [],
    temps: [],
    selected: {
      date: "",
      temp: null
    }
  };
  fetchData = async e => {
    e.preventDefault();
    let location = this.state.location;
    // const data = await axios.get(
    //   `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=b556b8a9d0ef0681959a194e9bf8845d&units=metric`
    // );
    const data = this.props.handleChangeLocation(location)
    // console.log("DATA=>", data.data.list);
    // await this.setState({
    //   data: data.data.list,
    //   dates: data.data.list.map(elem => elem.dt_txt),
    //   temps: data.data.list.map(elem => elem.main.temp)
    // });
    console.log("data data=>", data);
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
    if (this.state.data.length) {
      currentTemp = this.state.data[0].main.temp;
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
        {this.state.data.length ? (
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
              xData={this.state.dates}
              yData={this.state.temps}
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
// const mapStateToProps = (state) => ({

  
// })

const mapDispatchToProps = {
  handleChangeLocation
}

export default connect(null, mapDispatchToProps)(App);
