<template>
	<div class="emitchild">
		<div @click="sentToParent">RESET</div>
		<div>{{ someText }}</div>
		<!-- <div class="emitchild__culc">
			<input class="emitchild__number" v-model="number1" @input="calculateSum" />
			<input class="emitchild__number" v-model="number2" @input="calculateSum" />
			<div class="emitchild__result">{{ result }}</div>
		</div> -->
	</div>
</template>

<script>
import { ref, defineProps, defineEmits, onMounted } from 'vue';

export default {
	name: 'EmitChild',
	props: {
		someText: {
			type: String,
			required: true
		}
	},
	emits: ['updateText'],
	setup(props, { emit }) {
		const resetText = ref('RESET');

		const sentToParent = () => {
			console.log('@@s', resetText.value);
			emit('updateText', resetText.value);
		};
		onMounted(() => {});
		// const number1 = ref(0);
		// const number2 = ref(0);
		// const result = ref(0);
		// const textInChildComponent = ref('This text from child component');

		// const sendText = () => {
		// 	emit('updateText', textInChildComponent.value);
		// };

		// const calculateSum = () => {
		// 	result.value = Number(number1.value) + Number(number2.value);
		// 	emit('updateResult', result.value);
		// };

		return {
			resetText,
			sentToParent
		};
	}
};
</script>

<style lang="scss" scoped></style>
