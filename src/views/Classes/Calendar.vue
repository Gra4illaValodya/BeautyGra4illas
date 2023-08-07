<template>
	<div class="calendar">
		<div class="calendar__title">КАЛЕНДАРЬ</div>
		<div class="calendar__year">{{ year }}</div>
		<div class="calendar__month">{{ month }}</div>
		<div class="calendar__week">
			<div class="calendar__day" v-for="day in daysInWeek" :key="day">{{ day }}</div>
		</div>
		<div class="calendar__dates">
			<div class="calendar__dates" v-for="date in dateInMonth" :key="date">{{ date }}</div>
		</div>

		<div @click="nextYear">nextYear</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';

const monthes = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const newDate = new Date();
const currentMonth = newDate.getMonth();
const month = computed(() => {
	return monthes[currentMonth];
});

const year = ref(newDate.getFullYear());

const nextYear = () => {
	year.value++;
	console.log('year', year.value);
};
const currentYear = ref(year.value);

const dateInMonth = computed(() => {
	const dayInMouth = new Date(year.value, currentMonth + 1, 0).getDate();
	const datesArray = [];
	for (let i = 1; i <= dayInMouth; i++) {
		datesArray.push(i);
	}
	return datesArray;
});
const daysInWeek = computed(() => {
	return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
});
</script>

<style lang="scss" scoped>
.calendar {
	&__title {
	}
	&__year {
	}
	&__week {
		display: flex;
		text-align: centerC;
	}
	&__day {
		margin-right: 5px;
		border: 1px solid black;
		padding: 4px;
	}
	&__calendar__dates {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		margin-top: 10px;
	}

	&__calendar__date {
		text-align: center;
		border: 1px solid #ccc;
		padding: 5px;
	}
}
</style>
