//home.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  // 回调函数
  onLoad: function () {
  },

  // 地图
  openMap: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  saoyisao:function(){
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res);
        console.log(res.result);
        var newUrl = res.result;
        wx.navigateTo({
          url: newUrl
        })
      }
    });
  }
})
