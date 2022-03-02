<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 450px"
    >

      <template v-slot:before>
        <div align="center" class="q-pa-md" :reservations="reservations">
          <q-date
            v-model="date"
            :events="events"
            event-color="orange"
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="2019/02/01">
            <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="reservation in reservations" :key="reservation._id">
              {{ reservation.reservation.date }}
              <reservationCard :reservation="reservation"></reservationCard>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>

import reservationCard from '../components/reservationCard.vue'

export default {
  components: {
    reservationCard
  },
  data () {
    return {
      splitterModel: 50, // start at 50%
      date: '2019/02/01',
      events: ['2019/02/01', '2019/02/05', '2019/02/06'],
      reservations: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/reservations/me', {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
      this.reservations = data.result
    } catch (error) {
      console.log(error)
      this.$q.dialog({
        // component: dialogSuccess,
        parent: this,
        title: '錯誤',
        message: '取得預約失敗'
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
