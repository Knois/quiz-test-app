import { FC, memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
	title: string;
	handlePress: () => void;
	isControls?: boolean;
	isSelected?: boolean;
};

const Answer: FC<Props> = ({ title, handlePress, isControls, isSelected }) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			style={[
				styles.button,
				isControls && styles.buttonControls,
				isSelected && styles.buttonSelected,
			]}
		>
			<Text
				allowFontScaling={false}
				style={[styles.text, isControls && styles.textControls]}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default memo(Answer);

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		alignSelf: 'stretch',
		backgroundColor: 'rgba(0, 122, 255, 1)',
		borderRadius: 10,
		minWidth: 65,
	},

	buttonControls: { backgroundColor: 'rgba(242, 242, 242, 1)' },

	buttonSelected: { backgroundColor: '#22ae5c' },

	text: { fontSize: 19, color: '#fff' },

	textControls: { color: 'rgba(0, 0, 0, 0.4)' },
});
