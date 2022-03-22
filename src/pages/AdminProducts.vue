<template>
  <div class="q-px-md bg-white">
    <div class="q-pa-xl bg-white">
      <div class="q-py-md bg-white">
        <q-btn size="0.8rem" class="bg-white bubble" @click="createProduct">新增商品</q-btn>
      </div>
      <q-table
      title="商品管理"
      :data="products"
      :columns="columns"
      row-key="name"
      binary-state-sort
      ref="table"
      :key="tableKey"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="productCategories" :props="props">{{ props.row.productCategories }}</q-td>
            <q-td key="productName" :props="props">{{ props.row.productName }}</q-td>
            <q-td key="productImage" :props="props">
              <img :src="props.row.productImage" class="text-center" style="width: 100px; max-height: 100px;">
            </q-td>
            <q-td key="productPrice" :props="props">{{ props.row.productPrice }}</q-td>
            <q-td key="productSell" :props="props">
              {{ props.row.productSell? '上架中' : '未上架' }}
            </q-td>
            <q-td key="productDescription" :props="props">{{ props.row.productDescription }}</q-td>
            <!-- <q-td key="quantitySold" :props="props">{{ props.row.quantitySold }}</q-td> -->
            <q-td key="editOrDelete">
              <div class="row">
                <div class="col-6"><q-btn size="0.7rem" class="bg-white bubble" @click="editProduct(props.pageIndex)">編輯商品</q-btn></div>
                <div class="col-6"><q-btn size="0.7rem" @click="deleteProduct(props.row._id)" class="bg-white bubble">刪除商品</q-btn></div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
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

  ::v-deep .q-table th
    font-size: 16px

  ::v-deep .q-table td
    font-size: 16px

</style>

<script>

import dialogEditProducts from '../components/dialogEditProduct.vue'

const columns = [
  {
    name: 'productCategories',
    required: true,
    label: '商品種類',
    align: 'left',
    field: row => row.productCategories,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'productName', align: 'left', label: '商品名稱', field: 'productName', sortable: true },
  { name: 'productImage', align: 'center', label: '商品圖片', field: 'productImage', style: 'width: 10px' },
  { name: 'productPrice', align: 'center', label: '價格', field: 'productPrice' },
  { name: 'productSell', align: 'center', label: '上架狀態', field: 'productSell' },
  { name: 'productDescription', align: 'center', label: '商品說明', field: 'productDescription' },
  // { name: 'quantitySold', align: 'center', label: '售出總數', field: 'quantitySold' },
  { name: 'editOrDelete', align: 'center', label: '操作', field: 'editOrDelete' }
]

export default {
  data () {
    return {
      columns,
      products: [],
      tableKey: 0
    }
  },
  methods: {
    updateData () {
      // Vuex logics or others
      this.tableKey = 1
    },
    createProduct () {
      this.$q.dialog({
        title: '',
        component: dialogEditProducts,

        // optional if you want to have access to
        // Router, Vuex store, and so on, in your
        // custom component:
        parent: this // becomes child of this Vue node
        // ("this" points to your Vue component)
        // (prop was called "root" in < 1.1.0 and
        // still works, but recommending to switch
        // to the more appropriate "parent" name)

        // props forwarded to component
        // (everything except "component" and "parent" props above):
        // ...more.props...
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    },
    editProduct (index) {
      this.form = { ...this.products[index], image: null, index }
      this.$q.dialog({
        title: '',
        component: dialogEditProducts,

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
    },
    async deleteProduct (_id) {
      console.log(_id)
      try {
        await this.api.delete('/products/' + _id, {
          headers: {
            authorization: 'Bearer ' + this.$store.getters['user/user'].token
          }
        })
        this.$q.dialog({
          parent: this,
          title: '成功',
          message: '刪除成功'
        }).onOk(() => {
        // console.log('OK')
          this.$forceUpdate()
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
      } catch (error) {
        console.log(error)
        this.$q.dialog({
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
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
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
