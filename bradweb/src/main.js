import Vue from 'vue'
import App from './Welcome.vue'
import store from './store'
import './registerServiceWorker'
import './assets/css/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
