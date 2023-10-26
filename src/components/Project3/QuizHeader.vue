<template>
	<div>
		<header>
			<h1>Question {{ questionStatus }}</h1>
			<div class="progressbar">
				<div class="complete" :style="{ width: progres }"></div>
			</div>
		</header>
	</div>
</template>

<script setup>
const { questionStatus, progres } = defineProps(['questionStatus', 'progres']);
</script>

<style lang="scss" scoped>
header {
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
header h1 {
	font-size: 50px;
}
.progressbar {
	width: 300px;
	height: 50px;
	border: 3px solid burlywood;
}
.complete {
	width: 0%;
	height: 50px;
	background-color: burlywood;
}
</style>
