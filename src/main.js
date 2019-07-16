import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/currency-filter';


// Making directives available globally
Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);

// Making filters available globally
Vue.filter('currency', currencyFilter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
