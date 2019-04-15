<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span v-show="showChild" class="shrink-icon">+</span>
      <span v-show="!showChild" class="shrink-icon">-</span>
    </div>
    <div v-show="!showChild" class="a-submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'ASubmenu',
  data() {
    return {
      showChild: true
    }
  },
  methods: {
    handleClick() {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="scss">
.a-submenu {
  list-style: none;
  margin: 0;
  padding: 0;

  .a-submenu-title {
    color: #fff;
    position: relative;
    background-color: #5cadff;

    .shrink-icon {
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
  .a-submenu-child-box {
    overflow: hidden;
    padding-left: 20px;

    .a-menu-item {
      background-color: rgba(0, 0, 0, 0.199);
      color: #000;
    }
  }
}
</style>
