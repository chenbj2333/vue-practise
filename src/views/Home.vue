<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <div :style="{color: 'red'}">{{username}}</div>
    <Button @click="exit">退出登录</Button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    ...mapActions(['logout']),
    exit() {
      this.logout()
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>
