import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { s } from "./Home.style";
import { Title } from "@/components/Title/Title";
import { MeteoBasic } from "@/components/MeteoBasic/MeteoBasic";
import { getWeatherInter } from "@/utils/meteo-utils";
import { MeteoAdvanced } from "@/components/MeteoAdvanced/MeteoAdvanced";

interface props {
  weather: Object | any;
  city: String;
}

export default function Home({ weather, city }: props) {
  const nav = useNavigation();
  const currentWeather = weather.current_weather;
  const currentInter = getWeatherInter(currentWeather.weathercode);

  useEffect(() => {
    nav.setOptions({ headerShown: false });
  }, [nav]);

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather.temperature)}
          city={city}
          interpretation={currentInter}
        />
      </View>
      <View style={s.searhbar_container}>
        <Title>Search Bar</Title>
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
