<template>
	<main>
		<div class="calculate">
			<h4 class="calculate__title">The current count is ...</h4>
			<h1 class="calculate__count">{{ count }}</h1>
			<button class="calculate__sub" @click="sub">-</button>
			<button class="calculate__add" @click="add">+</button>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const add = () => {
	count.value++;
};
const sub = () => {
	count.value--;
};
</script>

<style lang="scss" scoped>
main {
	background-color: aliceblue;

	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.calculate {
	text-align: center;
	&__title {
	}
	&__count {
	}
	&__sub {
		margin-right: 20px;
	}
	&__add {
	}
}
</style>
