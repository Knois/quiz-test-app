import { observer } from 'mobx-react-lite';
import { View } from 'react-native';

import { useStore } from '@/hooks/useStore';

import Button from '../buttons/Button';


const QuestionPrevious = () => {
	const { appStore } = useStore();

	const handlePress = () => appStore.goPrevious();

	if (!appStore.showBackButton) return <View />;

	return <Button title='Back' handlePress={handlePress} isControls />;
};

export default observer(QuestionPrevious);
