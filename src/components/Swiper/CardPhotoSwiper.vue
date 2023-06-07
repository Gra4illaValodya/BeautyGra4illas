<template>
	<div class="swiperCardPhoto">
		<swiper
			class="mySwiper swiper-event-page swiper-nav"
			:preloadImages="false"
			:loop="false"
			:slides-per-view="1"
			:pagination="{ clickable: true }"
			:navigation="{
				nextEl: '.mySwiper.swiper-event-page .swiper-button-next',
				prevEl: '.mySwiper.swiper-event-page .swiper-button-prev'
			}"
			@slideChange="onSlideChange"
			ref="swiperRef"
		>
			<template v-for="cardData in cardsData" :key="cardData.id">
				<swiper-slide class="slide">
					<template
						v-for="(photo, index) in cardData.photoSwiper"
						:key="`${cardData.id}-${index}`"
					>
						<SwiperSlide>
							<img class="swiperImg" :src="photo" alt="Image" />
						</SwiperSlide>
					</template>
				</swiper-slide>
			</template>
			<div class="swiper-button-prev swiper-button" @click.stop="prevSlide"></div>
			<div class="swiper-button-next swiper-button" @click.stop="nextSlide"></div>
		</swiper>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';

// Установите необходимые модули Swiper
SwiperCore.use([Navigation, Pagination]);
import { ref } from 'vue';
import { defineProps } from 'vue';
import { useStore } from 'vuex';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const store = useStore();

const props = defineProps({
	cardsData: {
		type: Array
	}
});
const swiperRef = ref(null);

const nextSlide = () => {
	swiperRef.value.swiper.slideNext();
};

const prevSlide = () => {
	swiperRef.value.swiper.slidePrev();
};

const onSlideChange = () => {
	console.log('slide change');
};
</script>

<style lang="scss" scoped>
.swiperCardPhoto {
}
.swiperImg {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.slide {
	display: flex;
	text-align: center;
	height: 100%;
	width: 100%;
}
.swiper-button {
	/* Добавьте стили для стрелок */
	cursor: pointer;
}
</style>
