import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { s } from "./Home.style";
import { getWeatherInter } from "@/utils/meteo-utils";

// components
import { View } from "react-native";
import { MeteoBasic } from "@/components/MeteoBasic/MeteoBasic";
import { MeteoAdvanced } from "@/components/MeteoAdvanced/MeteoAdvanced";
import { SearchBar } from "@/components/SearchBar/SearchBar";

interface props {
  weather: Object | any;
  city: String;
  onSubmitSearch: (e: any) => void;
}

export default function Home({ weather, city, onSubmitSearch }: props) {
  const currentWeather = weather.current_weather;
  const currentInter = getWeatherInter(currentWeather.weathercode);

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          dialyWheather={weather.daily}
          temperature={Math.round(currentWeather.temperature)}
          city={city}
          interpretation={currentInter}
        />
      </View>
      <View style={s.searhbar_container}>
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View style={s.meteo_adv}>
        <MeteoAdvanced
          sunrise={weather.daily.sunrise[0].split("T")[1]}
          sunset={weather.daily.sunset[0].split("T")[1]}
          windspeed={currentWeather.windspeed}
        />
      </View>
    </>
  );
}
