import { createRouter, createWebHistory } from 'vue-router';

import ServicesView from '../views/ServicesView.vue';
import CardDetailsView from '../views/CardDetailsView.vue';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import LogoView from '../views/LogoView.vue';
import PhotoWorkView from '../views/PhotoWorkView.vue';
import Youtube from '../views/Youtube.vue';
import Record from '../views/Record.vue';
import Classes from '../views/Classes.vue';
import MoreLess from '../views/Classes/MoreLess.vue';
import Calendar from '../views/Classes/Calendar.vue';
import Swiper from '../views/Classes/Swiper.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/services',
			name: 'services',
			component: ServicesView
		},

		{
			path: '/youtube',
			name: 'youtube',
			component: Youtube
		},
		{
			path: '/classes',
			name: 'classes',
			component: Classes
		},
		{
			path: '/classes/moreLess',
			name: 'moreLess',
			component: MoreLess
		},
		{
			path: '/classes/calendar',
			name: 'calendar',
			component: Calendar
		},
		{
			path: '/classes/swiper',
			name: 'swiper',
			component: Swiper
		},
		{
			path: '/record',
			name: 'record',
			component: Record
		},
		{
			path: '/photoWorkView',
			name: 'photoWorkView',
			component: PhotoWorkView
		},
		{
			path: '/logoView',
			name: 'LogoView',
			component: LogoView
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
