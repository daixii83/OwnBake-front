<template>
  <div>
    <div class="q-pa-xl bg-accent">
      <div align="center" class="q-py-xl row fit items-center">
        <div class="col-12">
          <form @submit.prevent="simulateSubmit" class="q-pa-md">
            <div class="panel q-pa-xl q-gutter-y-md bg-white column shadow-2">
              <div class="q-pb-xl text-h4 text-brown">新用戶註冊</div>
              <q-input
                ref="input"
                filled
                label="請輸入用戶名稱"
                v-model="form.username"
                :rules="[ val => val.length >= 4 && val.length <= 20 || '用戶名稱必須介於4-20個字']"
                lazy-rules
              />
              <q-input
                ref="input"
                filled
                label="請輸入帳號"
                v-model="form.account"
                :rules="[ val => val.length >= 4 && val.length <= 20 || '帳號長度必須介於4-20個字']"
                lazy-rules
              />
              <q-input
                ref="input"
                filled
                label="請輸入email"
                v-model="form.email"
                :rules="[val => !!val || '請輸入您的email', isValidEmail]"
                lazy-rules
                class="q-pb-md"
              />
              <q-input
                v-model="form.password"
                label="請輸入密碼"
                filled :type="isPwd ? 'password' :    'text'"
                :rules="[ val => val.length >= 4 && val.length <= 20 || '密碼長度必須介於4-20個字']"
                lazy-rules>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-input
                v-model="form.confirmPassword"
                label="請確認密碼"
                filled :type="isPwdAgain ? 'password' :    'text'"
                :rules="[val => val === form.password || '確認密碼不正確']"
                lazy-rules
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwdAgain ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwdAgain = !isPwdAgain"
                  />
                </template>
              </q-input>
              <q-btn
                type="submit"
                :loading="submitting"
                label="註冊"
                class="q-mt-xl"
                color="dark"
                size="1.3rem"
                @click="register"
              >
                <template v-slot:loading>
                  <q-spinner-dots />
                </template>
              </q-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .panel
    max-width: 500px
    border-radius: 20px
</style>

<script>
// import dialogSuccess from '../components/dialogSuccess.vue'
export default {
  data () {
    return {
      form: {
        username: '',
        account: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      isPwd: true,
      isPwdAgain: true,
      submitting: false,
      success: false,
      failed: false
    }
  },

  methods: {
    simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 2000)
    },
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || '信箱格式錯誤'
    },
    async register () {
      try {
        await this.api.post('/users', this.form)
        this.$q.dialog({
          // component: dialogSuccess,
          parent: this,
          title: '註冊成功',
          message: '移至登入頁面'
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
        this.$router.push('/Login')
      } catch (error) {
        this.$q.dialog({
          // component: dialogSuccess,
          parent: this,
          title: '註冊失敗',
          message: error.response.data.message
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
}
</script>
