<template>
	<div class="header">
		<div class="header__logo">LOGO</div>
		<div class="header__nav">
			<nav>
				<div class="header__navItem">Services</div>
				<div class="header__navItem">About</div>
				<div class="header__navItem">Home</div>
			</nav>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
.header {
	background-color: aliceblue;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	&__navItem {
		margin-right: 20px;
	}
}
nav {
	display: flex;
}
</style>
