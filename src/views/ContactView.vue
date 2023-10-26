<template>
	<div>
		<div>CONTACT INFO</div>
		<p>{{ car.contact.dealer }}</p>
		<p>{{ car.contact.number }}</p>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import cars from '@/data/cars.json';
const route = useRoute();
const car = cars.find(c => c.id === parseInt(route.params.id));
</script>

<style lang="scss" scoped></style>
