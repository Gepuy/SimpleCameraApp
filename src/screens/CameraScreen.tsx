import { AppView } from "@components/AppPage/AppPage";
import { NavigationProps } from "@navigation/navigation-types";
import { useNavigation } from "@react-navigation/core";
import { Camera } from "expo-camera";
import { PermissionStatus } from "expo-modules-core/src/PermissionsInterface";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { withTheme } from "styled-components";
import styled from "styled-components/native";


const _CameraScreen = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      navigate("Preview", { photo });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <AppView title="Take a picture">
      <Container>
        <StyledCamera ref={cameraRef} ratio="16:9"/>
        <CaptureButton onPress={takePicture}>
          <InnerCircle />
        </CaptureButton>
      </Container>
    </AppView>
  );
};

export const CameraScreen = withTheme(_CameraScreen);

const Container = styled.View`
  flex: 1;
`;

const StyledCamera= styled(Camera)`
  flex: 1;
`;

const CaptureButton = styled.TouchableOpacity`
    position: absolute;
    width: 70px;
    height: 70px;
    bottom: 35px;
    align-self: center;
    background-color: transparent;
    border-radius: 40px;
    border-width: 3px;
    border-color: ${({ theme }) => theme.colors.white};
    justify-content: center;
    align-items: center; 
`;

const InnerCircle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
`;
