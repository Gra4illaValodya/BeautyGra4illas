<template>
	<div class="services">
		<div class="services__cards">
			<div class="services__cardWrapper" v-for="cardData in cardsData" :key="cardData.id">
				<router-link :to="`/card/${cardData.id}`">
					<div class="services__card">
						<div class="services__img">
							<img :src="cardData.photo" alt="" />
						</div>
						<div class="services__info">
							<div class="services__title">{{ cardData.title }}</div>
							<div class="services__description">
								{{ cardData.description }}
							</div>
						</div>
					</div>
				</router-link>
			</div>
		</div>
		<np></np>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const store = useStore();
console.log(route.params.id);
console.log(router);
</script>

<style lang="scss" scoped>
.services {
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
}
</style>
