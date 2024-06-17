import { Dimensions } from "react-native";

export const getScreenWidth = ()  => {
    return Dimensions.get("window").width ? Dimensions.get("window").width : 320;
};

export const getScreenWidthWithMargin = () => {
    return getScreenWidth() - 40;
};

export const getScreenHeight = () => {
    return Dimensions.get("window").height ? Dimensions.get("window").height : 568;
};
