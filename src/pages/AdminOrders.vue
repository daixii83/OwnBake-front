<template>
  <div class="q-pa-xl bg-white">
    <q-table
      title="訂單總表"
      :data="orders"
      :columns="columns"
      row-key="name"
      ref="table"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="orderId" :props="props">{{ props.row._id }}</q-td>
            <q-td key="orderDate" :props="props">{{ props.row.date }}</q-td>
            <q-td key="orderInfo" :props="props">
              <q-btn size="0.7rem" class="bg-white bubble" @click="orderInfo(props.pageIndex)">查看詳細</q-btn>
            </q-td>
            <q-td key="orderStatus" :props="props">
              <div v-if="props.row.order.orderStatus === false" > 待處理 </div>
              <div v-if="props.row.order.orderStatus === true" > 已完成 </div>
            </q-td>
            <q-td key="orderRecipient" :props="props">{{ props.row.order.recipient }}</q-td>
            <q-td key="orderTotal" :props="props">{{ total }}</q-td>
            <q-td key="editOrDelete">
              <div class="row">
                <div align="center" class="col-12 q-gutter-md">
                  <q-btn size="0.7rem" class="bg-white bubble" @click="completedOrder(props.pageIndex)">完成訂單</q-btn>
                  <q-btn size="0.7rem" class="bg-white bubble">刪除訂單</q-btn>
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
  { name: 'orderInfo', align: 'center', label: '訂單詳細', field: 'orderInfo' },
  { name: 'orderStatus', align: 'center', label: '訂單狀態', field: 'orderStatus' },
  { name: 'orderRecipient', align: 'center', label: '訂購人', field: 'orderRecipient' },
  { name: 'orderTotal', align: 'center', label: '總金額', field: 'orderRecipient' },
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
    async completedOrder (index) {
      this.order = { ...this.orders[index] }
      console.log(this.orders)
      try {
        const { data } = await this.api.patch('/orders' + this.order._id + this.order.user._id, { orderStatus: true }, {
          headers: {
            authorization: 'Bearer ' + this.$store.getters['user/user'].token
          }
        })
        console.log(data.result)
      } catch (error) {
        console.log(error)
        this.$q.dialog({
        // component: dialogSuccess,
          parent: this,
          title: '失敗',
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
      const { data } = await this.api.get('/orders/all', {
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
