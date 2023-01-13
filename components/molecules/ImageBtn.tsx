import { LogBox, Text, StyleSheet, Alert } from 'react-native';
import {
	PermissionStatus,
	MediaTypeOptions,
	launchCameraAsync,
	useCameraPermissions,
} from 'expo-image-picker';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setMedia, setThumbnailUri } from '../../store/slices/ticketMedia';
import * as VideoThumbnails from 'expo-video-thumbnails';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

LogBox.ignoreAllLogs();

export default function ImageBtn() {
	const t = useCustomColors();
	const dispatch = useAppDispatch();

	const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

	async function verifyPermissions() {
		if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}
		if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Nie wyrażono zgody na dostęp do kamery / biblioteki zdjęć',
				'Aby aplikacja poprawnie działa, musisz wyraźić zgody.'
			);
			return false;
		}
		return true;
	}

	async function takeImageHandler() {
		const hasPermission = await verifyPermissions();
		if (!hasPermission) {
			return;
		}
		const image = await launchCameraAsync({
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
				dispatch(setMedia(image));
				dispatch(setThumbnailUri(thumbnailImage.uri));
			} else {
				dispatch(setMedia(image));
				dispatch(setThumbnailUri(image.assets[0].uri));
			}
		}
	}

	return (
		<TouchableOpacity
			onPress={takeImageHandler}
			style={[styles.container, { backgroundColor: t.bgTertiaryGrouped }]}
		>
			<Ionicons name="camera-outline" color={t.tint} size={32} />
			<Text style={[styles.text, { color: t.tint }]}>Zrób zdjęcie</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		marginTop: 10,
		fontSize: 12,
		textAlign: 'center',
		fontWeight: '500',
	},
	container: {
		marginHorizontal: 5,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 8,
		paddingVertical: 12,
		width: 110,
		height: 80,
	},
});