import { Theme } from '@components/Theme/Theme';
import { AppNavigator } from "@navigation/AppNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, fontError] = useFonts({ "Gelion": require("./assets/fonts/Gelion-Medium.ttf"), });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Theme>
        <AppNavigator />
      </Theme>
    </SafeAreaProvider>
  );
}
