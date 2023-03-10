import { Text, View, Image, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks';
import { clearMediaInputs } from '../../../ticketFormSlice';
import useCustomColors from '../../../../../hooks/useCustomColors';
import ImageBtn from './ImageBtn';
import MediaBtn from './MediaBtn';
import ImageDeleteButton from './ImageDeleteButton';
import { memo } from 'react';

const MediaContainer = memo(() => {
  const t = useCustomColors();
  const { thumbnailUri } = useAppSelector((state) => state.ticketData);
  const dispatch = useAppDispatch();

  let mediaPreview = <Text></Text>;
  if (thumbnailUri) {
    mediaPreview = (
      <Image style={styles.image} source={{ uri: thumbnailUri }} />
    );
  }

  return (
    <View style={styles.mainView}>
      <View style={[styles.imagePreview, { backgroundColor: t.textInput }]}>
        {mediaPreview}
        {thumbnailUri && (
          <ImageDeleteButton
            onPress={() => dispatch(clearMediaInputs())}
            color={t.pink}
          />
        )}
        {!thumbnailUri && (
          <View style={styles.buttonsContainer}>
            <MediaBtn />
            <ImageBtn />
          </View>
        )}
      </View>
    </View>
  );
});

export default MediaContainer;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  mainView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
  },
});
