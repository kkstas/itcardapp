import { Image, StyleSheet, View } from 'react-native';
import { Tinstitution } from '../../../constants/atmsDummyData';

export default function CalloutLogoImage({ institution }: { institution: Tinstitution }) {
  let img;
  if (institution === 'PlanetBNPP') {
    img = (
      <Image
        source={require('../../../assets/images/BNP-Paribas-Logo.png')}
        style={styles.bnpp}
      />
    );
  } else if (institution === 'CreditAgricole') {
    img = (
      <Image
        source={require('../../../assets/images/Credit-Agricole-Logo.png')}
        style={styles.creditAgricole}
      />
    );
  } else if (institution === 'ING' || institution === 'PlanetING') {
    img = (
      <Image
        source={require('../../../assets/images/ing-mobile.png')}
        style={styles.ing}
      />
    );
  } else if (institution === 'mBank') {
    img = (
      <Image
        source={require('../../../assets/images/mBank-logo.png')}
        style={styles.mbank}
      />
    );
  } else {
    img = (
      <Image
        source={require('../../../assets/images/planet-cash.png')}
        style={styles.planetCash}
      />
    );
  }
  return <View>{img}</View>;
}

const styles = StyleSheet.create({
  mbank: {
    width: 80,
    height: 80,
    bottom: 10,
    marginBottom: -10,
  },
  ing: {
    width: 60,
    height: 60,
    paddingBottom: 20,
    marginBottom: 10,
  },
  creditAgricole: {
    width: 120,
    height: 60,
  },
  planetCash: {
    width: 70,
    height: 70,
    paddingBottom: 10,
    marginBottom: 10,
  },
  bnpp: {
    width: 150,
    height: 60,
    paddingBottom: 10,
  },
});
