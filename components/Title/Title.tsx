import { Text, useWindowDimensions } from "react-native";
import { s } from "./Title.style";

interface props {
  children: any;
  style?: any;
}

const IPHONE_13_RATIO = 0.0011848341123222749;

export function Title({ children, style, ...resProps }: props) {
  const fontSize = style?.fontSize || s.title.fontSize;
  const { height } = useWindowDimensions();
  return (
    <Text
      style={[
        s.title,
        style,
        {
          fontSize: Math.round(fontSize * IPHONE_13_RATIO * height),
        },
      ]}
      {...resProps}
    >
      {children}
    </Text>
  );
}
