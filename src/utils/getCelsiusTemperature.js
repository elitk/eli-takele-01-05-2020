export const getCelsiusTemperature = (temperature) => {
  return parseInt((temperature - 32) / 1.8) + "°C";
};
