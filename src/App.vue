<script setup>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import ServicesView from '@/views/ServicesView.vue';
</script>

<template>
	<div>
		<Header />

		<ServicesView />
		<Footer />
		<router-view></router-view>
	</div>
</template>

<style scoped></style>
