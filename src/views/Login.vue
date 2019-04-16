<template>
  <div class="login-view">
    <div class="content-wrapper">
      <i-input placeholder="请输入用户名" v-model="username">
        <Icon type="ios-contact" slot="prefix" />
      </i-input>
      <i-input placeholder="请输入密码" v-model="password">
        <Icon type="ios-key-outline" slot="prefix" />
      </i-input>
      <Button type="primary" @click="submit">登陆</Button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      this.login({userName: this.username, password: this.password}).then((res) => {
        this.$router.push({
          name: 'home'
        })
      }, (err) => {
        this.$Message.error(err.mes)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */

  .content-wrapper {
    width: 300px;
  }

  .ivu-input-wrapper {
    width: 100%;
    margin-bottom: 20px;
  }

  .ivu-btn {
    width: 100%;
  }
}
</style>
