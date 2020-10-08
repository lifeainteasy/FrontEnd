import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
Vue.config.productionTip = false
import rotues from './routes'
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
