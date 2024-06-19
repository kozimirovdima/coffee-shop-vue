import Vue from "vue";
import Vuex from "vuex";

import links from "./links";
import bestsellers from "./bestsellers";
import coffee from "./coffee";
import goods from "./goods";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    coffee,
    goods,
    bestsellers,
  },
});

export default store;
