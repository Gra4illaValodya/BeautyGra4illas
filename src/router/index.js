import { createRouter, createWebHistory } from 'vue-router';

import ServicesView from '../views/ServicesView.vue';
import CardDetailsView from '../views/CardDetailsView.vue';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/services',
			name: 'services',
			component: ServicesView
		},
		{
			path: '/about',
			name: 'About',
			component: AboutView
		},
		{
			path: '/home',
			name: 'Home',
			component: HomeView
		},
		{
			path: '/services/:id',
			name: 'cardDetails',
			component: CardDetailsView
		}
	]
});

export default router;
