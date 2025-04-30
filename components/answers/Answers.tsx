import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/hooks/useStore';

import Answer from './Answer';

const Answers = () => {
	const { appStore } = useStore();

	return (
		<View style={styles.list}>
			{appStore.currentQuestion.options.map((option, index) => (
				<Answer key={index} title={option} index={index} />
			))}
		</View>
	);
};

export default observer(Answers);

const styles = StyleSheet.create({
	list: { gap: 10, flexGrow: 1, justifyContent: 'flex-end' },
});
