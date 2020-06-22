# aeorus-dev

## 项目

### Nginx

```bash
$ http {
	server {
		listen 80;
		server_name  aeorus.xyz;
		rewrite ^(.*) https://$server_name$1 permanent;
	}
}
$ https {
	server {
		listen 443 ssl;
		server_name aeorus.xyz;
		ssl_certificate      /usr/local/nginx/cert/aeorus.xyz.pem;
		ssl_certificate_key  /usr/local/nginx/cert/aeorus.xyz.key;

		ssl_session_cache    shared:SSL:1m;
		ssl_session_timeout  5m;

		ssl_ciphers  HIGH:!aNULL:!MD5;
		ssl_prefer_server_ciphers  on;

		location / {
			root   /data/aeoru5;
			index  index.html index.htm;
			error_page  404  /index.html;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		}

		location /aeoru5 {
			proxy_pass http://127.0.0.1:7001/aeoru5;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		}

		location /avatar {
			proxy_pass http://127.0.0.1:7001/public/avatar;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		}

		location /video {
        proxy_pass http://127.0.0.1:7001/public/video;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
	}
}
```

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
