import AppNavigator from "@navigation/AppNavigator";
import React from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
