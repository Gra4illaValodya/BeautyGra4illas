<template>
	<div class="reviews">
		<div class="reviews__wrapper" v-for="(contain, idx) in reviews" :key="idx">
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
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const reviews = store.state.classesStoreModule.moreLess;

const isFullText = ref([]);

const isFullTextActive = idx => {
	isFullText.value[idx] = !isFullText.value[idx];
};
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
