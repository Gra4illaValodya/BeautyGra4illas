<template>
	<div class="first" @click="message('first', $event)">
		<div class="second" @click="message('second', $event)">
			<div class="thirt" @click="message('third', $event)"></div>
		</div>
	</div>
</template>

<script setup>
localStorage['w'] = 24;

const user = {
	name: 'Filip',
	age: 34
};
localStorage['user'] = JSON.stringify(user);
const a = JSON.parse(localStorage['user']);
console.log('a', a.name);
const message = (text, event) => {
	const target = event.target;
	console.log(target);

	if (target) {
		console.log(`Hey is a ${text}`);
	}
};
</script>

<style lang="scss" scoped>
.first {
	width: 400px;
	height: 400px;
	background-color: aqua;
	z-index: 3;
}
.second {
	width: 200px;
	height: 200px;
	background-color: aquamarine;
	z-index: 2;
}
.thirt {
	width: 100px;
	height: 100px;
	background-color: yellow;
	z-index: 1;
}
</style>
