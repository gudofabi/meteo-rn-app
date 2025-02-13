import { View } from "react-native";
import { s } from "./Header.style";
import { Title } from "../Title/Title";

interface props {
  city: String;
}
export function Header({ city }: props) {
  return (
    <View style={s.container}>
      <Title style={s.title}>{city.toUpperCase()}</Title>
      <Title style={s.subtitle}>7 day forecasts</Title>
    </View>
  );
}
