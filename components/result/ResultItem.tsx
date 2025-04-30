import { View, Text, StyleSheet } from 'react-native';
import { FC, memo } from 'react';
import { ResultItemProps } from '@/types/components/ResultItemProps';

const ResultItem: FC<ResultItemProps> = ({
	question,
	userAnswer,
	isCorrect,
}) => {
	return (
		<View style={styles.item}>
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
};

export default memo(ResultItem);

const styles = StyleSheet.create({
	item: {
		borderRadius: 10,
		backgroundColor: '#f8f8f8',
		padding: 10,
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
