import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";

import backgroundImg from "../assets/images/background.png";
import { Title } from "@/components/Title/Title";

export default function RootLayout() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("../assets/fonts/Alata-Regular.ttf"),
  });

  return (
    <ImageBackground
      imageStyle={{
        opacity: 0.75,
      }}
      source={backgroundImg}
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 20,
      }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {isFontLoaded && (
            <Stack
              screenOptions={{
                headerStyle: {
                  backgroundColor: "transparent",
                },
                headerTintColor: "white",
                headerShadowVisible: false,
              }}
            >
              <Stack.Screen
                name="index"
                options={{
                  title: "Home",
                  headerShown: false,
                  contentStyle: {
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Stack.Screen
                name="forecasts"
                options={{
                  title: "Forecasts",
                  headerShown: true,
                  contentStyle: {
                    backgroundColor: "transparent",
                  },
                }}
              />
            </Stack>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
