<template>
	<div class="services">
		<div class="services__cards">
			<div class="services__cardWrapper" v-for="cardData in cardsData" :key="cardData.id">
				<div class="services__card" @click.stop="goToService($event, cardData.id)">
					<div class="services__img">
						<!-- <img :src="cardData.photo" alt="" /> -->
						<CardPhotoSwiper :cardData="cardData" />
					</div>

					<div class="services__info">
						<div class="services__title">{{ cardData.title }}</div>
						<div class="services__description">
							{{ cardData.description }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import CardPhotoSwiper from '@/components/Swiper/CardPhotoSwiper.vue';

const route = useRoute();
const router = useRouter();
const store = useStore();

const cardsData = store.state.servicesModule.services;
console.log('store.state', cardsData);
console.log(route.params);
console.log('router', router);

const goToService = (event, cardId) => {
	if (!event.target.closest('.swiper-slide')) {
		router.push(`/services/${cardId}`);
	}
};
</script>

<style lang="scss" scoped>
.services {
	display: flex;
	justify-content: center;
	&__cards {
		display: flex;
	}
	&__cardWrapper {
		max-width: 300px;
		height: 80px;
		&:hover {
			transform: scale(1.2);
			transition: transform scale(1.2);
		}
	}
	&__card {
		border: 2px solid grey;
		margin-right: 35px;
	}
	&__img > img {
		width: 100%;
	}
	&__info {
		padding: 15px;
	}
	&__title {
		padding-bottom: 25px;
	}
}
</style>
