<template>
	<div class="month">
		<div class="month__name">
			{{ format(daysMonth[0], 'MMMM') }} <span class="month__year">{{ year }}</span>
		</div>
		<Week @clicked-day="lisen" />
		<div class="month__dates">
			<div
				class="month__date"
				v-for="(day, idx) in newDaysMonth"
				:key="idx"
				@click="handleDateClick(day)"
				:class="{
					'start-date': isStartDate(day),
					'end-date': isEndDate(day),
					selected: isDateSelected(day) && !isStartDate(day) && !isEndDate(day),
					pastDate: pastDays(day)
				}"
			>
				{{ isDate(day) ? day.getDate() : '' }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { format, startOfMonth, isDate, isSameDay, isToday, isBefore } from 'date-fns'
import { computed, ref } from 'vue'
import Week from './Week.vue'

const props = defineProps({
	daysMonth: {
		type: Object
	},
	monthName: {
		type: String
	},
	selectedDateArray: {
		type: Array
	}
})
const emits = defineEmits()
const lisen = select => {
	console.log('select DATA :', select)
}

const handleDateClick = clickedDay => {
	emits('date-selected', clickedDay)
}

const daysMonth = props.daysMonth
const monthName = props.monthName

const year = ref(daysMonth[0].getFullYear())

const newDaysMonth = computed(() => {
	const startDate = startOfMonth(daysMonth[0])
	const emptyCell = format(startDate, 'i') - 1
	const emptyCallArray = []

	for (let i = 0; i < emptyCell; i++) {
		emptyCallArray.push('')
	}

	return emptyCallArray.concat(daysMonth)
})

const isDateSelected = date => {
	if (isDate(date)) {
		return props.selectedDateArray.some(selectedDate => {
			return isSameDay(date, new Date(selectedDate))
		})
	} else {
		return false
	}
}

const isStartDate = date => {
	if (props.selectedDateArray.length > 0) {
		return isSameDay(new Date(date), props.selectedDateArray[0])
	} else {
		return false
	}
}
const isEndDate = date => {
	if (props.selectedDateArray.length > 0 && !isStartDate(date)) {
		const lastSelectedDate = new Date(
			props.selectedDateArray[props.selectedDateArray.length - 1]
		)
		return isSameDay(new Date(date), lastSelectedDate)
	} else {
		return false
	}
}

const pastDays = date => {
	return isBefore(new Date(date), new Date())
}
</script>

<style lang="scss" scoped>
.month {
	margin-bottom: 20px;

	&__name {
		display: flex;
		justify-content: center;
		margin: 30px;
		font-weight: 800;
		font-size: 16px;
		color: black;
	}
	&__year {
		margin-left: 8px;
		color: black;
	}
	&__week {
		display: flex;
	}

	&__day {
		flex: 1;
		text-align: center;

		padding: 5px;
	}

	&__dates {
		display: grid;
		grid-template-columns: repeat(7, 1fr);

		margin-top: 10px;
	}

	&__date {
		text-align: center;
		font-size: 17px;
		padding: 5px;
		position: relative;
		margin: 10px 0;
		color: black;
	}
}
.selected {
	background: rgba(26, 125, 240, 0.1019607843);
}
.start-date {
	color: white;
	&::after {
		content: '';
		position: absolute;
		left: calc((100% - 46%) / 2);
		top: 0px;
		z-index: 1;
		background-color: rgba(26, 125, 240, 0.1019607843);
		width: calc(100% - 27%);
		height: 100%;
		border-bottom-left-radius: 50%;
		border-top-left-radius: 50%;
	}
	&::before {
		content: '';
		position: absolute;
		left: calc((100% - 35px) / 2);
		top: 0px;
		z-index: -2;
		background-color: blue;
		width: calc(100% - 7px);
		height: 100%;
		border-radius: 50%;
		width: 35px;
		height: 35px;
	}
}
.end-date {
	color: white;
	&::after {
		content: '';
		position: absolute;
		left: 0px;
		top: 0;
		z-index: 2;
		background: rgba(26, 125, 240, 0.1019607843);
		width: calc(100% - 15px);
		height: 100%;
		border-bottom-right-radius: 50%;
		border-top-right-radius: 50%;
	}
	&::before {
		content: '';
		position: absolute;
		left: calc((100% - 36px) / 2);
		top: 0px;
		z-index: -2;
		background-color: blue;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		width: 35px;
		height: 35px;
	}
}

.pastDate {
	color: rgb(171, 169, 169);
	pointer-events: none;
}
</style>
