import { StyledText } from "@components/StyledText/StyledText.styled";
import { getScreenWidth } from "@utils/dimensions";
import React from "react";
import styled, { withTheme } from "styled-components/native";

type MacroOverlayProps = {
  readonly photoUri: string;
  readonly logoUri: unknown;
  readonly calories: string;
  readonly protein: string;
  readonly fat: string;
  readonly carbohydrates: string;
}

const _MacroOverlay = ({
 photoUri, logoUri, calories, protein, fat, carbohydrates
}: MacroOverlayProps) => {
  return (
    <OverlayContainer>
      <FullImage source={{ uri: photoUri }} />
      <Logo source={logoUri} />
      <TextWrapper>
        <TextInnerWrapper>
          <StyledText size={20} color="white" isBold alignSelf="flex-start">
            Ompletas su varske
          </StyledText>
          <Row>
            {calories && (
              <Container>
                <StyledText size={10} color="white" alignSelf="flex-start">
                  Kalorijos
                </StyledText>
                <StyledText size={20} color="white" isBold alignSelf="flex-start">
                  {calories}
                </StyledText>
              </Container>
            )}
            {protein && (
              <Container>
                <StyledText size={10} color="white" alignSelf="flex-start">
                  Baltymai
                </StyledText>
                <StyledText size={20} color="white" isBold alignSelf="flex-start">
                  {protein}
                </StyledText>
              </Container>
            )}
            {fat && (
              <Container>
                <StyledText size={10} color="white" alignSelf="flex-start">
                  Riebalai
                </StyledText>
                <StyledText size={20} color="white" isBold alignSelf="flex-start">
                  {fat}
                </StyledText>
              </Container>
            )}
            {carbohydrates &&
              <Container>
                <StyledText size={10} color="white" alignSelf="flex-start">
                  Angliavandeniai
                </StyledText>
                <StyledText size={20} color="white" isBold alignSelf="flex-start">
                  {carbohydrates}
                </StyledText>
              </Container>
            }
          </Row>
        </TextInnerWrapper>
      </TextWrapper>
    </OverlayContainer>
  );
};

export const MacroOverlay = withTheme(_MacroOverlay);


const OverlayContainer = styled.View`
  width: ${getScreenWidth()}px;
  height: ${getScreenWidth()}px;
  position: relative;
`;

const FullImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  position: absolute;
  top: 8px;
  right: 8px;
  height: 70px;
  width: 70px;
`;

const TextWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const TextInnerWrapper = styled.View`
  margin: 16px;
  gap: 12px;
`;

const Row = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
`;
