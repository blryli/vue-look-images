import Vue from 'vue'
import App from './App.vue'
import vueLookImages from './lib/index.js'
Vue.use(vueLookImages)

new Vue({
  el: '#app',
  render: h => h(App)
})
