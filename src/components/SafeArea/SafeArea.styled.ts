import { IS_IOS } from "@utils/platform";
import { StatusBar } from "react-native";
import styled from "styled-components/native";


export const StyledSafeAreaView = styled.SafeAreaView<{
    readonly height?: string;
    readonly shouldShowPaddingTop?: boolean
}>`
  height: ${({ height }) => height ? height : "100%"};
  width: 100%;
  align-items: center;
  padding-top: ${({ shouldShowPaddingTop = !IS_IOS }) => shouldShowPaddingTop ? StatusBar.currentHeight : 0}px;
`;
