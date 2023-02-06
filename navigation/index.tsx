import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  TabTwoMainStackParamList,
} from "../types";
import TabThreeScreen from "../screens/TabThreeScreen";
import { CustomLightTheme, CustomDarkTheme } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import HeaderButton from "../components/atoms/HeaderButton";
import LoginScreen from "../screens/LoginScreen";
import InfoModalScreen from "../screens/InfoModalScreen";
import CreateTicketScreen from "../screens/CreateTicketScreen";
import ScanReceiptScreen from "../screens/ScanReceiptScreen";
import LocateATMScreen from "../screens/LocateATMScreen";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { logOut } from "../store/slices/userInfo";
import useCustomColors from "../hooks/useCustomColors";
import { StatusBar } from "expo-status-bar";
import TicketModalScreen from "../screens/TicketModalScreen";
import MapScreen from "../screens/MapScreen";
import { HeaderBackgroundBlur } from "./HeaderBackgroundBlur";
import ReceiptModalScreen from "../screens/ReceiptModalScreen";

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

export default function Navigation() {
  const t = useCustomColors();
  return (
    <>
      <StatusBar
        animated={true}
        style={t.theme === "light" ? "dark" : "light"}
      />
      <NavigationContainer theme={t.theme === "dark" ? CDTheme : CLTheme}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const userInfo = useAppSelector((state) => state.userInfo);
  const isLoggedIn = userInfo.isLoggedIn;

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
          <Stack.Group
            screenOptions={{
              presentation: "modal",
              contentStyle: { backgroundColor: "#4040400" },
            }}
          >
            <Stack.Screen
              name="Modal"
              component={ModalScreen}
              options={{ title: "Informacje" }}
            />
            <Stack.Screen
              name="InfoModal"
              component={InfoModalScreen}
              options={{
                headerShown: false,
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="TicketModal"
              component={TicketModalScreen}
              options={{
                headerShown: false,
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="ReceiptModal"
              component={ReceiptModalScreen}
              options={{
                headerShown: false,
                presentation: "modal",
              }}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const t = useCustomColors();

  const dispatch = useAppDispatch();
  function logOutHandler() {
    dispatch(logOut());
  }

  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        tabBarActiveTintColor: t.tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          headerTransparent: true,
          headerBackground: () => <HeaderBackgroundBlur />,
          title: "Dokumenty",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="layers-outline"
              size={28}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Ionicons
                name="information-circle-outline"
                size={26}
                color={t.tintTapState}
                style={{ marginLeft: 15 }}
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
          title: "Ekran główny",
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
        options={({ navigation }: RootTabScreenProps<"TabThree">) => ({
          headerTransparent: true,
          headerBackground: () => <HeaderBackgroundBlur />,
          headerLeft: () => (
            <HeaderButton
              text="Ekran główny"
              position="left"
              icon="chevron-back-outline"
              onPress={() => navigation.navigate("TabTwo")}
            />
          ),
          headerRight: () => (
            <HeaderButton
              onPress={logOutHandler}
              text="Wyloguj "
              position="right"
              icon="log-out-outline"
            />
          ),
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{ marginBottom: -3, marginRight: 1 }}
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
      <TabTwoMainStack.Screen
        name="CreateTicketScreen"
        options={{ title: "Ekran zgłoszenia", headerBackTitle: "Powrót" }}
        component={CreateTicketScreen}
      />
      <TabTwoMainStack.Screen
        name="ScanReceiptScreen"
        component={ScanReceiptScreen}
        options={{ title: "Skanuj potwierdzenie", headerBackTitle: "Powrót" }}
      />
      <TabTwoMainStack.Screen
        name="LocateATMScreen"
        options={{
          title: "Znajdź bankomat",
          headerBackTitle: "Powrót",
          headerTransparent: true,
          headerBackground: () => <HeaderBackgroundBlur />,
        }}
        component={LocateATMScreen}
      />
      <TabTwoMainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Wybierz lokalizację",
          headerBackTitle: "Powrót",
          headerTransparent: true,
          headerBackground: () => <HeaderBackgroundBlur />,
        }}
      />
    </TabTwoMainStack.Navigator>
  );
}
