<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === 'back') {
        this.$router.back()
        // this.$router.go(-1)
      } else if (type === 'push') {
        // this.$router.push('/parent')
        // this.$router.push({
        //   name: 'parent'
        // });
        this.$router.push({
          name: 'argu',
          params: {
            name: 'aaaaa'
          }
        })
      }
    }
  }
}
</script>
