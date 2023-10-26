<template>
	<div class="card" @click="goToCard">
		<div class="card__img">
			<img :src="quiz.img" alt="" />
		</div>
		<div class="card__title">{{ quiz.name }}</div>
		<div class="card__options">{{ quiz.questions.length }} questions</div>
	</div>
</template>

<script setup>
const { quiz } = defineProps(['quiz']);
import { useRouter } from 'vue-router';
const router = useRouter();

const goToCard = () => {
	router.push(`/course/project-3/${quiz.id}`);
};

</script>

<style lang="scss" scoped>
.card {
	width: 310px;
	overflow: hidden;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
	border-radius: 2%;
	padding: 5px;
	margin-right: 20px;
	margin-bottom: 20px;

	&__img img {
		width: 100%;
		height: 190px;
	}
	&__img {
	}
	&__title {
		font-size: 20px;
		font-weight: 800;
	}
}
</style>
