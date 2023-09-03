<template>
	<div class="test">
		<img
			class="element"
			ref="element"
			:src="srcUlr"
			alt=""
			v-hammer:press="e => openLightbox(e.target)"
		/>
		<video
			class="element"
			ref="element"
			v-hammer:press="e => openLightbox(e.target)"
			autoplay
			loop="true"
			muted
		>
			<source :src="srcUlrVideo" />
		</video>
		<video
			class="element"
			ref="element"
			v-hammer:press="e => openLightbox(e.target)"
			autoplay
			loop="true"
			muted
		>
			<source :src="srcUlrVideo2" />
		</video>
	</div>
</template>

<script setup>
import TouchLightbox from './TouchLightbox.vue';

const srcUlr =
	'https://img.freepik.com/premium-photo/futuristic-abstract-love-cloud-landscape-generative-ai_372999-12223.jpg';
const srcUlrVideo =
	'https://www.travely24.com/api/wp-content/uploads/2023/05/ssstik.io_1684486857299.mp4';
const srcUlrVideo2 =
	'https://www.travely24.com/api/wp-content/uploads/2023/05/ssstik.io_1684850725871.mp4';

const openLightbox = src => {
	console.log('lightbox is OPEN');
	if (src) {
		window.openTouchLightbox(src);
	} else {
	}
};
</script>

<style lang="scss" scoped>
.test {
	margin-top: 50px;
	display: flex;
	width: 100%;
}
.test img,
video {
	width: 100%;
	height: 100px;
}
// .element {
// 	width: 100%;
// 	object-fit: cover;
// 	height: 100%;
// }
</style>
