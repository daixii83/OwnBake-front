import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import createPersistedState from 'vuex-persistedstate'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      productsUpdateStatus: false
    },
    mutations: {
      TOGGLE_PRODUCTS_UPDATE_STATUS (state) {
        // Toggle the status flag
        state.productsUpdateStatus = !state.productsUpdateStatus
      }
    },
    actions: {
      toggleProductsUpdateStatus (context) {
        context.commit('TOGGLE_PRODUCTS_UPDATE_STATUS')
      }
    },
    modules: {
      user
    },
    plugins: [createPersistedState({
      key: 'OwnBake',
      paths: ['user.token']
    })],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
