<template>
	<div class="quiz">
		<QuizHeader
			:questionStatus="questionStatus"
			:progres="progres"
			:correctAnswer="correctAnswer"
		/>
		<div>
			<QuizQuestion
				v-if="!showResult"
				:questions="quiz.questions[currentIndex]"
				@selectedOptions="correctOptions"
			/>
			<ResultQuiz
				v-else
				:quizeQuestionsLength="quiz.questions.length"
				:correctAnswer="correctAnswer"
			/>
		</div>
	</div>
</template>

<script setup>
import QuizHeader from '../components/Project3/QuizHeader.vue';
import QuizQuestion from '../components/Project3/QuizQuestion.vue';
import ResultQuiz from '../components/Project3/ResultQuiz.vue';
import quizes from '@/data/quizes.json';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id === quizId);
const currentIndex = ref(0);
const questionStatus = computed(() => {
	return `${currentIndex.value}/${quiz.questions.length}`;
});
const progres = computed(() => {
	return `${(currentIndex.value / quiz.questions.length) * 100}%`;
});
const showResult = ref(false);
const correctAnswer = ref(0);
const correctOptions = isCorrect => {
	if (isCorrect) {
		correctAnswer.value++;
	}
	if (quiz.questions.length - 1 === currentIndex.value) {
		showResult.value = true;
	}
	currentIndex.value++;
};
// const questionStatus = ref(`${currentIndex.value}/${quiz.questions.length}`);

// watch(
// 	() => currentIndex.value,
// 	() => {
// 		questionStatus.value = `${currentIndex.value}/${quiz.questions.length}`;
// 	}
// );
</script>

<style lang="scss" scoped>
.quiz {
	width: 100vw;
	height: 100vh;
	padding: 20px;
	background-color: aliceblue;
}
</style>
