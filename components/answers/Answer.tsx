import { observer } from 'mobx-react-lite';
import { FC } from 'react';

import { useStore } from '@/hooks/useStore';

import Button from '../buttons/Button';

import { AnswerProps } from '@/types/components/AnswerProps';

const Answer: FC<AnswerProps> = ({ title, index }) => {
	const { appStore } = useStore();

	const isSelected = appStore.selectedAnswer === index;

	const handlePress = () => appStore.selectAnswer(index);

	return (
		<Button title={title} handlePress={handlePress} isSelected={isSelected} />
	);
};

export default observer(Answer);
