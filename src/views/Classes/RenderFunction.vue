<template>
	<div>ss</div>
</template>

<script setup>
import { ref } from 'vue';
const someData = ref('2023-10-12');
const newDate = new Date(someData.value);
console.log('newDate', newDate);
</script>

<style lang="scss" scoped></style>
