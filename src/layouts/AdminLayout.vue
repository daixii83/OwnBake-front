<template>
  <q-layout view="hHh lpR fff" class="bg-primary my-font">
    <q-header reveal height-hint="98">
      <div>
        <q-toolbar class="bg-primary text-white shadow-2" flat>
          <q-space/>
          <!--
            notice shrink property since we are placing it
            as child of QToolbar
          -->
          <q-tabs align="center" shrink stretch>
            <q-route-tab to="/AboutUs" label="關於我們" />
            <q-route-tab to="/Products" label="商品介紹" />
            <q-route-tab to="/Reservation" label="預約體驗" />
            <q-btn flat to="/Home" label="OwnBake" />
            <!-- <q-route-tab to="/Forum" label="討論區" /> -->
            <q-route-tab to="/ContactUs" label="聯絡我們" />
            <q-route-tab v-if="user.isLogin && user.isAdmin" to="/Admin" label="管理者介面" />
          </q-tabs>
          <q-space/>
          <div class="sidetab">
              <q-btn flat to="/Cart">
                <q-icon size="20px" name="fas fa-shopping-cart"></q-icon>
                <q-badge color="red" floating> {{ user.cart }} </q-badge>
              </q-btn>
              <q-btn flat v-if="!user.isLogin" to="/Login"><q-icon size="24px" name="fas fa-user-circle"></q-icon></q-btn>
              <q-btn flat v-if="user.isLogin" to="/" @click="logout"><q-icon size="24px" name="fas fa-sign-out-alt"></q-icon></q-btn>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="q-px-md q-pb-md text-white">
      <q-toolbar class="q-py-md bg-dark shadow-5 bottomtoolbar">
        <q-space />
        <div class="col-md-3">
          <q-card class="bg-dark" flat>
            <q-card-section horizontal>
              <q-card-section class="col-2">
                <q-avatar size="52px">
                  <img src="../assets/avatar_beam01.svg" alt="logo">
                </q-avatar>
              </q-card-section>
              <q-card-section class="col-10">
                <p>
                OwnBake自助烘焙 <br>
                新北市泰山區貴子里致遠新村55之1號 <br>
                TEL: (02) 123-4567
                </p>
                <q-icon size="xs" name="fab fa-facebook-square"></q-icon>
                <q-icon size="xs" name="fab fa-instagram"></q-icon>
                <q-icon size="xs" name="fab fa-twitter"></q-icon>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-2">
          <q-card class="bg-dark" flat>
            <q-card-section>
              <div class="text-subtitle1"><a class="link" href="#/AboutUs">關於我們</a></div>
              <p>
                <a class="link" href="#/AboutUs/#AboutOwnBake">品牌故事</a> <br>
                <a class="link" href="#/AboutUs">材料來源</a> <br>
                <a class="link" href="#/AboutUs/#HowToStart">流程介紹</a> <br>
                <a class="link" href="#/AboutUs">材料包須知</a> <br>
                <a class="link" href="#/AboutUs">來店須知</a>
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-2">
          <q-card class="bg-dark" flat>
            <q-card-section>
              <div class="text-subtitle1"><a class="link" href="#/Products">商品介紹</a></div>
              <p>
                <a class="link" href="#/Products">蛋糕</a> <br>
                <a class="link" href="#/Products">餅乾</a> <br>
                <a class="link" href="#/Products">塔 & 派</a> <br>
                <a class="link" href="#/Products">點心</a> <br>
                <a class="link" href="#/Products">烘焙用具</a>
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-2">
          <q-card class="bg-dark" flat>
            <q-card-section>
              <div class="text-subtitle1"><a class="link" href="#/Member">會員中心</a></div>
              <p>
                <a class="link" href="#/Login">會員登入</a> <br>
                <a class="link" href="#/Register">會員註冊</a> <br>
                <a class="link" href="#/Member/MyOrders">訂單查詢</a> <br>
                <a class="link" href="#/Member/MyReservations">預約查詢</a> <br>
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-2">
          <q-card class="bg-dark" flat>
            <q-card-section>
              <div class="text-subtitle1"><a class="link" href="#/ContactUs">聯絡我們</a></div>
              <p>
                <a class="link" href="/AboutUs">意見回饋</a> <br>
                <a class="link" href="/AboutUs">常見問題</a> <br>
              </p>
              <div class="text-body2">準備好了嗎？</div>
              <div class="text-subtitle1">
                <p>
                  <a class="link" href="#/Reservation">預約體驗</a> <br>
                </p>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <q-space />
        <div align="center" class="q-py-md col-12">
          Copyright © 2021 Yi-Chen Shih. All rights reserved.
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="sass" scoped>
  .q-layout__section--marginal
    background: transparent

  .link
    color: white
    text-decoration: none
    &:hover
      color: black

  .bottomtoolbar
    border-radius: 0 0 10px 10px
    flex-wrap: wrap
</style>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  }
}
</script>
