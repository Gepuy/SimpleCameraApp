import { AppNavigatorParamsList } from "@navigation/navigation-types";
import { createNavigationContainerRef } from "@react-navigation/core";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CameraScreen } from "@screens/CameraScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { PreviewScreen } from "@screens/PreviewScreen";
import { Text } from "react-native";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const navigationRef = createNavigationContainerRef<AppNavigatorParamsList>();

  return (
    <NavigationContainer ref={navigationRef} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
