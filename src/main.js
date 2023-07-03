import './assets/style.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { store } from './store/index.js';

createApp(App).use(router).use(store).use(PrimeVue).mount('#app'); 
