import {
  LOCATION_WEATHER,
  FIVE_DAYS_WEATHER,
  TOGGLE_NIGHT_MODE,
  TOGGLE_CELSIUS_MODE,
  FETCH_DATA,
} from "../actions/types";

const initialState = {
  city: null,
  // weakWeather: [
  // ],
  weakWeather: [
    {
      Date: "2021-04-27T07:00:00-03:00",
      EpochDate: 1619517600,
      Temperature: {
        Minimum: {
          Value: 71,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 81,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 17,
        IconPhrase: "Partly sunny w/ t-storms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Heavy",
      },
      Night: {
        Icon: 42,
        IconPhrase: "Mostly cloudy w/ t-storms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Heavy",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=1&lang=en-us",
      Link:
        "http://www.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=1&lang=en-us",
    },
    {
      Date: "2021-04-28T07:00:00-03:00",
      EpochDate: 1619604000,
      Temperature: {
        Minimum: {
          Value: 70,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 78,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 17,
        IconPhrase: "Partly sunny w/ t-storms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=2&lang=en-us",
      Link:
        "http://www.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=2&lang=en-us",
    },
    {
      Date: "2021-04-29T07:00:00-03:00",
      EpochDate: 1619690400,
      Temperature: {
        Minimum: {
          Value: 67,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 78,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 39,
        IconPhrase: "Partly cloudy w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=3&lang=en-us",
      Link:
        "http://www.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=3&lang=en-us",
    },
    {
      Date: "2021-04-30T07:00:00-03:00",
      EpochDate: 1619776800,
      Temperature: {
        Minimum: {
          Value: 66,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 78,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=4&lang=en-us",
      Link:
        "http://www.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=4&lang=en-us",
    },
    {
      Date: "2021-05-01T07:00:00-03:00",
      EpochDate: 1619863200,
      Temperature: {
        Minimum: {
          Value: 65,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 78,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=5&lang=en-us",
      Link:
        "http://www.accuweather.com/en/br/rio-de-janeiro/45449/daily-weather-forecast/45449?day=5&lang=en-us",
    },
  ],
  loading: false,
  // results: [],
  results: [
    {
      Version: 1,
      Key: "60449",
      Type: "City",
      Rank: 10,
      LocalizedName: "Santiago",
      Country: {
        ID: "CL",
        LocalizedName: "Chile",
      },
      AdministrativeArea: {
        ID: "RM",
        LocalizedName: "Región Metropolitana de Santiago",
      },
    },
    {
      Version: 1,
      Key: "226081",
      Type: "City",
      Rank: 10,
      LocalizedName: "Seoul",
      Country: {
        ID: "KR",
        LocalizedName: "South Korea",
      },
      AdministrativeArea: {
        ID: "11",
        LocalizedName: "Seoul",
      },
    },
    {
      Version: 1,
      Key: "300597",
      Type: "City",
      Rank: 10,
      LocalizedName: "Singapore",
      Country: {
        ID: "SG",
        LocalizedName: "Singapore",
      },
      AdministrativeArea: {
        ID: "01",
        LocalizedName: "Central Singapore",
      },
    },
    {
      Version: 1,
      Key: "22889",
      Type: "City",
      Rank: 11,
      LocalizedName: "Sydney",
      Country: {
        ID: "AU",
        LocalizedName: "Australia",
      },
      AdministrativeArea: {
        ID: "NSW",
        LocalizedName: "New South Wales",
      },
    },
    {
      Version: 1,
      Key: "102323",
      Type: "City",
      Rank: 11,
      LocalizedName: "Shijiazhuang",
      Country: {
        ID: "CN",
        LocalizedName: "China",
      },
      AdministrativeArea: {
        ID: "HE",
        LocalizedName: "Hebei",
      },
    },
    {
      Version: 1,
      Key: "102136",
      Type: "City",
      Rank: 11,
      LocalizedName: "Shenyang",
      Country: {
        ID: "CN",
        LocalizedName: "China",
      },
      AdministrativeArea: {
        ID: "LN",
        LocalizedName: "Liaoning",
      },
    },
    {
      Version: 1,
      Key: "106577",
      Type: "City",
      Rank: 11,
      LocalizedName: "Shanghai",
      Country: {
        ID: "CN",
        LocalizedName: "China",
      },
      AdministrativeArea: {
        ID: "SH",
        LocalizedName: "Shanghai",
      },
    },
    {
      Version: 1,
      Key: "295212",
      Type: "City",
      Rank: 11,
      LocalizedName: "Saint Petersburg",
      Country: {
        ID: "RU",
        LocalizedName: "Russia",
      },
      AdministrativeArea: {
        ID: "SPE",
        LocalizedName: "Saint Petersburg",
      },
    },
    {
      Version: 1,
      Key: "102257",
      Type: "City",
      Rank: 13,
      LocalizedName: "Shantou",
      Country: {
        ID: "CN",
        LocalizedName: "China",
      },
      AdministrativeArea: {
        ID: "GD",
        LocalizedName: "Guangdong",
      },
    },
    {
      Version: 1,
      Key: "61622",
      Type: "City",
      Rank: 13,
      LocalizedName: "Shaoxing",
      Country: {
        ID: "CN",
        LocalizedName: "China",
      },
      AdministrativeArea: {
        ID: "ZJ",
        LocalizedName: "Zhejiang",
      },
    },
  ],
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
