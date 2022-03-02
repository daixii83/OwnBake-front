<template>
  <div class="q-px-md bg-primary">
    <div class="q-px-xl q-py-xl bg-accent">
      <q-breadcrumbs class="text-brown q-py-md">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="primary"
          />
        </template>

        <q-breadcrumbs-el label="Home" icon="home" />
        <q-breadcrumbs-el label="管理者介面" icon="navigation" />
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
          <q-route-tab to="/Admin/AdminProducts" name="AdminProducts" label="商品管理" />
          <q-route-tab to="/Admin/AdminOrders" name="AdminOrders" label="訂單管理" />
          <q-route-tab to="/Admin/AdminReservations" name="AdminReservations" label="預約管理" />
          <!-- <q-route-tab to="/Admin/AdminArticles" name="AdminArticles" label="文章管理" /> -->
          <!-- <q-route-tab to="/Admin/AdminMembers" name="AdminMembers" label="會員管理" /> -->
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="panel" animated class="text-brown">
          <q-tab-panel name="AdminProducts">
            <router-view />
          </q-tab-panel>
          <q-tab-panel name="AdminOrders">
            <router-view />
          </q-tab-panel>
          <q-tab-panel name="AdminReservations">
            <router-view />
          </q-tab-panel>
          <!-- <q-tab-panel name="AdminArticles"> -->
            <!-- <router-view /> -->
          <!-- </q-tab-panel> -->
          <!-- <q-tab-panel name="AdminMembers"> -->
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
      panel: 'AdminProducts'
    }
  }
}
</script>
