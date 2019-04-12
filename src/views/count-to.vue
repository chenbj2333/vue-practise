<template>
  <div>
    <count-to :end-val="endVal" ref="parentCountup">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="handleClick">取得值</button>
    <button @click="updateVal">更新值</button>
  </div>
</template>

<script>
import CountTo from '_c/count-to'

export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 100
    }
  },
  methods: {
    handleClick() {
      const result = this.$refs.parentCountup.getCountNumber()
      console.log(result)
    },
    updateVal() {
      this.endVal = Math.random() * 1000
    }
  }
}
</script>

<style lang="scss" scoped>

</style>