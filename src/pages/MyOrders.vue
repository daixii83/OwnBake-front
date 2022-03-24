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
            <q-td key="orderId" :props="props">{{ props.row._id }}</q-td>
            <q-td key="orderDate" :props="props">{{ new Date(props.row.date).toLocaleString('zh-tw') }}</q-td>
            <q-td key="orderProducts" :props="props">
              <ul>
                <li v-for='product in props.row.products' :key='product._id'>
                  {{ product.product.productName }} x {{ product.quantity }}
                </li>
              </ul>
            </q-td>
            <q-td key="orderPrice" :props="props">
              {{ total(props.row) }}
            </q-td>
            <q-td key="orderStatus" :props="props">
              <div v-if="props.row.orderStatus || props.row.cancelStatus === false" > 處理中 </div>
              <div v-if="props.row.orderStatus === true" > 已出貨 </div>
              <div v-if="props.row.cancelStatus === true" > 已取消 </div>
            </q-td>
            <q-td key="productDescription" :props="props">{{ props.row.productDescription }}</q-td>
            <q-td key="quantitySold" :props="props">{{ props.row.quantitySold }}</q-td>
            <q-td key="editOrDelete">
              <div align="center" class="row">
                <div class="col-12 q-gutter-x-md">
                  <q-btn size="0.7rem" class="bg-white bubble" @click="orderInfo(props.pageIndex)">查看詳細</q-btn>
                  <q-btn size="0.7rem" class="bg-white bubble" @click="cancelOrders(props.row._id, props.row.order)">取消訂單</q-btn>
                </div>
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
import orderDialog from '../components/orderDialog.vue'
const columns = [
  {
    name: 'orderId',
    required: true,
    label: '訂單編號',
    align: 'left',
    field: row => row.orderId,
    format: val => `${val}`
  },
  { name: 'orderDate', align: 'left', label: '訂購日期', field: 'orderDate' },
  { name: 'orderProducts', align: 'left', label: '訂購產品', field: 'orderProducts' },
  { name: 'orderPrice', align: 'left', label: '總金額', field: 'orderPrice' },
  { name: 'orderStatus', align: 'center', label: '訂單狀態', field: 'orderStatus' },
  { name: 'editOrDelete', align: 'center', label: '操作', field: 'editOrDelete' }
]

export default {
  data () {
    return {
      columns,
      orders: []
    }
  },
  methods: {
    orderInfo (index) {
      this.order = { ...this.orders[index] }
      console.log(this.order)
      this.$q.dialog({
        title: '',
        component: orderDialog,

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
        orderInfo: this.order
      // ...more.props...
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    },
    total (thisOrder) {
      return thisOrder.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.productPrice
      }, 0)
    },
    async cancelOrders (_id, order) {
      console.log(_id)
      const data = {
        cancelStatus: true
      }
      try {
        await this.api.patch('/Orders/' + _id, data, {
          headers: {
            authorization: 'Bearer ' + this.$store.getters['user/user'].token
          }
        })
        this.$q.dialog({
          parent: this,
          title: '成功',
          message: '取消訂單成功'
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
        // this.products.splice(pageIndex, 1)
      } catch (error) {
        console.log(error)
        this.$q.dialog({
          parent: this,
          title: '取消失敗',
          message: error.response.data.message
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
      }
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
  }
}
</script>
