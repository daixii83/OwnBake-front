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
          <q-th :props="props"> {{ props }} </q-th>
          <q-tr :props="props">
            <q-td key="productCategories" :props="props">{{ props }}</q-td>
            <q-td key="productName" :props="props">{{ props.row.productName }}</q-td>
            <q-td key="productImage" :props="props">
              <img :src="props.row.productImage" class="text-center" style="width: 100px; max-height: 100px;">
            </q-td>
            <q-td key="productPrice" :props="props">{{ props.row.productPrice }}</q-td>
            <q-td key="productSell" :props="props">
              {{ props.row.productSell }}
              <!-- <p v-if="props.row.productSell = true">上架中</p> -->
              <!-- <p v-if="props.row.productSell = false">未上架</p> -->
            </q-td>
            <q-td key="productDescription" :props="props">{{ props.row.productDescription }}</q-td>
            <q-td key="quantitySold" :props="props">{{ props.row.quantitySold }}</q-td>
            <q-td key="editOrDelete">
              <div class="row">
                <div class="col-6"><q-btn size="0.7rem" class="bg-white bubble" @click="editProduct(props.pageIndex)">編輯商品</q-btn></div>
                <div class="col-6"><q-btn to="/Admin/editProduct" size="0.7rem" class="bg-white bubble">刪除商品</q-btn></div>
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
    label: '商品種類',
    align: 'left',
    field: row => row.productCategories,
    format: val => `${val}`
  },
  { name: 'productName', align: 'left', label: '商品名稱', field: 'productName' },
  { name: 'productImage', align: 'center', label: '商品圖片', field: 'productImage', style: 'width: 10px' },
  { name: 'productPrice', align: 'center', label: '價格', field: 'productPrice' },
  { name: 'productSell', align: 'center', label: '上架狀態', field: 'productSell' },
  { name: 'productDescription', align: 'center', label: '商品說明', field: 'productDescription' },
  { name: 'quantitySold', align: 'center', label: '售出總數', field: 'quantitySold' },
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
  }

}
</script>
