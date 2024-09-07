console.log('[main.ts] Loaded');

import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'

const initialMessage = ref('Message from main.ts');

const app = createApp(App);

app.provide('initialMessage', initialMessage);

app.mount('#main-app');
