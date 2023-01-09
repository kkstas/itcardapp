import { BottomTabBarProps, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	LoginScreen: undefined;
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	Modal: undefined;
	InfoModal: undefined;
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
	CreateTicketScreen: undefined;
	ScanReceiptScreen: undefined;
	LocateATMScreen: undefined;
};

export type TabTwoMainStackScreenProps<Screen extends keyof TabTwoMainStackParamList> =
	CompositeScreenProps<
		NativeStackScreenProps<TabTwoMainStackParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;
