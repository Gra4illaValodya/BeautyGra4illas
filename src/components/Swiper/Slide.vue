<template>
	<SwiperSlide class="slide">
		<template v-for="photo in photoSwiper" :key="photo">
			<img class="swiperImg" :src="photo" alt="Image" />
		</template>
	</SwiperSlide>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue';

const props = def {
  photoSwiper: {
    type: Array,
    required: true
  }
}

export default {
  components: {
    SwiperSlide
  }
};
</script>

<style lang="scss" scoped>
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
</style>
