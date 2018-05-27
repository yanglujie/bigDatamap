// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'
import 'iview/dist/styles/iview.css' 
import axios from 'axios'

Vue.prototype.$http = axios

store.commit(store.types.CONFIG_INIT, {bgWidth: 5744, bgHeight: 3068})
store.commit(store.types.BUILDING, {bgWidth1: 1350, bgHeight1: 810})

Vue.config.productionTip = false
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
