import {
  LOCATION_WEATHER,
  FIVE_DAYS_WEATHER,
  TOGGLE_NIGHT_MODE,
  TOGGLE_CELSIUS_MODE,
  FETCH_DATA,
} from "../actions/types";

const initialState = {
  city: null,
  weakWeather: [],
  loading: false,
  nightToggle: false,
  celsiusToggle: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
        weakWeather: [],
        city: null,
      };
    case LOCATION_WEATHER:
      return {
        ...state,
        weakWeather: payload.weather,
        loading: false,
        city: payload.city,
      };
    case FIVE_DAYS_WEATHER:
      return {
        ...state,
        weakWeather: payload.weather,
        loading: false,
        city: payload.city,
      };

    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightToggle: !state.nightToggle,
      };

    case TOGGLE_CELSIUS_MODE:
      return {
        ...state,
        celsiusToggle: !state.celsiusToggle,
      };

    default:
      return state;
  }
}
