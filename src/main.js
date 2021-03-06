import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store'
import axios from './common/myaxios'

// element-ui
import { Button, Select,Menu,MenuItem,MenuItemGroup, } from 'element-ui';
Vue.use(Button).use(Select).use(Menu).use(MenuItem).use(MenuItemGroup);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
