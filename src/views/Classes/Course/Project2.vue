<template>
	<main>
		<div class="notes">
			<div class="bg" v-if="showModal">
				<div class="modal">
					<textarea
						v-model.trim="newNoteInInput"
						class="modal__input"
						name="note"
						id="note"
						cols="30"
						rows="10"
					></textarea>
					<p v-if="errorMessage">{{ errorMessage }}</p>
					<button class="modal__btn-add" @click="addNewNote">Add note</button>
					<button class="modal__btn-close" @click="toggleModal">Close</button>
				</div>
			</div>
			<header>
				<div class="header-title">NOTES</div>
				<button class="header-btn" @click="toggleModal">+</button>
			</header>
			<div class="card-container">
				<div
					class="card"
					v-for="card in noteArray"
					:key="card.id"
					:style="{ background: card.color }"
				>
					<p class="card__text">
						{{ card.text }}
					</p>
					<div class="card__date">{{ card.date.toLocaleDateString('uk-UA') }}</div>
				</div>
				<!-- <div class="card">
					<p class="card__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellat
						suscipit iusto impedit aliquam? Porro.
					</p>
					<div class="card__date">09/10/2023</div>
				</div>
				<div class="card">
					<p class="card__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellat
						suscipit iusto impedit aliquam? Porro.
					</p>
					<div class="card__date">09/10/2023</div>
				</div> -->
			</div>
		</div>
	</main>
</template>

<script setup>
import { ref, watch } from 'vue';

const showModal = ref(false);
const newNoteInInput = ref('');
const noteArray = ref([]);
const errorMessage = ref('');

function getRandomColor() {
	return 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
}
const addNewNote = () => {
	if (newNoteInInput.value.length < 9) {
		return (errorMessage.value = 'Sorry but you must to write 10 characters');
	}
	noteArray.value.push({
		id: Math.floor(Math.random() * 10000),
		text: newNoteInInput.value,
		date: new Date(),
		color: getRandomColor()
	});
	errorMessage.value = '';
	showModal.value = false;
	newNoteInInput.value = '';
};
watch(newNoteInInput, newValue => {
	console.log('newValue', newValue);
});
console.log('newNote', newNoteInInput.value);

const toggleModal = () => {
	showModal.value = !showModal.value;
};
</script>

<style lang="scss" scoped>
.bg {
	position: absolute;
	z-index: 10;
	width: 100%;
	height: 100%;
	padding: 20px;
	background: rgba(0, 0, 0, 0.7);
}
.modal p {
	color: rgb(156, 26, 26);
}
.modal {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 700px;
	background-color: white;
	display: flex;
	flex-direction: column;
	padding: 20px 20px;
	border-radius: 10px;

	&__input {
		margin-bottom: 10px;
		border-radius: 10px;
		border: none;
		max-width: 680px;
		max-height: 400px;
		font-size: 16px;
		font-weight: 600;
		padding: 10px;
		background: lightgray;
	}
	&__btn-add {
		width: 100%;
		padding: 10px 20px;
		border-radius: 10px;
		color: white;
		background-color: blueviolet;
		cursor: pointer;
		font-size: 20px;
		font-weight: 800;
		margin-bottom: 10px;
	}
	&__btn-close {
		background-color: rgb(156, 26, 26);
		color: white;
		font-size: 20px;
		font-weight: 800;
		width: 100%;
		padding: 10px 20px;
		border-radius: 10px;
	}
}
.card-container {
	display: flex;
	flex-wrap: wrap;
}
.card {
	width: 255px;
	height: 255px;
	background-color: aquamarine;
	display: flex;
	padding: 10px;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 15px;
	margin: 10px;
	&__text {
		font-weight: 600;
		font-size: 18px;
	}
}
main {
	width: 100vw;
	height: 100vh;
	background-color: aliceblue;
}
.notes {
	// max-width: 1000px;
	padding: 10px;
	margin: 0 auto;
}
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.header-title {
	font-size: 75px;
	font-weight: bold;
	margin-bottom: 25px;
}
.header-btn {
	border-radius: 100px;
	background-color: black;
	color: rgb(255, 255, 255);
	font-size: 40px;
	font-weight: 100;
	width: 50px;
	height: 50px;
	border: 3px solid rgb(78, 0, 123);
}
</style>
