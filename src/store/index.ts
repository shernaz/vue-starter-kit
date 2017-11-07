import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const strictMode: boolean = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state: {
      count: 0,
    },
    strict: strictMode,
});

export default store;
