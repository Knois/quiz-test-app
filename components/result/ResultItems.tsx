import { observer } from 'mobx-react-lite';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useStore } from '@/hooks/useStore';

import ResultItem from './ResultItem';

const ResultItems = () => {
	const { appStore } = useStore();

	const content = appStore.questions.map((question, index) => {
		const userAnswer = appStore.userAnswers[index];
		const isCorrect = userAnswer === question.correct;

		return (
			<ResultItem
				key={index}
				question={question}
				userAnswer={userAnswer}
				isCorrect={isCorrect}
			/>
		);
	});

	return (
		<ScrollView style={styles.list}>
			<View style={styles.content}>{content}</View>
		</ScrollView>
	);
};

export default observer(ResultItems);

const styles = StyleSheet.create({
	list: {
		flex: 1,
	},

	content: { gap: 10 },
});
