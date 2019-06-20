# aeorus

## 项目

### Server

```bash
$ Nginx代理请求中加入x-forwarded-for获取真实用户IP
$ 登录注册功能安全性较高, 后端非双向加解密算法存储密码
$ 后端接收前端哈希后的密文, 并在此基础上加盐再次哈希存入数据库
$ /aeoru5/uploadAvatar接口具备图片的功能, 存储用户头像至本地
```

### Web

```bash
$ 通过AppConfig.js配置底部栏及顶部栏
$ 前端使用MD5哈希算法传递用户登录注册信息
$ 使用Vuex + sessionStorage保证数据的持久化
$ 具备禁止浏览器前进后退事件的功能，保证自定义的history不会因为刷新混乱
$ 具备类似UI框架般通过调用API方式加载交互的功能，可以快捷调用loading/toast/modal
$ 具备用户头像上传, 并通过canvas进行图片压缩的功能, 且canvas逻辑中具有保证图片完整的算法
```

[homepage]: https://aeorus.xyz
