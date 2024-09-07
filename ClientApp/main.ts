import "./style.css"
import { createApp, ref } from "vue"
import App from "./App.vue"

const app = createApp(App);
app.provide("initialMessage", "Hello from clientapp/main.ts");
app.mount("#main-app");