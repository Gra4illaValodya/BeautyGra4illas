<template>
	<div class="swiper">
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
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/bundle';

import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
const store = useStore();
const photos = store.state.classesStoreModule.swiper;
console.log('photo', photos);

let swiper;

onMounted(() => {
	swiper = new Swiper();
});
const onSwiper = ref => {
	swiper = ref;
};
const next = () => {
	swiper.slideNext();
};
const prev = () => {
	swiper.slidePrev();
};
</script>

<style lang="scss" scoped>
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
