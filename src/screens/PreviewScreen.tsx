import { AppView } from "@components/AppPage/AppPage";
import { MacroOverlay } from "@components/PreviewScreen/MacroOverlay";
import { StyledText } from "@components/StyledText/StyledText.styled";
import { AppNavigatorParamsList } from "@navigation/navigation-types";
import { RouteProp, useRoute } from "@react-navigation/native";
import { logoIcon } from "@utils/asset-imports";
import { getScreenWidth } from "@utils/dimensions";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
import ViewShot from "react-native-view-shot";
import { ThemeInterface } from "styled-components";
import styled, { withTheme } from "styled-components/native";

type PreviewScreenProps = {
  readonly theme: ThemeInterface;
}

const _PreviewScreen = ({ theme }: PreviewScreenProps) => {
  const route = useRoute<RouteProp<AppNavigatorParamsList, "Preview">>();
  const { photo } = route.params;

  const viewShotRef = useRef(null);
  const [processedPhoto, setProcessedPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const processImage = async () => {
    if (!viewShotRef.current) return;
    try {
      const uri = await viewShotRef.current.capture();
      setProcessedPhoto(uri);
      setLoading(false);
    } catch (error) {
      console.error("Error capturing image:", error);
      alert("Error capturing image");
      setLoading(false);
    }
  };

  useEffect(() => {
    processImage();
  }, [viewShotRef.current]);

  const saveImage = async () => {
    if (processedPhoto) {
      try {
        const fileUri = FileSystem.documentDirectory + `photos/Photo_${Date.now()}.jpg`;
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "photos", { intermediates: true });
        await FileSystem.moveAsync({
          from: processedPhoto,
          to: fileUri,
        });

        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync("Persikas", asset, false);
        alert("Photo saved to device storage!");
      } catch (error) {
        console.error("Error saving image:", error);
      }
    } else {
      alert("Failed to save image to device storage!");
    }
  };

  return (
    <AppView title="Picture preview">
      <Container>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <PreviewImage source={{ uri: processedPhoto }} />
            <SaveButton onPress={saveImage}>
              <StyledText size={18} color={theme.colors.white}>
                Save Picture
              </StyledText>
            </SaveButton>
          </>
        )}
        <HiddenView >
          <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 1.0 }}>
            <MacroOverlay
              photoUri={photo.uri}
              logoUri={logoIcon}
              calories="98 kcal"
              protein="23g"
              fat="8g"
              carbohydrates="77g"
            />
          </ViewShot>
        </HiddenView>
      </Container>
    </AppView>
  );
};

export const PreviewScreen = withTheme(_PreviewScreen);

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const PreviewImage = styled.Image`
    width: ${getScreenWidth()}px;
    height: ${getScreenWidth()}px;
`;

const HiddenView = styled.View`
    position: absolute;
    top: -1000px;
`;

const SaveButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.burntSienna};
    padding: 12px 20px;
    border-radius: 5px;
    margin-top: 20px;
`;
