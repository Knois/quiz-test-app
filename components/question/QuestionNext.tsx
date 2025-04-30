import { observer } from 'mobx-react-lite';
import { View } from 'react-native';

import { useStore } from '@/hooks/useStore';

import Button from '../buttons/Button';

const QuestionNext = () => {
	const { appStore } = useStore();

	const handlePress = () => appStore.goNext();

	const text = appStore.isLastQuestion ? 'Finish' : 'Next';

	if (!appStore.showNextButton || appStore.selectedAnswer === null)
		return <View />;

	return <Button title={text} handlePress={handlePress} isControls />;
};

export default observer(QuestionNext);
