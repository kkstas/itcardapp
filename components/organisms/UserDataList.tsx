import React, { useEffect, useState, useMemo, memo } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
// import { data } from "../../constants/receiptsDummyData";
import UserDataListItem from "../molecules/UserDataListItem";
import UserDataListHeader from "../molecules/UserDataListHeader";
import { useSharedValue, withTiming } from "react-native-reanimated";
import useCustomColors from "../../hooks/useCustomColors";
import TicketDataListItem from "../molecules/TicketDataListItem";
import {
  getAllReceipts,
  getAllTickets,
  IReceiptState,
  TicketDataType,
} from "../../hooks/asyncStorage";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  getReceiptsThunk,
  getTicketsThunk,
  switchToTickets,
  switchToReceipts,
} from "../../store/slices/documentsData";

function UserDataList() {
  // ten state można zmienić
  // const [dataState, setDataState] = useState(data);
  const dataState = useAppSelector((state) => state.documentsData);
  const dispatch = useAppDispatch();

  // to jest do zmiany
  // useEffect(() => {
  //   pressTicketsHandler();
  // }, []);
  useEffect(() => {
    if (dataState.status === "idle") {
      dispatch(getTicketsThunk());
      dispatch(getReceiptsThunk());
    }
  }, [dataState.status, dispatch]);

  const t = useCustomColors();

  // const [fromLeft, setFromLeft] = useState(true);

  const sliderOffset = useSharedValue(0);
  const leftColorOffset = useSharedValue(t.tint);
  const rightColorOffset = useSharedValue(t.gray2);

  // to
  const pressTicketsHandler = async () => {
    // const mydata = await getAllTickets();
    // setDataState(mydata);
    // setFromLeft(true);
    dispatch(switchToTickets());
    sliderOffset.value = withTiming(0);
    leftColorOffset.value = withTiming(t.tint);
    rightColorOffset.value = withTiming(t.gray2);
  };
  // to
  const pressReceiptsHandler = async () => {
    // const recdata = await getAllReceipts();
    // setDataState(recdata);
    // setFromLeft(false);
    dispatch(switchToReceipts());
    sliderOffset.value = withTiming(1);
    leftColorOffset.value = withTiming(t.gray2);
    rightColorOffset.value = withTiming(t.tint);
  };

  return (
    <View style={styles.container}>
      {dataState.whichActive === "left" ? (
        <FlatList
          ListHeaderComponent={useMemo(
            () => (
              <UserDataListHeader
                pressTicketsHandler={pressTicketsHandler}
                pressReceiptsHandler={pressReceiptsHandler}
                sliderOffset={sliderOffset}
                leftColorOffset={leftColorOffset}
                rightColorOffset={rightColorOffset}
              />
            ),
            [sliderOffset, leftColorOffset, rightColorOffset]
          )}
          data={dataState.ticketData}
          renderItem={({ item, index }) => (
            <TicketDataListItem item={item} index={index} />
          )}
        />
      ) : (
        <FlatList
          ListHeaderComponent={useMemo(
            () => (
              <UserDataListHeader
                pressTicketsHandler={pressTicketsHandler}
                pressReceiptsHandler={pressReceiptsHandler}
                sliderOffset={sliderOffset}
                leftColorOffset={leftColorOffset}
                rightColorOffset={rightColorOffset}
              />
            ),
            [sliderOffset, leftColorOffset, rightColorOffset]
          )}
          data={dataState.receiptData}
          renderItem={({ item, index }) => (
            <UserDataListItem item={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
export default memo(UserDataList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
