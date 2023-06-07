<script setup>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import ServicesView from '@/views/ServicesView.vue';
import { useStore } from 'vuex';
const store = useStore();

console.log('store.state', store);
</script>

<template>
	<div>
		<Header />

		<router-view></router-view>

		<!-- <Footer /> -->
	</div>
</template>

<style scoped></style>
