import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@screens/HomeScreen";

// import CameraScreen from '../screens/CameraScreen';
// import PreviewScreen from '../screens/PreviewScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*<Stack.Screen name="Camera" component={CameraScreen} />*/}
        {/*<Stack.Screen name="Preview" component={PreviewScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
