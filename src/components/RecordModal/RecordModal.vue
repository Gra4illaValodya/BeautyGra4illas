<template>
	<div v-if="isModalOpen" class="modal">
		<div class="modal__close"><button @click="closeModalChild">X</button></div>
		<div class="modal__wrapper">
			<h2 class="modal__title">Запис на процедуру</h2>
			<form class="modal__form" @submit.prevent="submitFormData">
				<div class="modal__input">
					<label for="name">Ім'я та прізвище: </label>
					<input type="text" name="name" v-model="formData.name" required />
				</div>
				<div class="modal__input">
					<label for="date">Дата запису: </label>
					<input type="date" name="date" v-model="formData.date" required />
				</div>
				<div class="modal__input">
					<label>
						Оплата: <input type="checkbox" v-model="formData.paymentMethod" />
					</label>
					<span @click="sendToParent"> на мiсцi</span>
				</div>
				<div class="submit"><button type="submit">Вiдправити</button></div>
			</form>
		</div>
	</div>
</template>
<script setup>
import { defineProps, defineEmits, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
	isModalOpen: {
		type: Boolean
	},
	closeModal: {
		type: Function
	}
});
const store = useStore();
const emits = defineEmits(['data']);
const sendToParent = () => {
	const data = props.isModalOpen;
	emits('data', data);
};

const closeModalChild = () => {
	console.log('closeModal', props.closeModal);
	props.closeModal();
};

watchEffect(() => {
	console.log(props.isModalOpen);
});

const formData = ref({
	name: '',
	date: '',
	paymentMethod: false
});

const submitFormData = () => {
	const recordedClient = {
		name: formData.value.name,
		date: formData.value.date,
		paymentMethod: formData.value.paymentMethod
	};
	store.commit('setRecordedClients', recordedClient);
	props.closeModal();
	console.log('store.state.recordedClient', store.state.recordedClients);
};
console.log('store.state.recordedClients', store.state.recordedClients);
</script>

<style lang="scss" scoped>
.modal {
	position: absolute;
	left: 50%;
	bottom: 50%;
	background-color: rgb(235, 239, 239);
	transform: translate(-50%, 60%);
	padding: 35px;
	border: 3px solid black;
	opacity: 1 !important;
	&__wrapper {
	}
	&__form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	&__input {
		margin-bottom: 15px;
	}
	&__close {
		position: absolute;
		right: 5%;
		top: 5%;
	}
}
</style>
