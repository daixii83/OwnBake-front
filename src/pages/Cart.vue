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
        <q-breadcrumbs-el label="購物車" icon="navigation" />
      </q-breadcrumbs>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <q-stepper
          v-model="step"
          header-nav
          alternative-labels
          :contracted="$q.screen.lt.sm"
          ref="stepper"
          color="primary"
          animated
          >
          <q-step
            :name="1"
            title="寄送與付款方式"
            icon="settings"
            :done="done1"
          >
            <div align="center" class="row q-py-md justify-center">
              <div class="col-12">
                <q-table
                title="購物車"
                :data="products"
                :columns="columns"
                row-key="name"
                binary-state-sort
                ref="table"
                style="width: 100%; max-width:1500px;"
                >
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="productCategories" :props="props">{{ props.row.product.productCategories }}</q-td>
                      <q-td key="productName" :props="props">{{ props.row.product.productName }}</q-td>
                      <q-td key="productImage" :props="props">
                        <img :src="props.row.product.productImage" class="text-center" style="width: 100px; max-height: 100px;">
                      </q-td>
                      <q-td key="productPrice" :props="props">{{ props.row.product.productPrice }}</q-td>
                      <q-td key="quantity" :props="props" class="justify-center">
                        <q-input
                        ref="num"
                        rounded outlined
                        type="number"
                        v-model.number="props.row.quantity"
                        lazy-rules
                        :rules="[val => val >= 1 || '商品最小數量為1']"
                        style="max-width: 100px;"
                        @input="updateCart(props.pageIndex, props.row.quantity)"
                        />
                      </q-td>
                      <q-td key="subtotal" :props="props">
                        {{ total }}
                        <!-- <p v-if="props.row.productSell = true">上架中</p> -->
                        <!-- <p v-if="props.row.productSell = false">未上架</p> -->
                      </q-td>
                      <q-td key="delete" :props="props">
                        <q-btn size="0.7rem" class="bg-white q-px-md bubble" @click="updateCart(props.pageIndex, props.row.quantity = 0)">
                          <q-icon size="20px" name="far fa-trash-alt"></q-icon>
                        </q-btn>
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
              </div>
              <div class="col-12 q-py-xl">
                <div class="text-body1 q-py-md">還有想要購買的商品嗎？</div>
                <q-btn size="1rem" class="bg-white q-px-md bubble" to="/Products"><q-icon size="20px" name="far fa-hand-point-right"></q-icon>繼續購買</q-btn>
              </div>
              <div class="col-12">
                <div class="row items-center">
                  <div align="right" class="col-6 text-body1 q-pr-md">
                    請選擇寄送方式：
                  </div>
                  <div align="left" class="col-6 q-pt-md">
                    <q-select
                    rounded
                    outlined
                    v-model="order.delivery"
                    :options="delOptions"
                    :rules="[ val => val.length > 1 || '請選擇寄送方式' ]"
                    style="width: 200px;"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row items-center">
                  <div align="right" class="col-6 text-body1 q-pr-md">
                    請選擇付款方式：
                  </div>
                  <div align="left" class="col-6 q-pt-md">
                    <q-select
                    rounded
                    outlined
                    v-model="order.pay"
                    :options="payOptions"
                    :rules="[ val => val.length > 1 || '請選擇付款方式' ]"
                    style="width: 200px;"
                    />
                  </div>
                </div>
              </div>
            </div>

            <q-stepper-navigation align="end">
              <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="下一步" />
            </q-stepper-navigation>
          </q-step>

        <q-step
          :name="2"
          title="填寫寄送資料"
          icon="create_new_folder"
          :done="done2"
        >
          <div class="row q-py-md text-body1">
            <div class="col-12 q-pt-xl q-gutter-md">
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10">寄送方式： {{ order.delivery }} </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-4">收件人</div>
                <div class="col-6">
                  <q-input
                    ref="recipient"
                    outlined
                    type="text"
                    v-model="order.recipient"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || '請輸入收件人']"
                  />
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-4">手機號碼</div>
                <div class="col-6">
                  <q-input
                    ref="mobile"
                    outlined
                    type="text"
                    v-model="order.mobile"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 && val !== Number || '請輸入手機號碼']"
                  />
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-4">email</div>
                <div class="col-6">
                  <q-input
                    ref="email"
                    outlined
                    type="text"
                    v-model="order.email"
                    lazy-rules
                    :rules="[val => !!val || '請輸入email', isValidEmail]"
                  />
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-4">收件地址</div>
                <div class="col-6">
                  <q-input
                    ref="mobile"
                    outlined
                    type="text"
                    v-model="order.address"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || '請輸入收件地址']"
                  />
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-4">備註</div>
                <div class="col-6">
                  <q-input
                    v-model="order.remark"
                    outlined
                    type="textarea"
                  />
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row q-pt-xl">
                <div class="col-1"></div>
                <div class="col-10">付款方式： {{ order.pay }} </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-4">信用卡號</div>
                <div class="col-6">
                  <q-input
                    outlined
                    v-model="order.card"
                    mask="#### - #### - #### - ####"
                    fill-mask
                    :rules="[ val => val && val.length >= 0 || '請輸入信用卡號']"
                  />
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-4">持卡人姓名</div>
                <div class="col-6">
                  <q-input
                    outlined
                    v-model="order.cardHolder"
                    :rules="[ val => val && val.length >= 0 || '請輸入持卡人姓名']"
                  />
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-5">
                  <div class="row">
                    <div class="col-4">有效期限</div>
                    <div class="col-8">
                      <q-input
                        outlined
                        v-model="order.cardExpiry"
                        :rules="[ val => val && val.length >= 0 && val !== Number || '請輸入有效期限']"
                        mask="##/##"
                        fill-mask
                      />
                    </div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-4">安全碼</div>
                    <div class="col-6">
                      <q-input
                        outlined
                        v-model="order.cardCSC"
                        :rules="[ val => val && val.length >= 0 || '請輸入安全碼']"
                        mask="###"
                        fill-mask
                      />
                    </div>
                    <div class="col-1"></div>
                  </div>
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-5">
                  <div class="row items-center">
                    <div align="right" class="col-6 text-body1 q-pr-md">
                      請選擇發票寄送方式：
                    </div>
                    <div align="left" class="col-6 q-pt-md">
                      <q-select
                      rounded
                      outlined
                      v-model="order.receipt"
                      :options="recOptions"
                      :rules="[ val => val.length > 1 || '請選擇發票寄送方式' ]"
                      style="width: 200px;"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-5" v-if="order.receipt === '電子發票'">
                  <div class="row items-center">
                    <div align="right" class="col-6 text-body1 q-pr-md">
                      載具類型：
                    </div>
                    <div align="left" class="col-6 q-pt-md">
                      <q-select
                      rounded
                      outlined
                      v-model="order.receiptCarrier"
                      :options="carOptions"
                      style="width: 200px;"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-5">
                  <div class="row items-center">
                  </div>
                </div>
                <div class="col-5" v-if="order.receiptCarrier === '手機條碼'">
                  <div class="row items-center">
                    <div align="right" class="col-6 text-body1 q-pr-md">
                      手機條碼：
                    </div>
                    <div align="left" class="col-6 q-pt-md">
                      <q-input
                        outlined
                        v-model="order.code"
                        mask="/XXXXXXX"
                        fill-mask
                      />
                    </div>
                  </div>
                </div>
                <div class="col-1"></div>
              </div>
            </div>
          </div>

          <q-stepper-navigation>
            <div class="row">
              <div class="col-6">
                <q-btn flat @click="step = 1" color="primary" label="上一步" class="q-ml-sm" />
              </div>
              <div align="end" class="col-6">
                <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="下一步" />
              </div>
            </div>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="確認訂單"
          icon="add_comment"
          :done="done3"
        >
          <div class="row q-pt-md q-pb-md text-normal text-dark">
            <div align="center" class="col-12 q-pt-md  text-h6">請確認訂單資訊是否正確</div>
            <div align="center" class="col-12 q-pb-xl text-normal text-grey">如需修改可點選上方步驟返回</div>
            <div align="center" class="col-12 q-gutter-y-md text-normal">
              <div align="center" class="row text-h6 text-bold">
                <div class="col-12">
                  寄送方式： {{ order.delivery }}
                </div>
              </div>
              <div class="row">
                <div align="end" class="col-6">
                  <div class="text-body1">收件人姓名：</div>
                  <div class="text-body1">手機號碼：</div>
                  <div class="text-body1">email：</div>
                  <div class="text-body1">寄送地址：</div>
                  <div class="text-body1">備註：</div>
                </div>
                <div align="start" class="col-6">
                  <div class="text-body1"> {{ order.recipient }} </div>
                  <div class="text-body1"> {{ order.mobile }} </div>
                  <div class="text-body1"> {{ order.email }} </div>
                  <div class="text-body1"> {{ order.address }} </div>
                  <div class="text-body1"> {{ order.remark }} </div>
                </div>
              </div>
              <div align="center" class="row text-h6 text-bold">
                <div class="col-12">
                  付款方式： {{ order.pay }}
                </div>
              </div>
              <div class="row">
                <div align="end" class="col-6">
                  <div class="text-body1">信用卡號：</div>
                  <div class="text-body1">持卡人姓名：</div>
                  <div class="text-body1">有效期限：</div>
                  <div class="text-body1">安全碼：</div>
                </div>
                <div align="start" class="col-6">
                  <div class="text-body1"> {{ order.card }} </div>
                  <div class="text-body1"> {{ order.cardHolder }} </div>
                  <div class="text-body1"> {{ order.cardExpiry }} </div>
                  <div class="text-body1"> {{ order.cardCSC }} </div>
                </div>
              </div>
              <div align="center" class="row text-h6 text-bold">
                <div class="col-12">
                  發票寄送方式： {{ order.receipt }}
                  <div v-if="order.receiptCarrier === '手機條碼'" class="text-body1">
                    手機條碼： {{ order.code }}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-table
                  title="購物車"
                  :data="products"
                  :columns="columns1"
                  row-key="name"
                  binary-state-sort
                  ref="table"
                  style="width: 100%; max-width:1500px;"
                  flat
                  >
                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td key="productCategories" :props="props">{{ props.row.product.productCategories }}</q-td>
                        <q-td key="productName" :props="props">{{ props.row.product.productName }}</q-td>
                        <q-td key="productImage" :props="props">
                          <img :src="props.row.product.productImage" class="text-center" style="width: 100px; max-height: 100px;">
                        </q-td>
                        <q-td key="productPrice" :props="props">{{ props.row.product.productPrice }}</q-td>
                        <q-td key="quantity" :props="props">{{ props.row.quantity }}</q-td>
                      </q-tr>
                    </template>
                  </q-table>
                  <div>總金額：{{ total }}</div>
                </div>
              </div>
            </div>
          </div>

          <q-stepper-navigation>
            <div class="row">
              <div class="col-6">
                <q-btn flat @click="step = 2" color="primary" label="上一步" class="q-ml-sm" />
              </div>
              <div align="end" class="col-6">
                <q-btn color="primary" @click="checkout" label="結帳" :disabled="products.length === 0" />
              </div>
            </div>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .q-stepper__tab
    flex-direction: column

  .bubble
    border-radius: 30px
    justify-content: center
    align-items: center

  .text-normal
    font-size: 1rem

  ::v-deep .q-table th
    font-size: 16px

</style>

<script>

const columns = [
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
  { name: 'delete', align: 'center', label: '刪除', field: 'delete' }
]
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
  { name: 'quantity', align: 'center', label: '數量', field: 'quantity' }
]

export default {
  data () {
    return {
      products: [],
      columns,
      columns1,
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      delOptions: [
        '宅配(冷藏寄送)', '7-11取貨', '全家取貨', '到店取貨'
      ],
      payOptions: [
        '信用卡', 'i-bon付款', 'linePay'
      ],
      recOptions: [
        '電子發票', '二聯式統一發票', '捐贈發票'
      ],
      carOptions: [
        '手機條碼', '會員載具'
      ],
      order: {
        delivery: '',
        pay: '',
        recipient: '',
        mobile: '',
        email: '',
        address: '',
        remark: '',
        card: '',
        cardHolder: '',
        cardExpiry: '',
        cardCSC: '',
        receipt: '',
        receiptCarrier: '',
        code: ''
      }
    }
  },

  methods: {
    async updateCart (pageIndex, quantity) {
      try {
        await this.api.patch('/users/me/cart',
          {
            product: this.products[pageIndex].product._id,
            quantity: this.products[pageIndex].quantity
          },
          {
            headers: {
              authorization: 'Bearer ' + this.$store.getters['user/user'].token
            }
          }
        )
        if (quantity === 0) {
          this.products.splice(pageIndex, 1)
          this.$store.commit('user/updateCart', this.user.cart - 1)
        }
      } catch (error) {
        console.log(error)
        this.$q.dialog({
        // component: dialogSuccess,
          parent: this,
          title: '錯誤',
          message: '修改購物車失敗'
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
      }
    },
    async checkout () {
      try {
        await this.api.post('/orders', this.order, {
          headers: {
            authorization: 'Bearer ' + this.$store.getters['user/user'].token
          }
        })
        console.log(this.order)
        this.$q.dialog({
        // component: dialogSuccess,
          parent: this,
          title: '成功',
          message: '結帳成功'
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
        this.$router.push('/Member/MyOrders')
      } catch (error) {
        console.log(error)
        this.$q.dialog({
        // component: dialogSuccess,
          parent: this,
          title: '錯誤',
          message: error.response.data.message
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
      }
    },
    reset () {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.step = 1
    },
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || '信箱格式錯誤'
    },
    eReceipt () {
      this.recOptions = '電子載具'
    }
  },
  computed: {
    user () {
      return this.$store.getters['user/user']
    },
    total () {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.productPrice
      }, 0)
    }
    // total: {
    //   get () {
    //     return this.products.reduce((accumulator, currentValue) => {
    //       return accumulator + currentValue.quantity * currentValue.product.productPrice
    //     }, 0)
    //   },
    //   set (currentValue) {
    //     this.total = currentValue
    //   }
    // }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
      this.products = data.result
    } catch (error) {
      console.log(error)
      this.$q.dialog({
        // component: dialogSuccess,
        parent: this,
        title: '錯誤',
        message: '取得購物車失敗'
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
