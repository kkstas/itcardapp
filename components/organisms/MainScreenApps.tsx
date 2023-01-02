import { Text, View, StyleSheet } from 'react-native';
import AppCardBlueprint from '../atoms/AppCardBlueprint';
import useCustomColors from '../../hooks/useCustomColors';

interface MainScreenAppsProps {
	navigateToInfo: () => void;
}

export default function MainScreenApps({ navigateToInfo }: MainScreenAppsProps) {
	const t = useCustomColors();
	const placeholderForPressHandlers = () => console.log('press');
	return (
		<>
			<Text style={[styles.textApp, { color: t.labelSecondary }]}>Skróty aplikacji:</Text>
			<AppCardBlueprint
				title="Skanuj potwierdzenie"
				content="Moduł służący do zapisywania elektronicznego potwierdzenia dokonania transakcji w bankomacie."
				showLearnMore={true}
				icon="qr-code-outline"
				learnMoreHandler={navigateToInfo}
				pressHandler={placeholderForPressHandlers}
			/>
			<AppCardBlueprint
				title="Utwórz zgłoszenie"
				content="Moduł służący do zgłaszania niezgodności w stanie lub działaniu bankomatów."
				icon="paper-plane-outline"
				showLearnMore={true}
				learnMoreHandler={() =>
					console.log(
						"Dodaj tę funkcję w MainScreenTemplate (przeniesienie do ekranu tworzenia zgłoszenia). Console.log wywołany przez handler buttonu 'Dowiedz się więcej'"
					)
				}
				pressHandler={placeholderForPressHandlers}
			/>
			<AppCardBlueprint
				title="Twoje zgłoszenia"
				content="Tu znajdziesz wysłane przez Ciebie zgłoszenia."
				icon="layers-outline"
				showLearnMore={false}
				learnMoreHandler={() =>
					console.log(
						"Dodaj tę funkcję w MainScreenTemplate (przeniesienie do ekranu tworzenia zgłoszenia). Console.log wywołany przez handler buttonu 'Dowiedz się więcej'"
					)
				}
			/>
			<AppCardBlueprint
				title="Serwisant"
				content="Moduł pracowniczy służący do tworzenia formularzy serwisowych."
				icon="settings-outline"
				showLearnMore={true}
				learnMoreHandler={() =>
					console.log(
						"Dodaj tę funkcję w MainScreenTemplate (przeniesienie do ekranu tworzenia zgłoszenia). Console.log wywołany przez handler buttonu 'Dowiedz się więcej'"
					)
				}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},

	textApp: {
		marginTop: 25,
		marginLeft: 15,
		width: '85%',
		fontSize: 22,
		fontWeight: '400',
		paddingBottom: 7,
	},
});
