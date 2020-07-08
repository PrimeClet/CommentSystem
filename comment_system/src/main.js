import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app1')
