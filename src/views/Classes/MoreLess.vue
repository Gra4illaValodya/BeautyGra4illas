<template>
	<div class="moreLess">
		<div class="moreLess__wrapper" v-for="(moreLess, idx) in classes" :key="idx">
			<h2 class="moreLess__title">{{ moreLess.title }}</h2>
			<div class="moreLess__text">{{ moreLess.text }}</div>
		</div>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

const classes = store.state.classesStoreModule.moreLess;
console.log('class', classes);
</script>

<style lang="scss" scoped>
.moreLess {
	display: flex;
	gap: 10px;
	&__wrapper {
		background-color: #fff;
		padding: 20px;
	}
	&__title {
	}
	&__text {
	}
}
</style>
