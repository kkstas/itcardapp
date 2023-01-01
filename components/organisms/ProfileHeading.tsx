import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextContent from '../atoms/TextContent';
import TextTitle from '../atoms/TextTitle';
import ContentBox from '../atoms/ContentBox';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

interface ProfileHeadingProps {
	onPress?: () => void;
}

export default function ProfileHeading(props: ProfileHeadingProps) {
	const t = useCustomColors();
	return (
		<ContentBox style={styles.container}>
			<TouchableOpacity onPress={props.onPress} style={styles.mainBox}>
				<View style={styles.iconView}>
					<Ionicons name="person-circle" color={t.labelTertiary} style={styles.icon} />
				</View>
				<View style={styles.textView}>
					<TextTitle text="Kamil Stasiak" color={t.text} />
					<TextContent text="k.stasiak@itcard.pl" color={t.labelTertiary} />
					<View style={styles.chevronView}>
						<Entypo name="chevron-small-right" size={30} color={t.labelQuaternary} />
					</View>
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
		position: 'absolute',
		right: 5,
	},
	icon: {
		fontSize: 55,
	},
	container: {
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginBottom: 12,
	},
	textView: {
		flex: 6,
		marginLeft: 4,
		justifyContent: 'center',
	},
	iconView: {
		borderRadius: 10,
		height: 55,
		width: 55,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
