export default ({ app, router, store, vue }) => {
  router.afterEach((to, from) => {
    document.title = to.meta.title
  })
}
