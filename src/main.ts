import Vue from "vue";
import App from "./App.vue";
import i18n from "./localization";
import Router from "./router";
import Store from "./store";

new Vue({
  el: "#app",
  i18n,
  render: (h) => h(App),
  router: Router,
  store: Store,
});
