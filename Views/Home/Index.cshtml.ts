import { createApp,ref } from 'vue'
import App from '@/App.vue'

const initialMessage = ref('Message from index.cshtml.ts');

createApp(App)
    .provide('initialMessage', initialMessage)
    .mount('#razor-app');

console.log('Hello from Index.cshtml.ts isolated');