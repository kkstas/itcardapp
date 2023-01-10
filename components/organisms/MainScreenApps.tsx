import { Text, StyleSheet } from 'react-native';
import AppCardBlueprint from '../atoms/AppCardBlueprint';
import useCustomColors from '../../hooks/useCustomColors';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

interface MainScreenAppsProps {
	navigateToInfo: () => void;
	navigateToTicket: () => void;
	navigateToScanReceipt: () => void;
	navigateToLocateATM: () => void;
}

export default function MainScreenApps({
	navigateToInfo,
	navigateToTicket,
	navigateToScanReceipt,
	navigateToLocateATM,
}: MainScreenAppsProps) {
	const t = useCustomColors();
	return (
		<>
			<Text style={[styles.textApp, { color: t.labelSecondary }]}>Skróty aplikacji:</Text>
			<Animated.View entering={FadeInDown.duration(300)}>
				<AppCardBlueprint
					title="Znajdź bankomat w okolicy"
					content="Moduł służący do lokalizowania bankomatów na podstawie informacji o położeniu urządzenia oraz preferencji użytkownika"
					showLearnMore={false}
					icon="location-outline"
					pressHandler={navigateToLocateATM}
				/>
			</Animated.View>

			<Animated.View entering={FadeInDown.duration(300).delay(100)}>
				<AppCardBlueprint
					title="Skanuj potwierdzenie"
					content="Moduł służący do zapisywania elektronicznego potwierdzenia dokonania transakcji w bankomacie."
					showLearnMore={true}
					icon="qr-code-outline"
					learnMoreHandler={navigateToInfo}
					pressHandler={navigateToScanReceipt}
				/>
			</Animated.View>

			<Animated.View entering={FadeInDown.duration(300).delay(200)}>
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
					pressHandler={navigateToTicket}
				/>
			</Animated.View>

			<Animated.View entering={FadeInDown.duration(300).delay(300)}>
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
			</Animated.View>

			<Animated.View entering={FadeInDown.duration(300).delay(400)}>
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
			</Animated.View>
		</>
	);
}

const styles = StyleSheet.create({
	textApp: {
		marginTop: 25,
		marginLeft: 15,
		width: '85%',
		fontSize: 22,
		fontWeight: '400',
		paddingBottom: 7,
	},
});
