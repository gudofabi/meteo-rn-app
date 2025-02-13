import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "@/api/meteo";

// components
import Home from "@/pages/Home/Home";
import { Alert, View } from "react-native";
import { Title } from "@/components/Title/Title";

import { s } from "./index.style";

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

  const func_fetchCoodsByCity = async (city: String) => {
    try {
      const coordsRes = await MeteoAPI.fetchCoodsByCity(city);
      setCoordinates(coordsRes as any);
    } catch (error: any) {
      Alert.alert("Ouch! ", error);
    }
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
      {weather && city ? (
        <Home
          weather={weather}
          city={city}
          onSubmitSearch={func_fetchCoodsByCity}
        />
      ) : (
        <Title style={s.loading}>Loading...</Title>
      )}
    </View>
  );
}
