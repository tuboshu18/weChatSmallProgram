// pages/dasInfo/dasInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "amplitude_price_per": "2.11%",
    "high_price": "8741.83",
    "inxnm": "深证成指",
    "last_price": "8584.94",
    "low_price": "8557.58",
    "open_price": "8741.83",
    "rise_fall": "-161.11",
    "rise_fall_per": "-1.84%",
    "typeid": "asia",
    "uptime": "2019-06-06 15:40:08",
    "yesy_price": "8746.05"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      amplitude_price_per: options.amplitude_price_per,
      high_price: options.high_price,
      inxnm: options.inxnm,
      last_price: options.last_price,
      low_price: options.low_price,
      open_price: options.open_price,
      rise_fall: options.rise_fall,
      rise_fall_per: options.rise_fall_per,
      typeid: options.typeid,
      uptime: options.uptime,
      yesy_price: options.yesy_price
    })
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