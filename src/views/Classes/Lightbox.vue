<template>
	<teleport to="body" v-if="isOpen">
		<div class="lightbox">
			<div class="bg" @click="isOpen = false"></div>
			<div
				class="content"
				ref="photoAndVideoLightbox"
				:style="{
					top: photoElementTop + 'px',
					left: photoElementLeft + 'px',
					width: ElemenWidth + 'px',
					height: ElemenHeight + 'px'
				}"
			>
				<slot />
			</div>
		</div>
	</teleport>

	<div class="photoAndVideo" ref="photoAndVideoGalerey" @click="openLightbox">
		<slot />
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

const isOpen = ref(false);

const photoAndVideoGalerey = ref(null);
const openLightbox = () => {
	isOpen.value = true;
};
const photoElementLeft = ref(0);
const photoElementTop = ref(0);

const ElemenWidth = ref(0);
const ElemenHeight = ref(0);

const imageAndVideoPosition = () => {
	const photoElement = photoAndVideoGalerey.value.querySelector('img');
	console.log('photoElement', photoElement);

	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	if (photoElement) {
		const photoElementWidth = photoElement.naturalWidth;
		const photoElementHeight = photoElement.naturalHeight;

		if (photoElementWidth > screenWidth) {
			photoElementLeft.value = 0;
			ElemenWidth.value = screenWidth;
			console.log('BILSHE W');
		} else {
			ElemenWidth.value = photoElementWidth;
			photoElementLeft.value = (screenWidth - photoElementWidth) / 2;
			console.log('MENSHE W');
		}
		if (photoElementHeight > screenHeight) {
			photoElementTop.value = 15;
			ElemenHeight.value = screenHeight - 30;

			console.log('BILSHE H');
		} else {
			ElemenHeight.value = photoElementHeight;
			photoElementTop.value = (screenHeight - photoElementHeight) / 2;
			console.log('MENSHE H');
		}
	}
};

const windowResize = () => {
	if (isOpen.value) {
		imageAndVideoPosition();
	}
};
onMounted(() => {
	window.addEventListener('resize', windowResize);
	imageAndVideoPosition();
});
onUnmounted(() => {
	window.removeEventListener('resize', windowResize);
});

watch(isOpen, newValue => {
	if (newValue) {
		nextTick(() => {
			imageAndVideoPosition();
		});
	}
});
</script>

<style lang="scss" scoped>
.photoAndVideo {
	display: flex;
	width: 100%;
	height: 300px;
	margin-right: 5px;
}

.content {
	position: absolute;
	left: 0px;
	top: 0px;
	display: flex;
	z-index: 2;
}
.content img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.lightbox {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	display: flex;
	align-content: center;
	justify-content: center;
	z-index: 300;
}
.lightbox img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
.bg {
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.7);
}
</style>
