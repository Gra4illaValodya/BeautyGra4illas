<template>
	<div class="verticaleCalendar">
		<Month
			v-for="(monthData, monthName) in calendarData"
			:key="monthName"
			:daysMonth="monthData"
			:monthName="monthName"
			:selectedDateArray="selectedDateArray"
			@click="saveSelectedDates"
			@date-selected="handleDateSelected"
		/>
	</div>
</template>

<script setup>
import {
	eachDayOfInterval,
	startOfWeek,
	addDays,
	addMonths,
	startOfMonth,
	format,
	getDaysInMonth,
	isBefore
} from 'date-fns'
import Month from './Month.vue'
import { ref, toRefs } from 'vue'

const props = defineProps({
	selectedDates: {
		type: Array
	}
})
const emits = defineEmits(['onStateChanged'])

const selectedDateArray = ref(props.selectedDates)
console.log('props.selectedDates,', props.selectedDates)

const { selectedDates } = toRefs(props.selectedDates)

const saveSelectedDates = () => {
	console.log('selectedDates', selectedDates)
	emits('onStateChanged', selectedDateArray.value)
}

const handleDateSelected = selectedDate => {
	if (selectedDate) {
		if (
			selectedDateArray.value.length === 0 ||
			selectedDateArray.value.length > 1 ||
			(selectedDateArray.value.length === 1 &&
				!isBefore(selectedDateArray.value[0], selectedDate))
		) {
			selectedDateArray.value = [selectedDate]
		} else if (
			selectedDateArray.value.length === 1 &&
			isBefore(selectedDateArray.value[0], selectedDate)
		) {
			const startDate = selectedDateArray.value[0]
		
			const endDate = selectedDate
			selectedDateArray.value = eachDayOfInterval({ start: startDate, end: endDate })
		}
	}
}

const newDate = new Date()
const currentMonth = newDate.getMonth()

const generateCalendarData = () => {
	const currentDate = new Date()
	const calendarData = {}

	for (let i = 0; i < 24; i++) {
		const currentMonth = addMonths(currentDate, i)
		const monthName = format(currentMonth, 'MMMM')
		const startDate = startOfMonth(currentMonth)
		const endDate = addDays(startOfMonth(currentMonth), getDaysInMonth(currentMonth) - 1)

		const datesArray = eachDayOfInterval({ start: startDate, end: endDate })

		calendarData[monthName + startDate.getFullYear()] = datesArray
	}

	return calendarData
}

const calendarData = generateCalendarData()
console.log('calendarData!!', calendarData)
</script>

<style lang="scss" scoped>
.verticaleCalendar {
	padding: 10px;
	&__button {
		width: 145px;
		height: 35px;
		background-color: beige;
		position: fixed;
		bottom: 7%;
		left: 33%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
