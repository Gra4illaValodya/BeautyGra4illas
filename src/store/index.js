import { createStore } from 'vuex';
import servicesModule from './modules/servicesModule';
import photoWorkModule from './modules/photoWorkModule';

export const store = createStore({
	state: {
		selectedOffer: [],
		recordedClients: []
	},
	mutations: {
		setRecordedClients(state, client) {
			state.recordedClients.push(client);
		}
	},
	modules: {
		servicesModule,
		photoWorkModule
	}
});
