<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { demoAxios } from '@/api/demo'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    demoAxios({ name: 'aaa', password: 'bbb' }).then(res => {
      console.log('res:', res)
    })
  }
}
</script>
