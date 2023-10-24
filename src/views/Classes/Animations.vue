<template>
	<div class="animations">
		{{ modal }}
		<div class="animations__triger" @click="openModal">Animations</div>
		<div class="animations__bg" v-if="modal" @click="modal = !modal"></div>
		<div class="animations__modal" v-if="modal">
			modal
			<div class="animations__animation" @click="jump">
				click me and I jump up
				{{ animation }}
			</div>
			<div class="jump" v-if="animation">JUMP JUMP JUMP</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const modal = ref(false);
const openModal = () => {
	modal.value = !modal.value;
};
const animation = ref(false);
const jump = () => {
	animation.value = !animation.value;
};
</script>

<style lang="scss" scoped>
.animations {
	position: relative;
	&__triger {
		font-size: 25px;
	}
	&__modal {
		background-color: rgb(235, 230, 230);
		width: 500px;
		height: 500px;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	&__bg {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.4);
	}
	&__animation {
		cursor: pointer;
	}
}

.jump {
	animation: jumper 0.8s;
	// transition: all 0.8s;
	position: relative; /* Изменение позиции на absolute */
	bottom: -100px; /* Начальное положение */
	// z-index: 1;
	// width: 100%;
	// text-align: center;
}

@keyframes jumper {
	0% {
		bottom: 50px;
		z-index: 1;
	}
	50% {
		bottom: 100px;
		z-index: 1;
	}
	// 80% {
	// 	bottom: 50px;
	// 	z-index: 1;
	// }
	100% {
		bottom: -150px;
		z-index: 1;
	}
}
</style>
