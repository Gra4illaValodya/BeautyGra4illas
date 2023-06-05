<template>
	<div>CARD DETAILS</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const props = defineProps({});

console.log(route.params.id);
</script>

<style></style>
