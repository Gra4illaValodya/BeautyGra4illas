<template>
	<div class="choisedCar">
		<header class="choisedCar__title">
			Your Choised Car is - <span class="choisedCar__car">{{ car.name }}</span>
		</header>

		<div class="choisedCar__container">
			<div class="choisedCar__name item">Name: {{ car.name }}</div>
			<div class="choisedCar_year item">Year: {{ car.year }}</div>
			<div class="choisedCar__price item">Price: {{ car.price }}$</div>
		</div>
		<button @click="router.push(`/course/project-4/${carId}/contact`)">Show Contact</button>
		<router-view></router-view>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import cars from '@/data/cars.json';
import ContactView from './ContactView.vue';

const route = useRoute();
const router = useRouter();
console.log('route', route);
console.log('router', router);

const carId = parseInt(route.params.id);
const car = cars.find(c => c.id === carId);

console.log('car', car);
</script>

<style lang="scss" scoped>
header {
	margin-bottom: 40px;
}
.item {
	margin-bottom: 15px;
	box-shadow: 1px 1px 10px rgba($color: #000000, $alpha: 0.5);
	width: 150px;
}
.choisedCar {
	width: 100vw;
	height: 100vh;
	padding: 20px;
	background-color: aliceblue;
	&__title {
		font-size: 20px;
		font-weight: 500;
	}
	&__car {
		color: red;
		font-size: 24px;
		font-weight: 800;
	}
	&__container {
		font-size: 15px;
		font-weight: 800;
	}
	&__name {
	}
	&_year {
	}
	&__price {
	}
}
</style>
