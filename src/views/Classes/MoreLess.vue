<template>
	<div class="reviews">
		<Swiper
			:slides-per-view="swiperOptions.slidesPerView"
			:space-between="swiperOptions.spaceBetween"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
			:scrollbar="swiperOptions.scrollbar"
			:slidesPerView="swiperOptions.slidesPerView"
			:spaceBetween="swiperOptions.spaceBetween"
			:pagination="swiperOptions.pagination"
			:navigation="swiperOptions.navigation"
		>
			<SwiperSlide class="reviews__wrapper" v-for="(contain, idx) in reviews" :key="idx">
				<div class="reviews__title">{{ contain.title }}</div>
				<div class="reviews__text" v-if="contain.text.length <= 150">
					{{ contain.text.slice(0, 150) + '...' }}
				</div>
				<div class="reviews__text" v-else>
					{{ isFullText[idx] ? contain.text.slice(0, 150) + '...' : contain.text }}
				</div>
				<div
					class="reviews__moreLess"
					v-if="contain.text.length >= 150"
					@click.stop="isFullTextActive(idx)"
				>
					{{ isFullText[idx] ? 'показать больше' : 'показать  меньше' }}
				</div>
			</SwiperSlide>
			<div class="swiper-button-next" @click.stop="next"></div>
			<div class="swiper-button-prev" @click.stop="prev"></div>
		</Swiper>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';

const store = useStore();
const reviews = store.state.classesStoreModule.moreLess;

const isFullText = ref([]);
let swiper;
onMounted(() => {
	swiper = new Swiper('.swiper', swiperOptions);
});
const onSwiper = ref => {
	swiper = ref;
};
const onSlideChange = () => {
	console.log('onSlideChange');
};
const isFullTextActive = idx => {
	isFullText.value[idx] = !isFullText.value[idx];
};
const next = () => {
	swiper.slideNext();
};
const prev = () => {
	swiper.slidePrev();
};
const swiperOptions = {
	slidesPerView: 2.5,
	spaceBetween: 10,
	pagination: { clickable: true },
	navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
	scrollbar: { draggable: true }
};

const modules = [Navigation, Pagination, Scrollbar];
</script>

<style lang="scss" scoped>
.reviews {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	&__wrapper {
		background-color: #fff;
		padding: 20px;
		min-width: 200px;
		max-width: 300px;
		max-height: 400px;
		border-radius: 12px;
		overflow: auto;
	}
	&__title {
		margin-bottom: 10px;
		font-size: 1.5rem;
		font-weight: 900;
	}
	&__moreLess {
		margin-top: 10px;
		font-weight: 900;
		text-decoration: underline;
	}
}
</style>
