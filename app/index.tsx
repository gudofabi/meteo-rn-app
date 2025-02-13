import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import Home from "@/pages/Home/Home";

import { s } from "./index.style";

import backgroundImg from "../assets/images/background.png";
import { MeteoAPI } from "@/api/meteo";

export default function Index() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    func_getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      func_fetchWeatherByCoods(coordinates);
      func_fetchCityByCoods(coordinates);
    }
  }, [coordinates]);

  const func_fetchWeatherByCoods = async (coords: any) => {
    const weatherRes = await MeteoAPI.fetchWeatherFromCoods(coords);
    setWeather(weatherRes);
  };

  const func_fetchCityByCoods = async (coords: any) => {
    const cityRes = await MeteoAPI.fetchCityByCoods(coords);
    setCity(cityRes);
  };

  const func_getUserCoordinates = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({
        lat: "48.85",
        lng: "2.35",
      });
    }
  };

  console.log(city);

  return (
    <View style={s.container}>
      {weather && city && <Home weather={weather} city={city} />}
    </View>
  );
}
