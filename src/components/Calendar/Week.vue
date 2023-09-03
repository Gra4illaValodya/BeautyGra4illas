<template>
	<div class="week">
		<div class="week__day" v-for="day in daysInWeek" :key="day">
			{{ day }}
		</div>
	</div>
</template>

<script setup>
const daysInWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const props = defineProps({
	daysInWeek: Array
})
</script>

<style lang="scss" scoped>
.week {
	display: flex;
	padding-bottom: 15px;
	border-bottom: 1px solid rgb(242, 242, 242);

	&__day {
		flex: 1;
		text-align: center;
		padding: 5px;
		color: black;
	}
}
</style>
