<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AMenu'
}
</script>

<style lang="scss" scoped>
.a-menu {
  & * {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
  }
}
</style>
