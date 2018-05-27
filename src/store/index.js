import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import config from './modules/config'

Vue.use(Vuex)

let store = new Vuex.Store({
//   state: {
//   },
// 	mutations: {
// 	},
modules: {
	config
}
})
store.types = types

export default store
