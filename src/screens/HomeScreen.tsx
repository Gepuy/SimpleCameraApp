import { AppView, StyledText } from "@components/index";
import { NavigationProps } from "@navigation/navigation-types";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ThemeInterface } from "styled-components";
import { withTheme } from "styled-components/native";
import styled from "styled-components/native";

export type HomeScreenProps = {
  readonly theme: ThemeInterface;
};

const _HomeScreen = ({ theme } : HomeScreenProps) => {
    const { navigate } = useNavigation<NavigationProps>();

  return (
    <AppView title="Home" shouldShowLogo={true}>
      <Content>
        <StyledText size={24} marginBottom={20}>Simple Camera App</StyledText>
        <Button onPress={() => navigate("Camera")}>
          <StyledText size={18} color={theme.colors.white}>Make a Photo</StyledText>
        </Button>
      </Content>
    </AppView>
  );
};

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.burntSienna};
  padding: 12px 20px;
  border-radius: 5px;
`;


export const HomeScreen = withTheme(_HomeScreen);
