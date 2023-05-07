## 项目介绍

本项目以 WordPress RestFul API为基础，实现了一款对接WordPress网站的UniApp，可被编译为 Android APP、iOS APP、微信小程序 和 H5手机网站，在UniApp的加持下，使用`Vue`的语法进行了完全重构，因此可以被编译到更多的平台，实现一套代码，多端运行。本套程序额外增加了对 WordPress原生用户系统登录的支持，增加了可扩展性，支持进行二次开发对接任意的WordPress主题。



## 平台兼容性

| Uni-APP | 微信小程序 | QQ小程序 | 字节小程序 | 百度小程序 | 快应用 |  H5  |
| :-----: | :--------: | :------: | :--------: | :--------: | :----: | :--: |
|    √    |     √      | 暂未适配 |  暂未适配  |  暂未适配  |   ×    |  √   |

## 项目依赖

本套程序需要在 WordPress 集成的 Restful API 的基础上，额外增加自定义API，因此需要额外安装两款 WordPress插件。

- **rest-api-to-miniprogram-enhence**

下载地址：[https://github.com/SuperTylerX/rest-api-to-miniprogram-enhanced](https://github.com/SuperTylerX/rest-api-to-miniprogram-enhanced)

这款插件是在 jianbo 开发的 [rest-api-to-miniprogram](https://github.com/iamxjb/rest-api-to-miniprogram) 插件基础上进行了二次开发，增加了更多自定义API支持。

- **JWT Authentication for WP-API**

下载地址：[https://cn.wordpress.org/plugins/jwt-authentication-for-wp-rest-api](https://cn.wordpress.org/plugins/jwt-authentication-for-wp-rest-api) （也可以从WordPress插件市场内直接下载）

这款插件实现了WordPress JWT 登录，为原生用户登录做支持。

## 项目配置

- 配置项目根目录env文件，UNI_APP_API_DEFAULT替换为自己的域名（生产环境）

- 配置项目根目录vite.config.js文件，proxy-target替换为自己的域名（开发环境跨域）

- 文章发布管理

- 完善错误处理

  

## TODO

- 支持支付宝小程序
- 增加小程序特殊能力应用
- 文章发布管理
- 完善错误处理
- 二维码登录网站
- Q&A



## 特别感谢

- 微信小程序开源程序：[微慕小程序开源版](https://github.com/iamxjb/winxin-app-watch-life.net)
- WordPress Restful API增强插件：[WordpPress rest api 定制化插件](https://github.com/iamxjb/rest-api-to-miniprogram)
- WordPress JWT认证插件：[JWT Authentication for WP-API](https://cn.wordpress.org/plugins/jwt-authentication-for-wp-rest-api)
- UniApp UI库：[uView UI](https://www.uviewui.com/)
- Html解析库：[mp-html](https://github.com/jin-yufeng/mp-html)

