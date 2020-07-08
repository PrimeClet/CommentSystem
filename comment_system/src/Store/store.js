import Vue from 'vue'
import Vuex from 'vuex'
import userData from './modules/users'
import comments from './modules/comments'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        userData,
        comments
    },
    strict: true,
})