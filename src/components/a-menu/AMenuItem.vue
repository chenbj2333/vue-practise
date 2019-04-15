<template>
  <div>
    <li class="a-menu-item">
      <slot></slot>
    </li>
  </div>
</template>

<script>
export default {
  name: 'AMenuItem'
}
</script>

<style lang="scss" scoped>
.a-menu-item {
  background-color: #2d8cf0;
  color: #fff;
}
</style>
