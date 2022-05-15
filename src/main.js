import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueInstagram from 'vue-instagram'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueInstagram,
  render: h => h(App)
}).$mount('#app')
