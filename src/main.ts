import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(fasHeart, farHeart);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
