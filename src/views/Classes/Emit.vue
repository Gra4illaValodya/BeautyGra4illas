<template>
	<div>
		<EmitChild @sendToParent="acceptText" :someText="someText" />
		<div class="" @click="acceptText">SHOW TEXT RESET</div>
        <div>{{text}}</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import EmitChild from './EmitChild.vue';

export default {
	name: 'Emit',
	components: { EmitChild },
	setup() {
		const someText = ref('SOME TEXT IN PARENT');
		const text = ref('');
		const acceptText = data => {
			console.log('data', data);
			text.value = data;
			console.log('text.value ', text.value);
		};

		return {
			someText,
			acceptText
		};
	}
};
</script>

<style lang="scss" scoped></style>
