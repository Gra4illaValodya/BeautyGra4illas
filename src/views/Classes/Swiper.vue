<template>
	<div class="lightboxWrapper">
		<TouchLightbox>
			<video
				class="video"
				src="https://www.travely24.com/api/wp-content/uploads/2023/05/ssstik.io_1684486857299.mp4"
				controls
				autoplay
			></video>
		</TouchLightbox>
		<TouchLightbox>
			<img class="img" :src="imageUrl" />
		</TouchLightbox>
	</div>
	<!-- <div class="swiper">
		<Swiper
			:slides-per-view="2.5"
			:space-between="10"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
			navigation
			:pagination="{ clickable: true }"
			:scrollbar="{ draggable: true }"
		>
			<SwiperSlide v-for="(photo, idx) in photos" :key="idx">
				<div class="swiper__wrapper">
					<swiper-slide><img :src="photo.img" alt="" /></swiper-slide></div
			></SwiperSlide>
			<div class="swiper-button-next" @click="next"></div>
			<div class="swiper-button-prev" @click="prev"></div>
		</Swiper>
	</div> -->
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import TouchLightbox from './TouchLightbox.vue';
// import 'swiper/css';
// import 'swiper/css/bundle';

import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
const store = useStore();
const photos = store.state.classesStoreModule.swiper;
console.log('photo', photos);
const imageTru = ref(false);
// let swiper;
const imageUrl = 'https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg';
// onMounted(() => {
// 	swiper = new Swiper();
// });
// const onSwiper = ref => {
// 	swiper = ref;
// };
// const next = () => {
// 	swiper.slideNext();
// };
// const prev = () => {
// 	swiper.slidePrev();
// };
</script>

<style lang="scss" scoped>
.lightboxWrapper {
	display: flex;
}
img {
	object-fit: cover;
	width: 100%;
	height: 100%;
}
video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.swiper {
	&__wrapper img {
		max-width: 200px;
		min-width: 200px;
		min-height: 200px;
		max-height: 200px;
		object-fit: cover;
	}
}
</style>
