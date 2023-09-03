<template>
	<teleport to="body" v-if="isOpen">
		<div class="lightbox" @contextmenu.prevent>
			<div class="backdrop" @click="isOpen = false"></div>
			<div
				class="content"
				@click="isOpen = false"
				:style="{
					top: imageTop + 'px',
					left: imageLeft + 'px',
					width: WidthParam + 'px',
					height: HeightParam + 'px'
				}"
			>
				<img
					v-if="!localSrc.includes('.mp4')"
					@contextmenu.prevent
					:src="localSrc"
					class="elementLightbox"
				/>
				<video
					v-if="localSrc?.includes('.mp4')"
					@contextmenu.prevent
					ref="lingtboxVideoRef"
					class="elementLightbox"
				>
					<source :src="localSrc" />
				</video>
			</div>
		</div>
	</teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, watchEffect } from 'vue'

const isOpen = ref(false)
const localSrc = ref(null)

const clickedElement = ref(null)
const lingtboxVideoRef = ref(null)

const imageLeft = ref(0)
const imageTop = ref(0)

const WidthParam = ref(0)
const HeightParam = ref(0)
const tagNameElement = ref(null)

const handleClick = element => {
	console.log('element in lightbox before initialization', clickedElement.value)
	isOpen.value = true
	clickedElement.value = element
	console.log('element in lightbox', clickedElement.value)

	tagNameElement.value = element.tagName
	console.log('tagName', tagNameElement.value)
	if (tagNameElement.value === 'VIDEO') {
		const lightboxVideo = element.querySelector('source')
		console.log('lightboxVideo', lightboxVideo, lightboxVideo.getAttribute('src'))

		localSrc.value = lightboxVideo.getAttribute('src')
	} else if (tagNameElement.value === 'IMG') {
		localSrc.value = element.getAttribute('src')
	}
	console.log('localSrc.value', localSrc.value)
}
const updateImagePosition = () => {
	const screenWidth = window.innerWidth
	const screenHeight = window.innerHeight

	const videoElement = clickedElement.value
	console.log('videoElement', videoElement)

	const imageElement = clickedElement.value
	console.log('imageElement', imageElement)
	if (tagNameElement.value === 'IMG') {
		console.log('tagNameElement.value', tagNameElement.value)

		const imageWidth = imageElement.naturalWidth
		const imageHeight = imageElement.naturalHeight

		if (imageWidth > screenWidth) {
			imageLeft.value = 15
			WidthParam.value = screenWidth - 30
			console.log('WidthParam', WidthParam.value)
		} else {
			WidthParam.value = imageWidth
			imageLeft.value = (screenWidth - imageWidth) / 2
			console.log('WidthParam', WidthParam.value)
		}
		if (imageHeight > screenHeight) {
			imageTop.value = 15
			HeightParam.value = screenHeight - 30
			console.log('HeightParam', HeightParam.value)
		} else {
			HeightParam.value = imageHeight
			imageTop.value = (screenHeight - imageHeight) / 2
			console.log('HeightParam', HeightParam.value)
		}
	}
	if (tagNameElement.value === 'VIDEO') {
		console.log('tagNameElement.value', tagNameElement.value)

		const videoWidth = videoElement.videoWidth
		const videoHeight = videoElement.videoHeight

		if (videoWidth > screenWidth) {
			imageLeft.value = 0
			WidthParam.value = screenWidth
			console.log('WidthParam', WidthParam.value)
		} else {
			imageLeft.value = (screenWidth - videoWidth) / 2
			WidthParam.value = videoWidth
			console.log('WidthParam', WidthParam.value)
		}

		if (videoHeight > screenHeight) {
			imageTop.value = 15
			HeightParam.value = screenHeight - 30
			console.log('HeightParam', HeightParam.value)
		} else {
			imageTop.value = (screenHeight - videoHeight) / 2
			HeightParam.value = videoHeight
			console.log('HeightParam', HeightParam.value)
		}
	}
	console.log('final')
}

const onOpenLighbox = () => {
	if (clickedElement.value.tagName === 'VIDEO') {
		lingtboxVideoRef.value.muted = false
		lingtboxVideoRef.value.play()
		clickedElement.value.pause()
	}
	console.log('OpenLingtbox')
}

const onCloseLightbox = () => {
	if (clickedElement.value.tagName === 'VIDEO') {
		clickedElement.value.play()
		clickedElement.value.muted = true
	}
	clickedElement.value = null
	localSrc.value = null
}

watch(clickedElement, newValue => {
	if (newValue) {
		updateImagePosition()
		window.addEventListener('resize', updateImagePosition)
	} else {
		window.removeEventListener('resize', updateImagePosition)
	}
})

watch(isOpen, newValue => {
	if (newValue) {
		nextTick(() => {
			updateImagePosition()
			onOpenLighbox()
		})
	} else {
		onCloseLightbox()
	}
})
onMounted(() => {
	window.openTouchLightbox = handleClick
	window.closeTouchLightbox = () => {
		isOpen.value = false
	}
	console.log('lingtboxVideoRef', lingtboxVideoRef.value)
	updateImagePosition()
})
</script>

<style lang="scss" scoped>
.lightbox {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999999999;
}

.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	// background-image: url('https://w.forfun.com/fetch/fb/fb32051fea20df1c8d023670f962c372.jpeg?h=900&r=0.5');
}

.content {
	animation-name: scaleModal;
	animation-duration: 0.4s;
	position: absolute;
	left: 0px;
	top: 0px;
	display: flex;
	z-index: 1;
}
.content img,
.content video {
	width: 100%;
	height: 100%;
	object-fit: contain;
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
