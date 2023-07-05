<template>
	<div class="home">
		<div class="home__wrapper">
			<div class="home__title">Мoї салони знаходиться в Києві</div>
			<select name="" id="" v-model="selectedSalon" @change="updateSelectedSalonUrl">
				<option value="Velay">Velay</option>
				<option value="PinkBabe">PinkBabe</option>
				<option value="BeautyfullMagic">BeautyfullMagic</option>
			</select>
			<div>
				<iframe
					:src="`${selectedSalonUrl}`"
					width="600"
					height="450"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
const salons = computed(() => store.state.homeSalonsModules.salons);
const selectedSalon = ref('Velay');
const selectedSalonUrl = ref('');
const showMap = ref(true);
console.log('router', router);
console.log('salons', salons.value);
const velay = computed(() => {
	const salon = salons.value.find(salon => salon.value === 'Velay');
	return salon ? salon.mapUrl : '';
});

console.log('velay.value', velay.value);

const mapGoogle = url => `https://www.google.com/maps/embed?pb=${url}`;

const updateSelectedSalonUrl = () => {
	const salon = salons.value.find(salon => salon.value === selectedSalon.value);
	console.log('salon', salon.mapUrl);
	if (salon.mapUrl) {
		selectedSalonUrl.value = mapGoogle(salon.mapUrl);
		console.log('selectedSalonUrl.value', selectedSalonUrl.value);
	}
};

console.log('!!', selectedSalonUrl.value);
</script>

<style lang="scss" scoped></style>
