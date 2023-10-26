<template>
	<div class="quize-container">
		<header>
			<h1>Quizes</h1>
			<input type="text" v-model.trim="search" />
		</header>

		<div class="cards">
			<Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
		</div>
	</div>
</template>

<script setup>
import q from '@/data/quizes.json';
import { ref, watch } from 'vue';
import Card from '../../Card.vue';

const quizes = ref(q);
const search = ref('');

watch(search, () => {
	quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
});
</script>

<style lang="scss" scoped>
.cards {
	display: flex;
	flex-wrap: wrap;
}

.quize-container {
	width: 100vw;
	height: 100vh;
	background-color: aliceblue;
}
header {
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	align-items: center;
}
header h1 {
	font-size: 20px;
	margin-right: 20px;
}
header input {
	background: rgba(123, 123, 123, 0.1);
	border: 1px solid black;
	padding: 5px;
}
</style>
