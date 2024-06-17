import { lightTheme } from "@config/light-theme";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";


export const Theme = ({ children }) => {
  // TODO implement dark theme
  const selectedTheme = lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <StatusBar
        translucent
        backgroundColor={selectedTheme.colors.cosmicLatte}
      />
      {children}
    </ThemeProvider>
  );
};
