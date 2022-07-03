import 'bootstrap/dist/css/bootstrap.css';
import '@/css/index.css';
import '@/css/normalize.css';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import 'bootstrap/dist/js/bootstrap';

const app = createApp(App);
app.use(router);
app.mount('#app');
