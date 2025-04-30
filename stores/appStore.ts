import { makeAutoObservable, runInAction } from 'mobx';

import questions from '@/assets/questions.json';
import { IQuestion } from '@/types/Question';

const store = () =>
	makeAutoObservable({
		questions: questions as IQuestion[],
		currentQuestionIndex: 0 as number,
		userAnswers: [] as number[],
		isFinished: false as boolean,

		get score() {
			return this.userAnswers.reduce((acc, answer, index) => {
				return acc + (answer === this.questions[index].correct ? 1 : 0);
			}, 0);
		},

		get currentQuestion() {
			return this.questions[this.currentQuestionIndex] as IQuestion;
		},

		answerQuestion(answerIndex: number) {
			this.userAnswers.push(answerIndex);

			if (this.currentQuestionIndex + 1 === this.questions.length) {
				this.isFinished = true;
			} else {
				this.currentQuestionIndex++;
			}
		},

		restartQuiz() {
			runInAction(() => {
				this.currentQuestionIndex = 0;
				this.userAnswers = [];
				this.isFinished = false;
			});
		},
	});

const appStore = store();

export default appStore;
