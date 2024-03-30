import { createApp } from 'vue';
import App from '@app/App.vue';
import { vuetify, store, toast } from './providers';

export const application = createApp(App).use(vuetify).use(store).use(toast);
