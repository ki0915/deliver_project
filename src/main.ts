import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import BootstrapVue3 from "bootstrap-vue-3";
import router from "./router";
import BootstrapIconsPlugins from "bootstrap-icons-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(BootstrapIconsPlugins)
  .mount("#app");

//뷰는 메인에다 import 하면 다른 곳에서 해당 import 파일 다 쓸 수 있다.
