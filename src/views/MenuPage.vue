<template>
  <div class="menu-page">
    <a-menu>
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.id">{{item.title}}</a-menu-item>
        <re-submenu v-else :key="item.id" :parent="item"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from '_c/a-menu'

const { AMenu, AMenuItem, ReSubmenu } = menuComponents

export default {
  name: 'menuPage',
  components: {
    AMenu,
    AMenuItem,
    ReSubmenu
  },
  data () {
    return {
      list: [
        { id: '1', title: '1111' },
        { id: '2', title: '2222' },
        {
          id: '3',
          title: '3333',
          children: [
            { id: '3-1', title: '3333-1' },
            {
              id: '3-2',
              title: '3333-2',
              children: [
                { id: '3-2-1', title: '3333-2-1' },
                { id: '3-2-2', title: '3333-2-2' },
                {
                  id: '3-2-3',
                  title: '3333-2-3',
                  children: [
                    { id: '3-2-3-1', title: '3333-2-3-1' },
                    {
                      id: '3-2-3-2',
                      title: '3333-2-3-2',
                      children: [
                        {id: '3-2-3-2-1', title: '3333-2-3-2-1'}
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-page {
  text-align: left;
}
</style>
