<template>
	<div class="header">
		<div class="header__logo">LOGO</div>
		<div class="header__nav">
			<nav>
				<router-link to="/services" class="header__navItem">Services</router-link>
				<router-link to="/about" class="header__navItem">About</router-link>
				<router-link to="/home" class="header__navItem">Home</router-link>
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
	margin-bottom: 100px;
	&__navItem {
		margin-right: 20px;
	}
	&__logo {
		font-size: 10px;
	}
}
nav {
	display: flex;
}
</style>
