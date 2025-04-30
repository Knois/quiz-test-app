import { FC, memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = { title: string; handlePress: () => void };

const Answer: FC<Props> = ({ title, handlePress }) => {
	return (
		<TouchableOpacity onPress={handlePress} style={styles.button}>
			<Text allowFontScaling={false} style={styles.text}>{title}</Text>
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
	},

	text: { fontSize: 19, color: '#fff' },
});
