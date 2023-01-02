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
