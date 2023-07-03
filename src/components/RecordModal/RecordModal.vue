<template>
	<div v-if="isModalOpen" class="bgModal">
		<div class="overlay" @click="closeModalChild">
			<div class="modal" @click.stop>
				<div class="modal__close"><button @click="closeModalChild">X</button></div>
				<div class="modal__wrapper">
					<h2 class="modal__title">Запис на процедуру</h2>
					<form class="modal__form" @submit.prevent="submitFormData">
						<div class="modal__input">
							<label for="name">Ім'я та прізвище: </label>
							<input type="text" name="name" v-model="formData.name" />
						</div>
						<div class="modal__input">
							<label for="date">Дата запису: </label>
							<div class="calendar">
								<Calendar class="calendar" v-model="date" :selectionMode="range">
									<template #date="slotProps">
										<span v-if="slotProps">{{ slotProps.date }} </span>
									</template>
								</Calendar>
							</div>
						</div>
						<div class="modal__input">
							<label>
								Оплата: <input type="checkbox" v-model="formData.paymentMethod" />
							</label>
							<span @click="sendToParent"> на мiсцi</span>
						</div>
						<div class="modal__input">
							<label for="select">Вибiр Салона </label>
							<select
								name="select"
								id=""
								class="modal__salon"
								v-model="formData.salon"
							>
								<option value="BeautyTopchik">BeautyTopchik</option>
								<option value="StarGirls">StarGirls</option>
								<option value="PinkMask">PinkMask</option>
							</select>
						</div>
						<div class="submit"><button type="submit">Вiдправити</button></div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { defineProps, defineEmits, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import Calendar from 'primevue/calendar';

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
const testInput = (re, str) => {
	let midstring;
	if (re.test(str)) {
		midstring = ' содержит ';
	} else {
		midstring = ' не содержит ';
	}
	console.log(`${str}${midstring}${re.source}`);
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
	paymentMethod: false,
	salon: ''
});
testInput(/^[A-Za-zА-Яа-яЁё\s]+$/, formData.value.name);
const submitFormData = () => {
	const recordedClient = {
		name: formData.value.name,
		date: formData.value.date,
		paymentMethod: formData.value.paymentMethod,
		salon: formData.value.salon
	};
	if (!recordedClient.name) {
		toastr.error('Ви не заповнили iмя');
	}

	if (!recordedClient.salon) {
		toastr.error('Пожалуйста, выберите хотя бы одну услугу.');
		return;
	}
	store.commit('setRecordedClients', recordedClient);
	props.closeModal();
	console.log('store.state.recordedClient', store.state.recordedClients);
};
console.log('store.state.recordedClients', store.state.recordedClients);
</script>

<style lang="scss" scoped>
.calendar {
	background-color: blanchedalmond;
}
.bgModal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}

.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(
		0,
		0,
		0,
		0.5
	); /* При необходимости, измените значение прозрачности (последнее число) */
	z-index: -1;
}
.modal {
	position: absolute;
	left: 50%;
	bottom: 50%;
	background-color: rgb(235, 239, 239);
	transform: translate(-50%, 60%);
	padding: 35px;
	border: 3px solid black;
	opacity: 1 !important;
	z-index: 2;
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
