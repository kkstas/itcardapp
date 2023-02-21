import { StyleSheet, View } from 'react-native';
import ContentBox from '../common/ContentBox';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import ProfileListItem from './ProfileListItem';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ProfileList() {
  const t = useCustomColors();

  return (
    <View style={styles.container}>
      <ContentBox style={styles.contentBox}>
        <Animated.View entering={FadeIn}>
          <ProfileListItem
            isLast={false}
            text="Powiadomienia"
            iconLeft={<Ionicons color={t.tint} name="notifications-outline" size={24} />}
          />
        </Animated.View>

        <Animated.View entering={FadeIn.delay(50)}>
          <ProfileListItem
            isLast={false}
            text="Dostępność"
            iconLeft={<Ionicons color={t.tint} name="body-outline" size={24} />}
          />
        </Animated.View>

        <Animated.View entering={FadeIn.delay(100)}>
          <ProfileListItem
            isLast={false}
            text="Prywatność i ochrona"
            iconLeft={<Ionicons color={t.tint} name="hand-left-outline" size={24} />}
          />
        </Animated.View>

        <Animated.View entering={FadeIn.delay(150)}>
          <ProfileListItem
            isLast={false}
            text="Hasła i uwierzytelnianie"
            iconLeft={
              <Ionicons color={t.tint} name="shield-checkmark-outline" size={24} />
            }
          />
        </Animated.View>

        <Animated.View entering={FadeIn.delay(200)}>
          <ProfileListItem
            isLast={true}
            text="Story"
            iconLeft={<Ionicons color={t.tint} name="folder-outline" size={24} />}
          />
        </Animated.View>
      </ContentBox>
    </View>
  );
}

const styles = StyleSheet.create({
  contentBox: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    overflow: 'hidden',
  },

  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
});
