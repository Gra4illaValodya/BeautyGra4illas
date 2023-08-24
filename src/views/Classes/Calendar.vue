<template>
	<div class="calendar">
		<div class="calendar__title">КАЛЕНДАРЬ</div>
		<div class="calendar__year">{{ year }}</div>
		<div @click="nextYear">next year</div>
		<div class="calendar__month">{{ currentMonthName }}</div>
		<div @click="nextMonth">next month</div>
		<div class="calendar__week">
			<div class="calendar__day" v-for="day in daysInWeek" :key="day">{{ day }}</div>
		</div>
		<div class="calendar__dates">
			<div class="calendar__date" v-for="date in datesInMonth" :key="date">{{ date }}</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

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
const currentMonthName = ref(monthes[currentMonth]);
const month = computed(() => {
	return monthes[currentMonth];
});

const year = ref(newDate.getFullYear());

const nextYear = () => {
	year.value++;
	console.log('www', year.value);
};
let monthIndex = newDate.getMonth();

const nextMonth = () => {
	monthIndex++;
	if (monthIndex >= 12) {
		monthIndex = 0;
	}
	currentMonthName.value = monthes[monthIndex];
	console.log('curent monthIndex', monthIndex);
	console.log('curent mounth', currentMonthName.value);
};

const daysInWeek = computed(() => {
	return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
});

const datesInMonth = computed(() => {
	const daysInMonth = new Date(year.value, monthIndex + 1, 0).getDate();
	const datesArray = [];
	for (let i = 1; i <= daysInMonth; i++) {
		datesArray.push(i);
	}
	return datesArray;
});

const currentYear = ref(year.value);
</script>

<style lang="scss" scoped>
.calendar {
	padding: 20px;
	background: aliceblue;
	&__week {
		display: flex;
	}

	&__day {
		flex: 1;
		text-align: center;
		border: 1px solid #eee;
		padding: 5px;
	}

	&__dates {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		margin-top: 10px;
	}

	&__date {
		text-align: center;
		border: 1px solid #ccc;
		padding: 5px;
	}
}
</style>
