import { Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/hooks/useStore';

const ResultScore = () => {
	const { appStore } = useStore();

	const text = `${appStore.score}/${appStore.questions.length}`;

	return <Text style={styles.score}>Your Score: {text}</Text>;
};

export default observer(ResultScore);

const styles = StyleSheet.create({
	score: {
		fontSize: 20,
		textAlign: 'center',
	},
});
