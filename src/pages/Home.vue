<template>
  <div class="q-px-md">
    <div id="section1" class="q-pb-xs bg-accent">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        height="600px"
      >
        <q-carousel-slide :name="1" img-src="../assets/shutterstock_1063718882.jpg" />
        <q-carousel-slide :name="2" img-src="../assets/shutterstock_1104685310.jpg" />
        <q-carousel-slide :name="3" img-src="../assets/shutterstock_146022917_1.jpg" />
        <q-carousel-slide :name="4" img-src="../assets/shutterstock_1544262284.jpg" />
      </q-carousel>
    </div>

    <div id="section2" align="center" class="bg-accent">
      <div class="col-12 q-pt-md text-h5">今天想做點什麼呢？</div>
      <div class="row no-wrap q-ma-none q-pa-md row items-start q-gutter-md">
        <div class="col-md-3">
        <q-card flat class="my-card">
          <q-img height="250px" :contain="true" src="../assets/cake.png">
          </q-img>
          <q-card-actions class="card-title" align="center">
            <div class="text-h6">蛋糕</div>
            <q-btn size="1rem" class="bg-white q-px-md bubble"><q-icon size="20px" name="far fa-hand-point-right"></q-icon>看更多</q-btn>
          </q-card-actions>
        </q-card>
        </div>
        <div class="col-md-3">
        <q-card flat class="my-card">
          <q-img height="250px" :contain="true" src="../assets/cookie.png">
          </q-img>
          <q-card-actions class="card-title" align="center">
            <div class="text-h6">餅乾</div>
            <q-btn to="/ContactUs" size="1rem" class="bg-white q-px-md bubble"><q-icon size="20px" name="far fa-hand-point-right"></q-icon>看更多</q-btn>
          </q-card-actions>
        </q-card>
        </div>
        <div class="col-md-3">
        <q-card flat class="my-card">
          <q-img height="250px" :contain="true" src="../assets/tart.png">
          </q-img>
          <q-card-actions class="card-title" align="center">
            <div class="text-h6">塔&派</div>
            <q-btn size="1rem" class="bg-white q-px-md bubble"><q-icon size="20px" name="far fa-hand-point-right"></q-icon>看更多</q-btn>
          </q-card-actions>
        </q-card>
        </div>
        <div class="col-md-3">
        <q-card flat class="my-card">
          <q-img height="250px" :contain="true" src="../assets/puff.png">
          </q-img>
          <q-card-actions class="card-title" align="center">
            <div class="text-h6">點心</div>
            <q-btn size="1rem" class="bg-white q-px-md bubble"><q-icon size="20px" name="far fa-hand-point-right"></q-icon>看更多</q-btn>
          </q-card-actions>
        </q-card>
        </div>
      </div>
    </div>
    <div id="section3" align="center" class="bg-amber-2 q-ma-none q-pa-md row no-wrap items-stretch q-gutter-md">
      <div class="col-md-2 self-end">
        <q-avatar size="100px">
          <img src="../assets/avatar_beam01.svg">
        </q-avatar>
      </div>
      <div class="col-md-4 q-pa-md">
        <q-card class="bubble full-height bubble" flat>
            <div class="text-h6">我想在家做</div>
            <q-btn size="1.3rem" class="bg-white q-px-md bubble" to="/Products">購買材料包</q-btn>
        </q-card>
      </div>
      <q-space />
      <div class="col-md-4 q-pa-md">
        <q-card class="bubble full-height bubble" flat>
            <div class="text-h6">我想到店體驗</div>
            <q-btn size="1.3rem" class="bg-white q-px-md bubble" to="/Reservation">預約體驗</q-btn>
        </q-card>
      </div>
      <div class="col-md-2 self-end">
        <q-avatar size="100px">
          <img src="../assets/avatar_beam02.svg">
        </q-avatar>
      </div>
    </div>
  </div>

</template>

<style lang="sass" scoped>
  .q-carousel-slide
    background-size: contain

  .my-card
    width: 100%
    max-width: 250px
    background: transparent
    img
      max-width: 200px

  .card-title
    flex-direction: column

  .col-md-2,
  .col-md-3,
  .col-md-4
    margin: 0

  #section3
    height: 30vh

  .bubble
    border-radius: 30px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  .bubbles
    width: 100%
    :last-child::before
      content: ""
      border-left: 0 solid transparent
      border-right: 8px solid transparent
      border-bottom: 8px solid currentColor
</style>

<script>
export default {
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>
