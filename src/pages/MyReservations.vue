<template>
  <div class="row">
    <div class="col-12">
      以下是您的預約：
    </div>
    <div class="col-12 col-md-6 col-lg-3 q-pa-md" v-for="reservation in filters" :key="reservation._id">
      <reservationCard :reservation="reservation"></reservationCard>
    </div>
  </div>
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
