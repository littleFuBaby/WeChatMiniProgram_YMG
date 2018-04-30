// pages/map/map.js

var userLatitude = 39.919362;
var userLongitude = 116.390111;
var userName = "中南海";

wx.getLocation({
  type: 'wgs84',
  success: (res) => {
    userLatitude = res.latitude // 经度
    userLongitude = res.longitude // 纬度
  }
})

Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude: userLatitude,
    longitude: userLongitude,
    markers: [{
      latitude: userLatitude,
      longitude: userLongitude,
      name: userName
    }],
    covers: [{
      latitude: userLatitude,
      longitude: userLongitude,
      iconPath: '/image/location.png'
    }, {
      latitude: userLatitude,
      longitude: userLongitude,
      iconPath: '/image/location.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})