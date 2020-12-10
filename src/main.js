import Vue from 'vue'
import App from './App.vue'
import pub from "./common/pub.js"
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Base64  from 'js-base64'
Vue.use(VueAxios,axios);
Vue.prototype.$axios = axios;
Vue.prototype.pub = pub;
Vue.prototype.Base64 = Base64;
import './plugins/element.js'
import "./assets/reset.css"
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
