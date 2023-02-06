import {
  TouchableOpacity,
  LogBox,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  PermissionStatus,
  useMediaLibraryPermissions,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { useAppDispatch } from '../../hooks/reduxHooks';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import { setThumbnailUri, setMedia } from '../../store/slices/ticketData';
import { memo } from 'react';

LogBox.ignoreAllLogs();

function MediaBtn() {
  const t = useCustomColors();
  const dispatch = useAppDispatch();

  const [mediaLibraryPermissionInformation, requestMediaPermission] =
    useMediaLibraryPermissions();

  async function verifyMediaPermissions() {
    if (
      mediaLibraryPermissionInformation?.status ===
      PermissionStatus.UNDETERMINED
    ) {
      const mediaPermissionResponse = await requestMediaPermission();
      return mediaPermissionResponse.granted;
    }
    if (mediaLibraryPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Nie wyrażono zgody na dostęp do biblioteki zdjęć',
        'Poprzednie zapytanie o udzielenie zgód zostało odrzucone. Aby aplikacja poprawnie działa, musisz wyrazić zgodę w ustawieniach Twojego urządzenia.'
      );
      return false;
    }
    return true;
  }

  async function pickMediaHandler() {
    const hasPermission = await verifyMediaPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });
    if (!image.canceled && image.assets) {
      if (image.assets[0].type === 'video' && image.assets[0].uri) {
        const thumbnailImage = await VideoThumbnails.getThumbnailAsync(
          image.assets[0].uri,
          {
            time: 1000,
          }
        );
        dispatch(setMedia(image.assets[0].uri));
        dispatch(setThumbnailUri(thumbnailImage.uri));
      } else {
        dispatch(setMedia(image.assets[0].uri));
        dispatch(setThumbnailUri(image.assets[0].uri));
      }
    }
  }

  return (
    <TouchableOpacity
      onPress={pickMediaHandler}
      style={[styles.container, { backgroundColor: t.bgTertiaryGrouped }]}>
      <Ionicons name="image-outline" color={t.tint} size={32} />
      <Text style={[styles.text, { color: t.tint }]}>Wybierz z galerii</Text>
    </TouchableOpacity>
  );
}

export default memo(MediaBtn);

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
  container: {
    marginHorizontal: 5,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 110,
    height: 80,
  },
});
