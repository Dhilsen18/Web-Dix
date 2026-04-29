import { createApp } from 'vue';
import './style.css';
import App from './app.vue';

import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Button from 'primevue/button';
import Card from 'primevue/card';
import SelectButton from 'primevue/selectbutton';
import Toolbar from 'primevue/toolbar';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Tag from 'primevue/tag';
import Skeleton from 'primevue/skeleton';
import Divider from 'primevue/divider';

import i18n from './i18n.js';

createApp(App)
  .use(i18n)
  .use(PrimeVue, { ripple: true, theme: { preset: Material } })
  .use(ToastService)
  .component('pv-button', Button)
  .component('pv-card', Card)
  .component('pv-select-button', SelectButton)
  .component('pv-toolbar', Toolbar)
  .component('pv-toast', Toast)
  .component('pv-tag', Tag)
  .component('pv-skeleton', Skeleton)
  .component('pv-divider', Divider)
  .mount('#app');
