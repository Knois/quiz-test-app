import { observer } from 'mobx-react-lite';
import { FC } from 'react';

import { useStore } from '@/hooks/useStore';

import Button from '../buttons/Button';

type Props = { title: string; index: number };

const Answer: FC<Props> = ({ title, index }) => {
	const { appStore } = useStore();

	const isSelected = appStore.selectedAnswer === index;

	const handlePress = () => appStore.selectAnswer(index);

	return (
		<Button title={title} handlePress={handlePress} isSelected={isSelected} />
	);
};

export default observer(Answer);
