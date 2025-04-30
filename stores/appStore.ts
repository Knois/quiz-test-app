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
			return this.userAnswers.reduce(
				(acc: number, answer: number, index: number) => {
					return acc + (answer === this.questions[index].correct ? 1 : 0);
				},
				0
			);
		},

		get currentQuestion() {
			return this.questions[this.currentQuestionIndex] as IQuestion;
		},

		get selectedAnswer() {
			return this.userAnswers[this.currentQuestionIndex] ?? null;
		},

		get showBackButton() {
			return this.currentQuestionIndex > 0;
		},

		get showNextButton() {
			return this.currentQuestionIndex < this.questions.length;
		},

		get isLastQuestion() {
			return this.currentQuestionIndex === this.questions.length - 1;
		},

		selectAnswer(answerIndex: number) {
			if (this.userAnswers.length > this.currentQuestionIndex) {
				this.userAnswers[this.currentQuestionIndex] = answerIndex;
			} else {
				this.userAnswers.push(answerIndex);
			}
		},

		goNext() {
			if (this.currentQuestionIndex === this.questions.length - 1) {
				this.isFinished = true;
			} else {
				this.currentQuestionIndex++;
			}
		},

		goPrevious() {
			if (this.currentQuestionIndex > 0) {
				this.currentQuestionIndex--;
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
