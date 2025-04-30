import { observer } from 'mobx-react-lite';

import { useStore } from '@/hooks/useStore';

import Button from '../buttons/Button';

const ResultRestart = () => {
	const { appStore } = useStore();

	const handlePress = () => appStore.restartQuiz();

	return <Button title='Restart' handlePress={handlePress} />;
};

export default observer(ResultRestart);
