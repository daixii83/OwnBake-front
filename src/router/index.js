import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import routeAuth from '../boot/routeAuth.js'
import metaTitle from '../boot/metaTitle.js'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
// export default function ({ store }) {
export default new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  routeAuth,
  metaTitle,

  // Leave these as they are and change in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
})

// router.beforeEach((to, from, next) => {
// const user = store.getters['user/user']
// if (to.meta.login && !user.isLogin) {
// next('/login')
// } else if (to.meta.admin && !user.isAdmin) {
// next('/')
// } else {
// next()
// }
// })
//
// router.afterEach((to, from) => {
// document.title = to.meta.title
// })
//
// return router
// }
