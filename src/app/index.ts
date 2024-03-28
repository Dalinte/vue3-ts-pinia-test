import { createApp } from 'vue';
import App from './app/App.vue';
import { vuetify, store } from './providers';

export const application = createApp(App).use(vuetify).use(store);
