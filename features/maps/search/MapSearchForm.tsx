import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import useCustomColors from "../../../hooks/useCustomColors";
import MapSearchList from "./MapSearchList";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutRight,
} from "react-native-reanimated";

interface IMapSearchForm {
  animateToChosenMarker: (id: number, lat: number, lng: number) => void;
  isShown: boolean;
  setIsSearchShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapSearchForm = ({
  setIsSearchShown,
  isShown,
  animateToChosenMarker,
}: IMapSearchForm) => {
  const [value, setValue] = useState<string>("");
  const headerHeight = useHeaderHeight();
  const t = useCustomColors();

  const animateAndHide = (id: number, lat: number, lng: number) => {
    setIsSearchShown(false);
    animateToChosenMarker(id, lat, lng);
  };

  const showSearchAndFocus = () => {
    setIsSearchShown(true);
  };

  return (
    <View style={[styles.container, { top: headerHeight }]}>
      {isShown ? (
        <Pressable
          onPress={() => setIsSearchShown(false)}
          style={styles.searchWrapper}
        >
          <Animated.View
            entering={SlideInRight}
            exiting={SlideOutRight}
            style={styles.textInputView}
          >
            <TextInput
              autoComplete="off"
              autoCorrect={false}
              selectionColor={t.tint}
              autoFocus={true}
              value={value}
              onChangeText={(text) => setValue(text)}
              // onBlur={hideSearch}
              style={[
                styles.textInput,
                { backgroundColor: t.bgTertiary, color: t.text },
              ]}
            ></TextInput>
            <View style={styles.iconInInput}>
              <Ionicons name="search-outline" size={15} color={t.tint} />
            </View>
          </Animated.View>
          <MapSearchList inputValue={value} onItemPress={animateAndHide} />
        </Pressable>
      ) : (
        <Pressable
          onPress={showSearchAndFocus}
          style={[styles.searchIcon, isShown && { opacity: 0 }]}
        >
          <Animated.View entering={FadeIn} exiting={FadeOut.duration(1)}>
            <View style={styles.blurWrapper}>
              <BlurView
                intensity={50}
                tint={t.theme === "light" ? "light" : "default"}
                style={[
                  styles.blur,
                  t.theme === "light" && {
                    backgroundColor: "rgba(255,200,240, 0.4)",
                  },
                ]}
              >
                <Ionicons name="search-outline" size={24} color={t.tint} />
              </BlurView>
            </View>
          </Animated.View>
        </Pressable>
      )}
    </View>
  );
};

export default MapSearchForm;

const styles = StyleSheet.create({
  iconInInput: {
    position: "absolute",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 5,
    // position: "relative",
  },
  blur: {
    padding: 10,
  },
  blurWrapper: {
    borderRadius: 50,
    overflow: "hidden",
  },
  searchIcon: {
    paddingRight: 18,
    marginRight: 2,
  },
  textInput: {
    padding: 5,
    paddingHorizontal: 10,
    paddingLeft: 25,
    borderRadius: 5,
    fontSize: 16,
    position: "relative",
  },
  searchWrapper: {
    alignItems: "flex-end",
    width: "100%",
    paddingRight: 10,
    paddingTop: 10,
  },
  textInputView: {
    width: 200,
  },
  container: {
    position: "absolute",
    alignItems: "flex-end",
    paddingTop: 20,
    width: "100%",
  },
});
