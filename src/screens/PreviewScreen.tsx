import { AppView } from "@components/AppPage/AppPage";
import { MacroOverlay } from "@components/PreviewScreen/MacroOverlay";
import { StyledText } from "@components/StyledText/StyledText.styled";
import useMediaLibraryPermissions from "@hooks/useMediaLibraryPermissions";
import { AppNavigatorParamsList } from "@navigation/navigation-types";
import { RouteProp, useRoute } from "@react-navigation/native";
import { logoIcon } from "@utils/asset-imports";
import { getScreenWidth } from "@utils/dimensions";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import React, { useLayoutEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import ViewShot from "react-native-view-shot";
import { ThemeInterface } from "styled-components";
import styled, { withTheme } from "styled-components/native";

type PreviewScreenProps = {
  readonly theme: ThemeInterface;
}

const ALBUM_NAME = "Persikas";

const _PreviewScreen = ({ theme }: PreviewScreenProps) => {
  const route = useRoute<RouteProp<AppNavigatorParamsList, "Preview">>();
  const { photo } = route.params;

  const viewShotRef = useRef<ViewShot>(null);
  const [processedPhoto, setProcessedPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const permissionGranted = useMediaLibraryPermissions();
  const [layoutDone, setLayoutDone] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (!viewShotRef.current || !layoutDone) return;

    const captureImage = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const uri = await viewShotRef.current.capture();
        setProcessedPhoto(uri);
        setLoading(false);
      } catch (error) {
        console.error("Error capturing image:", error);
        setLoading(false);
      }
    };

    captureImage();
  }, [layoutDone]);

  const saveImage = async () => {
    if (!permissionGranted) {
      Alert.alert("Error", "Media Library permissions are required to save images.");
      return;
    }

    if (processedPhoto) {
      try {
        const folderUri = FileSystem.documentDirectory + "photos";
        const folderInfo = await FileSystem.getInfoAsync(folderUri);

        if (!folderInfo.exists) {
          await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });
        }

        const fileUri = folderUri + `/Photo_${Date.now()}.jpg`;
        await FileSystem.copyAsync({
          from: processedPhoto,
          to: fileUri,
        });

        const asset = await MediaLibrary.createAssetAsync(fileUri);

        const album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);
        if (!album) {
          await MediaLibrary.createAlbumAsync(ALBUM_NAME, asset, false);
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);
        }

        Alert.alert("Success", "Photo saved to device storage!");
      } catch (error) {
        console.error("Error saving image:", error);
      }
    } else {
      Alert.alert("Failed to save image to device storage!");
    }
  };

  return (
    <AppView title="Picture preview">
      <Container>
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.burntSienna} />
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
        <HiddenView>
          <ViewShot
            ref={viewShotRef}
            options={{ format: "jpg", quality: 1.0 }}
            onLayout={() => setLayoutDone(true)}
          >
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
