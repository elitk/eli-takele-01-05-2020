import {
  LOCATION_WEATHER,
  FIVE_DAYS_WEATHER,
  TOGGLE_NIGHT_MODE,
  TOGGLE_CELSIUS_MODE,
  FETCH_DATA,
} from "./types";
import axios from "axios";
import { apiKey, endPoints } from "../api/config";
// axios.defaults.headers = { "Access-Control-Allow-Origin": "*" };
export const getWeatherByLocation = (data) => async (dispatch) => {
  dispatch({
    type: FETCH_DATA,
  });
  try {
    const city = await axios.get(`${endPoints.geoposition}${data}`);
    const res = await axios.get(
      `${endPoints.locationKey}${city.data.Key}?apikey=${apiKey}`
    );

    dispatch({
      type: LOCATION_WEATHER,
      payload: { weather: res.data.DailyForecasts, city: city.data },
    });
  } catch (error) {
    console.error(error);
  }
};
export const getFiveDaysWeather = (data) => async (dispatch) => {
  dispatch({
    type: FETCH_DATA,
  });

  try {
    const res = await axios.get(
      `${endPoints.locationKey}${data.cityKey}?apikey=${apiKey}`
    );
    dispatch({
      type: FIVE_DAYS_WEATHER,
      payload: { weather: res.data.DailyForecasts, city: data },
    });
  } catch (error) {
    console.error(error);
  }
};

export const toggleNightMode = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_NIGHT_MODE,
  });
};
export const toggleCelsiusMode = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_CELSIUS_MODE,
  });
};
