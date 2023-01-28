import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

import store from 'store'
Vue.prototype.$store = store;

App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif