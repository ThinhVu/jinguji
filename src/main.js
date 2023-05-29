import {createApp} from 'vue';
import App from './Dev.vue';
import VueUiLib from '../index';
import useTrack from './directives/track'
import 'uno.css';

async function initApp() {
  const app = createApp(App);
  app.use(VueUiLib);
  useTrack(app)
  app.mount('#app');
}

initApp().then(() => console.log('App ready'));
