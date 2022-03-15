<template>
  <div class="bg-primary">
    <div class="q-px-xl q-py-xl bg-accent">
      <q-breadcrumbs class="text-brown q-py-xl">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="primary"
          />
        </template>

        <q-breadcrumbs-el label="Home" icon="home" />
        <q-breadcrumbs-el label="關於我們" icon="navigation" />
      </q-breadcrumbs>
      <div class="row q-pb-xl">
        <div align="center" class="col-md-1"></div>
        <div align="center" class="col-md-5">
          <q-img
            src="../assets/logo.png"
            style="max-width: 350px"
          />
          <div id="AboutOwnBake" class="text-h2 text-bold"></div>
        </div>
        <div align="center" class="col-md-5 flex column justify-center">
          <div class="q-pb-md text-h3 text-bold">關於OwnBake</div>
          <div class="q-pb-xl text-h5 text-bold">創立於2022年</div>
          <div align="start" class="text-h5">
            致力於提供舒適的DIY環境給對烘焙有熱忱但沒有場地發揮的人們。 <br>
            同時販售甜點材料包，在疫情期間不出門也能輕鬆在家製作各式美味甜點。
          </div>
        </div>
        <div align="center" class="col-md-1"></div>
      </div>
      <div class="row q-pt-md">
        <div class="col-1"></div>
        <div class="col-10">
          <div align="center" class="row">
            <div class="col-12">
              <div id="HowToStart" align="start" class="q-py-xl text-h4 text-bold">體驗流程</div>
            </div>
            <div class="col-1"></div>
            <div class="col-2 arrow">
              <q-img src="../assets/icon/calendar (2).png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">預約到店時間</div>
            </div>
            <div class="col-2 arrow">
              <q-img src="../assets/icon/order-food (1).png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">選擇製作品項</div>
            </div>
            <div class="col-2 arrow">
              <q-img src="../assets/icon/content-marketing (1).png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">觀看製作教學</div>
            </div>
            <div class="col-2 arrow">
              <q-img src="../assets/icon/bake (1).png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">動手製作</div>
            </div>
            <div class="col-2">
              <q-img src="../assets/icon/pie (1).png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">出爐！</div>
            </div>
            <div class="col-1"></div>
          </div>
          <div align="center" class="row">
            <div class="col-12">
              <div align="start" class="q-py-xl text-h4 text-bold">購物流程</div>
            </div>
            <div class="col-1"></div>
            <div class="col-2 arrow">
              <q-img src="../assets/icon/oven (2).png" style="max-width: 130px"></q-img>
              <div class="q-pt-md text-h5">確認家中設備</div>
            </div>
            <div class="col-2 arrow">
              <q-img src="../assets/icon/order-food (1).png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">選擇製作品項</div>
            </div>
            <div class="col-2 arrow">
              <q-img src="../assets/icon/shopping-cart (1).png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">購買材料包</div>
            </div>
            <div class="col-2 arrow">
              <q-img src="../assets/icon/receive.png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">等待到貨</div>
            </div>
            <div class="col-2">
              <q-img src="../assets/icon/bake (1).png" style="max-width: 150px"></q-img>
              <div class="q-pt-md text-h5">開始製作吧！</div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
        <div class="col-1"></div>
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
export default {
  name: 'PageIndex'
}
</script>
