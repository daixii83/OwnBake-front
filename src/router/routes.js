
const routes = [
  {
    path: '/',
    component: () => import('layouts/FrontLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue'), meta: { title: 'OwnBake' } },
      { path: 'Home', component: () => import('pages/Home.vue'), meta: { title: 'OwnBake | 首頁' } },
      { path: 'AboutUs', component: () => import('pages/AboutUs.vue'), meta: { title: 'OwnBake | 關於我們' } },
      { path: 'Products', component: () => import('pages/Products.vue'), meta: { title: 'OwnBake | 甜點材料包' } },
      { path: 'ProductInfo/:id', component: () => import('pages/ProductInfo.vue'), meta: { title: 'OwnBake | 材料包介紹' } },
      { path: 'Reservation', component: () => import('pages/Reservation.vue'), meta: { login: true, title: 'OwnBake | 預約體驗' } },
      // { path: 'Forum', component: () => import('pages/Forum.vue'), meta: { title: 'OwnBake | 討論區' } },
      { path: 'ContactUs', component: () => import('pages/ContactUs.vue'), meta: { title: 'OwnBake | 聯絡我們' } },
      { path: 'Login', component: () => import('pages/Login.vue'), meta: { title: 'OwnBake | 會員登入' } },
      { path: 'Register', component: () => import('pages/Register.vue'), meta: { title: 'OwnBake | 會員註冊' } },
      { path: 'Register', component: () => import('pages/Register.vue'), meta: { title: 'OwnBake | 會員註冊' } },
      { path: 'Cart', component: () => import('pages/Cart.vue'), meta: { login: true, title: 'OwnBake | 購物車' } },
      {
        path: 'Member',
        component: () => import('pages/Member.vue'),
        meta: { login: true, title: 'OwnBake | 基本資料' },
        children: [
          { path: 'MyOrders', component: () => import('pages/MyOrders.vue'), meta: { login: true, title: 'OwnBake | 我的訂單' } },
          { path: 'MyReservations', component: () => import('pages/MyReservations.vue'), meta: { login: true, title: 'OwnBake | 我的預約' } }
          // { path: 'MyArticles', component: () => import('pages/MyArticles.vue'), meta: { login: true, title: 'OwnBake | 我的文章' } }
        ]
      }
    ]
  },
  {
    path: '/Admin',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { login: true, admin: true, title: 'OwnBake | 管理者介面' },
    children: [
      {
        path: '',
        component: () => import('src/pages/Admin.vue'),
        meta: { login: true, admin: true, title: 'OwnBake | 管理者主頁' },
        children: [
          { path: 'AdminProducts', component: () => import('pages/AdminProducts.vue'), meta: { login: true, admin: true, title: 'OwnBake | 商品管理' } },
          { path: 'AdminOrders', component: () => import('pages/AdminOrders.vue'), meta: { login: true, admin: true, title: 'OwnBake | 訂單管理' } },
          { path: 'AdminReservations', component: () => import('pages/AdminReservations.vue'), meta: { login: true, admin: true, title: 'OwnBake | 預約管理' } }
          // { path: 'AdminArticles', component: () => import('pages/AdminArticles.vue'), meta: { login: true, admin: true, title: 'OwnBake | 文章管理' } },
          // // { path: 'AdminMembers', component: () => import('pages/AdminMembers.vue'), meta: { login: true, admin: true, title: 'OwnBake | 會員介面' } }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
