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
import TouchLightbox1 from '../views/Classes/TouchLightbox1.vue';
import Lightbox from '../views/Classes/Lightbox.vue';
import Render from '../views/Classes/Render.vue';
import Position from '../views/Classes/Position.vue';
import LocalStorage from '../views/Classes/LocalStorage.vue';
import AsyncAwait from '../views/Classes/AsyncAwait.vue';
import Animations from '../views/Classes/Animations.vue';
import Emit from '../views/Classes/Emit.vue';
import EmitChild from '../views/Classes/EmitChild.vue';
import Course from '../views/Classes/Course/Course.vue';
import Project1 from '../views/Classes/Course/Project1.vue';
import Project2 from '../views/Classes/Course/Project2.vue';
import Project3 from '../views/Classes/Course/Project3.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/course/project-1',
			name: 'Project1',
			component: Project1
		},
		{
			path: '/course/project-2',
			name: 'Project2',
			component: Project2
		},
		{
			path: '/course/project-3',
			name: 'Project3',
			component: Project3
		},
		{
			path: '/classes/course',
			name: 'Course',
			component: Course
		},
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
			path: '/classes/localstorage',
			name: 'LocalStorage',
			component: LocalStorage
		},

		{
			path: '/classes/emit',
			name: 'Emit',
			component: Emit
		},
		{
			path: '/classes/emitchild',
			name: 'EmitChild',
			component: EmitChild
		},
		{
			path: '/classes/animations',
			name: 'Animations',
			component: Animations
		},
		{
			path: '/classes/asyncawait',
			name: 'AsyncAwait',
			component: AsyncAwait
		},
		{
			path: '/classes/position',
			name: 'position',
			component: Position
		},
		{
			path: '/classes/render',
			name: 'render',
			component: Render
		},
		{
			path: '/classes/calendar',
			name: 'calendar',
			component: Calendar
		},
		{
			path: '/classes/lightbox1',
			name: 'Lightbox1',
			component: TouchLightbox1
		},
		{
			path: '/classes/lightbox1',
			name: 'TouchLightbox1',
			component: Lightbox
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
