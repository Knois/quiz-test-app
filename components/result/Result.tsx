import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/hooks/useStore';

import Restart from '../Restart';
import ResultScore from './ResultScore';

const Results = () => {
	const { appStore } = useStore();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Results</Text>

			<ResultScore />

			<Restart />

			{appStore.questions.map((question, index) => {
				const userAnswer = appStore.userAnswers[index];
				const isCorrect = userAnswer === question.correct;

				return (
					<View key={index} style={styles.resultItem}>
						<Text style={styles.question}>{question.question}</Text>
						<Text style={isCorrect ? styles.correct : styles.incorrect}>
							Your answer: {question.options[userAnswer]}
						</Text>
						<Text style={styles.correct}>
							Correct answer: {question.options[question.correct]}
						</Text>
						<Text style={styles.explanation}>{question.explanation}</Text>
					</View>
				);
			})}
		</ScrollView>
	);
};

export default observer(Results);

const styles = StyleSheet.create({
	container: {
		gap: 10,
	},

	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	score: {
		fontSize: 20,
		textAlign: 'center',
	},
	resultItem: {
		borderRadius: 10,
		backgroundColor: '#f8f8f8',
	},
	question: {
		fontSize: 18,

		fontWeight: '500',
	},
	correct: {
		color: 'green',
	},
	incorrect: {
		color: 'red',
	},
	explanation: {
		color: '#666',
		fontStyle: 'italic',
	},
});
