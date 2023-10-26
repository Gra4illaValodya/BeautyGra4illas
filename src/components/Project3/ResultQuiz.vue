<template>
	<div class="result">
		<p>Your result...</p>
		<h1>{{ correctAnswer }}/{{ quizeQuestionsLength }}</h1>
		<div class="return">
			<router-link to="/course/project-3">go back</router-link>
		</div>
	</div>
</template>

<script setup>
const { correctAnswer, quizeQuestionsLength } = defineProps([
	'correctAnswer',
	'quizeQuestionsLength'
]);
</script>

<style lang="scss" scoped>
.result {
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
p {
	font-size: 30px;
}
h1 {
	font-size: 50px;
}
.return {
	font-size: 30px;
	text-decoration: none;
}
</style>
