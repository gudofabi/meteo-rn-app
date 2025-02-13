export const WEATHER_INTERPRATIONS = [
  {
    codes: [0],
    label: "Sunny",
    image: require("../assets/images/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Cloudy",
    image: require("../assets/images/clouds.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Rainy",
    image: require("../assets/images/rain.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Snowy",
    image: require("../assets/images/snow.png"),
  },
  {
    codes: [95, 96, 99],
    label: "Thunderous",
    image: require("../assets/images/thunder.png"),
  },
];

export const getWeatherInter = (code: number) => {
  return WEATHER_INTERPRATIONS.find((inter) => inter.codes.includes(code));
};

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
