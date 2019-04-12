<template>
  <div>
    <slot name="left"></slot>
    <span :id="eleId" :class="countClass" ref="countup"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'

export default {
  name: 'CountTo',
  computed: {
    eleId() {
      return `count_up_${this._uid}`
    },
    countClass() {
      return [
        'count-to-number',
        ...this.className
      ]
    }
  },
  data() {
    return {
      counter: null
    }
  },
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长，单位为s
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用分组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号，默认逗号隔开
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 整数和小数的分隔符号
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
     * @description 动画延时开始时间
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 动画延时开始时间
     */
    className: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    getCountNumber() {
      return this.$refs.countup.innerHTML
    }
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update(newVal)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
    })
    setTimeout(() => {
      this.counter.start()
    }, this.delay);
  }
}
</script>

<style lang="scss" scoped>
@import './count-to.scss';
</style>