import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { data } from "../../constants/receiptsDummyData";
import UserDataListItem from "../molecules/UserDataListItem";
import UserDataListHeader from "../molecules/UserDataListHeader";
import { useSharedValue, withTiming } from "react-native-reanimated";
import useCustomColors from "../../hooks/useCustomColors";
import TicketDataListItem from "../molecules/TicketDataListItem";
import { getAllTickets } from "../../hooks/asyncStorage";
import { useNavigation } from "@react-navigation/native";

export default function UserDataList() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("focus", () => pressTicketsHandler());
  }, []);
  const t = useCustomColors();

  const [dataState, setDataState] = useState(data);
  const [fromLeft, setFromLeft] = useState(true);

  const sliderOffset = useSharedValue(0);
  const leftColorOffset = useSharedValue(t.tint);
  const rightColorOffset = useSharedValue(t.gray2);

  const pressTicketsHandler = async () => {
    const mydata = await getAllTickets();
    setDataState(mydata);
    setFromLeft(true);
    sliderOffset.value = withTiming(0);
    leftColorOffset.value = withTiming(t.tint);
    rightColorOffset.value = withTiming(t.gray2);
  };
  const pressReceiptsHandler = () => {
    setDataState(data);
    setFromLeft(false);
    sliderOffset.value = withTiming(1);
    leftColorOffset.value = withTiming(t.gray2);
    rightColorOffset.value = withTiming(t.tint);
  };

  const ItemForRender = ({
    item,
    fromLeft,
    index,
  }: {
    item: any;
    fromLeft: boolean;
    index: any;
  }) => {
    if (fromLeft) {
      return <TicketDataListItem item={item} fromLeft={true} index={index} />;
    } else {
      return <UserDataListItem item={item} fromLeft={false} index={index} />;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <UserDataListHeader
            pressTicketsHandler={pressTicketsHandler}
            pressReceiptsHandler={pressReceiptsHandler}
            sliderOffset={sliderOffset}
            leftColorOffset={leftColorOffset}
            rightColorOffset={rightColorOffset}
          />
        )}
        data={dataState}
        renderItem={({ item, index }) => (
          <ItemForRender item={item} fromLeft={fromLeft} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
