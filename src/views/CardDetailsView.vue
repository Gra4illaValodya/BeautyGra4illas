<template>
	<div class="cardDetails" :class="{ open: isModalOpen }">
		<div class="cardDetails__wrapper" v-if="selectedCard">
			<h3 class="cardDetails__title">{{ selectedCard.title }}</h3>
			<div class="cardDetails__description">{{ selectedCard.fullDescription }}</div>
			<h2>Послуги та цiни</h2>
			<div class="cardDetails__priceWrapper">
				<div class="cardDetails__price" v-for="(offer, idx) in offers" :key="idx">
					<div>
						<div class="cardDetails__offerName">{{ offer.offerName }}</div>
					</div>
					<div class="cardDetails__btnWrapper">
						<button class="cardDetails__btn" @click="addOffer(offer)">
							{{ offer.added ? 'Вiдмiнити' : 'Купити' }}
						</button>
					</div>
					<div>
						<div class="cardDetails__offerPrice">{{ offer.offerPrice }}</div>
					</div>
				</div>
			</div>
			<div class="cardDetails__checkWrapper">
				<div class="cardDetails__checkBtnWrapper">
					<h3>Загальна сумма : {{ totalSelectedPrice }}</h3>
					<button class="cardDetails__check" @click="isModalOpen = true">
						записатися
					</button>
				</div>
			</div>
		</div>
	</div>
	<RecordModal :isModalOpen="isModalOpen" :closeModal="closeModalParent" @data="fromChild" />
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import RecordModal from '@/components/RecordModal/RecordModal.vue';

const route = useRoute();
const store = useStore();
const selectedCard = ref(null);
const offers = ref([]);
const fromChild = data => {
	console.log(data);
};
const offerItems = ref([]);
const isModalOpen = ref(false);
const closeModalParent = () => {
	isModalOpen.value = false;
};
const addOffer = offer => {
	const index = offerItems.value.findIndex(item => item.offer.offerName === offer.offerName);
	console.log('index', index);

	if (index === -1) {
		offerItems.value.push({ offer });
		offer.added = true;
		console.log('offerItems', offerItems.value);
	} else {
		offerItems.value.splice(index, 1);
		offer.added = false;
		console.log('offerItems', offerItems.value);
	}
	const seletedItems = offerItems.value.map(item => item.offer);
	console.log('seletedItems', seletedItems);
	store.commit('setSelectedOffer', seletedItems);
};

const removeOffer = offer => {
	const index = offerItems.value.some(item => item.offer.offerName === offer.offerName);
	if (index === -1) {
		offerItems.value.splice(index, 1);
	}
};
const totalSelectedPrice = computed(() => {
	let totalPrice = 0;
	offerItems.value.forEach(item => {
		if (item.offer.added) {
			totalPrice += item.offer.offerPrice;
		}
	});
	return totalPrice;
});
watchEffect(() => {
	const cardId = Number(route.params.id);
	selectedCard.value = store.state.services.find(card => card.id === cardId);
	offers.value = selectedCard.value ? selectedCard.value.offers : [];
	console.log('store.state.seletedItems', store.state.selectedOffer);
});

console.log('offers', offers.value);
</script>

<style lang="scss" scoped>
.cardDetails {
	&__priceWrapper {
		columns: 2;
		margin-bottom: 25px;
	}
	&__price {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 5px;
	}
	&__offerName {
		margin-right: 35px;
	}
	&__btnWrapper {
		margin-right: 5px;
	}
	&__btn {
		background-color: aliceblue;
	}
}

.open {
	opacity: 0.8;
	background-color: rgb(73, 73, 73);
}
</style>
