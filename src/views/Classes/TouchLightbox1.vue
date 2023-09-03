<template>
	<div>
		<img
			src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80"
			alt=""
			@click="openLightbox"
		/>
	</div>
</template>

<script setup>
const openLightbox = src => {
	console.log('lightbox is OPEN');
	if (src) {
		window.openTouchLightbox(src);
	}
};
</script>

<style lang="scss" scoped></style>

<!--
<template>
	
	<Lightbox>
		<img
			src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80"
			alt=""
		/>
	</Lightbox>
	<Lightbox>
		<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""  />
	</Lightbox>
	<Lightbox>
		<img
			src="https://img.freepik.com/premium-photo/futuristic-abstract-love-cloud-landscape-generative-ai_372999-12223.jpg"
			alt=""
		/>
	</Lightbox>
 <Lightbox> </Lightbox>
	<Lightbox> </Lightbox> 
</template>

<script>
import Lightbox from './Lightbox.vue';

export default {
	components: { Lightbox },
	setup() {
		console.log('!!!@s');
		
	}
};
</script>

<style lang="scss" scoped>
.lightboxWrapper {
	display: flex;
}
</style>
-->
