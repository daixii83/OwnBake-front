<template>
  <div class=" bg-primary">
    <div class="q-px-xl q-py-xl bg-accent">
      <q-breadcrumbs class="text-brown q-py-md">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="primary"
          />
        </template>

        <q-breadcrumbs-el to="/Home" label="Home" icon="home" />
        <q-breadcrumbs-el to="/Member" label="會員專區" icon="navigation" />
      </q-breadcrumbs>
      <q-card class="">
        <q-tabs
          v-model="panel"
          dense
          class="text-grey text-h5 q-py-md"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab to="/Member" name="Member" label="基本資料" />
          <q-route-tab to="/Member/MyOrders" name="MyOrders" label="我的訂單" />
          <q-route-tab to="/Member/MyReservations" name="MyReservations" label="我的預約" />
          <!-- <q-route-tab to="/Member/MyArticles" name="MyArticles" label="我的文章" /> -->
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="panel" animated class="text-brown">
          <q-tab-panel name="Member">
          <div class="row q-pa-xl q-gutter-md items-center">
            <div class="col-2">
              <q-avatar size="150px">
                <img src="../assets/avatar_beam01.svg">
              </q-avatar>
            </div>
            <div class="col-4">
              <div class="text-h6">用戶帳號： {{ user.account }} </div>
              <div class="text-h6">email： {{ user.email }}</div>
            </div>
          </div>
          </q-tab-panel>
          <q-tab-panel name="MyOrders">
            <router-view />
          </q-tab-panel>
          <q-tab-panel name="MyReservations" align="center">
            <router-view />
          </q-tab-panel>
          <!-- <q-tab-panel name="MyArticles"> -->
            <!-- <router-view /> -->
          <!-- </q-tab-panel> -->
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .q-img
    &__content
      > div
        background: rgba( 0, 0, 0, 0.4)
        height: 100%
        padding: 0

  .stretch
    align-items: stretch
  .item
    flex: 1

  .addToCart
    &:hover
      .hover
        display: flex

  .hover
    display: none

</style>

<script>
export default {
  data () {
    return {
      panel: 'Member'
    }
  },
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  }
}
</script>
