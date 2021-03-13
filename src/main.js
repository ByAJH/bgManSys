import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//第三方包
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './mock/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
