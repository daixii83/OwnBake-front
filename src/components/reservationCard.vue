<template>
  <q-card class="my-card">
    <q-card-section align="center">
      <div class="row">
        <div align="end" class="col-6 q-pr-md">預約日期：</div>
        <div align="start" class="col-6">{{ reservation.reservation.date }}</div>
      </div>
      <div class="row">
        <div align="end" class="col-6 q-pr-md">預約時間：</div>
        <div align="start" class="col-6">{{ reservation.reservation.time }}</div>
      </div>
      <div class="row">
        <div align="end" class="col-6  q-pr-md">預約人數：</div>
        <div align="start" class="col-6">大人 {{ reservation.reservation.adultNum }} 人  小孩 {{ reservation.reservation.childNum }} 人</div>
      </div>
      <div class="row">
        <div align="end" class="col-6 q-pr-md">預約人姓名：</div>
        <div align="start" class="col-6"> {{ reservation.reservation.name }} </div>
      </div>
      <div class="row">
        <div align="end" class="col-6 q-pr-md">手機號碼：</div>
        <div align="start" class="col-6"> {{ reservation.reservation.phone }} </div>
      </div>
      <div class="row">
        <div align="end" class="col-6 q-pr-md">email：</div>
        <div align="start" class="col-6"> {{ reservation.reservation.email }} </div>
      </div>
      <div class="row">
        <div align="end" class="col-6 q-pr-md q-pb-md">備註：</div>
        <div align="start" class="col-6">{{ reservation.reservation.remark }}</div>
      </div>
      <div class="row q-pt-md">
        <div align="center" class="col-12">
          <q-btn size="0.7rem" class="bg-white bubble">取消預約</q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
  .bubble
    border-radius: 30px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
</style>

<script>
export default {
  props: {
    reservation: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>
