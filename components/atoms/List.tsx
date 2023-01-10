import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import ContentBox from './ContentBox';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import ListItem from './ListItem';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';

export default function List() {
	const t = useCustomColors();

	return (
		<View style={styles.container}>
			<ContentBox style={styles.contentBox}>
				<Animated.View entering={FadeIn}>
					<ListItem
						isLast={false}
						text="Powiadomienia"
						iconLeft={<Ionicons color={t.tint} name="notifications-outline" size={24} />}
					/>
				</Animated.View>

				<Animated.View entering={FadeIn.delay(50)}>
					<ListItem
						isLast={false}
						text="Dostępność"
						iconLeft={<Ionicons color={t.tint} name="body-outline" size={24} />}
					/>
				</Animated.View>

				<Animated.View entering={FadeIn.delay(100)}>
					<ListItem
						isLast={false}
						text="Prywatność i ochrona"
						iconLeft={<Ionicons color={t.tint} name="hand-left-outline" size={24} />}
					/>
				</Animated.View>

				<Animated.View entering={FadeIn.delay(150)}>
					<ListItem
						isLast={false}
						text="Hasła i uwierzytelnianie"
						iconLeft={
							<Ionicons color={t.tint} name="shield-checkmark-outline" size={24} />
						}
					/>
				</Animated.View>

				<Animated.View entering={FadeIn.delay(200)}>
					<ListItem
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
