import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CameraCapturedPicture } from "expo-camera";

export type AppNavigatorParamsList = {
  readonly Home: undefined;
  readonly Camera: undefined;
  readonly Preview: {
      readonly photo?: CameraCapturedPicture
  };
};

export type NavigationProps = NativeStackNavigationProp<AppNavigatorParamsList>;
