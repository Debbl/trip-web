import { createApp } from "vue";
import App from "./App.vue";

// css 重置
import "normalize.css";
import "./assets/css/index.css";
// vue-router
import router from "./router";
// pinia
import pinia from "./stores";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
