<template>
	<div>PHOTO WORK SLIDER</div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const PhotoWorkImg = computed(() => store.state.photoWorkModule.photoWork);
const store = useStore();
const onSwiper = swiper => {
	console.log(swiper);
};
const onSlideChange = () => {
	console.log('slide change');
};
</script>

<style lang="scss" scoped></style>
