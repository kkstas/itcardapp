import { BottomTabBarProps, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TicketDataType } from './hooks/asyncStorage';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	LoginScreen: undefined;
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	Modal: undefined;
	InfoModal:
		| { appTitle: string; appDescription: string; bottomInfo?: string }
		| undefined;
	TicketModal: { data: TicketDataType };
	NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
	TabOne: undefined;
	TabTwo: NavigatorScreenParams<TabTwoMainStackParamList> | undefined;
	TabThree: undefined;
};

export type TabTwoMainStackParamList = {
	TabTwoScreen: undefined;
	CreateTicketScreen: { pickedLat: number; pickedLng: number } | undefined;
	MapScreen: { lat: number; lng: number } | undefined;
	ScanReceiptScreen: undefined;
	LocateATMScreen: undefined;
};

export type TabTwoMainStackScreenProps<Screen extends keyof TabTwoMainStackParamList> =
	CompositeScreenProps<
		NativeStackScreenProps<TabTwoMainStackParamList, Screen>,
		NativeStackScreenProps<TabTwoMainStackParamList>
	>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;
