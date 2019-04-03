# vue-practise

## 项目目录介绍
- postcss.config.js css自动补充一些兼容的配置
- eslintrc.js 代码检查配置文件
- vue.config.js vue相关的配置文件
- babel.config.js babel的配置文件
- .gitignore git忽略的文件
- .editorconfig 编辑器的配置文件
- public 公共文件
  + index.html webpack打包时使用此文件作为模板文件
  + favicon.ico 图标
- src 项目主文件
  + assets 静态文件存放目录（图片，图标字体，字体文件）
    - font 字体文件
    - img 图片文件
  + config 项目的一些配置
  + directive vue自定义指令
  + lib
    - utils.js 与业务结合的工具方法
    - tools.js 与业务无关的工具方法
  + components 组件（可复用的公共组件）
  + views 页面
  + App.vue 基础组件
  + main.js 项目入口文件
  + router 路由
  + store vuex
  + api 接口
  + mock 模拟数据