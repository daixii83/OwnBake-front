export default ({ app, router, store, vue }) => {
  router.beforeEach((to, from, next) => {
    const user = store.getters['user/user']
    if (to.meta.login && !user.isLogin) {
      next('/Login')
    } else if (to.meta.admin && !user.isAdmin && user._id) {
      next('/Home')
    } else {
      next()
    }
  })
}
