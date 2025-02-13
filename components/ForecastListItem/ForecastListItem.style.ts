import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#0000004c",
  },
  img: {
    width: 40,
    height: 40,
  },
  day: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
  },
  temp: {
    textAlign: "right",
    width: 50,
    fontSize: 20,
  },
});
