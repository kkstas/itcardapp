import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
	TabTwoMainStackParamList,
} from '../types';

import TabThreeScreen from '../screens/TabThreeScreen';
import { CustomLightTheme, CustomDarkTheme } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import HeaderButton from '../components/atoms/HeaderButton';
import LoginScreen from '../screens/LoginScreen';
import InfoModalScreen from '../screens/InfoModalScreen';
import CreateTicketScreen from '../screens/CreateTicketScreen';
import ScanReceiptScreen from '../screens/ScanReceiptScreen';
import LocateATMScreen from '../screens/LocateATMScreen';

const CLTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		card: CustomLightTheme.bgTertiary,
		background: CustomLightTheme.bgPrimaryGrouped,
	},
};

const CDTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		card: CustomDarkTheme.bgSecondary,
	},
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer theme={colorScheme === 'dark' ? CDTheme : CLTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
			<Stack.Group
				screenOptions={{
					presentation: 'modal',
					contentStyle: { backgroundColor: '#4040400' },
				}}
			>
				<Stack.Screen name="Modal" component={ModalScreen} />
				<Stack.Screen
					name="InfoModal"
					component={InfoModalScreen}
					options={{
						headerShown: false,
						presentation: 'modal',
					}}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabTwo"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneScreen}
				options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
					headerTransparent: true,
					headerBackground: () => (
						<BlurView tint={colorScheme} intensity={50} style={StyleSheet.absoluteFill} />
					),
					title: 'Dokumenty',
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="layers-outline"
							size={28}
							color={color}
							style={{ marginBottom: -3 }}
						/>
					),
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Modal')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<Ionicons
								name="information-circle-outline"
								size={26}
								color={Colors[colorScheme].tint}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoMainStackNavigator}
				options={{
					headerShown: false,
					title: 'Ekran główny',
					tabBarIcon: ({ color }) => (
						<Ionicons
							size={28}
							name="home-outline"
							color={color}
							style={{ marginBottom: -3 }}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="TabThree"
				component={TabThreeScreen}
				options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
					headerTransparent: true,
					headerBackground: () => (
						<BlurView tint={colorScheme} intensity={60} style={StyleSheet.absoluteFill} />
					),
					headerLeft: () => (
						<HeaderButton
							text="Ekran główny"
							position="left"
							icon="chevron-back-outline"
							onPress={() => navigation.navigate('TabTwo')}
						/>
					),
					headerRight: () => (
						<HeaderButton
							onPress={() => navigation.replace('LoginScreen')}
							text="Wyloguj "
							position="right"
							icon="log-out-outline"
						/>
					),
					title: 'Profil',
					tabBarIcon: ({ color }) => (
						<Ionicons
							style={{ marginBottom: -3 }}
							name="person-outline"
							size={28}
							color={color}
						/>
					),
				})}
			/>
		</BottomTab.Navigator>
	);
}

const TabTwoMainStack = createNativeStackNavigator<TabTwoMainStackParamList>();

function TabTwoMainStackNavigator() {
	return (
		<TabTwoMainStack.Navigator initialRouteName="TabTwoScreen">
			<TabTwoMainStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoMainStack.Screen name="CreateTicketScreen" component={CreateTicketScreen} />
			<TabTwoMainStack.Screen name="ScanReceiptScreen" component={ScanReceiptScreen} />
			<TabTwoMainStack.Screen name="LocateATMScreen" component={LocateATMScreen} />
		</TabTwoMainStack.Navigator>
	);
}
