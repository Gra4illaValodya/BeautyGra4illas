<template>
	<div class="salonsMap">
		<h2 class="">Вибiр Салона</h2>
		<p v-if="textProps">{{ textProps }}</p>
        <p v-else> </p>
        
		<select name="salons" id="" v-model="salonSelected" @change="test">
			<option value="Velay">Салон краси, Kika-Style</option>
			<option value="PinkBabe">BACKSTAGE</option>
			<option value="BeautyfullMagic">Backstage Оболонь</option>
		</select>
		<div class="salonsMap__map">
			<iframe
				class="salonsMap__iframe"
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
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const salonSelected = ref('Velay');
const selectedSalonUrl = ref('');
const props = defineProps({
	textProps: {
		type: String,
		required: true
	}
});

const emits = defineEmits(['']);

console.log('textProps', props.textProps);
console.log('PROPS', props);
const textEmits = 'This text is EMITS';

const editEmits = () => {
	const textFromChild = props.textProps;
	emit('emitText', textFromChild);
};
const salons = computed(() => store.state.homeSalonsModules.salons);
const mapGoogle = url => `https://www.google.com/maps/embed?pb=${url}`;
const test = () => {
	console.log('111', salons.value);
	const salon = salons.value.find(salon => salon.selectValue === salonSelected.value);
	console.log('!salon', salon.mapUrl);
	if (salon.mapUrl) {
		selectedSalonUrl.value = mapGoogle(salon.mapUrl);
		console.log('selectedSalonUrl.value', selectedSalonUrl.value);
	}
};
</script>

<style lang="scss" scoped></style>
