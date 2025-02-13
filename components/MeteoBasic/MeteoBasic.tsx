import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./MeteoBasic.style";
import { Title } from "../Title/Title";
import { Clock } from "../Clock/Clock";
import { router } from "expo-router";

interface props {
  temperature: Number;
  interpretation: any;
  city: String;
  dialyWheather: any;
}

export function MeteoBasic({
  temperature,
  interpretation,
  city,
  dialyWheather,
}: props) {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Title>{city}</Title>
      </View>
      <View style={s.inter}>
        <Title style={s.inter_txt}>{interpretation.label}</Title>
      </View>
      <View style={s.temp_box}>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/forecasts",
              params: { city, ...dialyWheather },
            })
          }
        >
          <Title style={s.temp}>{temperature}°</Title>
        </TouchableOpacity>
        <Image style={s.img} source={interpretation.image} resizeMode="cover" />
      </View>
    </>
  );
}
