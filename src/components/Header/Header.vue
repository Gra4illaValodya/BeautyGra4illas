<template>
	<div class="header">
		<div class="header__logo">LOGO</div>
		<div class="header__nav">
			<nav>
				<router-link to="/home" class="header__navItem">Головна</router-link>
				<router-link to="/about" class="header__navItem">Про мене</router-link>
				<router-link to="/services" class="header__navItem">Послуги</router-link>
				<router-link to="/youtube" class="header__navItem">youtube</router-link>
				<router-link to="/photoWorkView" class="header__navItem">ФОТО РОБIТ</router-link>
				<router-link to="/record" class="header__navItem">Форма запису</router-link>
				<router-link to="/classes" class="header__navItem">уроки</router-link>
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
	margin-bottom: 40px;
	border-radius: 10px;
	border-top: 2px solid rgb(255, 46, 46);
	border-bottom: 2px solid rgb(255, 46, 46);

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
