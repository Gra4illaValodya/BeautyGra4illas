import { createStore } from 'vuex';
import servicesModule from './modules/servicesModule';
import photoWorkModule from './modules/photoWorkModule';
import homeSalonsModules from './modules/homeSalonsModules';
import classesStoreModule from './modules/classesStoreModule';

export const store = createStore({
	state: {
		selectedOffer: [],
		recordedClients: [],
		recordForm: []
	},
	mutations: {
		setRecordedClients(state, client) {
			state.recordedClients.push(client);
		},
		setFormData(state, formData) {
			state.recordForm.push(formData);
		}
	},

	modules: {
		servicesModule,
		photoWorkModule,
		homeSalonsModules,
		classesStoreModule
	}
});
