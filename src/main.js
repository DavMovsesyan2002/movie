import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import SimplePlugin from './plugins/simplePlugin';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/styles.scss";
import marked from 'marked';


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


// import VueMdb, { AxiosPlugin } from "vue-mdbootstrap";

// // Default requirement
// Vue.use(VueMdb);
// // Optionally, install the MDBootstrap Axios plugin
// // only requires if using BsGrid, BsTreeGrid, BsModel, BsStore, BsTreeStore or needs to perform HTTP Request
// Vue.use(AxiosPlugin);



import VueRouter from 'vue-router'
import router from './router/index';

import store from './store/index';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.filter('marked',marked)
Vue.use(VueRouter)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Plugin
Vue.use(SimplePlugin)
// Vue.component('icon', FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router: router,
  store,
}).$mount('#app')
