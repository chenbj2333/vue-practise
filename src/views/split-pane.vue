<template>
  <div class="split-pane-con">
    <split-pane :leftOffset.sync="leftOffset" mode='vertical'>
      <div slot="left">1234</div>
      <div slot="right">aaaaaaa</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
  components: {
    SplitPane
  },
  data() {
    return {
      leftOffset: 0.4
    }
  }
}
</script>

<style lang="scss" scoped>
  .split-pane-con {
    width: 400px;
    height: 200px;
    background-color: antiquewhite;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: left;
  }
</style>
