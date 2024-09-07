import { createApp, ref } from "vue"
import App from "@/App.vue"

createApp(App)
    .provide("initialMessage", "Hello from index.cshtml.ts")
    .mount("#razor-app");

console.log("Hello from Index.cshtml.ts isolated");