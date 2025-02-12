import axios from "axios";

type coords = {
  lat: String;
  lng: String;
};

export class MeteoAPI {
  static async fetchWeatherFromCoods(coords: coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }
  static async fetchCityByCoods(coords: coords) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;

    return city || village || town;
  }
}
