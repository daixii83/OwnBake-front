<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>
