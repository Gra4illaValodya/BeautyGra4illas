<template>
	<div class="touch">
		<img ref="image" class="img" :src="imageUrl" @click="handleImageClick" />
	</div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['imageLeft', 'imageTop', 'imgUlr']);
const props = defineProps({ imageUrl: String });
console.log('props', props.imageUrl);
const imageUrl = props.imageUrl;
</script>

<style lang="scss" scoped>
.img {
	width: 300px;
	height: 300px;
}
</style>
