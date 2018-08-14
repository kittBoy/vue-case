import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import permission from './modules/permission'
import vuexState from './modules/vuexState'
import vuexGetters from './modules/vuexGetters'
import vuexMutations from './modules/vuexMutations'
import vuexAction from './modules/vuexAction'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        permission,
        vuexState,
        vuexGetters,
        vuexMutations,
        vuexAction
    },
    getters
})

export default store
