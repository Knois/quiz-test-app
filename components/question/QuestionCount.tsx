import { Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/hooks/useStore';

const QuestionCount = () => {
	const { appStore } = useStore();

	const text = `${appStore.currentQuestionIndex + 1}/${
		appStore.questions.length
	}`;

	return <Text style={styles.text}>Question {text}</Text>;
};

export default observer(QuestionCount);

const styles = StyleSheet.create({
	text: {
		fontSize: 18,	
		color: '#555',
	},
});
