<template>
  <div class="split-pane-wrapper" ref="outer">
    <div :class="{'pane pane-left': this.mode === 'horizontal', 'pane-v pane-v-top': this.mode === 'vertical'}"
      :style="leftOrTopStyle">
      <slot name="left"></slot>
    </div>
    <div :class="{'pane pane-trigger-con': this.mode === 'horizontal', 'pane-v pane-v-trigger-con': this.mode === 'vertical'}"
      :style="triggerStyle"
      @mousedown="handleMonsedown"></div>
    <div :class="{'pane pane-right': this.mode === 'horizontal', 'pane-v pane-v-bottom': this.mode === 'vertical'}"
      :style="rightOrBottomStyle">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftOffset: {
      type: Number,
      required: true,
      validator: (value) => {
        return value >= 0 && value <= 1
      }
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    },
    mode: {
      type: String,
      default: 'horizontal'
    }
  },
  data() {
    return {
      canMove: false,
      // 中间条的偏移量
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent() {
      return `${this.leftOffset * 100}%`
    },
    triggerLeft() {
      return `calc(${this.leftOffset * 100}% - ${this.triggerWidth / 2}px)`
    },
    leftOrTopStyle() {
      if (this.mode !== 'horizontal' && this.mode !== 'vertical') {
        return
      }
      if (this.mode === 'horizontal') {
        return {width: this.leftOffsetPercent, paddingRight: `${this.triggerWidth / 2}px`}
      } else {
        return {height: this.leftOffsetPercent, paddingBottom: `${this.triggerWidth / 2}px`}
      }
    },
    rightOrBottomStyle() {
      if (this.mode !== 'horizontal' && this.mode !== 'vertical') {
        return
      }
      if (this.mode === 'horizontal') {
        return {left: this.leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px`}
      } else {
        return {top: this.leftOffsetPercent, paddingTop: `${this.triggerWidth / 2}px`}
      }
    },
    triggerStyle() {
      if (this.mode !== 'horizontal' && this.mode !== 'vertical') {
        return
      }
      if (this.mode === 'horizontal') {
        return {left: this.triggerLeft, width: `${this.triggerWidth}px`}
      } else {
        return {top: this.triggerLeft, height: `${this.triggerWidth}px`}
      }
    }
  },
  methods: {
    handleMonsedown(e) {
      document.addEventListener('mousemove', this.handleMonsemove)
      document.addEventListener('mouseup', this.handleMonseup)
      this.canMove = true
      if (this.mode === 'horizontal') {
        this.initOffset = e.pageX - e.srcElement.getBoundingClientRect().left
      } else if (this.mode === 'vertical') {
        this.initOffset = e.pageY - e.srcElement.getBoundingClientRect().top
      }
    },
    handleMonsemove(e) {
      if (!this.canMove) {
        return
      }
      // this.$refs.outer.getBoundingClientRect() 指定容器离页面上下左右的距离
      const outerRect = this.$refs.outer.getBoundingClientRect()
      // 鼠标离页面左侧的距离e.pageX
      let offset = 0
      if (this.mode === 'horizontal') {
        offset = (e.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      } else if (this.mode === 'vertical') {
        offset = (e.pageY - this.initOffset + this.triggerWidth / 2 - outerRect.top) / outerRect.height
      }
      if (offset < this.min) {
        offset = this.min
      } else if (offset > this.max) {
        offset = this.max
      }
      this.$emit('update:leftOffset', offset)
    },
    handleMonseup() {
      this.canMove = false
    }
  }
}
</script>

<style lang="scss" scoped>
.split-pane-wrapper{
  width: 100%;
  height: 100%;
  position: relative;

  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      // &-left相当于.pane-left
      background: palevioletred;
    }
    &-right {
      background: palegoldenrod;
      right: 0;
      bottom: 0;
    }
    &-trigger-con {
      background-color: red;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
  .pane-v {
    position: absolute;
    left: 0;
    width: 100%;
    &-trigger-con {
      background-color: red;
      z-index: 10;
      user-select: none;
      cursor: row-resize;
    }
    &-top {
      background: palevioletred;
    }
    &-bottom {
      background: palegoldenrod;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
