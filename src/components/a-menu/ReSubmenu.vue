<template>
  <a-submenu>
    <div slot="title">{{parent.title}}</div>
    <template v-for="item in parent.children">
      <a-menu-item v-if="!item.children" :key="item.id">{{ item.title }}</a-menu-item>
      <re-submenu v-else :key="item.id" :parent="item"></re-submenu>
    </template>
  </a-submenu>
</template>

<script>
import ASubmenu from './ASubmenu'
import AMenuItem from './AMenuItem'

export default {
  name: 'ReSubmenu',
  components: {
    AMenuItem,
    ASubmenu
  },
  props: {
    parent: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted() {
    console.log(this.parent)
  }
}
</script>

<style lang="scss" scoped>

</style>
