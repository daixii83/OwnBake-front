<template>
  <div class="q-pa-xl bg-white">
    <q-table
      title="我的訂單"
      :data="orders"
      :columns="columns"
      row-key="name"
      ref="table"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="productCategories" :props="props">{{ props.row._id }}</q-td>
            <q-td key="productName" :props="props">{{ props.row.date }}</q-td>
            <q-td key="productPrice" :props="props">
              <div v-if="props.row.order.orderStatus === false" > 處理中 </div>
              <div v-if="props.row.order.orderStatus === true" > 已出貨 </div>
            </q-td>
            <q-td key="productSell" :props="props">
              {{ props.row.productSell }}
              <!-- <p v-if="props.row.productSell = true">上架中</p> -->
              <!-- <p v-if="props.row.productSell = false">未上架</p> -->
            </q-td>
            <q-td key="productDescription" :props="props">{{ props.row.productDescription }}</q-td>
            <q-td key="quantitySold" :props="props">{{ props.row.quantitySold }}</q-td>
            <q-td key="editOrDelete">
              <div class="row">
                <div class="col-6"><q-btn size="0.7rem" class="bg-white bubble" @click="orderInfo(props.pageIndex)">查看詳細</q-btn></div>
                <div class="col-6"><q-btn to="/Admin/editProduct" size="0.7rem" class="bg-white bubble">取消訂單</q-btn></div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>

const columns = [
  {
    name: 'productCategories',
    required: true,
    label: '訂單編號',
    align: 'left',
    field: row => row.productCategories,
    format: val => `${val}`
  },
  { name: 'productName', align: 'left', label: '訂購日期', field: 'productName' },
  { name: 'productPrice', align: 'center', label: '訂單狀態', field: 'productImage', style: 'width: 10px' },
  { name: 'editOrDelete', align: 'center', label: '操作', field: 'editOrDelete' }
]

export default {
  data () {
    return {
      columns,
      orders: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
      this.orders = data.result
    } catch (error) {
      console.log(error)
      this.$q.dialog({
        // component: dialogSuccess,
        parent: this,
        title: '錯誤',
        message: '取得訂單失敗'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  },
  editProduct (index) {
    this.form = { ...this.products[index], image: null, index }
    this.$q.dialog({
      title: '',
      // component: dialogEditProducts,

      // optional if you want to have access to
      // Router, Vuex store, and so on, in your
      // custom component:
      parent: this, // becomes child of this Vue node
      // ("this" points to your Vue component)
      // (prop was called "root" in < 1.1.0 and
      // still works, but recommending to switch
      // to the more appropriate "parent" name)

      // props forwarded to component
      // (everything except "component" and "parent" props above):
      product: this.form
      // ...more.props...
    }).onOk(() => {
      console.log('OK')
    }).onCancel(() => {
      console.log('Cancel')
    }).onDismiss(() => {
      console.log('Called on OK or Cancel')
    })
  }
}
</script>
