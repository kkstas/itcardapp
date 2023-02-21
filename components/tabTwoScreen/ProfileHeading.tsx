import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextContent from '../common/TextContent';
import TextTitle from '../common/TextTitle';
import ContentBox from '../common/ContentBox';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useAppSelector } from '../../hooks/reduxHooks';

interface ProfileHeadingProps {
  onPress?: () => void;
}

export default function ProfileHeading(props: ProfileHeadingProps) {
  const t = useCustomColors();
  const userInfo = useAppSelector((state) => state.userInfo);

  return (
    <ContentBox style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.mainBox}>
        <View style={styles.iconView}>
          <Ionicons name="person-circle" color={t.labelTertiary} style={styles.icon} />
        </View>
        <View style={styles.textView}>
          <TextTitle text={userInfo.firstName + ' ' + userInfo.lastName} color={t.text} />
          <TextContent text={userInfo.email || ' '} color={t.labelTertiary} />
        </View>

        <View style={styles.chevronView}>
          <Entypo name="chevron-small-right" size={30} color={t.labelQuaternary} />
        </View>
      </TouchableOpacity>
    </ContentBox>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flexDirection: 'row',
  },
  chevronView: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 55,
  },
  container: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    paddingRight: 5,
  },
  textView: {
    flex: 10,
    paddingLeft: 8,
    justifyContent: 'center',
  },
  iconView: {
    borderRadius: 10,
    flex: 2,
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
