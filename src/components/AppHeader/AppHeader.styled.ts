import { getScreenWidthWithMargin } from "@utils/dimensions";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const StyledHeader = styled.View<{readonly height: number}>`
  min-height: ${({ height }) => height}px;
  padding-bottom: 10px;
  width: ${getScreenWidthWithMargin()}px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: flex-end;
`;

export const HeaderButtonContainer = styled.View<{readonly isLeft: boolean}>`
  flex-direction: row;
  justify-content: ${({ isLeft }) => isLeft ? "flex-start" : "flex-end"};
  align-items: center;
`;

export const StyledLogoImage = styled(Image)`
  width: 40px;
  height: 40px;
`;
