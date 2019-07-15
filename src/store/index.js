import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// All changes must go through a mutation

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
});
