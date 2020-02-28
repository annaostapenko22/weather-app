import axios from "axios";

import {
  changeLocation,
  setSelectedDate,
  setSelectedTemp,
  setData,
  setDates,
  setTemps
} from "./forecastActions";

axios.defaults.baseURL = `http://api.openweathermap.org/data/2.5/forecast?`
const key = `3663e7e56c8fe1c09d1e1f727565afac`
export const handleChangeLocation = (location)=> async dispatch => {
    try {
        const data = await axios.get(`q=${location}&appid=${key}&units=metric`)
        console.log("OPERATION DATA=>",data)
        dispatch(changeLocation(data))
    }catch(err){
        throw err;
    }
}