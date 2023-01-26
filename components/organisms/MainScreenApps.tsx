import { Text, StyleSheet, Alert, View } from "react-native";
import AppCardBlueprint from "../atoms/AppCardBlueprint";
import useCustomColors from "../../hooks/useCustomColors";
import Animated, { FadeInDown } from "react-native-reanimated";
import LoadingOverlay from "../atoms/LoadingOverlay";

export interface MainScreenAppsProps {
  navigateToInfo: (
    appTitle: string,
    appDescription: string,
    bottomInfo: string
  ) => void;
  navigateToTicket: () => void;
  navigateToScanReceipt: () => void;
  navigateToLocateATM: () => void;
  isFetchingLocation: boolean;
}

export default function MainScreenApps({
  navigateToInfo,
  navigateToTicket,
  isFetchingLocation,
  navigateToScanReceipt,
  navigateToLocateATM,
}: MainScreenAppsProps) {
  const t = useCustomColors();
  const scannerLearnMoreHandler = () => {
    navigateToInfo(
      "Skanuj potwierdzenie",
      `Zadaniem modułu jest skanowanie kodu QR wyświetlającego się na końcu transakcji. Uzyskane w ten sposób dane są odszyfrowywane i zapisywane lokalnie w pamięci urządzenia, stanowiąc dowód dokonania transakcji. Zeskanowane transakcje można znaleźć w zakładce "Dokumenty".`,
      "Moduł jest w trakcie tworzenia i został tu udostępniony eksperymentalnie w ramach testów."
    );
  };

  const ticketLearnMoreHandler = () => {
    navigateToInfo(
      "Utwórz zgłoszenie",
      "Zadaniem modułu jest umożliwienie przekazania informacji, lokalizacji i zdjęć/nagrań celem zgłoszenia uszkodzenia lub niepożądanego stanu bankomatu. Utworzone zgłoszenia zostają wysłane do serwera oraz (dla referencji użytkownika) są zapisywane w pamięci telefonu. Przycisk usuwania zgłoszenia ujawniający się na gest przesunięcia palcem w lewą stronę służy do usunięcia zgłoszenia wyłącznie z pamięci telefonu. Zgłoszenie wysłane do serwera pozostaje zapisane.",
      ""
    );
  };
  return (
    <>
      <Text style={[styles.textApp, { color: t.labelSecondary }]}>
        Skróty aplikacji:
      </Text>
      <Animated.View
        style={{ justifyContent: "flex-end", alignItems: "center" }}
        entering={FadeInDown.duration(300).delay(200)}
      >
        <AppCardBlueprint
          title="Znajdź bankomat w okolicy"
          content="Moduł służący do lokalizowania bankomatów na podstawie informacji o położeniu urządzenia oraz preferencji użytkownika"
          showLearnMore={false}
          icon="location-outline"
          pressHandler={navigateToLocateATM}
        />
        {isFetchingLocation && (
          <LoadingOverlay paddingBottom={12} fontSize={14} />
        )}
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(300).delay(330)}>
        <AppCardBlueprint
          title="Skanuj potwierdzenie"
          content="Moduł służący do zapisywania elektronicznego potwierdzenia dokonania transakcji w bankomacie."
          showLearnMore={true}
          icon="qr-code-outline"
          learnMoreHandler={scannerLearnMoreHandler}
          pressHandler={navigateToScanReceipt}
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(300).delay(460)}>
        <AppCardBlueprint
          title="Utwórz zgłoszenie"
          content="Moduł służący do zgłaszania niezgodności w stanie lub działaniu bankomatów."
          icon="paper-plane-outline"
          showLearnMore={true}
          learnMoreHandler={ticketLearnMoreHandler}
          pressHandler={navigateToTicket}
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(300).delay(600)}>
        <AppCardBlueprint
          title="Serwisant"
          content="Moduł pracowniczy służący do tworzenia formularzy serwisowych."
          icon="settings-outline"
          showLearnMore={true}
          learnMoreHandler={() =>
            Alert.alert(
              "Aplikacja w wersji testowej",
              "Moduł Serwisanta nie został jeszcze ukończony."
            )
          }
          pressHandler={() =>
            Alert.alert(
              "Aplikacja w wersji testowej",
              "Moduł Serwisanta nie został jeszcze ukończony."
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
    width: "85%",
    fontSize: 22,
    fontWeight: "400",
    paddingBottom: 7,
  },
});
