import Vue from "vue";
import Vuex from "vuex";
import shops from "./shops";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}, // we call the mutations from here || we can integrate APIs here
  modules: { shops },
});
