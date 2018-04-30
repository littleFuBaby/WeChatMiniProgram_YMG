//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    }
})

/**
 *       {
        "pagePath": "pages/index/index",
        "iconPath": "image/icon_component.png",
        "selectedIconPath": "image/icon_component_HL.png",
        "text": "功能"
      },
 */