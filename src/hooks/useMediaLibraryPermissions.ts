import * as MediaLibrary from "expo-media-library";
import { PermissionStatus } from "expo-modules-core";
import { useEffect, useState } from "react";

const useMediaLibraryPermissions = () => {
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setPermissionGranted(status === PermissionStatus.GRANTED);
    };

    getPermission();
  }, []);

  return permissionGranted;
};

export default useMediaLibraryPermissions;
