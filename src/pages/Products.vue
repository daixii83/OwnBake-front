<template>
  <div class="bg-primary">
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
        <q-breadcrumbs-el label="商品介紹" icon="widgets" />
        <q-breadcrumbs-el label="全部商品" icon="navigation" />
      </q-breadcrumbs>
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey text-h5 q-py-md"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="ALL" label="全部商品" />
          <q-tab name="Cakes" label="蛋糕" @click="filter='蛋糕'" />
          <q-tab name="Cookies" label="餅乾" @click="filter='餅乾'" />
          <q-tab name="Tart&Pie" label="塔&派" @click="filter='塔&派'" />
          <q-tab name="Desserts" label="點心" @click="filter='點心'" />
          <q-tab name="Tools" label="烘焙用具" @click="filter='烘焙用具'" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated class="text-brown">
          <q-tab-panel name="ALL">
            <div class="row q-pa-md">
              <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="product in products" :key="product._id">
                <productCard :product="product"></productCard>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Cakes">
            <div class="row q-pa-md">
              <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="product in filterProducts" :key="product._id">
                <productCard :product="product"></productCard>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Cookies">
            <div class="row q-pa-md">
              <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="product in filterProducts" :key="product._id">
                <productCard :product="product"></productCard>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Tart&Pie">
            <div class="row q-pa-md">
              <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="product in filterProducts" :key="product._id">
                <productCard :product="product"></productCard>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Desserts">
            <div class="row q-pa-md">
              <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="product in filterProducts" :key="product._id">
                <productCard :product="product"></productCard>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Tools">
            <div class="row q-pa-md">
              <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="product in filterProducts" :key="product._id">
                <productCard :product="product"></productCard>
              </div>
            </div>
          </q-tab-panel>
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

import productCard from '../components/productCard.vue'

export default {
  components: {
    productCard
  },
  data () {
    return {
      tab: 'ALL',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      products: [],
      filter: ''
    }
  },
  computed: {
    filterProducts () {
      return this.products.filter(item => {
        if (this.filter === '') return true
        return item.productCategories === this.filter
      })
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$q.dialog({
        parent: this,
        title: '失敗',
        message: '取得商品失敗'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>
