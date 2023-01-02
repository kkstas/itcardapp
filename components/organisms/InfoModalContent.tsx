import { View, Pressable, StyleSheet, Text } from 'react-native';
import SmallButtonWithIcon from '../atoms/SmallButtonWithIcon';
import ContentBox from '../atoms/ContentBox';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';

interface InfoModalContentProps {
	appTitle: string;
	appDescription: string;
	closeModal: () => void;
}

export default function InfoModalContent({
	appTitle,
	appDescription,
	closeModal,
}: InfoModalContentProps) {
	const t = useCustomColors();
	return (
		<View style={[styles.container, { backgroundColor: t.bgPrimary }]}>
			<View style={styles.textContainer}>
				<Text style={{ fontSize: 12, color: t.text }}>Opis modułu</Text>
				<Text style={[styles.appTitle, { color: t.text }]}>Skanuj potwierdzenie</Text>

				<Text style={[styles.appDescription, { color: t.labelPrimary }]}>
					Zadaniem modułu jest skanowanie kodu QR wyświetlającego się na końcu transakcji.
					Uzyskane w ten sposób dane są odszyfrowywane i zapisywane lokalnie w pamięci
					urządzenia, stanowiąc dowód dokonania transakcji. Zeskanowane transakcje można
					znaleźć w zakładce "Dokumenty".
				</Text>
				<View style={[styles.separator, { borderBottomColor: t.text }]} />
				<Text style={{ color: t.labelPrimary, fontWeight: '600' }}>
					Moduł jest w trakcie tworzenia i został tu udostępniony eksperymentalnie w
					ramach testów.
				</Text>
			</View>
			<SmallButtonWithIcon text="powrót" onPress={closeModal} />
		</View>
	);
}

const styles = StyleSheet.create({
	separator: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginVertical: 10,
		paddingTop: 5,
		marginRight: '40%',
	},
	textContainer: {
		paddingHorizontal: 10,
		marginBottom: 25,
	},
	appTitle: {
		fontSize: 30,
		paddingBottom: 18,
	},
	appDescription: {
		fontSize: 14,
		lineHeight: 20,
	},
	container: {
		width: '90%',
		paddingVertical: 30,
		paddingHorizontal: 10,
		borderRadius: 12,
	},
});
