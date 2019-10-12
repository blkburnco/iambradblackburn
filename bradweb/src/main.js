import Vue from 'vue'
import Home from './Welcome.vue'
import store from './store'
import './registerServiceWorker'
import './assets/css/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Home)
}).$mount('#app')
