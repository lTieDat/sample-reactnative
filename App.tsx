import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { DrawerLayout } from "./components/navigation/app.navigations";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  return (
    <NavigationContainer>
      <DrawerLayout />
    </NavigationContainer>
  );
}
