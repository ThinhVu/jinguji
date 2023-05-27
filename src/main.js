import {createApp} from 'vue';
import App from './Dev.vue';
import VueUiLib from '../index';
import 'uno.css';

async function initApp() {
  const app = createApp(App);
  app.use(VueUiLib);
  app.mount('#app');
}

initApp().then(() => console.log('App ready'));
