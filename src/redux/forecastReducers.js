import Type from "./forecastTypes";

const initialState = {
  location: "",
  data: {},
  dates: [],
  temps: [],
  selected: {
    date: "",
    temp: null
  }
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.CHANGE_LOCATION:
      return {...state, location: action.location};
    case Type.SET_DATA:
      return action.data;
    case Type.SET_DATES:
      return action.dates;
    case Type.SET_TEMPS:
      return action.temps;
    case Type.SET_SELECTED_DATE:
      return action.date;
    case Type.SET_SELECTED_TEMP:
      return {
        ...state,
        selected: {
          date: state.selected.date,
          temp: action.temp
        }
      };
    case Type.SET_SELECTED_DATE:
      return {
        ...state,
        selected: {
          date: action.date,
          temp: state.selected.temp
        }
      };
    default:
      return state;
  }
};
