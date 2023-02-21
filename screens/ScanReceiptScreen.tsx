import useCustomColors from "../hooks/useCustomColors";
import React, { useState, useEffect } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import ScanButton from "../components/atoms/ScanButton";
import NotScannedContent from "../components/atoms/NotScannedContent";
import ScanAnim from "../components/atoms/ScanAnim";
import transformReceiptUrl from "../util/transformReceiptUrl";
import { addNewReceipt } from "../hooks/asyncStorage";
import { TabTwoMainStackScreenProps } from "../types";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addReceipt } from "../store/slices/documentsData";

export default function ScanReceiptScreen({
  navigation,
}: TabTwoMainStackScreenProps<"ScanReceiptScreen">) {
  const t = useCustomColors();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigation.addListener("focus", () => {
      setIsFocused(true);
    });
    navigation.addListener("blur", () => {
      setIsFocused(false);
      setScanned(true);
    });
  }, []);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    console.log(data);
    const transformedUri = transformReceiptUrl(data);
    if (transformedUri) {
      addNewReceipt(transformedUri);
      dispatch(addReceipt(transformedUri));

      Alert.alert(
        "Skanowane zakończone sukcesem.",
        "Zeskanowane potwierdzenia są dostępne w zakładce Dokumenty.",
        [{ text: "Powrót", onPress: () => navigation.push("Root") }]
      );
    } else {
      Alert.alert(
        "Błąd skanowania kodu!",
        `Zeskanowany kod nie został zidentyfikowany jako kod potwierdzenia dokonania transakcji. Zeskanuj prawidłowy kod QR.`
      );
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={[styles.container, { backgroundColor: t.bgPrimary }]}>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: 12,
          paddingTop: 20,
        }}
      >
        {!scanned && isFocused ? (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.barcode}
          />
        ) : (
          <View style={[styles.barcode, { backgroundColor: t.bgSecondary }]} />
        )}

        <ScanAnim
          onPress={() => setScanned((prevScanned) => !prevScanned)}
          scanned={scanned}
        />
        {scanned ? (
          <ScanButton onPress={() => setScanned(false)} />
        ) : (
          <NotScannedContent onPress={() => setScanned(true)} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  barcode: {
    width: "95%",
    height: "55%",
    borderRadius: 12,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
