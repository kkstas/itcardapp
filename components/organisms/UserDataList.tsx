import React, { useEffect, useState, useMemo, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { data } from '../../constants/receiptsDummyData';
import UserDataListItem from '../molecules/UserDataListItem';
import UserDataListHeader from '../molecules/UserDataListHeader';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import useCustomColors from '../../hooks/useCustomColors';
import TicketDataListItem from '../molecules/TicketDataListItem';
import { getAllReceipts, getAllTickets } from '../../hooks/asyncStorage';
import { useNavigation } from '@react-navigation/native';

function UserDataList() {
  const navigation = useNavigation();

  const [dataState, setDataState] = useState(data);

  useEffect(() => {
    pressTicketsHandler()
  }, [])

  const t = useCustomColors();

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
  const pressReceiptsHandler = async () => {
    const recdata = await getAllReceipts();
    if (recdata) {
      for (const y of recdata) {
        console.log(`ID: ${y.id}, deviceName: ${y.deviceName}`);
      }
    }
    setDataState(recdata);
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

  console.log('UserDataList (organism) rendered');
  return (
    <View style={styles.container}>
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
        data={dataState}
        renderItem={({ item, index }) => (
          <ItemForRender item={item} fromLeft={fromLeft} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
export default memo(UserDataList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
