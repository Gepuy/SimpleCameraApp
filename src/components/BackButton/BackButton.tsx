import { useNavigation } from "@react-navigation/native";
import { backIcon } from "@utils/asset-imports";
import { NavigationProps } from "navigation";
import React from "react";
import { Image } from 'expo-image';
import styled from "styled-components/native";


export const BackButton = () => {
    const { goBack } = useNavigation<NavigationProps>();

    return (
        <StyledBackButton
            onPress={goBack}
        >
            <BackButtonIcon source={backIcon} contentFit="contain"/>
        </StyledBackButton>
    );
};

const StyledBackButton = styled.TouchableOpacity`
  align-self: flex-start;
  justify-content: center;
  align-items: center;
`;

const BackButtonIcon = styled(Image)`
  width: 26px;
  height: 26px;
`;
