<template>
	<div class="w">
		<teleport to=".w">
			<slot>слота нет </slot>
		</teleport>
	</div>
</template>

<script>
import { h } from 'vue';
export default {
	props: {
		level: {
			default: 1
		},
		srcImage: {
			type: String
		}
	},
	setup(props, { slots }) {
		const slot = slots.default ? slots.default() : [];

		// const changeStyleSlot = slot.map(({ children }) => {
		// 	console.log('children', children);
		// 	return h('div', { style: { color: 'red', fontSize: '30px' } }, children);
		// });

		const hundleClick = () => {
			console.log('!!!', imgTag.props.src);
		};

		const imgSlot = slot.map(el => {});

		// const imgTag = slot.map(({ children }) => {
		// 	return h('img', {
		// 		src: props.srcImage,
		// 		alt: 'КАРТИНКА НЕ ПОДГРУЗИЛАСЬ !!!',
		// 		style: { width: '200px', height: '200px' },
		// 		onClick: hundleClick,
		// 		children
		// 	});
		// });
		// console.log('@', imgTag);

		// return () => h(imgTag);
	}
};
</script>

<style></style>
