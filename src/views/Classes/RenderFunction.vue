<template>
	<div></div>
</template>

<script setup>
import { ref } from 'vue';
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

const fullDate = [...`${year} ${month - 1} ${day}`];

const result = fullDate.filter(item => {
	return item === ' ';
});
console.log('result', result);

console.log(fullDate);
</script>

<style lang="scss" scoped></style>
