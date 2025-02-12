import { Image, Text, View } from "react-native";
import { s } from "./MeteoBasic.style";
import { Title } from "../Title/Title";
import { Clock } from "../Clock/Clock";

interface props {
  temperature: Number;
  interpretation: any;
  city: String;
}

export function MeteoBasic({ temperature, interpretation, city }: props) {
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
        <Title style={s.temp}>{temperature}°</Title>
        <Image style={s.img} source={interpretation.image} resizeMode="cover" />
      </View>
    </>
  );
}
