// 配置项文档：https://koishi.js.org/api/app.html
module.exports = {
  // Koishi 服务器监听的端口
  port: 8080,
  onebot: {
    // 对应 cqhttp 配置项 http_config.post_urls, ws_reverse_servers.reverse_url
    path: '',
    secret: '',
  },
  bots: [{
    type: 'onebot:ws-reverse',
    selfId: 2392143379,
    token: '',
  }],
  plugins: {
    mysql: {
      host: '127.0.0.1',
      // Koishi 服务器监听的端口
      port: 3306,
      user: 'root',
      password: '',
      database: 'koishi',
    },
    common: {},
    webui: {},
  },
}
