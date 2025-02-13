import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  city: {},
  inter: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  inter_txt: {
    fontSize: 18,
    marginTop: 10,
  },
  temp_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  temp: {
    fontSize: 140,
  },
  img: { height: 90, width: 90 },
});
