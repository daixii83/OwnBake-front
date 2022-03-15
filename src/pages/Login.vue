<template>
  <div>
    <div class="q-pa-xl bg-accent">
      <div align="center" class="q-py-xl row fit items-center">
        <div class="col-12">
          <form @submit.prevent="simulateSubmit" class="q-pa-md">
            <div class="panel q-pa-xl q-gutter-y-md bg-white column shadow-2">
            <div class="q-pb-xl text-h4 text-brown">歡迎回來OwnBake！</div>
            <div class="q-pb-xl text-h5">會員登入</div>
            <div class="q-pl-md text-h6 text-left">帳號</div>
            <q-input
              ref="input"
              filled
              v-model="form.account"
              lazy-rules
            />
            <div class="q-pl-md text-h6 text-left">密碼</div>
            <q-input v-model="form.password" filled :type="isPwd ? 'password' :    'text'">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-btn
              type="submit"
              :loading="submitting"
              label="登入"
              class="q-mt-xl"
              color="dark"
              size="1.3rem"
              @click="login"
            >
              <template v-slot:loading>
                <q-spinner-dots />
              </template>
            </q-btn>
            <div>
              還沒有帳號嗎？
              <a href="#/Register">註冊帳號</a>
            </div>
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
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      },
      isPwd: true,
      submitting: false
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
    login () {
      this.$store.dispatch('user/login', this.form)
    }
  }
}
</script>
