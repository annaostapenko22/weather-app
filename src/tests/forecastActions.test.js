import {
  changeLocation,
  setData,
  setDates,
  setTemps
} from "../redux/forecastActions";

describe("changeLocation", () => {
  it("should have a type of 'CHANGE_LOCATION' ", () => {
    expect(changeLocation().type).toEqual("CHANGE_LOCATION");
  });
  it("should pass on the location we pass in", () => {
    const location = "Kiev, Ukraine";
    expect(changeLocation(location).location).toEqual(location);
  });
});

describe("setData", () => {
  it("should have a type of 'SET_DATA' ", () => {
    expect(setData().type).toEqual("SET_DATA");
  });
  it("should pass on the data we pass in", () => {
    const data = {
      some: "data"
    };
    expect(setData(data).data).toEqual(data);
  });
});

describe("setDates", () => {
  it("should have a type of 'SET_DATES' ", () => {
    expect(setDates().type).toEqual("SET_DATES");
  });
  it("should pass on the data we pass in", () => {
    const dates = ["2016-01-01", "2016-01-02"];
    expect(setDates(dates).dates).toEqual(dates);
  });
});

describe("setTemps", () => {
  it("should have a type of 'SET_TEMPS' ", () => {
    expect(setTemps().type).toEqual("SET_TEMPS");
  });
  it("should pass on the data we pass in", () => {
    const temps = ["30", "31"];
    expect(setTemps(temps).temps).toEqual(temps);
  });
});
