import axios from "axios";
import { changeLocation, setData, setDates, setTemps } from "./forecastActions";


axios.defaults.baseURL = `http://api.openweathermap.org`;
const key = `3663e7e56c8fe1c09d1e1f727565afac`;

export const handleChangeLocation = location => async dispatch => {
  try {
    const data = await axios.get(
      `/data/2.5/forecast?q=${location}&appid=${key}&units=metric`
    );
    dispatch(changeLocation(location));
    dispatch(setData(data.data.list));
    dispatch(setDates(data.data.list.map(elem => elem.dt_txt)));
    dispatch(setTemps(data.data.list.map(elem => elem.main.temp)));
  } catch (err) {
    throw err;
  }
};
