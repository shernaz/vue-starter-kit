import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "./en.json";
import nl from "./nl.json";

Vue.use(VueI18n);

const messages = {
  en,
  nl,
};

const i18n = new VueI18n({
  fallbackLocale: "en",
  locale: "en",
  messages,
});

export default i18n;
