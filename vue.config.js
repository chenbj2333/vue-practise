const path = require('path')

// __dirname当前文件所在目录路径
const resolve = dir => path.join(__dirname, dir)
// 项目的基本路径(打包后放到服务器上的地址):是否为production模式，是的话打包时比如可以打包到域名的admin下
// 可以按如下写，如果时开发模式，写/就可以
const BASE_URL = process.env.NODE_ENV === 'production' ? '/admin' : '/'

module.exports = {
  publicPath: BASE_URL,
  // 柯里化配置webpack
  chainWebpack: config => {
    // 给路径配置别名（必须使用绝对路径，所以引用node中的path模块）
    // @/api相当于***/***/src/api
    config.resolve.alias.set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false // 打包时不生成.map文件
  // devServer: {
  //   proxy: 'http://localhost:4000' // 把任何未知请求都代理到这个url来满足跨域的需求
  // }
}
