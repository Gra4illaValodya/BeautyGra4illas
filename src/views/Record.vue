<template>
	<div class="record">
		<h2 class="record__title">Fill out the form below</h2>

		<div class="test">
			<input type="radio" name="t" style="display: none" />
			<label for="t" class="t">test</label>
		</div>
		<form action="#" @submit="addToObj" class="record__form">
			<div class="record__formItem">
				<label class="record__formLabel" for="name">Name : </label>
				<input class="record__formInput" type="text" id="name" v-model="name" />
			</div>
			<div class="record__formItem">
				<label class="record__formLabel" for="mail">Mail : </label>
				<input class="record__formInput" type="email" id="mail" v-model="mail" />
			</div>
			<div class="record__formItem">
				<label class="record__formLabel" for="age">age : </label>
				<input class="record__formInput" type="number" id="number" v-model="age" />
			</div>
			<div class="record__formItem">
				<label class="record__formLabel" for="text">text :</label>
				<textarea class="record__formInput" id="text" v-model="text" />
			</div>

			<div class="record__options">
				<div class="record__genderTitle">Your gender</div>
				<div class="record__male">
					<label class="record__formLabel" for="male">male : </label>
					<input
						class="record__optionInput"
						checked
						value="male"
						type="radio"
						id="male"
						name="gender"
					/>
				</div>
				<div class="record__female">
					<label class="record__formLabel" for="female">female : </label>
					<input
						class="record__optionInput"
						value="female"
						type="radio"
						name="gender"
						id="female"
					/>
				</div>
			</div>
			<div class="record__formItem">
				<label class="record__formLabel" for="select">select your nationality</label>
				<select name="nationality" id="">
					<option value="ukrain" selected>ukrain</option>
					<option value="african">african</option>
					<option value="german">german</option>
				</select>
			</div>
			<div class="record__formItem">
				<input type="file" accept=".jpg, .png, .gif" />
				<div>Select file</div>
			</div>
			<div class="record__formItem">
				<input class="record__agreement" name="agreement" type="checkbox" />
				<label for="agreement"> I agree to the firm politicy </label>
			</div>
			<button type="submit">Submit</button>
		</form>
	</div>
</template>
<script setup>
import { useStore } from 'vuex';
import { useForm, useField } from 'vee-validate';
const a = useField();
const aa = useField;
const b = useForm();
const bb = useForm;

console.log('a', a);
console.log('aa', aa);
console.log('b', b);
console.log('bb', bb);

const store = useStore();
let name = '';
let age = '';
let mail = '';
let text = '';

const addToObj = event => {
	event.preventDefault();

	const recordFormComponent = {
		name,
		age,
		mail,
		text
	};

	store.commit('setFormData', recordFormComponent);
	console.log('STORE', store.state.recordForm);
};
</script>

<style lang="scss" scoped>
.t {
	font-size: 20px;
	display: inline-flex;
	position: relative;
	&::before {
		content: '';
		flex: 0 0 24px;
		height: 24px;
		background-color: grey;
		border-radius: 50%;
	}

	&::after {
		content: '';
		position: absolute;

		background-color: black;
		z-index: 2;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}
}

.test {
	display: flex;
	flex: 0 0 24px;
	gap: 20px;
}
.item {
	width: 100px;
	height: 100px;
	background-color: red;
	border: 2px solid black;
}
.record {
	max-width: 550px;
	background-color: rgb(230, 230, 230);
	padding: 20px;
	&__title {
		font-size: 20px;
		margin-bottom: 10px;
	}
	&__form {
		max-width: 550px;
	}
	&__formItem {
		margin-bottom: 10px;
	}
	&__formLabel {
		display: block;
	}

	&__formInput {
		height: 50px;
		padding: 4px;

		&:is(textarea) {
			resize: vertical;
			padding: 20px;
		}
	}

	&__formSubmit {
	}
	&__options {
	}
	&__genderTitle {
	}
	&__male {
	}
	&__female {
	}
}
</style>
