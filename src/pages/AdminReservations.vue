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
          <q-tab-panel name="2022/03/03">
            <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="reservation in filters" :key="reservation._id">
              <reservationCard :reservation="reservation"></reservationCard>
            </div>
          </q-tab-panel>
          <q-tab-panel name="2022/03/04">
            <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="reservation in filters" :key="reservation._id">
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
      splitterModel: 30, // start at 50%
      date: '2022/03/03',
      events: ['2022/03/03', '2022/03/04', '2022/03/06', '2022/03/08', '2022/03/10'],
      reservations: []
    }
  },
  computed: {
    filters () {
      return this.reservations.filter(item => {
        if (this.filter === '') return true
        return item.date === this.filter
      })
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/reservations/all', {
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
