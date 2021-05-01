import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CURRENT_WEATHER,
} from "../actions/types";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites"))
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
  currentWeather: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAVORITE:
      state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
      return {
        ...state,
      };

    case REMOVE_FAVORITE:
      let index = state.favorites.findIndex(
        (favorite) => favorite.cityKey === payload
      );
      state.favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));

      return {
        ...state,
      };
    case CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: [payload, ...state.currentWeather],
      };
    default:
      return state;
  }
}
