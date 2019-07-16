import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import pinDirective from './shared/pin-directive';

// Making Directives Available Globally
Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
