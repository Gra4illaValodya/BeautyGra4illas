<template>
	<div class="position">
		<div class="position__positionFirst">
			<div class="position__positionSecond"></div>
		</div>
		<div class="position__positionFirst"></div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.position {
	width: 800px;
	height: 800px;
	background-color: azure;

	&__positionFirst {
		width: 250px;
		height: 250px;
		background-color: red;
		z-index: 999;
		&__positionSecond {
			width: 100px;
			height: 100px;
			background-color: papayawhip;
			z-index: 100000;
		}
	}
}
</style>
