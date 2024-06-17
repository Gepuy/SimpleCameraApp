import { HeaderButtonContainer, StyledHeader, StyledLogoImage } from "@components/AppHeader/AppHeader.styled";
import { BackButton } from "@components/BackButton/BackButton";
import { StyledText } from "@components/StyledText/StyledText.styled";
import { useNavigation } from "@react-navigation/native";
import { logoIcon } from "@utils/asset-imports";
import { NavigationProps } from "navigation";
import React, { memo } from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

type AppHeaderProps = {
  readonly shouldShowLogo?: boolean;
  readonly title?: string;
  readonly height?: number;
};

const _AppHeader = ({
 shouldShowLogo, title, height = 55
}: AppHeaderProps) => {
  const { navigate } = useNavigation<NavigationProps>();

  const onHeaderTextPress = () => {
    navigate("Home");
  };

  return (
    <StyledHeader height={height}>
      <HeaderButtonContainer isLeft={true}>
        {shouldShowLogo ? (
          <TouchableOpacity onPress={onHeaderTextPress}>
            <StyledLogoImage source={logoIcon} contentFit="contain" />
          </TouchableOpacity>
        ) : (
          <BackButton />
        )}
      </HeaderButtonContainer>
      {title && (
        <TouchableWithoutFeedback>
          <TitleWrapper>
            <StyledText size={22}>{title}</StyledText>
          </TitleWrapper>
        </TouchableWithoutFeedback>
      )}
    </StyledHeader>
  );
};

export const AppHeader = memo(_AppHeader);

export const TitleWrapper = styled.View`
  margin-top: 8px;
`;
