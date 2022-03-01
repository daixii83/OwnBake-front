<template>
  <div class="q-px-md bg-white">
    <div class="q-px-xl q-py-xl bg-white">
      <div class="row">
        <div align="center" class="col-md-6">
          <q-uploader
          style="max-width: 350px"
          url="http://localhost:4444/upload"
          label="點選右方按鈕選取/上傳圖片"
          multiple
          accept=".jpg, image/*"
          @rejected="onRejected"
          v-model="productImage"
          />
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-6">請選擇種類</div>
            <div class="col-6"><q-select rounded outlined v-model="form.productCategories" :options="options" /></div>
          </div>
          <div class="row">
            <div class="col-6">商品名稱</div>
            <div class="col-6"><q-input outlined v-model="form.productName" /></div>
          </div>
          <div class="row">
            <div class="col-6">商品價格</div>
            <div class="col-6"><q-input outlined v-model="form.productPrice" /></div>
          </div>
          <div class="row">
            <div class="col-6">上架狀態</div>
            <div class="col-6">
              <q-radio v-model="form.productSell" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="true" :value="true" label="上架中" />
              <q-radio v-model="form.productSell" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="false" :value="false" label="未上架" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-h6">商品說明</div>
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
        <div align="end" class="col-12">
          <q-btn to="/Admin/editProduct" size="0.7rem" class="bg-white q-px-xs bubble">取消</q-btn>
          <q-btn to="/Admin/editProduct" size="0.7rem" class="bg-white q-px-xs bubble">新增商品</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .arrow
    position: relative
    &:after
      position: absolute
      content: ""
      background-image: url('../assets/icon/next.png')
      background-size: 50px
      width: 50px
      height: 50px
      top: 30%
      right: -10%
</style>

<script>

import dialogEditProduct from "../components/dialogEditProduct.vue"

export default {
  data () {
    return {
      options: [
        '蛋糕', '餅乾', '塔&派', '點心', '烘焙用具'
      ],
      sellStatus: [
        '上架中', '未上架'
      ],
      form: {
        productImage: null,
        productCategories: '',
        productSell: false,
        productName: '',
        productPrice: '',
        productDescription: '',
        _id: '',
        index: -1
      }
    }
  }
}
</script>
