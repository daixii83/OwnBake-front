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
        <q-breadcrumbs-el label="預約體驗" icon="navigation" />
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
            title="選擇日期、時段與人數"
            icon="settings"
            :done="done1"
          >
            <div class="row q-py-md">
              <div align="center" class="col-md-6">
                <div class="q-py-md text-h6">請選擇日期</div>
                <q-date
                  v-model="reservation.date"
                  navigation-min-year-month="2022/03"
                  navigation-max-year-month="2022/04"
                />
              </div>
              <div class="col-md-6">
                <div class="q-pa-md text-h6">請選擇時間</div>
                <div class="row q-gutter-md">
                  <div class="col-12 q-gutter-x-md">
                    <q-btn-toggle
                      v-model="reservation.time"
                      toggle-color="primary"
                      @click="reservation.time === value"
                      :options="[
                        {label: '10:00', value: '10:00'},
                        {label: '11:00', value: '11:00'},
                        {label: '12:00', value: '12:00'}
                      ]"
                    />
                  </div>
                  <div class="col-12 q-gutter-x-md">
                    <q-btn-toggle
                      v-model="reservation.time"
                      toggle-color="primary"
                      @click="reservation.time === value"
                      :options="[
                        {label: '13:00', value: '13:00'},
                        {label: '14:00', value: '14:00'},
                        {label: '15:00', value: '15:00'}
                      ]"
                    />
                  </div>
                  <div class="col-12 q-gutter-x-md">
                    <q-btn-toggle
                      v-model="reservation.time"
                      toggle-color="primary"
                      @click="reservation.time === value"
                      :options="[
                        {label: '16:00', value: '16:00'},
                        {label: '17:00', value: '17:00'},
                        {label: '18:00', value: '18:00'}
                      ]"
                    />
                  </div>
                </div>
                <div class="q-px-md q-pt-xl q-pb-md text-h6">請輸入人數</div>
                  <div class="row q-gutter-md">
                    <div class="col-6 q-gutter-x-md">
                      <q-input
                        ref="num"
                        rounded outlined
                        type="number"
                        v-model="reservation.adultNum"
                        label="大人人數"
                        lazy-rules
                        :rules="[
                          val => val !== null && val !== '' || '請輸入人數',
                          val => val >= 1 && val <= 10 || '請輸入1-10之間的數字(超過10人請直接來電預約)'
                        ]"
                      />
                    </div>
                    <div class="col-6 q-gutter-x-md">
                      <q-input
                        ref="num"
                        rounded outlined
                        type="number"
                        v-model="reservation.childNum"
                        label="小孩人數"
                        lazy-rules
                        :rules="[
                          val => val !== null && val !== '' || '請輸入人數',
                          val => val >= 0 && val <= 10 || '請輸入0-10之間的數字(超過10人請直接來電預約)'
                        ]"
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
          title="填寫聯絡資料"
          icon="create_new_folder"
          :done="done2"
        >
          <div class="row q-py-md text-normal">
            <div align="center" class="col-12 q-pt-md q-pb-xl text-h6">請填寫預約人資料</div>
            <div class="col-md-12 q-py-md q-gutter-md">
              <div class="row items-center">
                <div class="col-2"></div>
                <div class="col-1">聯絡人姓名</div>
                <div class="col-4">
                  <q-input
                  outlined
                  v-model="reservation.name"
                  :rules="[ val => val.length > 1 || '請輸入聯絡人姓名' ]"
                  /></div>
                <div class="col-3 flex justify-center">
                  <q-radio v-model="reservation.gender" val="male" label="先生" />
                  <q-radio v-model="reservation.gender" val="female" label="女士" />
                  <q-radio v-model="reservation.gender" val="other" label="其他" />
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row text-normal items-center">
                <div class="col-2"></div>
                <div class="col-1">手機號碼</div>
                <div class="col-6">
                  <q-input
                  outlined
                  v-model="reservation.phone"
                  :rules="[ val => val.length > 1 || '請輸入手機號碼' ]"
                  />
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row text-normal items-center">
                <div class="col-2"></div>
                <div class="col-1">email</div>
                <div class="col-6">
                  <q-input
                  outlined
                  v-model="reservation.email"
                  :rules="[val => !!val || '請輸入您的email', isValidEmail]"
                  lazy-rules
                  />
                </div>
                <div class="col-3"></div>
              </div>
              <div class="row text-normal items-center">
                <div class="col-2"></div>
                <div class="col-1">備註</div>
                <div class="col-6">
                  <q-input
                    v-model="reservation.remark"
                    outlined
                    type="textarea"
                  />
                </div>
                <div class="col-3"></div>
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
          title="確認預約"
          icon="add_comment"
          :done="done3"
        >
          <div class="row q-pt-md q-pb-md text-normal">
            <div align="center" class="col-12 q-pt-md  text-h6">請確認預約資訊是否正確</div>
            <div align="center" class="col-12 q-pb-xl text-normal text-grey">如需修改可點選上方步驟返回</div>
            <div align="center" class="col-12 q-gutter-y-md text-normal">
              <div class="row">
                <div align="end" class="col-6 q-pr-xl">預約日期：</div>
                <div align="start" class="col-6">{{ reservation.date }}</div>
              </div>
              <div class="row">
                <div align="end" class="col-6 q-pr-xl">預約時間：</div>
                <div align="start" class="col-6">{{ reservation.time }}</div>
              </div>
              <div class="row">
                <div align="end" class="col-6  q-pr-xl">預約人數：</div>
                <div align="start" class="col-6">大人 {{ reservation.adultNum }} 人  小孩 {{ reservation.childNum }} 人</div>
              </div>
              <div class="row">
                <div align="end" class="col-6 q-pr-xl">預約人姓名：</div>
                <div align="start" class="col-6"> {{ reservation.name }} </div>
              </div>
              <div class="row">
                <div align="end" class="col-6 q-pr-xl">手機號碼：</div>
                <div align="start" class="col-6"> {{ reservation.phone }} </div>
              </div>
              <div class="row">
                <div align="end" class="col-6 q-pr-xl">email：</div>
                <div align="start" class="col-6"> {{ reservation.email }} </div>
              </div>
              <div class="row">
                <div align="end" class="col-6 q-pr-xl">備註：</div>
                <div align="start" class="col-6">{{ reservation.remark }}</div>
              </div>
            </div>
          </div>

          <q-stepper-navigation>
            <div class="row">
              <div class="col-6">
                <q-btn flat @click="step = 2" color="primary" label="上一步" class="q-ml-sm" />
              </div>
              <div align="end" class="col-6">
                <q-btn color="primary" @click="reserve" label="送出預約" />
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

</style>

<script>
export default {
  data () {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      reservation: {
        date: '',
        time: '',
        adultNum: '0',
        childNum: '0',
        name: '',
        gender: '',
        phone: '',
        email: '',
        remark: ''
      }
    }
  },

  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || '信箱格式錯誤'
    },
    async reserve () {
      try {
        await this.api.post('/reservations', this.reservation, {
          headers: {
            authorization: 'Bearer ' + this.$store.getters['user/user'].token
          }
        })
        console.log(this.reservation)
        this.$router.push('/Member/MyReservations')
        this.$q.dialog({
        // component: dialogSuccess,
          parent: this,
          title: '成功',
          message: '預約成功'
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
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
    }
  },
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  }
}
</script>
