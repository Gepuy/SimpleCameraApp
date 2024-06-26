import { EFontFamily } from "@types/enums";
import styled from "styled-components/native";

export const StyledText = styled.Text<{
    readonly font?: string;
    readonly size?: number;
    readonly color?: string;
    readonly alignSelf?: string;
    readonly alignText?: string;
    readonly marginRight?: number;
    readonly marginLeft?: number;
    readonly marginTop?: number;
    readonly marginBottom?: number;
    readonly isBold?: boolean;
}>`
  font-family: ${({ font }) =>  font ? font : EFontFamily.GELION};;
  align-items: center;
  font-size: ${({ size }) =>  size ? size : 18}px;
  color: ${({ color }) => color ? color : "black"};
  align-self: ${({ alignSelf }) => alignSelf ? alignSelf : "center"};
  text-align: ${({ alignText }) => alignText ? alignText : "center"};
  margin-right: ${({ marginRight }) => marginRight ? marginRight : 0}px;
  margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : 0}px;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : 0}px;
  font-weight: ${({ isBold }) => isBold ? "bold" : "normal"}
`;
