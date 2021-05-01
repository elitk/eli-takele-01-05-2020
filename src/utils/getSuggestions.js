import axios from "axios";
import { apiKey } from "../api/config";
axios.defaults.headers("Access-Control-Allow-Origin", "*");

export const getSuggestions = async (value) => {
  return await axios.get(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${value}`
  );
};
