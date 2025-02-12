import { View } from "react-native";
import { s } from "./MeteoAdvanced.style";
import { Title } from "../Title/Title";

interface props {
  sunrise: any;
  sunset: any;
  windspeed: any;
}
export function MeteoAdvanced({ sunrise, sunset, windspeed }: props) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledValue>{sunrise}</StyledValue>
        <StyledLabel style={s.label}>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{sunset}</StyledValue>
        <StyledLabel style={s.label}>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{windspeed} km/h</StyledValue>
        <StyledLabel style={s.label}>Wind Speed</StyledLabel>
      </StyledContainer>
    </View>
  );
}

const StyledContainer = ({ children }: any) => {
  return <View style={{ alignItems: "center" }}>{children}</View>;
};

const StyledLabel = ({ children }: any) => {
  return <Title style={{ fontSize: 20 }}>{children}</Title>;
};

const StyledValue = ({ children }: any) => {
  return <Title style={{ fontSize: 15 }}>{children}</Title>;
};
