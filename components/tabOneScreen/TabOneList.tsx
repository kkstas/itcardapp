import React, { useEffect, useMemo, memo } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ReceiptDataListItem from "../../features/receipts/components/list/ReceiptDataListItem";
import TabOneListHeader from "./TabOneListHeader";
import { useSharedValue, withTiming } from "react-native-reanimated";
import useCustomColors from "../../hooks/useCustomColors";
import TicketDataListItem from "../../features/tickets/components/list/TicketDataListItem";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  getReceiptsThunk,
  getTicketsThunk,
  switchToTickets,
  switchToReceipts,
} from "../../store/slices/documentsData";

function TabOneList() {
  const dataState = useAppSelector((state) => state.documentsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataState.status === "idle") {
      dispatch(getTicketsThunk());
      dispatch(getReceiptsThunk());
    }
  }, [dataState.status, dispatch]);

  const t = useCustomColors();


  const sliderOffset = useSharedValue(0);
  const leftColorOffset = useSharedValue(t.tint);
  const rightColorOffset = useSharedValue(t.gray2);

  const pressTicketsHandler = async () => {
    dispatch(switchToTickets());
    sliderOffset.value = withTiming(0);
    leftColorOffset.value = withTiming(t.tint);
    rightColorOffset.value = withTiming(t.gray2);
  };
  const pressReceiptsHandler = async () => {
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
              <TabOneListHeader
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
              <TabOneListHeader
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
            <ReceiptDataListItem item={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
export default memo(TabOneList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
