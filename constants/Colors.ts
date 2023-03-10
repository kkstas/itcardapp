const tintColorLight = '#0070F2';
const tintColorDark = '#4DB1FF';

export default {
  light: {
    text: '#000',
    background: 'rgb(242, 242, 247)',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
interface IitcardColors {
  itcGranat: string;
  itcGranatSecondary: string;
  itcMagenta: string;
  itcMagentaSecondary: string;
  itcBlekit: string;
  itcBlekitSecondary: string;
}

const itcardColors: IitcardColors = {
  itcGranat: 'rgb(20,25,165)',
  itcGranatSecondary: '#7275c9',
  itcMagenta: 'rgb(245,0,140)',
  itcMagentaSecondary: '#f966ba',
  itcBlekit: 'rgb(0, 205, 245)',
  itcBlekitSecondary: '#66e1f9',
};

interface IpcashColors {
  pcashBlue200: string;
  pcashBlue300: string;
  pcashBlue400: string;
  pcashBlue500: string;
  pcashOrange: string;
}

const pcashColors: IpcashColors = {
  pcashBlue200: 'rgb(133, 194, 230)',
  pcashBlue300: 'rgb(0,126,204)',
  pcashBlue400: 'rgb(0,54,153)',
  pcashBlue500: 'rgb(60,30,130)',
  pcashOrange: 'rgb(255,102,0)',
};

export const blueGradientColors = [
  itcardColors.itcMagentaSecondary,
  itcardColors.itcGranatSecondary,
  // 'rgb(114, 172, 211)',
  // 'rgb(114, 172, 211)',
  // 'rgb(106, 175, 181)',
  // 'rgb(78, 89, 122)',
];
export const blueLightGradientColors = [
  pcashColors.pcashBlue500,
  itcardColors.itcGranatSecondary,
];

export const CustomDarkTheme = {
  ...itcardColors,
  ...pcashColors,
  theme: 'dark',
  text: '#fff',
  bgPrimaryGrouped: '#000000',
  bgSecondaryGrouped: '#161C21',
  bgTertiaryGrouped: '#0F1216',
  bgPrimary: '#000000',
  bgSecondary: '#0F1216',
  bgTertiary: '#161C21',
  tint: '#4DB1FF',
  tint2: '#4DB1FF',
  tintTapState: '#1B90FF',
  labelPrimary: '#F5F6F7',
  labelSecondary: '#D5DADD',
  labelTertiary: '#A9B4BE',
  labelQuaternary: '#8396A8',
  fillPrimary: 'rgba(131, 150, 168, 0.2)',
  fillSecondary: 'rgba(131, 150, 168, 0.20)',
  fillTertiary: 'rgba(131, 150, 168, 0.10)',
  fillQuaternary: 'rgba(131, 150, 168, 0.22)',
  header: '#161C21',
  footer: '#161C21',
  contrastElement: '#8396A8',
  separator: 'rgba(131, 150, 168, 0.37)',
  separatorOpaque: 'rgba(131, 150, 168, 0.83)',
  cardShadow: 'rgba(131, 150, 168, 0.37)',
  sectionShadow: 'rgba(131, 150, 168, 0.83)',
  blue: 'rgb(10,132,255)',
  brown: 'rgb(172,142,104)',
  cyan: 'rgb(100,210,255)',
  gray: 'rgb(142,142,147)',
  gray2: 'rgb(99,99,102)',
  gray3: 'rgb(72,72,74)',
  gray4: 'rgb(58,58,60)',
  gray5: 'rgb(44,44,46)',
  gray6: 'rgb(28,28,30)',
  green: 'rgb(48,209,88)',
  indigo: 'rgb(94,92,230)',
  mint: 'rgb(99,230,226)',
  orange: 'rgb(255,159,10)',
  pink: 'rgb(255,55,95)',
  purple: 'rgb(191,90,242)',
  red: 'rgb(255,69,58)',
  teal: 'rgb(64,200,224)',
  yellow: 'rgb(255,214,10)',
  negativeLabel: '#ff8cb2',
  criticalLabel: '#ffc933',
  positiveLabel: '#97dd40',
  negativeBackground: '#ff5252',
  criticalBackground: '#ffc933',
  positiveBackground: '#66ff90',
  informativeBackground: '#366cfe',
  textInput: '#161C21',
  green2: '#00CEAC',
};
export const CustomLightTheme = {
  ...itcardColors,
  ...pcashColors,
  theme: 'light',
  text: '#000',
  bgPrimaryGrouped: 'rgb(242,242,247)',
  bgSecondaryGrouped: '#ffffff',
  bgTertiaryGrouped: 'rgb(242,242,247)',
  bgPrimary: '#FFFFFF',
  bgSecondary: 'rgb(242,242,247)',
  bgTertiary: '#FFFFFF',
  tint: '#0070F2',
  tint2: '#0057D2',
  tintTapState: '#0040B0',
  labelPrimary: '#223548',
  labelSecondary: '#475E75',
  labelTertiary: 'rgba(71, 94, 117, 0.9)',
  labelQuaternary: 'rgba(91, 115, 139, 0.55)',
  fillPrimary: 'rgba(255, 255, 255, 0.1)',
  fillSecondary: 'rgba(91, 115, 139, 0.08)',
  fillTertiary: 'rgba(91, 115, 139, 0.04)',
  fillQuaternary: 'rgba(91, 115, 139, 0.1)',
  header: '#fff',
  footer: '#fff',
  contrastElement: '#5B738B',
  separator: 'rgba(91, 115, 139, 0.37)',
  separatorOpaque: 'rgba(91, 115, 139, 0.83)',
  cardShadow: 'rgb(91, 115, 139, 0.37)',
  sectionShadow: 'rgb(91, 115, 139, 0.83)',
  blue: 'rgb(0,122,255)',
  brown: 'rgb(162,132,94)',
  cyan: 'rgb(50,173,230)',
  gray: 'rgb(142,142,147)',
  gray2: 'rgb(174,174,178)',
  gray3: 'rgb(199,199,204)',
  gray4: 'rgb(209,209,214)',
  gray5: 'rgb(229,229,234)',
  gray6: 'rgb(242,242,247)',
  green: 'rgb(52,199,89)',
  indigo: 'rgb(88,86,214)',
  mint: 'rgb(0,199,190)',
  orange: 'rgb(255,149,0)',
  pink: 'rgb(255,45,85)',
  purple: 'rgb(175,82,222)',
  red: 'rgb(255,59,48)',
  teal: 'rgb(48,176,199)',
  yellow: 'rgb(255,204,0)',
  negativeLabel: '#D20a0a',
  criticalLabel: '#c35500',
  positiveLabel: '#256f3a',
  negativeBackground: '#ff80bc',
  criticalBackground: '#ffd500',
  positiveBackground: '#bdde54',
  informativeBackground: '#85d4ff',
  textInput: 'rgba(91, 115, 139, 0.1)',
  green2: '#049F9A',
};

export interface CustomTheme extends IpcashColors, IitcardColors {
  theme: string;
  text: string;
  bgPrimaryGrouped: string;
  bgSecondaryGrouped: string;
  bgTertiaryGrouped: string;
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  tint: string;
  tint2: string;
  tintTapState: string;
  labelPrimary: string;
  labelSecondary: string;
  labelTertiary: string;
  labelQuaternary: string;
  fillPrimary: string;
  fillSecondary: string;
  fillTertiary: string;
  fillQuaternary: string;
  header: string;
  footer: string;
  contrastElement: string;
  separator: string;
  separatorOpaque: string;
  cardShadow: string;
  sectionShadow: string;
  blue: string;
  brown: string;
  cyan: string;
  gray: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  green: string;
  indigo: string;
  mint: string;
  orange: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
  negativeLabel: string;
  criticalLabel: string;
  positiveLabel: string;
  negativeBackground: string;
  criticalBackground: string;
  positiveBackground: string;
  informativeBackground: string;
  textInput: string;
  green2: string;
}
