<template>
  <div class="q-px-md pa-mobile-none bg-primary">
    <div class="q-pa-xl pa-mobile bg-accent">
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
        <q-breadcrumbs-el label="OOO" icon="navigation" />
      </q-breadcrumbs>
      <div class="q-pa-xl pa-mobile bg-white">
        <div class="row items-center">
          <div class="col-12 col-md-6 col-xl-6">
            <q-img
              :src="productImage"
              basic
            />
          </div>
          <div class="col-12 col-md-6 col-xl-6">
            <div class="row q-py-xl py-mobile text-dark">
              <div align="end" class="col-md-6 q-gutter-y-md">
                <div class="text-h6 content">商品名稱：</div>
                <div class="text-h6 content">售價：</div>
                <div class="text-h6 content">數量：</div>
              </div>
              <div class="col-md-6 q-pl-md q-gutter-y-md text-dark">
                <div class="text-h6 content"> {{ productName }} </div>
                <div class="text-h6 content"> NT$ {{ productPrice }} </div>
                <div class="text-h6 content">
                  <q-input
                    ref="num"
                    rounded outlined
                    type="number"
                    v-model.number="quantity"
                    lazy-rules
                    :rules="[
                      val => val !== null && val !== '' || '請輸入數量',
                      val => val >= 0 || '請輸入大於0的數字'
                    ]"
                    style="max-width: 100px;"
                    :state="quantityState"
                  />
                </div>
              </div>
              <div align="center" class="col-12 q-pt-xl pt-mobile"><q-btn size="1rem" class="bg-white q-px-md bubble" @click="addCart">加入購物車&nbsp;&nbsp;<q-icon size="20px" name="fas fa-cart-plus"></q-icon></q-btn></div>
            </div>
          </div>
          <div align="center" class="col-12 text-h5 subtitle q-pa-xl pa-mobile">商品說明</div>
          <div class="col-12 text-h6 content" style="white-space: pre" v-html="productDescription"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .bubble
    border-radius: 30px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

</style>

<script>

export default {
  data () {
    return {
      productName: '',
      productPrice: 0,
      productDescription: '',
      productImage: '',
      productSell: false,
      productCategories: '',
      quantity: 0
    }
  },
  methods: {
    showOverlay () {
      this.$q.loading.show()
    },
    async addCart () {
      console.log(this.$route.params.id)
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.productName = data.result.productName
      this.productPrice = data.result.productPrice
      this.productDescription = data.result.productDescription
      this.productImage = data.result.productImage
      this.productSell = data.result.productSell
      this.productCategories = data.result.productCategories
      document.title = `OwnBake | ${this.productName}`
    } catch (error) {
      console.log(error)
      this.$router.push('/')
    }
  }
}

</script>
