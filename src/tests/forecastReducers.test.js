import { mainReducer } from "../redux/forecastReducers";
import { fromJS } from "immutable";

describe("mainReducer", () => {
  it("should return the initial state", () => {
    expect(mainReducer(undefined, {})).toEqual(
      fromJS({
        location: "",
        data: {},
        dates: [],
        temps: []
      })
    );
  });
  it("should react to an action with the type CHANGE_LOCATION", () => {
    const location = "Vienna, Austria";
    expect(
      mainReducer(undefined, {
        type: "CHANGE_LOCATION",
        location: location
      })
    ).toEqual(
      fromJS({
        location: location,
        data: {},
        dates: [],
        temps: []
      })
    );
  });
  it("should react to an action with the type SET_DATES", () => {
    const dates = ["2016-01-01", "2016-02-02"];
    expect(
      mainReducer(undefined, {
        type: "SET_DATES",
        dates: dates
      })
    ).toEqual(
      fromJS({
        location: "",
        data: {},
        dates: dates,
        temps: []
      })
    );
  });
  it("should react to an action with the type 'SET_TEMPS'", () => {
    var temps = ["31", "32"];
    expect(
      mainReducer(undefined, {
        type: "SET_TEMPS",
        temps: temps
      })
    ).toEqual(
      fromJS({
        location: "",
        data: {},
        dates: [],
        temps: temps
      })
    );
  });
});
