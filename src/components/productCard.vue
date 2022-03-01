<template>
  <q-card class="my-card">
    <q-img
      :src="product.productImage"
      basic
      class="addToCart"
    >
      <div align="center" class="hover absolute-top text-h6 text-white flex column">
        <q-btn class="stretch item" flat @click="addCart">
          <div class="row">
            <div class="col-12">
              <q-icon size="50px" name="fas fa-cart-plus"></q-icon>
            </div>
            <div class="col-12">
              <div class="text-h5">加入購物車</div>
            </div>
          </div>
        </q-btn>
      </div>
    </q-img>
    <q-card-section align="center">
      <q-btn size="1rem" flat :to='"/ProductInfo/" + product._id'>
        {{ product.productName }} <br>
        NT$ {{ product.productPrice }}
      </q-btn>
    </q-card-section>
  </q-card>
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
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    async addCart () {
      console.log(this.product._id)
      this.$store.dispatch('user/addCart', { product: this.product._id, quantity: 1 })
    }
  }
}
</script>
