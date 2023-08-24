<template>
	<teleport to="body" v-if="isOpen">
		{{ imageLeft }}--{{ imageTop }}
		<div class="lightbox">
			<div class="backdrop" @click="isOpen = false"></div>
			<div
				class="content"
				ref="videos"
				:style="{
					top: imageTop + 'px',
					left: imageLeft + 'px',
					width: WidthParam + 'px',
					height: HeightParam + 'px'
				}"
			>
				<slot />
			</div>
		</div>
	</teleport>
	<div @click="handleImageClick" ref="content">
		<slot />
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

const isOpen = ref(false);
const content = ref(null);
const videos = ref(null);

const imageLeft = ref(0);
const imageTop = ref(0);

const WidthParam = ref(0);
const HeightParam = ref(0);

const isVideoPlaying = ref(false);

const handleImageClick = () => {
	isOpen.value = true;
	isVideoPlaying.value = true;
};

const updateImagePosition = () => {
	const imageElement = content.value.querySelector('img');
	const videoElement = content.value.querySelector('video');

	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	console.log('screenWidth !!!', screenWidth);
	console.log('screenHeight !!!', screenHeight);

	if (imageElement) {
		const imageWidth = imageElement.naturalWidth;
		const imageHeight = imageElement.naturalHeight;
		console.log('imageWidth', imageWidth);
		console.log('imageHeight', imageHeight);
		if (imageWidth > screenWidth) {
			imageTop.value = 30;
		} else {
			imageLeft.value = (screenWidth - imageWidth) / 2;
			WidthParam.value = imageWidth;
		}
		if (imageHeight > screenHeight) {
			imageLeft.value = 30;
		} else {
			imageTop.value = (screenHeight - imageHeight) / 2;
			HeightParam.value = imageHeight;
		}

		console.log('imageLeft.value', imageLeft.value);
		console.log('imageTop.value', imageTop.value);
	}

	if (videoElement) {
		videoElement.addEventListener('loadedmetadata', () => {
			const videoWidth = videoElement.videoWidth;
			const videoHeight = videoElement.videoHeight;

			console.log('videoWidth VIDEO', videoWidth);
			console.log('videoHeight VIDEO', videoHeight);

			if (videoHeight > screenHeight) {
				imageTop.value = 30;
				HeightParam.value = screenHeight;
			} else {
				imageTop.value = (screenHeight - videoHeight) / 2;
				HeightParam.value = videoHeight;

				console.log('imageLeft.value VIDEO', imageLeft.value);
				console.log('imageTop.value VIDEO', imageTop.value);
			}
			if (videoWidth > screenWidth) {
				imageLeft.value = 30;
				WidthParam.value = screenWidth;
			} else {
				imageLeft.value = (screenWidth - videoWidth) / 2;
				WidthParam.value = videoWidth;
			}

			if (!isVideoPlaying.value) {
				console.log('videoElement', videoElement);
				videoElement.muted = true;
				videoElement.play();
			} else {
				console.log('videoElement', videoElement);
				videoElement.muted = false;
				videoElement.muted = true;
			}
		});
	}
};

const handleResize = () => {
	if (isOpen.value) {
		updateImagePosition();
	}
};

onMounted(() => {
	window.addEventListener('resize', handleResize);

	updateImagePosition();
});

onUnmounted(() => {
	window.removeEventListener('resize', handleResize);
});

// watch(isVideoPlaying, newValue => {
// 	const videoElement = content.value.querySelector('video');
// 	if (newValue) {
// 		videoElement.play();
// 	} else {
// 		videoElement.pause();
// 	}
// });
watch(isOpen, newValue => {
	if (newValue) {
		nextTick(() => {
			updateImagePosition();
		});
	}
});
</script>

<style lang="scss" scoped>
.img {
	padding: 5px;
}

.lightbox {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
}

.content {
	animation-name: scaleModal;
	animation-duration: 0.4s;
	position: absolute;
	left: 0px;
	top: 0px;
	display: flex;
	z-index: 1;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.content img,
.content video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}



@keyframes scaleModal {
	0% {
		transform: scale(0.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>
