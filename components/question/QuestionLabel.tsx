import { Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/hooks/useStore';

const QuestionLabel = () => {
	const { appStore } = useStore();

	return <Text style={styles.text}>{appStore.currentQuestion.question}</Text>;
};

export default observer(QuestionLabel);

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
		color: '#000',
	},
});
