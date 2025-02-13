import { Image, View } from "react-native";
import { s } from "./ForecastListItem.style";
import { Title } from "../Title/Title";

interface props {
  image: any;
  day: String;
  date: String;
  temp: String | Number;
}
export function ForecastListItem({ image, day, date, temp }: props) {
  return (
    <View style={s.container}>
      <Image style={s.img} source={image} resizeMode="cover" />
      <Title style={s.day}>{day}</Title>
      <Title style={s.date}>{date}</Title>
      <Title style={s.temp}>{temp}°</Title>
    </View>
  );
}
