import React from "react";
import { getCelsiusTemperature } from "../../utils//getCelsiusTemperature";

const WeakItem = (props) => {
  const {
    nightToggle,
    celsiusToggle,
    weakItem,
    weakItem: {
      Temperature: { Minimum, Maximum },
    },
  } = props;
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div class="next-5-days__row">
      <div class="next-5-days__date">
        {days[new Date(`${weakItem.Date}`).getDay()]}

        <div class="next-5-days__label">
          {new Date(weakItem.Date)
            .toLocaleDateString("he", {
              day: "2-digit",
              month: "2-digit",
            })
            .replace(/\./g, "/")}
        </div>
      </div>

      <div class="next-5-days__low">
        {celsiusToggle
          ? getCelsiusTemperature(Minimum.Value)
          : `${Minimum.Value}°`}
        <div class="next-5-days__label">Low</div>
      </div>

      <div class="next-5-days__high">
        {celsiusToggle
          ? getCelsiusTemperature(Maximum.Value)
          : `${Maximum.Value}°`}
        <div class="next-5-days__label">High</div>
      </div>

      <div class="next-5-days__icon">
        <img
          src={`https://vortex.accuweather.com/adc2010/images/slate/icons/${
            weakItem[nightToggle ? "Day" : "Night"].Icon
          }.svg`}
          alt="icon"
        />
      </div>

      <div class="next-5-days__rain">
        {weakItem[nightToggle ? "Day" : "Night"].HasPrecipitation ? "✓" : "✗"}
        <div class="next-5-days__label">Precipitation</div>
      </div>

      <div class="next-5-days__wind">
        {weakItem[nightToggle ? "Day" : "Night"].HasPrecipitation
          ? weakItem[nightToggle ? "Day" : "Night"].PrecipitationType
          : "✗"}
        <div class="next-5-days__label">PrecipitationType</div>
      </div>
    </div>
  );
};

export default WeakItem;
