<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin bg-accent" style="max-width: 1500px;max-height: 1000px; width:1000px;height:650px">
      <q-card-section>
        <div
          align="center"
          class="q-py-md text-h5"
          v-if="form._id.length <= 0"
        >
        新增商品
        </div>
        <div
          align="center"
          class="text-h5"
          v-if="form._id.length > 0"
        >
        編輯商品
        </div>
        <div class="q-px-xl q-py-xl bg-white">
          <div class="row items-center">
            <div align="center" class="col-md-6">
              <img-inputer
              accept="image/*"
              v-model="form.productImage"
              theme="light"
              size="large"
              bottomText="點擊或拖曳圖片"
              hover-text="點擊或拖曳圖片以修改"
              placeholder="點擊或拖曳選擇圖片"
              :max-size="1024"
              exceed-size-text="檔案大小不能超過"
              />
            </div>
            <div class="col-md-6">
              <div class="row items-center">
                <div class="col-1"></div>
                <div class="col-5">請選擇種類</div>
                <div class="col-6 q-pt-md">
                  <q-select
                  rounded
                  outlined
                  v-model="form.productCategories"
                  :options="options"
                  :rules="[ val => val.length > 1 || '請選擇商品分類' ]"
                  :state="state.productCategories"
                  />
                  </div>
              </div>
              <div class="row items-center">
                <div class="col-1"></div>
                <div class="col-5">商品名稱</div>
                <div class="col-6 q-pt-md">
                  <q-input
                  outlined
                  v-model="form.productName"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || '請輸入商品名稱'
                  ]"
                  :state="state.productName"
                  />
                  </div>
              </div>
              <div class="row items-center">
                <div class="col-1"></div>
                <div class="col-5">商品價格</div>
                <div class="col-6 q-pt-md">
                  <q-input
                  outlined
                  v-model.number="form.productPrice"
                  :rules="[
                          val => val !== null && val !== '' || '請輸入價格',
                          val => val > 0 || '請輸入大於0的價格'
                        ]"
                  :state="state.productPrice"
                  />
                  </div>
              </div>
              <div class="row items-center q-pt-md">
                <div class="col-1"></div>
                <div class="col-5">上架狀態</div>
                <div class="col-6">
                  <q-radio v-model="form.productSell" checked-icon="task_alt" unchecked-icon="panorama_fish_eye"  :val="true" label="上架中" />
                  <q-radio v-model="form.productSell" checked-icon="task_alt" unchecked-icon="panorama_fish_eye"  :val="false" label="未上架" />
                </div>
              </div>
            </div>
          </div>
          <div class="row q-py-md">
            <div class="col-12 q-py-md text-h6">商品說明</div>
            <div class="col-12">
              <q-editor
                v-model="form.productDescription"
                :dense="$q.screen.lt.md"
                :toolbar="[
                  [
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      list: 'only-icons',
                      options: ['left', 'center', 'right', 'justify']
                    },
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      options: ['left', 'center', 'right', 'justify']
                    }
                  ],
                  ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                  ['token', 'hr', 'link', 'custom_btn'],
                  ['print', 'fullscreen'],
                  [
                    {
                      label: $q.lang.editor.formatting,
                      icon: $q.iconSet.editor.formatting,
                      list: 'no-icons',
                      options: [
                        'p',
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'code'
                      ]
                    },
                    {
                      label: $q.lang.editor.fontSize,
                      icon: $q.iconSet.editor.fontSize,
                      fixedLabel: true,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7'
                      ]
                    },
                    {
                      label: $q.lang.editor.defaultFont,
                      icon: $q.iconSet.editor.font,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'default_font',
                        'arial',
                        'arial_black',
                        'comic_sans',
                        'courier_new',
                        'impact',
                        'lucida_grande',
                        'times_new_roman',
                        'verdana'
                      ]
                    },
                    'removeFormat'
                  ],
                  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                  ['undo', 'redo'],
                  ['viewsource']
                ]"
                :fonts="{
                  arial: 'Arial',
                  arial_black: 'Arial Black',
                  comic_sans: 'Comic Sans MS',
                  courier_new: 'Courier New',
                  impact: 'Impact',
                  lucida_grande: 'Lucida Grande',
                  times_new_roman: 'Times New Roman',
                  verdana: 'Verdana'
                }"
              />
            </div>
          </div>
        </div>
      </q-card-section>
      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn color="primary" label="送出" @click="submitForm" :disabled="formSubmitting" />
        <q-btn color="primary" label="取消" @click="resetForm" :disabled="formSubmitting" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped>
  .img-inputer--large
    max-width: 350px
    max-height: 350px
</style>

<script>
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {
          productCategories: '',
          productName: '',
          productImage: null,
          productPrice: '',
          productSell: false,
          productDescription: '',
          _id: '',
          index: -1
        }
      }
    }
  },
  data () {
    return {
      form: {
        productCategories: '',
        productName: '',
        productImage: null,
        productPrice: '',
        productSell: false,
        productDescription: '',
        _id: '',
        index: -1
      },
      products: [],
      formSubmitting: false,
      options: [
        '蛋糕', '餅乾', '塔&派', '點心', '烘焙用具'
      ],
      sellStatus: [
        '上架中', '未上架'
      ]
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
    },

    async submitForm (event) {
      event.preventDefault()
      if (!this.state.productName || !this.state.productPrice || !this.state.productCategories) {
        this.$q.dialog({
          // component: dialogSuccess,
          parent: this,
          title: '錯誤',
          message: '缺少必填欄位'
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
        return
      }
      this.formSubmitting = true

      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }

      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.getters['user/user'].token
            }
          })
          this.products.push(data.result)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.getters['user/user'].token
            }
          })
          this.products[this.form.index] = { ...this.form, image: data.result.image }
          // this.$refs.table.refresh()
        }
        // then hiding dialog
        this.hide()
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

      this.formSubmitting = false

      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok')
      // or with payload: this.$emit('ok', { ... })
    },

    resetForm (event) {
      if (this.formSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        productImage: null,
        productCategories: '',
        productSell: false,
        productName: '',
        productPrice: null,
        productDescription: '',
        _id: '',
        index: -1
      }
      // we just need to hide dialog
      this.hide()
    }
  },
  computed: {
    state () {
      return {
        productName: this.form.productName.length === 0 ? null : true,
        productPrice: this.form.productPrice === null ? null : this.form.productPrice >= 0,
        productCategories: this.form.productCategories.length === 0 ? null : true
      }
    }
  },
  async created () {
    this.form = this.product
  }
}
</script>
