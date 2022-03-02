<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin bg-accent" style="max-width: 1500px;max-height: 1000px; width:1000px;height:650px">
      <q-card-section>
        <q-table
        title="訂單詳細"
        :data="order"
        :columns="columns1"
        row-key="name"
        binary-state-sort
        ref="table"
        style="width: 100%; max-width:1500px;"
        flat
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="productCategories" :props="props">{{ order._id }}</q-td>
              <q-td key="productName" :props="props">{{ props.row.product.productName }}</q-td>
              <q-td key="productImage" :props="props">
                <img :src="props.row.product.productImage" class="text-center" style="width: 100px; max-height: 100px;">
              </q-td>
              <q-td key="productPrice" :props="props">{{ props.row.product.productPrice }}</q-td>
              <q-td key="quantity" :props="props">{{ props.row.quantity }}</q-td>
              <q-td key="subtotal" :props="props">{{ total }}</q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn color="primary" label="關閉" @click="hide" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped>
</style>

<script>
const columns1 = [
  {
    name: 'productCategories',
    required: true,
    label: '商品種類',
    align: 'left',
    field: row => row.product.productCategories,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'productName', align: 'left', label: '商品名稱', field: 'product.productName' },
  { name: 'productImage', align: 'center', label: '商品圖片', field: 'product.productImage' },
  { name: 'productPrice', align: 'center', label: '價格', field: 'product.productPrice' },
  { name: 'quantity', align: 'center', label: '數量', field: 'quantity' },
  { name: 'subtotal', align: 'center', label: '小計', field: 'subtotal' }
]
export default {
  data () {
    return {
      columns1,
      orders: []
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
    this.order = this.orders
  }
}
</script>
