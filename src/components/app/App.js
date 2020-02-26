import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  state = {
    location: "",
    data: []
  };
  fetchData = async e => {
    e.preventDefault();
    console.log("yes", this.state.location);
    let location = encodeURIComponent(this.state.location)
    const data =  await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=b556b8a9d0ef0681959a194e9bf8845d&units=metric`
    )
    console.log("DATA=>",data.data.list)
   await this.setState({data: data.data.list});
   console.log(this.state)
  };
  changeLocation = e => {
    let location = e.target.value;
    this.setState({ location });
  };
  render() {
      let currentTemp = "Specify location"
      if(this.state.data.length) {
           currentTemp = this.state.data[0].main.temp
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
        <p className="temp-wrapper">
          <span className="temp">{ currentTemp }</span>
          <span className="temp-symbol">°C</span>
        </p>
      </div>
    );
  }
}

export default App;


