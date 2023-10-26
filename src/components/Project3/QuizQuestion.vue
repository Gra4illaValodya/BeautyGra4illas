<template>
	<div class="quiz__container">
		<div class="quiz__question">{{ questions.text }}</div>
		<div
			class="quiz__answer-container"
			v-for="question in questions.options"
			:key="question.id"
			@click="emitSelectedOptions(question.isCorrect)"
		>
			<div class="quiz__label">{{ question.label }}</div>
			<div class="quiz__answer">{{ question.text }}</div>
		</div>
	</div>
</template>

<script setup>
const { questions } = defineProps(['questions']);
const emit = defineEmits(['selectedOptions']);

const emitSelectedOptions = isCorrect => {
	emit('selectedOptions', isCorrect);
};

console.log('questions', questions);
</script>

<style lang="scss" scoped>
.quiz {
	&__container {
	}
	&__question {
		font-size: 35px;
		margin-bottom: 20px;
	}
	&__answer-container {
		display: flex;
		align-items: center;
		box-shadow: 3px 3px 7px 7px rgba(255, 228, 196, 0.9);
		margin-bottom: 30px;
	}
	&__label {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(255, 228, 196);
		margin-right: 20px;
	}
	&__answer {
	}
}
</style>
