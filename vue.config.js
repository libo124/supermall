// 自定义配置文件
module.exports = {
  // 配置webpack
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        // @ 已经配置了，不需要配置
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
      }
    }
  }
}
