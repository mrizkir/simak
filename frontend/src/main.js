import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import api from "./plugins/api";
import "@/plugins/Dayjs";

Vue.use(api);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount("#app");
