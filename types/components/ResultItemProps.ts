import { IQuestion } from '../Question';

export type ResultItemProps = {
	question: IQuestion;
	userAnswer: number;
	isCorrect: boolean;
};
