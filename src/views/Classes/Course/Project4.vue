<template>
	<main>
		<div class="cars">
			<header><h1 class="car__header">Cars Store</h1></header>
			<div class="car__items">
				<router-link
					:to="`/course/project-4/${car.id}`"
					class="car__item"
					v-for="car in cars"
					:key="car.id"
					>{{ car.name }}</router-link
				>
			</div>
		</div>
	</main>
</template>

<script setup>
import cars from '@/data/cars.json';

console.log('cars', cars);
</script>

<style lang="scss" scoped>
main {
	width: 100vw;
	height: 100vh;
	background-color: aliceblue;
}
.car {
	&__header {
		font-size: 20px;
	}
	&__items {
		display: flex;
	}
	&__item {
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
		text-decoration: none;
		margin: 10px;
		padding: 5px;
	}
}
</style>
