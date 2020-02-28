import Type from "./forecastTypes";

export const changeLocation = location => ({
  type: Type.CHANGE_LOCATION,
  location: location
});

export const setSelectedDate = date => ({
  type: Type.SET_SELECTED_DATE,
  date: date
});

export const setSelectedTemp = temp => ({
  type: Type.SET_SELECTED_TEMP,
  temp: temp
});

export const setData = data => ({
  type: Type.CHANGE_LOCATION,
  data: data
});

export const setDates = dates => ({
  type: Type.SET_DATES,
  dates: dates
});

export const setTemps = temps => ({
  type: Type.SET_TEMPS,
  temps: temps
});
