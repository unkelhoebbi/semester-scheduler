import { createApp } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/extensions
import '@fortawesome/fontawesome-free/js/all.js';
import App from './App.vue';
import router from './router';

require('@/assets/main.scss');

createApp(App).use(router).mount('#app');
