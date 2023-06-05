import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicesView from '../views/ServicesView.vue';
import CardDetailsView from '../views/CardDetailsView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/services',
			name: 'services',
			component: ServicesView
		},
		{
			path: '/card/:id',
			name: 'cardDetails',
			component: CardDetailsView
		}
	]
});

export default router;
