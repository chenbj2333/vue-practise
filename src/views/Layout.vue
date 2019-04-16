<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Header class="header-wrapper">
        <Button @click="collapsedSider" >
          <Icon type="md-menu" :size="20"/>
        </Button>
        <div :style="{float: 'right'}">
          <Dropdown>
            <a href="javascript:void(0)" :style="{display: 'flex', flexDirection: 'row'}">
              <Icon type="ios-happy-outline" :size="24" />
              <span :style="{fontSize: '20px'}">{{username}}</span>
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided @click.native="exit">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Layout class="content-wrapper">
        <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
        </Breadcrumb>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view/>
          </Card>
        </Content>
        <Footer class="footer-wrapper">made by cocobean</Footer>
      </Layout>
    </Layout>
    <Drawer title="菜单" placement="left" :closable="false" v-model="isCollapsed">
      <Menu theme="light">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" />
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people" />
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </Drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {
    ...mapGetters(['username']),
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    ...mapActions(['logout']),
    collapsedSider() {
      this.isCollapsed = true
    },
    exit() {
      this.logout()
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-wrapper, .layout-outer {
  height: 100%;
  position: relative;

  .header-wrapper {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
    padding: 0 23px;
    position: fixed;
    width: 100%;
    z-index: 10;
  }
  .content-wrapper {
    margin-top: 68px;
    padding: 10px 10px 0 10px;
  }
  .content-con {
    padding-top: 10px;
  }
  .page-card {
    min-height: calc(100vh - 154px);
  }
  .footer-wrapper {
    text-align: center;
    padding: 12px 50px;
  }
}
</style>
