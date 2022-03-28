<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="my-card">
      <q-card-section align="center">
        <div class="row">
          <div align="end" class="col-6 q-pr-md">預約日期：</div>
          <div align="start" class="col-6">{{ event.date }}</div>
        </div>
        <div class="row">
          <div align="end" class="col-6 q-pr-md">預約時間：</div>
          <div align="start" class="col-6">{{ event.time }}</div>
        </div>
        <div class="row">
          <div align="end" class="col-6  q-pr-md">預約人數：</div>
          <div align="start" class="col-6">大人 {{ event.adultNum }} 人  小孩 {{ event.childNum }} 人</div>
        </div>
        <div class="row">
          <div align="end" class="col-6 q-pr-md">預約人姓名：</div>
          <div align="start" class="col-6"> {{ event.name }} </div>
        </div>
        <div class="row">
          <div align="end" class="col-6 q-pr-md">手機號碼：</div>
          <div align="start" class="col-6"> {{ event.phone }} </div>
        </div>
        <div class="row">
          <div align="end" class="col-6 q-pr-md">email：</div>
          <div align="start" class="col-6"> {{ event.email }} </div>
        </div>
        <div class="row">
          <div align="end" class="col-6 q-pr-md q-pb-md">備註：</div>
          <div align="start" class="col-6">{{ event.remark }}</div>
        </div>
        <div class="row q-pt-md">
          <div align="center" class="col-12">
            <q-btn size="0.7rem" class="bg-white bubble">取消預約</q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped>
</style>

<script>
export default {
  props: {
    reservationInfo: {
      type: Object
    }
  },
  data () {
    return {
      event: {}
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
    }
  },
  computed: {
  },
  async created () {
    this.event = this.reservationInfo
  }
}
</script>
