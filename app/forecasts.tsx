import { Header } from "@/components/Header/Header";
import { ForecastListItem } from "@/components/ForecastListItem/ForecastListItem";
import { Title } from "@/components/Title/Title";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { DAYS, getWeatherInter } from "@/utils/meteo-utils";

export default function Forecasts() {
  const { params } = useRoute();

  // Need to reconstruct the value of params bcoz it's STRING value
  const newParamObj = {
    time: [...params?.time.split(",")],
    weathercode: [...params?.weathercode.split(",")],
    temperature: [...params?.temperature_2m_max.split(",")],
  };

  const comp_forecastList = (
    <View
      style={{
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "#0000009c",
        borderRadius: 15,
      }}
    >
      {newParamObj.time.map((time: any, index: number) => {
        const weatherCode = newParamObj.weathercode[index];
        const image = getWeatherInter(parseInt(weatherCode))?.image;
        const temp = newParamObj.temperature[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formatedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });

        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formatedDate}
            temp={parseFloat(temp).toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params?.city} />
      {comp_forecastList}
    </>
  );
}
