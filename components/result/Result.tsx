import { View, Text, StyleSheet } from 'react-native';
import { memo } from 'react';

import ResultScore from './ResultScore';
import ResultItems from './ResultItems';
import ResultRestart from './ResultRestart';

const Results = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>You have passed the test!</Text>

			<ResultScore />

			<ResultRestart />

			<ResultItems />
		</View>
	);
};

export default memo(Results);

const styles = StyleSheet.create({
	container: { flex: 1, paddingVertical: 10, gap: 10 },

	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
