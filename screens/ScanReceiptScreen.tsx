import useCustomColors from '../hooks/useCustomColors';
import React, { useState, useEffect } from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import ScanButton from '../components/atoms/ScanButton';
import NotScannedContent from '../components/atoms/NotScannedContent';
import ScanAnim from '../components/atoms/ScanAnim';

export default function ScanReceiptScreen() {
  const navigation = useNavigation();
  const t = useCustomColors();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    navigation.addListener('focus', () => {
      setIsFocused(true);
    });
    navigation.addListener('blur', () => {
      setIsFocused(false);
      setScanned(true);
    });
  }, []);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    console.log(data);
    Alert.alert(
      'Kod jest nieprawidłowy!',
      `Zeskanowany kod o typie: ${type} i danych: ${data} nie został zidentyfikowany jako kod potwierdzenia dokonania transakcji. Zeskanuj prawidłowy kod QR.`
    );
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
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: 12,
          paddingTop: 20,
        }}>
        {!scanned && isFocused ? (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.barcode}
          />
        ) : (
          <View style={[styles.barcode, { backgroundColor: t.bgSecondary }]} />
        )}
        <ScanAnim scanned={scanned} />
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
    width: '95%',
    height: '55%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
