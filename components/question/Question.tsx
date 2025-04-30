import { View, StyleSheet } from 'react-native';
import { memo } from 'react';

import Answers from '../answers/Answers';

import QuestionCount from './QuestionCount';
import QuestionLabel from './QuestionLabel';

const Question = () => {
	return (
		<View style={styles.question}>
			<QuestionCount />

			<QuestionLabel />

			<Answers />
		</View>
	);
};

export default memo(Question);

const styles = StyleSheet.create({
	question: {
		flex: 1,
		justifyContent: 'flex-start',
		gap: 30,
		paddingVertical: 10,
	},
});
