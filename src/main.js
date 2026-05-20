import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import Vue3ConfirmDialog from "vue3-confirm-dialog";
import "vue3-confirm-dialog/style";

const app = createApp(App);
const pinia = createPinia();

app.use(Vue3ConfirmDialog);
app.use(pinia);
app.use(router);
app.mount("#app");
