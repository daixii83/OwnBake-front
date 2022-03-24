<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin bg-accent q-pa-md" style="max-width: 1500px;max-height: 1000px; width:1000px;height:650px">
      <div class="row q-pa-md bg-dark text-white">
        <div class="col-4">訂單號碼： {{ orders._id }}</div>
        <div class="col-4">訂購日期： {{ new Date(orders.date).toLocaleString('zh-tw') }}</div>
        <div class="col-4">
          訂單狀態：<div class="div" v-if="orders.orderStatus === true">已完成</div><div class="div" v-if="orders.orderStatus && cancelStatus === false">待出貨</div><div class="div" v-if="orders.cancelStatus === true">已取消</div>
        </div>
      </div>
      <div class="row bg-primary text-white q-py-md">
        <div align="center" class="col-3">商品圖片</div>
        <div align="center" class="col-3">商品名稱</div>
        <div align="center" class="col-3">數量</div>
        <div align="center" class="col-3">價格</div>
      </div>
      <div class="row items-center q-pa-md bg-white" v-for="product in orders.products" :key="product.id">
        <div align="center" class="col-3">
            <img :src="product.product.productImage" class="text-center" style="width: 100px; max-height: 100px;">
        </div>
        <div align="center" class="col-3">{{ product.product.productName }}</div>
        <div align="center" class="col-3">{{ product.quantity }}</div>
        <div align="center" class="col-3">{{ product.product.productPrice }}</div>
      </div>
      <div class="row q-pa-md bg-primary text-white">
        <div class="col-12">
          寄送方式：{{ orders.order.delivery }}
        </div>
      </div>
      <div class="row q-pa-md bg-white">
        <div class="col-2">
          <div>
            寄件人姓名：
          </div>
          <div>
            手機號碼：
          </div>
          <div>
            email：
          </div>
          <div>
            寄送地址：
          </div>
          <div>
            備註：
          </div>
        </div>
        <div class="col-10 text-dark">
          <div>
            {{ orders.order.recipient }}
          </div>
          <div>
            {{ orders.order.mobile }}
          </div>
          <div>
            {{ orders.order.mobile }}
          </div>
          <div>
            {{ orders.order.address }}
          </div>
          <div>
            {{ orders.order.remark }}
          </div>
        </div>
      </div>
      <div class="row q-pa-md bg-primary text-white">
        <div class="col-6">
          付款方式：{{ orders.order.pay }}
        </div>
        <div class="col-6">
          發票寄送方式：{{ orders.order.receiptCarrier }}
        </div>
      </div>
      <div class="row q-pa-md text-dark bg-white">
        <div class="col-6">
        </div>
        <div class="col-6" v-if="orders.order.receiptCarrier === '手機條碼'">
          手機條碼：{{ orders.order.code }}
        </div>
      </div>
      <q-card-actions align="center" class="q-pa-md">
        <q-btn color="primary" label="關閉" @click="hide" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped>
</style>

<script>
export default {
  props: {
    orderInfo: {
      type: Object
    }
  },
  data () {
    return {
      orders: {}
    }
  },

  methods: {
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },
    // following method is REQUIRED
    // (don't change its name --> "show")
    show () {
      this.$refs.dialog.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.dialog.hide()
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    }
  },
  computed: {
  },
  async created () {
    this.orders = this.orderInfo
  }
}
</script>
