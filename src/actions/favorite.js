import { ADD_FAVORITE, FETCH_DATA, REMOVE_FAVORITE } from "./types";
import axios from "axios";
import { apiKey, endPoints } from "../api/config";
axios.defaults.headers("Access-Control-Allow-Origin", "*");

export const addToFavorite = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_FAVORITE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeFromFavorite = (data) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentWeather = (data) => async (dispatch) => {
  dispatch({
    type: FETCH_DATA,
  });
  try {
    return await axios.get(
      `${endPoints.currentConditions}${data}?apikey=${apiKey}&`
    );
  } catch (error) {
    console.error(error);
  }
};
